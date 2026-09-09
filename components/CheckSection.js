import { useEffect, useRef, useState } from "react";
import ApplyLevelGate from "./ApplyLevelGate";

export default function CheckSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isApplyGateOpen, setIsApplyGateOpen] = useState(false);

  const steps = [
    {
      title: "Basic Info",
      desc: "Name, Age, City, Madaris background",
    },
    {
      title: "Intent Filter",
      desc: "Why applying, daily commitment",
    },
    {
      title: "Confirmation & Access",
      desc: "Fee details, payment, LMS access",
    },
  ];

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

  return (
    <section
      ref={sectionRef}
      className={`check-section ${visible ? "visible" : ""}`}
    >
      <h2 className="section-title">Apply Now</h2>
      <p className="section-subtitle">
        Complete our structured 3-step application funnel to begin your journey
      </p>

      {/* Funnel */}
      <div className="funnel">
        {steps.map((step, index) => (
          <div data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
            key={index}
            className="funnel-step"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="step-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Arrow */}
      <div className="arrow">↓</div>

      {/* CTA Button */}
      <button type="button" className="apply-button" onClick={() => setIsApplyGateOpen(true)}>
        Start Application
      </button>

      <p className="footer-note">
        After submission, you will receive automatic email confirmation and LMS
        access.
      </p>

      <style jsx>{`
        .check-section {
          padding: 120px 20px;
          text-align: center;
          background: linear-gradient(180deg, #f0fdf4, #ffffff);
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .check-section.visible {
          opacity: 1;
          transform: translateY(0);
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
          margin-bottom: 60px;
        }

        /* Funnel */
        .funnel {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .funnel-step {
          background: white;
          border-radius: 16px;
          padding: 30px 25px;
          width: 280px;
          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.1),
            0 0 20px rgba(47, 133, 90, 0.15);
          border: 1px solid rgba(47, 133, 90, 0.2);
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.8s ease forwards;
          transition: all 0.3s ease;
        }

        .funnel-step:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow:
            0 20px 40px rgba(47, 133, 90, 0.15),
            0 0 30px rgba(47, 133, 90, 0.35);
        }

        .step-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #2f855a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin: 0 auto 15px;
          box-shadow: 0 0 20px rgba(47, 133, 90, 0.5);
        }

        .funnel-step h3 {
          color: #2f855a;
          margin-bottom: 10px;
        }

        .funnel-step p {
          color: #276749;
          font-size: 15px;
        }

        /* Arrow */
        .arrow {
          font-size: 40px;
          color: #2f855a;
          margin: 20px 0;
          animation: bounce 2s infinite;
        }

        /* Button */
        .apply-button {
          background: linear-gradient(135deg, #2f855a, #276749);
          color: white;
          border: none;
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow:
            0 10px 25px rgba(47, 133, 90, 0.3),
            0 0 25px rgba(47, 133, 90, 0.4);
        }

        .apply-button:hover {
          transform: scale(1.07);
          box-shadow:
            0 20px 40px rgba(47, 133, 90, 0.5),
            0 0 40px rgba(47, 133, 90, 0.7);
        }

        .footer-note {
          margin-top: 25px;
          color: #276749;
          font-size: 15px;
        }

        /* Animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .funnel {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <ApplyLevelGate isOpen={isApplyGateOpen} onClose={() => setIsApplyGateOpen(false)} />
    </section>
  );
}
