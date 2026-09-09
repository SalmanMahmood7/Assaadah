import { useEffect, useRef, useState } from "react";
import ApplyLevelGate from "./ApplyLevelGate";

export default function ApplyNowSection() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isApplyGateOpen, setIsApplyGateOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "Basic Info",
      desc: "Name, Age, City, Madaris background"
    },
    {
      title: "Intent Filter",
      desc: "Why applying, daily commitment"
    },
    {
      title: "Confirmation & Access",
      desc: "Fee details, payment, LMS access"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`apply-section ${visible ? "visible" : ""}`}
    >

      <div className="apply-inner">

        {/* Left: heading + steps */}
        <div className="apply-left">

          <p className="section-eyebrow">Getting Started</p>

          <h2 className="section-title">
            Apply Now
          </h2>

          <p className="section-subtitle">
            Complete our structured 3-step application funnel to begin your journey
          </p>

          <div className="stepper">

            <div className="stepper-track" aria-hidden="true">
              <div className="stepper-track-fill" />
            </div>

            {steps.map((step, index) => (
              <div data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
                className="stepper-item"
                key={index}
                style={{ animationDelay: `${index * 0.15}s` }}
              >

                <div className="step-number">
                  {index + 1}
                </div>

                <div className="step-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Right: CTA card */}
        <div className="cta-card">

          <div className="cta-card-glow" aria-hidden="true" />

          <span className="cta-card-badge">3-Step Funnel</span>

          <h3 className="cta-heading">Ready to begin your journey?</h3>

          <p className="footer-note">
            After submission, you will receive automatic email confirmation and LMS access.
          </p>

          <button type="button" className="apply-button" onClick={() => setIsApplyGateOpen(true)}>
            Start Application
            <span className="apply-button-arrow">→</span>
          </button>

        </div>

      </div>

      <style jsx>{`

        .apply-section {
          padding: 120px 20px;
          background: #ffffff;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .apply-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .apply-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .apply-left {
          text-align: left;
        }

        .section-eyebrow {
          color: #2f855a;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 0.75rem;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: #1a472a;
          margin-bottom: 15px;
        }

        .section-subtitle {
          font-size: 18px;
          color: #276749;
          margin-bottom: 45px;
          max-width: 480px;
        }

        /* Stepper */
        .stepper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .stepper-track {
          position: absolute;
          left: 24px;
          top: 24px;
          bottom: 24px;
          width: 2px;
          background: rgba(47, 133, 90, 0.15);
        }

        .stepper-track-fill {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #1a472a, #2f855a);
          transform-origin: top;
          transform: scaleY(0);
          transition: transform 1.2s ease 0.3s;
        }

        .apply-section.visible .stepper-track-fill {
          transform: scaleY(1);
        }

        .stepper-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 22px;
          opacity: 0;
          transform: translateX(-20px);
          animation: fadeIn 0.7s ease forwards;
        }

        .step-number {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 8px 20px rgba(47,133,90,0.4);
        }

        .step-body {
          padding-top: 6px;
        }

        .step-body h3 {
          color: #1a472a;
          margin: 0 0 6px;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
        }

        .step-body p {
          color: #4a5568;
          font-size: 15px;
          margin: 0;
        }

        /* CTA Card */
        .cta-card {
          position: relative;
          background: linear-gradient(160deg, #1a472a, #14532d 55%, #0b2b18);
          border-radius: 24px;
          padding: 48px 38px;
          box-shadow: 0 25px 60px rgba(19, 56, 34, 0.35);
          overflow: hidden;
        }

        .cta-card-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(104,211,145,0.35), transparent 70%);
          pointer-events: none;
        }

        .cta-card-badge {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          color: #86efac;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 6px 14px;
          border-radius: 50px;
          margin-bottom: 20px;
        }

        .cta-heading {
          color: white;
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0 12px;
          font-family: 'Montserrat', sans-serif;
        }

        .footer-note {
          position: relative;
          margin: 0 0 30px;
          color: #cbe8d6;
          font-size: 14px;
          line-height: 1.6;
        }

        /* Button */
        .apply-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          background: white;
          color: #14532d;
          border: none;
          padding: 16px 30px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        .apply-button-arrow {
          transition: transform 0.3s ease;
        }

        .apply-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 35px rgba(0,0,0,0.3);
          background: #f0fdf4;
        }

        .apply-button:hover .apply-button-arrow {
          transform: translateX(4px);
        }

        /* Animations */
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile */
        @media(max-width:900px){
          .apply-inner {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .apply-left {
            text-align: center;
          }

          .section-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .stepper-item {
            text-align: left;
          }

          .cta-card {
            padding: 40px 28px;
          }
        }

      `}</style>

      <ApplyLevelGate isOpen={isApplyGateOpen} onClose={() => setIsApplyGateOpen(false)} />

    </section>
  );
}
