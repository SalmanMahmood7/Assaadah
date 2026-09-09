import Link from "next/link";
export default function CallToAction() {
  return (
    <section className="cta-section-main">
      <div data-aos="fade-up" className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Support Our Vision: Reclaiming the Golden Age of Knowledge
            </h2>
            <p className="cta-description">
              Reimagine the future of the Muslim Ummah. Historically, our scholars were the pioneers of science and innovation, leading the world in technology. Today, As-Sa'adah is reviving this legacy by preparing Madaris graduates—our future leaders and Ulama Kiram—to take the lead once more.
            </p>
            <p className="cta-description">
              Your support fuels cutting-edge programs like our IT Boot Camps and Preneurship initiatives, blending spiritual wisdom with advanced technological skills. Help us equip these brilliant minds to dominate the fields of Science and Technology, ensuring they guide the Ummah with both faith and future-ready expertise.
            </p>
            <p className="cta-urgency">
              Invest in the resurgence of Muslim excellence. Donate today.
            </p>
          </div>
          
          <div className="cta-actions">
            <Link href="/donate" passHref><button className="cta-primary-btn">Support Us</button></Link>
            <Link href="/contact" passHref><button className="cta-secondary-btn">Get Involved</button></Link>
            <div className="cta-contact">
              <p>Want to learn more? <Link href="/contact" className="contact-link">Contact us</Link></p>
              <p className="cta-urgency">Together, we serve Allah and humanity!</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section-main {
          background: linear-gradient(rgba(26, 71, 42, 0.8), rgba(26, 71, 42, 0.8)), url('/cta.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 80px 0;
          color: white;
          border-top-left-radius: 50px;
          border-bottom-right-radius: 50px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .cta-content {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .cta-text {
          flex: 2;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 25px;
          line-height: 1.3;
          font-family: 'Montserrat', sans-serif;
        }

        .cta-description {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
          text-align: left;
        }

        .cta-urgency {
          font-size: 1.2rem;
          font-weight: 700;
          color: #68d391;
          margin-bottom: 0;
          text-align: left;
        }

        .cta-actions {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: stretch;
        }

        .cta-primary-btn {
          background: white;
          color: #1a472a;
          border: none;
          padding: 18px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }

        .cta-primary-btn:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .cta-secondary-btn {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 16px 30px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }

        .cta-secondary-btn:hover {
          background: white;
          color: #1a472a;
          transform: translateY(-2px);
        }

        .cta-contact {
          margin-top: 20px;
          text-align: center;
        }

        .cta-contact p {
          margin: 8px 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .contact-link {
          color: #68d391;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-link:hover {
          color: white;
          text-decoration: underline;
        }

        @media (max-width: 968px) {
          .cta-content {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }

          .cta-text {
            flex: none;
          }

          .cta-actions {
            flex: none;
            max-width: 300px;
            margin: 0 auto;
          }

          .cta-title {
            font-size: 2.2rem;
          }

          .cta-description,
          .cta-urgency {
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .cta-section-main {
            padding: 60px 0;
          }

          .container {
            padding: 0 15px;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-description {
            font-size: 0.95rem;
          }

          .cta-urgency {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .cta-title {
            font-size: 1.8rem;
          }

          .cta-primary-btn,
          .cta-secondary-btn {
            padding: 15px 25px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
