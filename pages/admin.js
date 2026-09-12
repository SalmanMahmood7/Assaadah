import Head from "next/head";
import { useState, useEffect } from "react";
import CrudManager from "../components/admin/CrudManager";
import supabase from "../lib/supabaseClient";

const SECTIONS = [
  { key: "testimonials", label: "Testimonials" },
  { key: "heroImages", label: "Hero Images" },
  { key: "levelRules", label: "Level Rules" },
  { key: "instructors", label: "Instructors" },
  { key: "courses", label: "Courses" },
  { key: "homepageCourses", label: "Homepage Courses" },
  { key: "videos", label: "Videos" },
  { key: "studentIds", label: "Student IDs" },
  { key: "applicationFields", label: "Application Form Fields" },
  { key: "applyFormLinks", label: "Apply Now Form Links" },
  { key: "settings", label: "Account Settings" },
];

const testimonialFields = [
  { key: "name", label: "Name", type: "text", required: true },
  { key: "photo", label: "Photo", type: "image" },
  { key: "quote", label: "Quote", type: "textarea", required: true },
  { key: "location", label: "Location", type: "text" },
  { key: "programme", label: "Programme", type: "text" },
];

const heroImageFields = [
  { key: "page", label: "Page", type: "select", options: ["Homepage", "About Us", "Courses", "Careers", "Level 1", "Level 2", "Level 3"], required: true },
  { key: "image", label: "Image", type: "image", required: true },
  { key: "altText", label: "Alt Text", type: "text" },
];

const levelRuleFields = [
  { key: "level", label: "Level", type: "select", options: ["Level 1", "Level 2", "Level 3"], required: true },
  { key: "rule", label: "Rule", type: "textarea", required: true },
];

const instructorFields = [
  { key: "name", label: "Name", type: "text", required: true },
  { key: "photo", label: "Photo", type: "image" },
  { key: "subject", label: "Subject", type: "text", required: true },
  { key: "bio", label: "Bio", type: "textarea" },
];

const courseFields = [
  { key: "level", label: "Level", type: "select", options: ["Level 1", "Level 2", "Level 3"], required: true },
  { key: "title", label: "Course Title", type: "text", required: true },
  { key: "focus", label: "Core Focus", type: "textarea" },
];

const homepageCourseFields = [
  { key: "title", label: "Course Title", type: "text", required: true },
  { key: "image", label: "Course Image", type: "image", required: true },
  { key: "org", label: "Instructor", type: "text", required: true },
  { key: "info", label: "Outcome Tag", type: "text", required: true },
  {
    key: "path",
    label: "Course Detail Page",
    type: "select",
    required: true,
    options: [
      "/courses/ui-ux-design-figma",
      "/courses/python-vscode-github",
      "/courses/executive-english-language",
      "/courses/digital-marketing-freelancing",
    ],
  },
];

const videoFields = [
  { key: "placement", label: "Shown On", type: "select", options: ["Homepage", "Level 1", "Level 2", "Level 3"], required: true },
  { key: "title", label: "Title", type: "text", required: true },
  { key: "videoUrl", label: "Video URL", type: "text", required: true },
];

const studentIdFields = [
  { key: "level", label: "Gate Level", type: "select", options: ["Level 2", "Level 3"], required: true },
  { key: "studentId", label: "Student ID / Roll Number", type: "text", required: true },
  { key: "studentName", label: "Student Name", type: "text" },
];

const applicationFieldFields = [
  { key: "level", label: "Level", type: "select", options: ["Level 1", "Level 2", "Level 3"], required: true },
  { key: "fieldLabel", label: "Field Label", type: "text", required: true },
  { key: "fieldType", label: "Field Type", type: "select", options: ["Text", "Email", "Phone", "File Upload", "Dropdown"], required: true },
  { key: "required", label: "Required?", type: "select", options: ["Yes", "No"], required: true },
];

