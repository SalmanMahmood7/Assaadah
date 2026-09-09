export function WhoShouldApplySection() {
  const items = [
    "Madaris Graduates",
    "Absolute beginners welcome",
    "Ready to commit 2–3 hours daily",
    "Comfortable with discipline"
  ];

  return (
    <section className="eligibility-section apply">
      <h2 className="section-title">Who Should Apply</h2>
      <ul className="eligibility-list">
        {items.map((item, i) => (
          <li data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>
            <span className="check">✔</span> {item}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .eligibility-section.apply {
          padding: 80px 20px;
          text-align: center;
          background: #ffffff;
          border-bottom: 2px solid #e2e8f0; /* subtle separator */
        }
        .section-title {
          font-size: 32px;
          color: #1a472a;
          margin-bottom: 40px;
          position: relative;
        }
        .eligibility-list {
          list-style: none;
          padding: 0;
          max-width: 600px;
          margin: 0 auto;
          font-size: 18px;
          color: #2f855a;
        }
        .eligibility-list li {
          margin-bottom: 20px; /* more spacing */
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .check {
          color: #2f855a;
          margin-right: 12px;
          font-weight: bold;
          font-size: 20px;
        }
        @media(max-width:768px){
          .section-title { font-size: 24px; }
          .eligibility-list { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}