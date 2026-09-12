import { useState } from "react";
import Link from "next/link";
import Layout from "./Layout";
import { FaDownload } from "react-icons/fa";

export default function CourseDetailLayout({
  icon,
  badge,
  title,
  tagline,
  heroImage,
  stats,
  overviewEyebrow,
  overviewTitle,
  overviewParagraphs,
  itemLabel,
  phases,
  pdfPath,
  applyFormUrl,
}) {
  const [activePhase, setActivePhase] = useState(0);
  const phase = phases[activePhase];

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="hero-section" style={{ backgroundImage: `url('${heroImage}')` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-badge">{badge}</span>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{tagline}</p>
          </div>
        </div>

        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <div>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section section-white section-after-hero">
        <div className="container overview-layout">
          <div className="overview-text">
            <p className="eyebrow">{overviewEyebrow}</p>
            <h2>{overviewTitle}</h2>
            {overviewParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="overview-icon-panel">{icon}</div>
        </div>
      </section>

      {/* ================= SYLLABUS ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Syllabus</p>
            <h2>Course Curriculum in Detail</h2>
            <p className="section-lead">Select a phase to see what it covers.</p>
          </div>

          <div className="phase-tabs" role="tablist">
            {phases.map((p, index) => (
              <button
                type="button"
                key={p.title}
                role="tab"
                aria-selected={activePhase === index}
                className={`phase-tab ${activePhase === index ? "active" : ""}`}
                onClick={() => setActivePhase(index)}
              >
                <span className="phase-tab-index">{String(index + 1).padStart(2, "0")}</span>
                {p.title}
              </button>
            ))}
          </div>

          <div className="phase-panel">
            <div className="phase-panel-head">
              <h3>{phase.title}</h3>
              {phase.range && <span className="phase-range">{phase.range}</span>}
            </div>
            {phase.summary && <p className="phase-summary">{phase.summary}</p>}

            <div className="item-list">
              {phase.items.map((item) => (
                <div className="item-card" key={item.no}>
                  <div className="item-head">
                    <span className="item-no">
                      {itemLabel} {item.no}
                    </span>
                    <h4>{item.title}</h4>
                  </div>

                  {item.goal && (
                    <p className="item-goal">
                      <strong>Goal:</strong> {item.goal}
                    </p>
                  )}

                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="item-bullets">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {item.outcome && (
                    <p className="item-outcome">
                      <strong>Learning Outcome:</strong> {item.outcome}
                    </p>
                  )}

                  {item.build && (
                    <div className="item-build">
                      <span className="build-label">The Build</span>
                      <p>{item.build}</p>
                    </div>
                  )}

                  {item.code && (
                    <pre className="item-code">
                      <code>{item.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section section-white">
        <div className="container cta-block">
          <h3>Ready to start this course?</h3>
          <p>This course is taught as part of As-Sa&apos;adah&rsquo;s Level 1 Foundation Program.</p>
          <div className="cta-actions">
            <a href={applyFormUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
              Apply Now
            </a>
            <Link href="/Level1" className="cta-button-secondary">
              Back to Level 1
            </Link>
            {pdfPath && (
              <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="cta-button-ghost">
                <FaDownload /> Download Syllabus (PDF)
              </a>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 560px;
          padding-bottom: 90px;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(10, 30, 20, 0.72), rgba(10, 30, 20, 0.88));
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px clamp(1rem, 5vw, 3rem) 0;
        }

        .hero-content {
          text-align: center;
          max-width: 820px;
          color: white;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #86efac;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          margin-bottom: 18px;
        }

        .hero-title {
          font-size: clamp(28px, 4.5vw, 44px);
          font-weight: 800;
          margin-bottom: 15px;
          font-family: "Montserrat", sans-serif;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 17px;
          color: #d1f0e1;
          line-height: 1.6;
        }

        .stats-bar {
          position: absolute;
          left: 50%;
          bottom: -70px;
          transform: translateX(-50%);
          z-index: 5;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          display: grid;
          grid-template-columns: repeat(${stats.length}, 1fr);
          gap: 1px;
          background-color: rgba(26, 71, 42, 0.08);
          max-width: 1000px;
          width: calc(100% - 2.5rem);
          overflow: hidden;
        }

        .stat-item {
          background: white;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 1.5rem 1.4rem;
        }

        .stat-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .stat-label {
          font-size: 0.72rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0 0 0.2rem;
        }

        .stat-value {
          font-size: 1rem;
          font-weight: 700;
          color: #1a472a;
          margin: 0;
        }

        .section {
          padding: clamp(3.5rem, 7vw, 6.5rem) clamp(1.25rem, 5vw, 3rem);
          border-top: 1px solid rgba(26, 71, 42, 0.07);
        }

        .section-white {
          background: #ffffff;
        }

        .section-after-hero {
          padding-top: calc(clamp(3.5rem, 7vw, 6.5rem) + 70px);
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          width: 100%;
        }

        .section-head {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .eyebrow {
          color: #2f855a;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.6rem;
        }

        .section-head h2,
        .overview-text h2 {
          font-size: clamp(1.7rem, 3vw, 2.1rem);
          color: #14532d;
          font-family: "Montserrat", sans-serif;
          font-weight: 800;
        }

        .section-lead {
          color: #475569;
          font-size: 1.02rem;
          margin-top: 0.75rem;
          line-height: 1.7;
        }

        /* ---- overview ---- */
        .overview-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        .overview-text p {
          color: #475569;
          line-height: 1.85;
          margin: 18px 0;
          font-size: 1.02rem;
        }

        .overview-icon-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5.5rem;
          height: 220px;
          border-radius: 22px;
          background: linear-gradient(160deg, #1a472a, #14532d);
          color: rgba(255, 255, 255, 0.85);
          box-shadow: 0 25px 60px rgba(26, 71, 42, 0.25);
        }

        /* ---- phase tabs ---- */
        .phase-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .phase-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          border: 1.5px solid rgba(26, 71, 42, 0.15);
          color: #1a472a;
          padding: 0.65rem 1.25rem;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: inherit;
        }

        .phase-tab:hover {
          border-color: #1a472a;
        }

        .phase-tab.active {
          background: linear-gradient(135deg, #1a472a, #2f855a);
          border-color: transparent;
          color: white;
          box-shadow: 0 10px 25px rgba(26, 71, 42, 0.3);
        }

        .phase-tab-index {
          font-family: "Montserrat", sans-serif;
          font-weight: 800;
          font-size: 0.78rem;
          opacity: 0.6;
        }

        .phase-panel {
          background: #f8fafc;
          border-radius: 20px;
          padding: 2.25rem clamp(1.25rem, 4vw, 2.5rem);
        }

        .phase-panel-head {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.9rem;
          flex-wrap: wrap;
          text-align: center;
        }

        .phase-panel-head h3 {
          font-family: "Montserrat", sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: #14532d;
          margin: 0;
        }

        .phase-range {
          font-family: "Montserrat", sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #2f855a;
          background: rgba(47, 133, 90, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
        }

        .phase-summary {
          text-align: center;
          color: #4a5568;
          font-size: 0.98rem;
          margin: 0.9rem 0 0;
        }

        .item-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
          margin-top: 2rem;
        }

        .item-card {
          background: white;
          border-radius: 16px;
          padding: 1.5rem 1.6rem;
          border: 1px solid rgba(26, 71, 42, 0.08);
          box-shadow: 0 10px 26px rgba(26, 71, 42, 0.05);
        }

        .item-head {
          display: flex;
          align-items: baseline;
          gap: 0.7rem;
          margin-bottom: 0.6rem;
        }

        .item-no {
          flex-shrink: 0;
          font-family: "Montserrat", sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #2f855a;
          background: rgba(47, 133, 90, 0.1);
          padding: 0.25rem 0.6rem;
          border-radius: 8px;
          white-space: nowrap;
        }

        .item-head h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
          color: #14532d;
          line-height: 1.4;
        }

        .item-goal,
        .item-outcome {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.6;
          margin: 0.4rem 0;
        }

        .item-goal strong,
        .item-outcome strong {
          color: #14532d;
        }

        .item-bullets {
          margin: 0.5rem 0;
          padding-left: 1.1rem;
          color: #4a5568;
          font-size: 0.86rem;
          line-height: 1.75;
        }

        .item-build {
          margin-top: 0.75rem;
          background: rgba(47, 133, 90, 0.07);
          border-left: 3px solid #2f855a;
          border-radius: 0 10px 10px 0;
          padding: 0.6rem 0.9rem;
        }

        .build-label {
          display: block;
          font-family: "Montserrat", sans-serif;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #2f855a;
          margin-bottom: 0.2rem;
        }

        .item-build p {
          margin: 0;
          font-size: 0.86rem;
          color: #334155;
          line-height: 1.6;
        }

        .item-code {
          margin: 0.75rem 0 0;
          background: #0e1512;
          color: #d8f3e4;
          border-radius: 10px;
          padding: 0.9rem 1rem;
          font-size: 0.78rem;
          line-height: 1.6;
          overflow-x: auto;
        }

        /* ---- CTA ---- */
        .cta-block {
          text-align: center;
          max-width: 720px;
          background: white;
          border: 1px solid rgba(26, 71, 42, 0.08);
          border-radius: 24px;
          padding: clamp(2.5rem, 5vw, 3.5rem);
          box-shadow: 0 20px 50px rgba(26, 71, 42, 0.08);
        }

        .cta-block h3 {
          font-size: clamp(1.5rem, 3vw, 1.9rem);
          margin-bottom: 10px;
          font-family: "Montserrat", sans-serif;
          font-weight: 800;
          color: #14532d;
        }

        .cta-block p {
          color: #4a5568;
          margin-bottom: 28px;
          font-size: 1.02rem;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        :global(.cta-button) {
          display: inline-block;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          font-weight: 700;
          padding: 15px 38px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 15px 35px rgba(26, 71, 42, 0.3);
        }

        :global(.cta-button:hover) {
          transform: translateY(-3px);
          box-shadow: 0 20px 42px rgba(26, 71, 42, 0.4);
          background: linear-gradient(135deg, #22543d, #38a169);
        }

        :global(.cta-button-secondary) {
          display: inline-block;
          background: transparent;
          color: #1a472a;
          font-weight: 700;
          padding: 15px 38px;
          border-radius: 50px;
          text-decoration: none;
          border: 2px solid #1a472a;
          transition: all 0.3s ease;
        }

        :global(.cta-button-secondary:hover) {
          background: #1a472a;
          color: white;
          transform: translateY(-3px);
        }

        :global(.cta-button-ghost) {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #64748b;
          font-weight: 600;
          padding: 15px 24px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        :global(.cta-button-ghost:hover) {
          color: #1a472a;
        }

        @media (max-width: 900px) {
          .overview-layout {
            grid-template-columns: 1fr;
          }

          .overview-icon-panel {
            height: 160px;
            font-size: 4rem;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-bottom: 2rem;
          }

          .stats-bar {
            position: static;
            left: auto;
            bottom: auto;
            transform: none;
            grid-template-columns: repeat(2, 1fr);
            margin: -50px auto 0;
          }

          .section-after-hero {
            padding-top: clamp(3.5rem, 7vw, 6.5rem);
          }

          .item-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}