const applyFormLinkFields = [
  { key: "level", label: "Level", type: "select", options: ["Level 1", "Level 2", "Level 3"], required: true },
  { key: "formUrl", label: "Google Form URL (leave blank for \"Coming Soon\")", type: "text" },
];

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setError("Incorrect email or password. Please try again.");
    } else {
      onLogin();
    }
  };

  return (
    <div className="admin-login-wrapper">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <h1>Admin Panel</h1>
        <p>Sign in to manage site content.</p>
        <input
          type="email"
          placeholder="Enter admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <style jsx>{`
        .admin-login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at top, #eefaf1 0%, #f8fafc 60%);
          padding: 20px;
        }
        .admin-login-card {
          background: white;
          padding: 3rem 2.5rem;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(26, 71, 42, 0.12);
          width: min(400px, 100%);
          text-align: center;
        }
        .admin-login-card h1 {
          color: #1a472a;
          font-family: "Montserrat", sans-serif;
          margin: 0 0 0.5rem;
        }
        .admin-login-card p {
          color: #4a5568;
          margin: 0 0 1.75rem;
        }
        .admin-login-card input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 10px;
          border: 1.5px solid rgba(26, 71, 42, 0.2);
          font-size: 1rem;
          box-sizing: border-box;
          margin-bottom: 1rem;
        }
        .admin-login-card input:focus {
          outline: none;
          border-color: #2f855a;
        }
        .login-error {
          color: #b91c1c;
          font-size: 0.85rem;
          margin: -0.5rem 0 1rem;
        }
        .admin-login-card button {
          width: 100%;
          padding: 0.9rem;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .admin-login-card button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .admin-login-card button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(26, 71, 42, 0.3);
        }
      `}</style>
    </div>
  );
}

function AdminSettings({ userEmail }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!newPassword.trim() || newPassword.length < 6) {
      setError("New password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    setSaving(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }

    setNewPassword("");
    setConfirmPassword("");
    setSuccess("Password updated successfully.");
  };

  return (
    <div className="settings-manager">
      <div className="settings-header">
        <h2>Account Settings</h2>
        <p className="settings-description">
          Signed in as <strong>{userEmail}</strong>. Update your admin password below.
        </p>
      </div>

      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="settings-row">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="At least 6 characters"
          />
        </div>

        <div className="settings-row">
          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter new password"
          />
        </div>

        {error && <p className="settings-error">{error}</p>}
        {success && <p className="settings-success">{success}</p>}

        <button type="submit" className="settings-submit" disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>

      <style jsx>{`
        .settings-manager {
          max-width: 480px;
        }
        .settings-header h2 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #1a472a;
          margin: 0 0 0.35rem;
          font-family: "Montserrat", sans-serif;
        }
        .settings-description {
          color: #4a5568;
          font-size: 0.95rem;
          margin: 0 0 1.75rem;
        }
        .settings-form {
          background: white;
          border: 1px solid rgba(26, 71, 42, 0.1);
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 10px 25px rgba(26, 71, 42, 0.06);
        }
        .settings-row {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.1rem;
        }
        .settings-row label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1a472a;
        }
        .settings-row input {
          padding: 0.65rem 0.8rem;
          border-radius: 10px;
          border: 1.5px solid rgba(26, 71, 42, 0.2);
          font-size: 0.9rem;
          font-family: inherit;
        }
        .settings-row input:focus {
          outline: none;
          border-color: #2f855a;
        }
        .settings-error {
          color: #b91c1c;
          font-size: 0.85rem;
          margin: 0 0 1rem;
        }
        .settings-success {
          color: #15803d;
          font-size: 0.85rem;
          margin: 0 0 1rem;
        }
        .settings-submit {
          width: 100%;
          padding: 0.8rem;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .settings-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .settings-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(26, 71, 42, 0.3);
        }
      `}</style>
    </div>
  );
}

export default function AdminPanel() {
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [activeSection, setActiveSection] = useState("testimonials");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setCheckingSession(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (checkingSession) {
    return <div style={{ padding: "3rem", textAlign: "center" }}>Loading...</div>;
  }

  if (!session) {
    return (
      <>
        <Head>
          <title>Admin Login - As-Sa'adah</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <AdminLogin onLogin={() => {}} />
      </>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case "testimonials":
        return (
          <CrudManager
            key={activeSection}
            title="Student Testimonials"
            description="Manage testimonials shown across the site. New submissions from the website need to be approved before they go live."
            fields={testimonialFields}
            itemLabelKey="name"
            tableName="testimonials"
            imageBucket="testimonial-photos"
            orderBy="display_order"
            approvalField="approved"
          />
        );
      case "heroImages":
        return (
          <CrudManager
            key={activeSection}
            title="Hero Section Images"
            description="Manage hero images for the Homepage and About Us page."
            fields={heroImageFields}
            itemLabelKey="altText"
            tableName="hero_images"
            imageBucket="hero-images"
            groupBy="page"
            groupOrder={["Homepage", "About Us", "Courses", "Careers", "Level 1", "Level 2", "Level 3"]}
          />
        );
      case "levelRules":
        return (
          <CrudManager
            key={activeSection}
            title="Level Rules"
            description="Manage eligibility and progression rules for Levels 1, 2, and 3."
            fields={levelRuleFields}
            itemLabelKey="level"
            tableName="level_rules"
            orderBy="display_order"
          />
        );
      case "instructors":
        return (
          <CrudManager
            key={activeSection}
            title="Instructors"
            description="Manage instructor profiles shown on the About Us page."
            fields={instructorFields}
            itemLabelKey="name"
            tableName="instructors"
            imageBucket="instructor-photos"
            orderBy="display_order"
          />
        );
      case "courses":
        return (
          <CrudManager
            key={activeSection}
            title="Courses"
            description="Manage courses within any Level."
            fields={courseFields}
            itemLabelKey="title"
            tableName="courses"
            orderBy="display_order"
          />
        );
      case "homepageCourses":
        return (
          <CrudManager
            key={activeSection}
            title="Homepage Courses"
            description="Manage the 4 courses shown in the 'Our Courses' carousel on the homepage — image, instructor, outcome tag, and which course page it links to."
            fields={homepageCourseFields}
            itemLabelKey="title"
            tableName="homepage_courses"
            imageBucket="homepage-course-images"
            orderBy="display_order"
          />
        );
      case "videos":
        return (
          <CrudManager
            key={activeSection}
            title="Videos"
            description="Manage videos shown on the homepage and level pages."
            fields={videoFields}
            itemLabelKey="title"
            tableName="videos"
            orderBy="display_order"
          />
        );
      case "studentIds":
        return (
          <CrudManager
            key={activeSection}
            title="Student IDs / Roll Numbers"
            description="Manage the student unique IDs used to gate access to Level 2 and Level 3."
            fields={studentIdFields}
            itemLabelKey="studentId"
            tableName="student_access_ids"
          />
        );
      case "applicationFields":
        return (
          <CrudManager
            key={activeSection}
            title="Application Form Fields"
            description="Manage the fields shown on the application form for any Level."
            fields={applicationFieldFields}
            itemLabelKey="fieldLabel"
            tableName="form_fields"
            orderBy="display_order"
          />
        );
      case "applyFormLinks":
        return (
          <CrudManager
            key={activeSection}
            title="Apply Now Form Links"
            description="Set the Google Form link that 'Apply Now' opens for each Level. Leave the URL blank to show a 'Form Coming Soon' message on the site instead. Edit the existing row for each Level rather than adding duplicates."
            fields={applyFormLinkFields}
            itemLabelKey="level"
            tableName="apply_form_links"
          />
        );
      case "settings":
        return <AdminSettings userEmail={session.user.email} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Admin Panel - As-Sa'adah</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="admin-shell">
        <button
          type="button"
          className="mobile-sidebar-toggle"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          ☰ Menu
        </button>

        <aside className={`admin-sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="sidebar-brand">As-Sa'adah Admin</div>
          <nav>
            {SECTIONS.map((section) => (
              <button
                key={section.key}
                type="button"
                className={`sidebar-link ${activeSection === section.key ? "active" : ""}`}
                onClick={() => {
                  setActiveSection(section.key);
                  setIsSidebarOpen(false);
                }}
              >
                {section.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="logout-btn"
            onClick={async () => {
              await supabase.auth.signOut();
            }}
          >
            Log Out
          </button>
        </aside>

        <main className="admin-content">{renderSection()}</main>
      </div>

      <style jsx>{`
        .admin-shell {
          display: flex;
          min-height: 100vh;
          background: #f8fafc;
        }
        .mobile-sidebar-toggle {
          display: none;
          position: fixed;
          top: 16px;
          left: 16px;
          z-index: 120;
          background: #1a472a;
          color: white;
          border: none;
          padding: 0.6rem 1rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
        }
        .admin-sidebar {
          width: 260px;
          flex-shrink: 0;
          background: linear-gradient(180deg, #1a472a, #143823);
          color: white;
          padding: 2rem 1.25rem;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          overflow-y: auto;
          z-index: 50;
        }
        .sidebar-brand {
          font-family: "Montserrat", sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          margin-bottom: 2rem;
        }
        .admin-sidebar nav {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex: 1;
        }
        .sidebar-link {
          text-align: left;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          padding: 0.7rem 0.9rem;
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.92rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .sidebar-link:hover {
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }
        .sidebar-link.active {
          background: #2f855a;
          color: white;
          font-weight: 700;
        }
        .logout-btn {
          margin-top: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.7rem;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
        }
        .logout-btn:hover {
          background: rgba(255, 255, 255, 0.18);
        }
        .admin-content {
          flex: 1;
          margin-left: 260px;
          padding: 2.5rem clamp(1.25rem, 4vw, 3rem);
          overflow-x: hidden;
        }

        @media (max-width: 900px) {
          .mobile-sidebar-toggle {
            display: block;
          }
          .admin-sidebar {
            left: -280px;
            z-index: 110;
            transition: left 0.3s ease;
            box-shadow: 10px 0 40px rgba(0, 0, 0, 0.2);
          }
          .admin-sidebar.open {
            left: 0;
          }
          .admin-content {
            margin-left: 0;
            padding-top: 4.5rem;
          }
        }
      `}</style>
    </>
  );
}
