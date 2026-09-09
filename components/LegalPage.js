export default function LegalPage({ eyebrow, title, subtitle, dateBadges, sections }) {
  return (
    <>
      <section className="legal-hero">
        <div className="hero-glow" aria-hidden="true" />
        <p className="legal-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="legal-hero-subtitle">{subtitle}</p>
        <div className="hero-dates">
          {dateBadges.map((badge, i) => (
            <span data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>
              {i > 0 && <span className="divider">&middot;</span>}
              {badge}
            </span>
          ))}
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-sections">
          {sections.map((section, index) => (
            <article data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)} key={section.id} id={`section-${section.id}`} className="legal-card">
              <div className="section-heading">
                <span className="section-badge">{section.id}</span>
                <h2>{section.title}</h2>
              </div>

              {section.paragraphs &&
                section.paragraphs.map((p, i) => (
                  <p data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} className="section-description" key={i}>{p}</p>
                ))}

              {section.description && (
                <p className="section-description">{section.description}</p>
              )}

              {section.items && (
                <ul>
                  {section.items.map((item, i) => (
                    <li data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>
                      {item.label && item.text && (
                        <>
                          <strong>{item.label}:</strong> {item.text}
                        </>
                      )}
                      {item.label && !item.text && <strong>{item.label}</strong>}
                      {!item.label && item.text}

                      {item.subList && (
                        <ul className="sub-list">
                          {item.subList.map((sub, j) => (
                            <li data-aos="fade-up" data-aos-delay={Math.min(j * 80, 400)} key={j}>{sub}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {section.numbered && (
                <ol>
                  {section.numbered.map((item, i) => (
                    <li data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>
                      <strong>{item.label}:</strong> {item.text}
                    </li>
                  ))}
                </ol>
              )}

              {section.levels &&
                section.levels.map((level, i) => (
                  <div data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i} className="subsection">
                    <h3>{level.title}</h3>
                    <ul>
                      {level.subItems.map((sub, j) => (
                        <li data-aos="fade-up" data-aos-delay={Math.min(j * 80, 400)} key={j}>
                          {sub.label ? (
                            <>
                              <strong>{sub.label}:</strong> {sub.text}
                            </>
                          ) : (
                            sub.text
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </section>

      <style jsx>{`
        .legal-hero {
          position: relative;
          overflow: hidden;
          padding: 140px clamp(1.25rem, 5vw, 3rem) 80px;
          text-align: center;
          background: linear-gradient(160deg, #1a472a, #14532d 55%, #0b2b18);
          color: white;
        }

        .hero-glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(104, 211, 145, 0.28), transparent 70%);
          pointer-events: none;
        }

        .legal-eyebrow {
          position: relative;
          color: #86efac;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin: 0 0 0.9rem;
        }

        .legal-hero h1 {
          position: relative;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          margin-bottom: 0.85rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .legal-hero-subtitle {
          position: relative;
          font-size: 1.15rem;
          max-width: 700px;
          margin: 0 auto 1.75rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
        }

        .hero-dates {
          position: relative;
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: #d1f0e1;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.6rem 1.4rem;
          border-radius: 999px;
          backdrop-filter: blur(6px);
        }

        .hero-dates .divider {
          opacity: 0.6;
          margin-right: 0.6rem;
        }

        /* ============ BODY ============ */
        .legal-body {
          background: linear-gradient(180deg, #f4f9f6, #eefaf1);
          padding: clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 3rem);
        }

        .legal-sections {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .legal-card {
          position: relative;
          scroll-margin-top: 100px;
          background: white;
          border-radius: 24px;
          padding: clamp(2rem, 4vw, 2.75rem);
          box-shadow: 0 18px 45px rgba(26, 71, 42, 0.08);
          border: 1px solid rgba(26, 71, 42, 0.06);
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .legal-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #68d391, #2f855a, #1a472a);
        }

        .legal-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 60px rgba(26, 71, 42, 0.14);
        }

        .card-index {
          position: absolute;
          bottom: 1.2rem;
          right: 1.6rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 2.4rem;
          font-weight: 800;
          color: rgba(26, 71, 42, 0.05);
          line-height: 1;
          pointer-events: none;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.1rem;
        }

        .section-badge {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 52px;
          height: 40px;
          padding: 0 0.6rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          box-shadow: 0 10px 20px rgba(26, 71, 42, 0.3);
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          color: #1a472a;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
        }

        .section-description {
          position: relative;
          margin: 0 0 0.75rem;
          color: #4a5568;
          line-height: 1.8;
        }

        .legal-card ul,
        .legal-card ol {
          position: relative;
          margin: 0;
          padding-left: 1.3rem;
          color: #4a5568;
          line-height: 1.85;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .legal-card li strong {
          color: #14532d;
        }

        .sub-list {
          margin-top: 0.4rem;
          padding-left: 1.2rem;
          gap: 0.3rem;
          list-style: circle;
        }

        .subsection {
          position: relative;
          margin-top: 1rem;
          padding: 1rem 1.2rem;
          background: #f7fbf8;
          border-radius: 14px;
          border-left: 3px solid #2f855a;
        }

        .subsection h3 {
          margin: 0 0 0.5rem;
          color: #14532d;
          font-size: 1.02rem;
          font-family: 'Montserrat', sans-serif;
        }

        .subsection + .subsection {
          margin-top: 1rem;
        }

        @media (max-width: 640px) {
          .legal-card {
            padding: 1.6rem 1.3rem;
            border-radius: 18px;
          }

          .section-heading {
            gap: 0.7rem;
          }

          .card-index {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}
