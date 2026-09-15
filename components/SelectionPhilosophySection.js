const steps = [
  {
    title: "Apply & Screen",
    description:
      "Every application is checked against baseline eligibility — Aalim degree, language proficiency, and basic computer knowledge.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
        <path d="M9 9h1" />
      </svg>
    )
  },
  {
    title: "Assessment",
    description:
      "Shortlisted candidates go through an interview and aptitude check that tests reasoning, communication, and readiness.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    )
  },
  {
    title: "Evaluated on Character",
    description:
      "We weigh how a candidate thinks and works — consistency, discipline, and logical clarity — not just what they know.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M7 7 3 8.5 7 15h0a4 4 0 0 0 4-4" />
        <path d="M17 7l4 1.5L17 15h0a4 4 0 0 1-4-4" />
      </svg>
    )
  },
  {
    title: "Merit-Based Advancement",
    description:
      "Only candidates who sustain performance move forward to the next level — no fixed seats or quotas are disclosed publicly.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
        <path d="M17 5h3a2 2 0 0 1-2 4h-1" />
        <path d="M7 5H4a2 2 0 0 0 2 4h1" />
      </svg>
    )
  }
];

const variants = ["", "st_one", "st_two", "st_three"];

export function SelectionPhilosophySection() {
  return (
    <section className="tp_feature">
      <div className="container">
        <div className="section-title text-center">
          <h4>How It Works</h4>
          <h1>Selection Philosophy</h1>
        </div>

        <div className="row">
          {steps.map((step, index) => (
            <div key={step.title} className={`col col-${index + 1}`}>
              <div className={`single_tp ${variants[index]}`}>
                <span className="watermark">{step.icon}</span>

                <div className="icon-glow">
                  <i className="tp-icon">{step.icon}</i>
                </div>

                <h3>{step.title}</h3>
                <span className="divider" />
                <p>{step.description}</p>

                <div className="stage-dots">
                  {steps.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`dot ${dotIndex === index ? "dot-active" : ""}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tp_feature {
          padding: 100px 20px;
          background: #ffffff;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-title h4 {
          color: #2f855a;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 0.75rem;
        }

        .section-title h1 {
          font-size: 2.4rem;
          color: #1a472a;
          margin: 0;
          font-weight: 800;
          font-family: "Montserrat", sans-serif;
        }

        .row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          align-items: start;
        }

        /* staggered heights to match the reference layout */
        .col-1 {
          margin-top: 20px;
        }

        .col-2 {
          margin-top: 45px;
        }

        .col-3 {
          margin-top: 0;
        }

        .col-4 {
          margin-top: 30px;
        }

        .single_tp {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          padding: 2.25rem 1.75rem 2rem;
          text-align: left;
          box-shadow: 0 15px 40px rgba(26, 71, 42, 0.08);
          border: 1px solid rgba(26, 71, 42, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .single_tp::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #68d391, #2f855a, #1a472a);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .single_tp:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 50px rgba(26, 71, 42, 0.16);
        }

        .single_tp:hover::before {
          transform: scaleX(1);
        }

        .watermark {
          position: absolute;
          bottom: -18px;
          right: -18px;
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a472a;
          opacity: 0.05;
          transform: rotate(-12deg);
          pointer-events: none;
        }

        .watermark :global(svg) {
          width: 100%;
          height: 100%;
        }

        .icon-glow {
          position: relative;
          width: 56px;
          height: 56px;
          margin: 0 0 1.25rem;
        }

        .icon-glow::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47, 133, 90, 0.25), transparent 70%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .single_tp:hover .icon-glow::before {
          opacity: 1;
        }

        .single_tp h3 {
          position: relative;
          font-size: 1.15rem;
          color: #1a472a;
          margin: 0 0 0.75rem;
          font-weight: 700;
          font-family: "Montserrat", sans-serif;
        }

        .divider {
          display: block;
          width: 36px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, #1a472a, #2f855a);
          margin: 0 0 1rem;
        }

        .tp-icon {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 22px rgba(26, 71, 42, 0.28);
        }

        .single_tp p {
          position: relative;
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 1.5rem;
        }

        .stage-dots {
          position: relative;
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(26, 71, 42, 0.15);
        }

        .dot-active {
          width: 18px;
          border-radius: 3px;
          background: linear-gradient(90deg, #1a472a, #2f855a);
        }

        @media (max-width: 1000px) {
          .section-title h1 {
            font-size: 1.9rem;
          }

          .row {
            grid-template-columns: 1fr 1fr;
          }

          .col-1,
          .col-2,
          .col-3,
          .col-4 {
            margin-top: 0;
          }
        }

        @media (max-width: 600px) {
          .row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
