import Link from 'next/link';

export default function EligibilitySection() {

  const shouldApply = [
    "Madaris graduates seeking structured capability development",
    "Absolute beginners willing to learn from first principles",
    "Able to commit 2–3 hours daily with consistency",
    "Comfortable with discipline, deadlines, and accountability"
  ];

  const shouldNotApply = [
    "Looking for shortcuts or quick outcomes",
    "Expecting guaranteed jobs without performance",
    "Unwilling to follow structured progression",
    "Unable to maintain consistency and discipline"
  ];

  return (
    <section className="eligibility-section">

      <p className="section-eyebrow">Before You Apply</p>
      <h2 className="section-title">Eligibility & Expectations</h2>

      <p className="section-subtitle">
        This program is designed for individuals prepared to commit to a structured path of capability development.
      </p>

      <div className="split">

        {/* Should Apply */}
        <div className="split-side go">
          <p className="split-label">Go</p>
          <h3>Who Should Apply</h3>
          <ul>
            {shouldApply.map((item, i) => (
              <li data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>
                <span className="marker">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Should Not Apply */}
        <div className="split-side stop">
          <p className="split-label">Stop</p>
          <h3>Who Should Not Apply</h3>
          <ul>
            {shouldNotApply.map((item, i) => (
              <li data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>
                <span className="marker">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="vs-badge" aria-hidden="true">Are you<br />a fit?</div>

      </div>

      {/* See More Button */}
      <div className="see-more">
        <Link href="/admission-terms" className="see-more-card">
          <span className="see-more-title">See Full Admission Terms</span>
        </Link>
      </div>

      <style jsx>{`

        .eligibility-section {
          padding: 120px 20px;
          background: #ffffff;
          text-align: center;
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
          color: #1a472a;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 18px;
          color: #4a5568;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .split {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(26, 71, 42, 0.15);
          text-align: left;
        }

        .split-side {
          padding: 3.5rem 3rem;
        }

        .split-side.go {
          background: linear-gradient(160deg, #1a472a, #2f855a);
          color: #ffffff;
        }

        .split-side.stop {
          background: #1a1a1a;
          color: #f7f7f7;
        }

        .split-label {
          font-family: "SF Mono", ui-monospace, Menlo, Consolas, monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          opacity: 0.65;
          margin-bottom: 1rem;
        }

        .split-side h3 {
          font-size: 1.5rem;
          margin: 0 0 1.75rem;
          font-weight: 700;
        }

        .split-side ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .split-side li {
          display: flex;
          gap: 0.8rem;
          align-items: flex-start;
          line-height: 1.55;
        }

        .marker {
          flex-shrink: 0;
          font-weight: 800;
          margin-top: 1px;
        }

        .go .marker {
          color: #68d391;
        }

        .stop .marker {
          color: #fc8181;
        }

        .vs-badge {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 74px;
          height: 74px;
          border-radius: 50%;
          background: #ffffff;
          color: #1a472a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.8rem;
          text-align: center;
          line-height: 1.2;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          border: 3px solid #f7f8f7;
          z-index: 2;
        }

        .see-more {
          margin-top: 48px;
          display: flex;
          justify-content: center;
        }

        :global(.see-more-card) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          text-decoration: none;
          padding: 0.9rem 2rem;
          border-radius: 40px;
          box-shadow: 0 10px 25px rgba(26, 71, 42, 0.25);
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        :global(.see-more-card:hover) {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(26, 71, 42, 0.35);
          background: linear-gradient(135deg, #22543d, #38a169);
        }

        .see-more-title {
          font-weight: 700;
          font-size: 1rem;
          color: #ffffff;
          white-space: nowrap;
        }

        @media (max-width: 820px) {
          .split {
            grid-template-columns: 1fr;
          }

          .vs-badge {
            display: none;
          }
        }

        @media (max-width: 768px) {

          .section-title {
            font-size: 28px;
          }

          .section-subtitle {
            font-size: 16px;
          }

          .split-side {
            padding: 2.5rem 1.75rem;
          }

        }

      `}</style>

    </section>
  );
}
