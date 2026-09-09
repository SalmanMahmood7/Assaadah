import Link from "next/link";
import { socialLinks } from "../lib/socialLinks";

const contactCards = [
  {
    title: "Phone",
    value: "+92 312 2221280",
    href: "tel:+923122221280",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.77 19.77 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.17 9.81 19.77 19.77 0 0 1 .1 1.18 2 2 0 0 1 2.11-.99h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6 6.91a16 16 0 0 0 7.09 7.09l1.27-1.33a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
      </svg>
    )
  },
  {
    title: "Email",
    value: "info@as-saadah.com",
    href: "mailto:info@as-saadah.com",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.73a2 2 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    title: "Address",
    value: "As-Sa'adah",
    href: null,
    details: [
      "Q634+452, Chaman Zar Hill",
      "Islamabad, Pakistan"
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 4.993-5.54 10.193-7.4 11.799a1 1 0 0 1-1.2 0C9.54 20.193 4 14.993 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
];


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quote Section - First */}
        <div className="quote-top">
          <em>&quot;Allah will raise those who believe and those who have been given knowledge in ranks.
.&quot; — Quran (58:11)</em>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Left: Branding */}
          <div className="footer-brand">
            <div className="brand-info">
              <img src="/images.png" alt="As-Sa'adah" className="footer-logo" />
              <div className="brand-text">
                <h3>As-sa&apos;adah</h3>
                <span className="tagline">Since 2025</span>
                <p>Comprehensive Islamic welfare organization delivering education, healthcare, and socio-economic support.</p>
              </div>
            </div>
            <div className="social-links">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <item.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Contact */}
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            {contactCards.map((card) => (
              <span key={card.title}>
                {card.icon}
                {card.href ? (
                  <a href={card.href}>{card.value}</a>
                ) : (
                  <span>{card.value}</span>
                )}
                {card.details && <small>{card.details.join(", ")}</small>}
              </span>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="footer-actions">
            <div className="action-buttons">
              <a href="https://www.as-saadah.org/" target="_blank" rel="noopener noreferrer" className="btn-primary">Support Us</a>
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="legal">
            <span>© 2025 As-sa&apos;adah. All rights reserved.</span>
            <div className="legal-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/transparency">Transparency Report</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1a472a;
          color: white;
          padding: 30px 0 15px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Quote at Top */
        .quote-top {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 25px;
        }

        .quote-top em {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          font-style: italic;
        }

        /* Main Footer */
        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 30px;
          margin-bottom: 20px;
        }

        /* Branding */
        .brand-info {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .footer-logo {
          height: 50px;
          width: auto;
          flex-shrink: 0;
        }

        .brand-text h3 {
          margin: 0 0 5px 0;
          font-size: 1.5rem;
          font-weight: 700;
          white-space: nowrap;
          word-break: keep-all;
          overflow-wrap: normal;
          hyphens: none;
        }

        .tagline {
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
          margin-bottom: 8px;
          display: inline-block;
        }

        .brand-text p {
          margin: 8px 0 0 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        /* Contact */
        .footer-contact h4 {
          margin: 0 0 15px 0;
          font-size: 1.1rem;
          color: #68d391;
        }


        .footer-contact span {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          margin-bottom: 8px;
        }

        .footer-contact span span {
          white-space: pre-line;
          line-height: 1.3;
          word-break: keep-all;
          overflow-wrap: normal;
          hyphens: none;
        }

        .footer-contact svg {
          width: 20px;
          height: 20px;
          color: #68d391;
          flex-shrink: 0;
          stroke-width: 2.5;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        }

        .footer-contact svg[width="28"] {
          width: 28px;
          height: 28px;
        }

        .footer-contact a {
          color: white;
          text-decoration: none;
        }

        .footer-contact a:hover {
          color: #68d391;
        }

        .footer-contact small {
          display: block;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
          margin-top: 2px;
        }

        /* Actions */
        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 15px;
        }

        .btn-primary,
        :global(.btn-secondary) {
          display: inline-block;
          padding: 9px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          text-align: center;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2f855a, #38a169);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #38a169, #4ade80);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(56, 161, 105, 0.4);
        }

        :global(.btn-secondary) {
          background: rgba(255, 255, 255, 0.08);
          color: white;
          border: 1.5px solid rgba(255, 255, 255, 0.5);
        }

        :global(.btn-secondary:hover) {
          background: rgba(255, 255, 255, 0.2);
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 15px;
        }

        .social-link {
          width: 30px;
          height: 30px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 15px;
          text-align: center;
        }

        .legal {
          text-align: center;
        }

        .legal span {
          display: block;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 5px;
          white-space: nowrap;
          word-break: keep-all;
          overflow-wrap: normal;
          hyphens: none;
        }

        .legal-links {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .legal-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.75rem;
        }

        .legal-links a:hover {
          color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .brand-info {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .brand-text h3 {
            font-size: 1.3rem;
            word-break: keep-all;
            overflow-wrap: normal;
            hyphens: none;
          }

          .legal-links {
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 20px 0 10px;
          }

          .footer-container {
            padding: 0 15px;
          }

          .action-buttons {
            flex-direction: row;
          }

          .brand-info {
            gap: 10px;
          }

          .brand-text h3 {
            font-size: 1.1rem;
            word-break: keep-all;
            overflow-wrap: normal;
            hyphens: none;
          }

          .footer-logo {
            height: 40px;
          }

          .legal span {
            font-size: 0.75rem;
            word-break: keep-all;
            overflow-wrap: normal;
            hyphens: none;
          }
        }
      `}</style>
    </footer>
  );
}