import { useState } from "react";

const feeLevels = [
  {
    variant: "dark",
    label: "Level 1 · Online",
    title: "Online Preparatory Phase",
    priceMain: "PKR 5,000",
    priceSuffix: "/ month",
    items: [
      "Fee: PKR 5,000 per month",
      "Scholarship available from Month 2 based on Month 1 performance"
    ]
  },
  {
    variant: "gold",
    label: "Level 2 · Residential Bootcamp",
    title: "Fully Funded Bootcamp",
    priceMain: "PKR 0",
    priceSuffix: "for selected candidates",
    items: [
      "Admission Fee: PKR 5,000",
      "Course Fee: PKR 25,000",
      "Hostel & Mess: PKR 20,000",
      "All covered by As-Sa'adah scholarship for selected candidates"
    ]
  },
  {
    variant: "dark",
    label: "Level 3 · Ilm to Impact",
    title: "Startup Council & Incubation",
    priceMain: "Free",
    priceSuffix: "always",
    items: [
      "No tuition or program fees — founders receive full institutional backing within the Live & Work ecosystem."
    ]
  }
];

export default function FeeScholarshipSection() {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section className="fee-section">
      <div className="fee-header">
        <h2>Fee &amp; Scholarship</h2>
        <p>Click any card to see full details. Financial hardship should never stop a motivated scholar.</p>
      </div>

      <div className="fee-cards">
        {feeLevels.map((level, index) => (
          <button data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
            type="button"
            key={level.title}
            className={`fee-card ${level.variant} ${expanded === index ? "expanded" : ""}`}
            onClick={() => toggleCard(index)}
          >
            <span className="fee-label">{level.label}</span>
            <h3>{level.title}</h3>

            <div className="fee-price">
              <span className="price-main">{level.priceMain}</span>
              <span className="price-suffix">{level.priceSuffix}</span>
            </div>

            {expanded === index ? (
              <ul className="fee-details">
                {level.items.map((item, i) => (
                  <li data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)} key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <span className="fee-cta">Click to see full details ↓</span>
            )}
          </button>
        ))}
      </div>

      <div className="payment-panel">
        <div className="payment-panel-header">
          <span>Bank Transfer</span>
          <span>Easypaisa / JazzCash</span>
        </div>

        <div className="payment-columns">
          <div className="payment-col">
            <p className="payment-col-title">Faysal Bank</p>
            <div className="payment-row">
              <span>Account Name</span>
              <strong>AS-SA-ADAH INTERNATIONAL</strong>
            </div>
            <div className="payment-row">
              <span>IBAN</span>
              <strong>PK34FAYS3483301000003457</strong>
            </div>
          </div>

          <div className="payment-col">
            <p className="payment-col-title">Mobile Wallet</p>
            <div className="payment-row">
              <span>Account Title</span>
              <strong>MUNEER AHMED ALVI</strong>
            </div>
            <div className="payment-row">
              <span>Number</span>
              <strong>0321 8823953</strong>
            </div>
            <div className="wallet-badges">
              <span className="wallet-badge easypaisa">Easypaisa</span>
              <span className="wallet-badge jazzcash">JazzCash</span>
            </div>
          </div>
        </div>

        <div className="payment-notes">
          <div className="payment-note note-en">
            After payment, send your transaction receipt screenshot to <strong>+92 312 2221280</strong> on
            WhatsApp to complete your registration and be added to the final class group.
          </div>
          <div className="payment-note note-ur" dir="rtl" lang="ur">
            تعاونی فنڈ جمع کروانے کے بعد، براہ کرم ٹرانزیکشن کی رسید (screenshot){" "}
            <span dir="ltr">+92 312 2221280</span> پر واٹس ایپ
            کیجیے تاکہ آپ کی رجسٹریشن مکمل کی جا سکے اور آپ کو کلاس گروپ کے فائنل میں ایڈ کیا جا سکے۔
          </div>
        </div>
      </div>

      <style jsx>{`
        .fee-section {
          padding: 80px clamp(1.25rem, 5vw, 4rem);
          background: #ffffff;
        }

        .fee-header {
          max-width: 1200px;
          margin: 0 auto 2.5rem;
          text-align: center;
        }

        .fee-header h2 {
          font-size: 2.4rem;
          font-weight: 800;
          color: #1a472a;
          margin: 0 0 0.6rem;
          font-family: 'Montserrat', sans-serif;
        }

        .fee-header p {
          color: #4a5568;
          font-size: 1.02rem;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .fee-cards {
          max-width: 1200px;
          margin: 0 auto 2rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .fee-card {
          text-align: left;
          border: none;
          border-radius: 10px;
          padding: 1.6rem 1.6rem 1.4rem;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          min-height: 180px;
        }

        .fee-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(26, 71, 42, 0.18);
        }

        .fee-card.dark {
          background: linear-gradient(160deg, #1a472a, #14532d);
        }

        .fee-card.gold {
          background: linear-gradient(160deg, #c08a2e, #a8721f);
        }

        .fee-label {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.6rem;
        }

        .fee-card h3 {
          color: white;
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0 0 1.1rem;
          font-family: 'Montserrat', sans-serif;
        }

        .fee-price {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: auto;
          padding-bottom: 1rem;
          flex-wrap: wrap;
        }

        .price-main {
          color: white;
          font-size: 1.9rem;
          font-weight: 800;
          font-family: 'Montserrat', sans-serif;
        }

        .price-suffix {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.82rem;
        }

        .fee-cta {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.8rem;
          margin-top: 0.75rem;
        }

        .fee-details {
          margin: 0.5rem 0 0;
          padding-left: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.85rem;
          line-height: 1.65;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        /* PAYMENT PANEL */
        .payment-panel {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(26, 71, 42, 0.1);
        }

        .payment-panel-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: linear-gradient(135deg, #1a472a, #14532d);
        }

        .payment-panel-header span {
          color: white;
          font-weight: 700;
          font-size: 0.98rem;
          padding: 1rem 1.75rem;
        }

        .payment-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .payment-col {
          padding: 1.5rem 1.75rem;
        }

        .payment-col:first-child {
          border-right: 1px solid rgba(26, 71, 42, 0.08);
        }

        .payment-col-title {
          color: #14532d;
          font-weight: 700;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 1rem;
        }

        .payment-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.5rem 0;
          font-size: 0.9rem;
        }

        .payment-row span {
          color: #64748b;
        }

        .payment-row strong {
          color: #1a472a;
          text-align: right;
        }

        .wallet-badges {
          display: flex;
          gap: 0.6rem;
          margin-top: 0.9rem;
        }

        .wallet-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
          color: white;
        }

        .wallet-badge.easypaisa {
          background: #2f855a;
        }

        .wallet-badge.jazzcash {
          background: #c53030;
        }

        .payment-notes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(26, 71, 42, 0.08);
          border-top: 1px solid rgba(26, 71, 42, 0.08);
        }

        .payment-note {
          background: #f0fdf4;
          padding: 1.1rem 1.5rem;
          font-size: 0.85rem;
          color: #14532d;
          line-height: 1.7;
        }

        .payment-note.note-ur {
          background: #fffbea;
          color: #7c5e10;
          font-family: 'Noto Nastaliq Urdu', serif;
          font-size: 0.95rem;
          line-height: 2.1;
        }

        .payment-note strong {
          color: inherit;
        }

        @media (max-width: 900px) {
          .fee-header h2 {
            font-size: 1.9rem;
          }

          .fee-cards {
            grid-template-columns: 1fr;
          }

          .payment-panel-header {
            grid-template-columns: 1fr;
          }

          .payment-columns {
            grid-template-columns: 1fr;
          }

          .payment-col:first-child {
            border-right: none;
            border-bottom: 1px solid rgba(26, 71, 42, 0.08);
          }

          .payment-notes {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
