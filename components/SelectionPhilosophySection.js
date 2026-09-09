import { useEffect, useState, useRef } from "react";

const steps = [
  {
    title: "Apply & Screen",
    description:
      "Every application is checked against baseline eligibility — Aalim degree, language proficiency, and basic computer knowledge.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    )
  },
  {
    title: "Evaluated on Character",
    description:
      "We weigh how a candidate thinks and works — not just what they know.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M7 7 3 8.5 7 15h0a4 4 0 0 0 4-4" />
        <path d="M17 7l4 1.5L17 15h0a4 4 0 0 1-4-4" />
      </svg>
    ),
    traits: ["Consistency", "Discipline", "Logical clarity"]
  }
];

const finalStep = {
  title: "Merit-Based Advancement",
  description:
    "Only candidates who sustain performance move forward to the next level — no fixed seats or quotas are disclosed publicly.",
  icon: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h3a2 2 0 0 1-2 4h-1" />
      <path d="M7 5H4a2 2 0 0 0 2 4h1" />
    </svg>
  )
};

const allSteps = [...steps, finalStep];

export function SelectionPhilosophySection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="selection-section">
      <p className={`eyebrow ${visible ? "show" : ""}`}>How It Works</p>

      <h2 className={`section-title ${visible ? "show" : ""}`}>
        Selection Philosophy
      </h2>

      <p className={`subheading ${visible ? "show" : ""}`}>
        Progression is strictly performance-based — here&apos;s how every candidate is evaluated.
      </p>

      <div className="steps-row">
        <div className="steps-connector" aria-hidden="true" />

        {allSteps.map((step, index) => {
          const isFinal = index === allSteps.length - 1;
          return (
            <div
              key={step.title}
              className={`step-card ${isFinal ? "final" : ""} ${visible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="step-top">
                <div className="step-icon">{step.icon}</div>
                <span className="step-num">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              {step.traits && (
                <ul className="trait-list">
                  {step.traits.map((trait) => (
                    <li data-aos="fade-up" key={trait}>{trait}</li>
                  ))}
                </ul>
              )}

              {isFinal && <span className="final-tag">The Outcome</span>}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .selection-section {
          padding: 100px 20px;
          text-align: center;
          background: #ffffff;
        }

        .eyebrow {
          color: #2f855a;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 0.75rem;

          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s ease;
        }

        .eyebrow.show {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 32px;
          color: #1a472a;
          margin-bottom: 10px;
          font-weight: 800;
          font-family: 'Montserrat', sans-serif;

          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .section-title.show {
          opacity: 1;
          transform: translateY(0);
        }

        .subheading {
          font-size: 18px;
          color: #276749;
          margin: 0 auto 70px;
          max-width: 640px;

          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
          transition-delay: 0.1s;
        }

        .subheading.show {
          opacity: 1;
          transform: translateY(0);
        }

        .steps-row {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        .steps-connector {
          position: absolute;
          top: 44px;
          left: 8%;
          right: 8%;
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            #2f855a 0,
            #2f855a 8px,
            transparent 8px,
            transparent 16px
          );
          opacity: 0.35;
          z-index: 0;
        }

        .step-card {
          position: relative;
          z-index: 1;
          background: white;
          border-radius: 18px;
          padding: 1.75rem 1.5rem;
          text-align: left;
          box-shadow: 0 12px 30px rgba(26, 71, 42, 0.08);
          border: 1px solid rgba(26, 71, 42, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.7s ease, translate 0.7s ease;
          display: flex;
          flex-direction: column;

          opacity: 0;
          transform: translateY(30px);
        }

        .step-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .step-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(26, 71, 42, 0.16);
        }

        .step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .step-icon {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 22px rgba(26, 71, 42, 0.3);
        }

        .step-num {
          font-size: 1.6rem;
          font-weight: 800;
          color: rgba(26, 71, 42, 0.12);
          font-family: 'Montserrat', sans-serif;
        }

        .step-card h3 {
          font-size: 1.1rem;
          color: #1a472a;
          margin: 0 0 0.6rem;
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
        }

        .step-card p {
          font-size: 0.9rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }

        .trait-list {
          list-style: none;
          margin: 1rem 0 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .trait-list li {
          background: #f0fdf4;
          color: #2f855a;
          font-weight: 600;
          font-size: 0.78rem;
          padding: 0.3rem 0.65rem;
          border-radius: 20px;
          border: 1px solid rgba(47, 133, 90, 0.25);
        }

        .step-card.final {
          border: 1px solid rgba(47, 133, 90, 0.35);
        }

        .final-tag {
          display: inline-block;
          margin-top: 1rem;
          align-self: flex-start;
          background: #f0fdf4;
          color: #2f855a;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          border: 1px solid rgba(47, 133, 90, 0.25);
        }

        @media (max-width: 1000px) {
          .steps-row {
            grid-template-columns: 1fr 1fr;
          }

          .steps-connector {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .steps-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
