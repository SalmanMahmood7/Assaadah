const problems = [
  {
    title: "Knowledge Without Direction",
    text: "Thousands of Madaris graduates complete years of rigorous study, yet face uncertainty when transitioning into structured careers.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
  {
    title: "Capability Gap",
    text: "Academic strength does not automatically translate into technical skills, leadership exposure, or market readiness.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Untapped Potential",
    text: "A generation equipped with discipline and depth remains under-leveraged in the modern economic landscape.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <>
      <section className="problem-section">
        <div className="container">
          <p className="eyebrow">The Reality</p>
          <h2>The Gap No One Talks About</h2>
          <p className="subtitle">
            Deep religious knowledge alone no longer guarantees a stable, dignified livelihood in today's economy.
          </p>

          <div className="problem-grid">
            {problems.map((item, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="problem-card" key={item.title}>
                <span className="problem-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="problem-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .problem-section {
          padding: 6rem 0;
          background: #ffffff;
          text-align: center;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .eyebrow {
          color: #2f855a;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 0.75rem;
        }

        h2 {
          font-size: 2.4rem;
          font-weight: 800;
          margin: 0 0 1rem;
          color: #1a472a;
          font-family: 'Montserrat', sans-serif;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #4a5568;
          max-width: 620px;
          margin: 0 auto 3.5rem;
          line-height: 1.7;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .problem-card {
          position: relative;
          background: white;
          padding: 2.25rem 2rem 2rem;
          border-radius: 20px;
          text-align: left;
          box-shadow: 0 15px 40px rgba(26, 71, 42, 0.08);
          border: 1px solid rgba(26, 71, 42, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .problem-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #68d391, #2f855a, #1a472a);
        }

        .problem-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 50px rgba(26, 71, 42, 0.16);
        }

        .problem-index {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
          color: rgba(26, 71, 42, 0.15);
          letter-spacing: 1px;
        }

        .problem-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          box-shadow: 0 10px 22px rgba(26, 71, 42, 0.28);
        }

        .problem-card h3 {
          margin: 0 0 0.85rem;
          color: #1a472a;
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
        }

        .problem-card p {
          line-height: 1.65;
          color: #4a5568;
          margin: 0;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 1.9rem;
          }

          .subtitle {
            margin-bottom: 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
