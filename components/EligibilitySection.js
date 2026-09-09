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

      <div className="cards">

        {/* Should Apply */}
        <div className="card positive">
          <div className="card-badge check-badge" aria-hidden="true">✓</div>
          <h3 className="card-title">Who Should Apply</h3>
          <ul>
            {shouldApply.map((item, i) => (
              <li data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>
                <span className="icon check">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Should Not Apply */}
        <div className="card negative">
          <div className="card-badge cross-badge" aria-hidden="true">✕</div>
          <h3 className="card-title">Who Should Not Apply</h3>
          <ul>
            {shouldNotApply.map((item, i) => (
              <li data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>
                <span className="icon cross">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* See More Button */}
      <div className="see-more">
        <Link href="/admission-terms" className="see-more-card">
          <span className="see-more-title">See Full Admission Terms</span>
          <span className="see-more-arrow">&rarr;</span>
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

        .cards {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .card {
          position: relative;
          width: 420px;
          padding: 40px 35px 35px;
          border-radius: 18px;
          text-align: left;
          background: white;
          box-shadow: 0 15px 40px rgba(26, 71, 42, 0.08);
          border: 1px solid rgba(26, 71, 42, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
        }

        .positive::before {
          background: linear-gradient(90deg, #68d391, #2f855a);
        }

        .negative::before {
          background: linear-gradient(90deg, #fc8181, #c53030);
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 50px rgba(26, 71, 42, 0.14);
        }

        .card-badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .check-badge {
          background: #f0fff4;
          color: #2f855a;
          border: 2px solid rgba(47, 133, 90, 0.3);
        }

        .cross-badge {
          background: #fff5f5;
          color: #c53030;
          border: 2px solid rgba(197, 48, 48, 0.3);
        }

        .card-title {
          font-size: 22px;
          margin-bottom: 20px;
          font-weight: 700;
          color: #1a472a;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          color: #2d3748;
          line-height: 1.5;
        }

        .icon {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: bold;
          font-size: 13px;
          margin-top: 1px;
        }

        .check {
          color: #2f855a;
          background: rgba(47, 133, 90, 0.12);
        }

        .cross {
          color: #c53030;
          background: rgba(197, 48, 48, 0.12);
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

        .see-more-arrow {
          flex-shrink: 0;
          font-size: 1.2rem;
          color: #ffffff;
          transition: transform 0.3s ease;
        }

        :global(.see-more-card:hover) .see-more-arrow {
          transform: translateX(6px);
        }

        @media(max-width:768px){

          .cards {
            flex-direction: column;
            align-items: center;
          }

          .card {
            width: 100%;
            max-width: 420px;
          }

          .section-title {
            font-size: 28px;
          }

          .section-subtitle {
            font-size: 16px;
          }

        }

      `}</style>

    </section>
  );
}
