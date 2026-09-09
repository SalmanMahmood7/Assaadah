export function WhoShouldNotApplySection() {
  const items = [
    "Looking for shortcuts",
    "Expecting guaranteed jobs",
    "Unwilling to follow structure"
  ];

  return (
    <section className="eligibility-section not-apply">
      <h2 className="section-title">Who Should Not Apply</h2>
      <ul className="eligibility-list">
        {items.map((item, i) => (
          <li data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>
            <span className="cross">✖</span> {item}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .eligibility-section.not-apply {
          padding: 80px 20px;
          text-align: center;
          background: #eef5f1;
        }

        .section-title {
          font-size: 32px;
          color: #1a472a;
          margin-bottom: 40px;
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
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .cross {
          color: #c53030;
          margin-right: 10px;
          font-weight: bold;
        }

        @media(max-width:768px){
          .section-title { font-size: 24px; }
          .eligibility-list { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
