import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";

const emptyFormFromFields = (fields) =>
  fields.reduce((acc, field) => {
    acc[field.key] = field.type === "select" ? field.options[0] : "";
    return acc;
  }, {});

export default function CrudManager({
  title,
  description,
  fields,
  itemLabelKey,
  tableName,
  imageBucket, // optional: only needed if this section has an "image" field
  orderBy = "id", // pass "display_order" for tables that have that column
  groupBy, // optional: field key to split items into labeled sections (e.g. "page")
  groupOrder, // optional: fixed display order for group values
  approvalField, // optional: boolean field key (e.g. "approved") to enable a moderation workflow
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyFormFromFields(fields));
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const imageField = fields.find((f) => f.type === "image");

  const groupValues = groupBy
    ? groupOrder && groupOrder.length > 0
      ? groupOrder
      : [...new Set(items.map((item) => item[groupBy]))]
    : null;

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .order(orderBy, { ascending: true });

    if (error) {
      alert(`Could not load ${title}: ${error.message}`);
    } else {
      setItems(data || []);
    }
    setLoading(false);
  };

  const openAddForm = (preset = {}) => {
    setEditingId(null);
    setFormData({ ...emptyFormFromFields(fields), ...preset });
    setImageFile(null);
    setIsFormOpen(true);
  };

  const openEditForm = (item) => {
    setEditingId(item.id);
    setFormData({ ...item });
    setImageFile(null);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingId(null);
    setImageFile(null);
  };

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  const uploadImageIfNeeded = async () => {
    if (!imageFile || !imageField) return formData[imageField?.key];

    const fileExt = imageFile.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from(imageBucket)
      .upload(fileName, imageFile);

    if (error) {
      throw new Error(`Image upload failed: ${error.message}`);
    }

    const { data: urlData } = supabase.storage.from(imageBucket).getPublicUrl(data.path);
    return urlData.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const missingRequired = fields.some(
      (field) => field.required && !String(formData[field.key] || "").trim()
    );
    if (missingRequired) {
      alert("Please fill in all required fields.");
      return;
    }

    setSaving(true);
    try {
      const payload = { ...formData };
      delete payload.id;
      delete payload.created_at;

      if (!editingId && orderBy !== "id") {
        payload[orderBy] = items.length;
      }

      if (imageField) {
        payload[imageField.key] = await uploadImageIfNeeded();
      }

      if (editingId) {
        const { error } = await supabase.from(tableName).update(payload).eq("id", editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from(tableName).insert(payload);
        if (error) throw error;
      }

      await fetchItems();
      closeForm();
    } catch (err) {
      alert(err.message || "Something went wrong while saving.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Remove this item? This cannot be undone.")) return;

    const { error } = await supabase.from(tableName).delete().eq("id", id);
    if (error) {
      alert(`Could not delete: ${error.message}`);
      return;
    }
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleApproval = async (item) => {
    const nextValue = !item[approvalField];
    const { error } = await supabase
      .from(tableName)
      .update({ [approvalField]: nextValue })
      .eq("id", item.id);

    if (error) {
      alert(`Could not update: ${error.message}`);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, [approvalField]: nextValue } : i))
    );
  };

  return (
    <div className="crud-manager">
      <div className="crud-header">
        <div>
          <h2>{title}</h2>
          {description && <p className="crud-description">{description}</p>}
        </div>
        {!groupBy && (
          <button type="button" className="btn-primary" onClick={() => openAddForm()}>
            + Add New
          </button>
        )}
      </div>

      {loading ? (
        <div className="crud-empty">Loading...</div>
      ) : groupBy ? (
        groupValues.map((groupValue) => {
          const groupItems = items.filter((item) => item[groupBy] === groupValue);
          return (
            <div className="crud-group" key={groupValue}>
              <div className="crud-group-header">
                <h3>{groupValue}</h3>
                <button
                  type="button"
                  className="btn-secondary btn-small"
                  onClick={() => openAddForm({ [groupBy]: groupValue })}
                >
                  + Add Image
                </button>
              </div>
              {groupItems.length === 0 ? (
                <div className="crud-empty crud-empty-small">No images yet for {groupValue}.</div>
              ) : (
                <div className="crud-grid">
                  {groupItems.map((item) => (
                    <div className="crud-card" key={item.id}>
                      {imageField && (
                        <div className="crud-card-image">
                          <img
                            src={item[imageField.key] || ""}
                            alt={item[itemLabelKey] || "preview"}
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        </div>
                      )}
                      <div className="crud-card-body">
                        <h3>{item[itemLabelKey]}</h3>
                        {fields
                          .filter((f) => f.key !== itemLabelKey && f.type !== "image" && f.key !== groupBy)
                          .map((f) => (
                            <p key={f.key} className="crud-field-line">
                              <span className="crud-field-label">{f.label}:</span>{" "}
                              {String(item[f.key] || "—")}
                            </p>
                          ))}
                      </div>
                      <div className="crud-card-actions">
                        <button type="button" className="btn-secondary" onClick={() => openEditForm(item)}>
                          Edit
                        </button>
                        <button type="button" className="btn-danger" onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      ) : items.length === 0 ? (
        <div className="crud-empty">No items yet. Click "Add New" to create one.</div>
      ) : (
        <div className="crud-grid">
          {items.map((item) => (
            <div className={`crud-card ${approvalField && !item[approvalField] ? "crud-card-pending" : ""}`} key={item.id}>
              {approvalField && (
                <span className={`approval-badge ${item[approvalField] ? "approved" : "pending"}`}>
                  {item[approvalField] ? "Approved" : "Pending Review"}
                </span>
              )}
              {imageField && (
                <div className="crud-card-image">
                  <img
                    src={item[imageField.key] || ""}
                    alt={item[itemLabelKey] || "preview"}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="crud-card-body">
                <h3>{item[itemLabelKey]}</h3>
                {fields
                  .filter((f) => f.key !== itemLabelKey && f.type !== "image" && f.key !== groupBy)
                  .map((f) => (
                    <p key={f.key} className="crud-field-line">
                      <span className="crud-field-label">{f.label}:</span>{" "}
                      {String(item[f.key] || "—")}
                    </p>
                  ))}
              </div>
              <div className="crud-card-actions">
                {approvalField && (
                  <button
                    type="button"
                    className={item[approvalField] ? "btn-secondary" : "btn-approve"}
                    onClick={() => handleToggleApproval(item)}
                  >
                    {item[approvalField] ? "Unapprove" : "Approve"}
                  </button>
                )}
                <button type="button" className="btn-secondary" onClick={() => openEditForm(item)}>
                  Edit
                </button>
                <button type="button" className="btn-danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isFormOpen && (
        <div className="crud-modal-backdrop" onClick={closeForm}>
          <div className="crud-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{editingId ? "Edit Item" : "Add New Item"}</h3>
            <form onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div className="crud-form-row" key={field.key}>
                  <label>
                    {field.label}
                    {field.required && <span className="required-mark"> *</span>}
                  </label>

                  {field.type === "textarea" && (
                    <textarea
                      value={formData[field.key] || ""}
                      onChange={(e) => handleFieldChange(field.key, e.target.value)}
                      rows={4}
                    />
                  )}

                  {field.type === "select" && (
                    <select
                      value={formData[field.key] || field.options[0]}
                      onChange={(e) => handleFieldChange(field.key, e.target.value)}
                    >
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  )}

                  {field.type === "text" && (
                    <input
                      type="text"
                      value={formData[field.key] || ""}
                      onChange={(e) => handleFieldChange(field.key, e.target.value)}
                    />
                  )}

                  {field.type === "image" && (
                    <>
                      <input type="file" accept="image/*" onChange={handleImageFileChange} />
                      <p className="image-hint">
                        {imageFile
                          ? `Selected: ${imageFile.name}`
                          : "Leave empty to keep current image."}
                      </p>
                      {(imageFile || formData[field.key]) && (
                        <div className="image-preview">
                          <img
                            src={imageFile ? URL.createObjectURL(imageFile) : formData[field.key]}
                            alt="preview"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              <div className="crud-form-actions">
                <button type="button" className="btn-secondary" onClick={closeForm} disabled={saving}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={saving}>
                  {saving ? "Saving..." : editingId ? "Save Changes" : "Add Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .crud-manager {
          width: 100%;
        }
        .crud-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .crud-header h2 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #1a472a;
          margin: 0 0 0.35rem;
          font-family: "Montserrat", sans-serif;
        }
        .crud-description {
          color: #4a5568;
          font-size: 0.95rem;
          margin: 0;
          max-width: 560px;
        }
        .btn-primary {
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          border: none;
          padding: 0.7rem 1.4rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(26, 71, 42, 0.3);
        }
        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .btn-secondary {
          background: white;
          color: #1a472a;
          border: 2px solid rgba(26, 71, 42, 0.2);
          padding: 0.6rem 1.2rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-secondary:hover {
          border-color: #1a472a;
        }
        .btn-secondary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .btn-danger {
          background: #fef2f2;
          color: #b91c1c;
          border: 2px solid rgba(185, 28, 28, 0.2);
          padding: 0.6rem 1.2rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-danger:hover {
          border-color: #b91c1c;
        }
        .crud-empty {
          padding: 3rem;
          text-align: center;
          color: #718096;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px dashed rgba(26, 71, 42, 0.2);
        }
        .crud-empty-small {
          padding: 1.5rem;
          font-size: 0.9rem;
        }
        .crud-group {
          margin-bottom: 2.5rem;
        }
        .crud-group:last-child {
          margin-bottom: 0;
        }
        .crud-group-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 0.6rem;
          border-bottom: 2px solid rgba(26, 71, 42, 0.08);
        }
        .crud-group-header h3 {
          margin: 0;
          font-size: 1.15rem;
          color: #1a472a;
          font-family: "Montserrat", sans-serif;
        }
        .btn-small {
          padding: 0.4rem 0.9rem;
          font-size: 0.8rem;
        }
        .crud-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .crud-card {
          position: relative;
          background: white;
          border-radius: 16px;
          border: 1px solid rgba(26, 71, 42, 0.1);
          box-shadow: 0 10px 25px rgba(26, 71, 42, 0.06);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .crud-card-pending {
          border: 1px solid rgba(217, 119, 6, 0.35);
          box-shadow: 0 10px 25px rgba(217, 119, 6, 0.1);
        }
        .approval-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          z-index: 2;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.3rem 0.65rem;
          border-radius: 20px;
        }
        .approval-badge.approved {
          background: #f0fdf4;
          color: #15803d;
          border: 1px solid rgba(21, 128, 61, 0.25);
        }
        .approval-badge.pending {
          background: #fffbeb;
          color: #b45309;
          border: 1px solid rgba(180, 83, 9, 0.3);
        }
        .btn-approve {
          background: #f0fdf4;
          color: #15803d;
          border: 2px solid rgba(21, 128, 61, 0.3);
          padding: 0.6rem 1.2rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-approve:hover {
          border-color: #15803d;
        }
        .crud-card-image {
          width: 100%;
          height: 140px;
          background: #eef5f1;
          overflow: hidden;
        }
        .crud-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .crud-card-body {
          padding: 1.1rem 1.25rem;
          flex: 1;
        }
        .crud-card-body h3 {
          margin: 0 0 0.5rem;
          font-size: 1.05rem;
          color: #1a472a;
          font-family: "Montserrat", sans-serif;
        }
        .crud-field-line {
          font-size: 0.85rem;
          color: #4a5568;
          margin: 0.25rem 0;
          line-height: 1.4;
          word-break: break-word;
        }
        .crud-field-label {
          font-weight: 600;
          color: #2f855a;
        }
        .crud-card-actions {
          display: flex;
          gap: 0.6rem;
          padding: 0 1.25rem 1.1rem;
        }
        .crud-card-actions button {
          flex: 1;
          padding: 0.5rem;
          font-size: 0.85rem;
        }
        .crud-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 43, 26, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 200;
        }
        .crud-modal {
          background: white;
          border-radius: 18px;
          padding: 2rem;
          width: min(560px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }
        .crud-modal h3 {
          margin: 0 0 1.25rem;
          color: #1a472a;
          font-family: "Montserrat", sans-serif;
        }
        .crud-form-row {
          margin-bottom: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .crud-form-row label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1a472a;
        }
        .required-mark {
          color: #b91c1c;
        }
        .crud-form-row input,
        .crud-form-row textarea,
        .crud-form-row select {
          padding: 0.65rem 0.8rem;
          border-radius: 10px;
          border: 1.5px solid rgba(26, 71, 42, 0.2);
          font-size: 0.9rem;
          font-family: inherit;
        }
        .crud-form-row input:focus,
        .crud-form-row textarea:focus,
        .crud-form-row select:focus {
          outline: none;
          border-color: #2f855a;
        }
        .image-hint {
          font-size: 0.78rem;
          color: #718096;
          margin: 0;
        }
        .image-preview {
          width: 90px;
          height: 90px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(26, 71, 42, 0.15);
        }
        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .crud-form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
      `}</style>
    </div>
  );
}
