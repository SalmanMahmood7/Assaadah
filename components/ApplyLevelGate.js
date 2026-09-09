import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import supabase from "../lib/supabaseClient";

const FALLBACK_LEVEL1_FORM_URL = "https://forms.gle/BFadm5ZTHHpTtoWCA";

const LEVEL_OPTIONS = [
  { level: 1, badge: "Level 01", title: "Foundation", subtitle: "Online Preparatory Course" },
  { level: 2, badge: "Level 02", title: "Bootcamp", subtitle: "Physical Bootcamp" },
  { level: 3, badge: "Level 03", title: "Startup Ecosystem", subtitle: "Incubation Track" },
];

export default function ApplyLevelGate({ isOpen, onClose }) {
  const router = useRouter();
  const [level1FormUrl, setLevel1FormUrl] = useState(FALLBACK_LEVEL1_FORM_URL);

  useEffect(() => {
    let isMounted = true;
    supabase
      .from("apply_form_links")
      .select("formUrl")
      .eq("level", "Level 1")
      .maybeSingle()
      .then(({ data }) => {
        if (isMounted && data?.formUrl) setLevel1FormUrl(data.formUrl);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  if (!isOpen) return null;

  const handleSelect = (level) => {
    if (level === 1) {
      window.open(level1FormUrl, "_blank", "noopener,noreferrer");
    } else {
      router.push(`/admission-terms?level=level${level}`);
    }
    onClose();
  };

  return (
    <div className="apply-gate-backdrop" onClick={onClose}>
      <div className="apply-gate-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="apply-gate-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <p className="apply-gate-eyebrow">Getting Started</p>
        <h3>Which Level Are You Applying For?</h3>
        <p className="apply-gate-subtitle">
          Select your level to continue with the right application process.
        </p>

        <div className="apply-gate-options">
          {LEVEL_OPTIONS.map((option) => (
            <button
              type="button"
              key={option.level}
              className="apply-gate-option"
              onClick={() => handleSelect(option.level)}
            >
              <span className="apply-gate-badge">{option.badge}</span>
              <strong>{option.title}</strong>
              <span className="apply-gate-option-sub">{option.subtitle}</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .apply-gate-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 43, 26, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 400;
        }

        .apply-gate-modal {
          position: relative;
          background: white;
          border-radius: 22px;
          padding: 2.5rem;
          width: min(600px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
          text-align: center;
        }

        .apply-gate-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: transparent;
          border: none;
          font-size: 1.6rem;
          line-height: 1;
          color: #94a3b8;
          cursor: pointer;
        }

        .apply-gate-close:hover {
          color: #1a472a;
        }

        .apply-gate-eyebrow {
          color: #2f855a;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin: 0 0 0.5rem;
        }

        .apply-gate-modal h3 {
          margin: 0 0 0.6rem;
          color: #1a472a;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.5rem;
        }

        .apply-gate-subtitle {
          color: #718096;
          font-size: 0.95rem;
          margin: 0 0 2rem;
          line-height: 1.5;
        }

        .apply-gate-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .apply-gate-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          background: #f8fafc;
          border: 1.5px solid rgba(26, 71, 42, 0.12);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .apply-gate-option:hover {
          border-color: #2f855a;
          background: white;
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(26, 71, 42, 0.15);
        }

        .apply-gate-badge {
          display: inline-block;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
          margin-bottom: 0.4rem;
        }

        .apply-gate-option strong {
          color: #1a472a;
          font-size: 1.05rem;
          font-family: 'Montserrat', sans-serif;
        }

        .apply-gate-option-sub {
          color: #718096;
          font-size: 0.8rem;
        }

        @media (max-width: 640px) {
          .apply-gate-options {
            grid-template-columns: 1fr;
          }

          .apply-gate-modal {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
