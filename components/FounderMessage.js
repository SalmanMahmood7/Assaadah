import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const leaders = [
  {
    name: "Molana Munir Ahmad Alvi",
    position: "Director of Islamic & Outreach Programs",
    image: "/munir_alvi.jpg",
    message: `
      The world stands at the precipice of a new era, one defined by rapid technological advancement and digital connectivity.
      We recognized a crucial imperative: our respected Madaris Graduates, the torchbearers of our spiritual heritage, must not only participate in this era but must lead it.

      As-Sa'adah was founded on a singular, powerful vision: to bridge the historic wisdom of Islamic scholarship with the modern demands of the digital economy.
      We are passionately committed to evolving the Ummah by equipping our graduates with the most sought-after modern IT and soft skills.
      This is more than just education; it is a movement for holistic empowerment.
    `,
  },
  {
    name: "Molana Abdul Quddoos Muhammadi",
    position: "Patronage",
    image: "/muhammadi.jpg",
    message: `
      Under the guidance of our esteemed Patronage and the leadership of our highly experienced Directors,
      we provide the skills necessary for economic independence—whether through Shariah-Compliant business ventures or securing a due share in the global IT and entrepreneurial market.

      Crucially, our mission extends beyond employment. We are preparing a generation of digital scholars who can effectively leverage technology to advance the divine mission of Digital Dawah and Global Outreach.
      Our graduates will carry the message of Islam to every corner of the world, digitally and powerfully.

      Join us as we fulfill this profound responsibility. Together, we will transform our traditional strengths into modern global leadership, ensuring that our youth are not just recipients of technology, but its creators and moral guides.
    `,
  }
];

export default function FounderMessage() {
  const [visibleLeaders, setVisibleLeaders] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const visible = [];
      leaders.forEach((_, index) => {
        const el = document.getElementById(`leader-${index}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            visible.push(index);
          }
        }
      });
      setVisibleLeaders(visible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="founder-message" className="founder-message-section">
      <div className="founder-container">
        {/* Header */}
        <div className={`founder-header ${visibleLeaders.length ? 'animate-in' : ''}`}>
          <div className="section-badge">Message from Leadership</div>
          <h2 className="section-title">Building the Future of Digital Ummah</h2>
          <div className="arabic-text">
            <span className="bismillah">بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْم</span>
          </div>
        </div>

        {/* Leaders */}
        {leaders.map((leader, index) => (
          <div data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
            key={index}
            id={`leader-${index}`}
            className={`leader-row ${index % 2 !== 0 ? 'reverse' : ''} ${visibleLeaders.includes(index) ? 'animate-in' : ''}`}
          >
            <div className="leader-image">
              <div className="image-container">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={450}
                  height={580}
                  className="founder-image"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUwIiBoZWlnaHQ9IjU4MCIgdmlld0JveD0iMCAwIDQ1MCA1ODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0NTAiIGhlaWdodD0iNTgwIiBmaWxsPSIjZjNmNGY2Ii8+CjxjaXJjbGUgY3g9IjIyNSIgY3k9IjI5MCIgcj0iNjUiIGZpbGw9IiM5Y2EzYWYiLz4KPHRleHQgeD0iMjI1IiB5PSIzMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM2NjYiPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="leader-info">
                <h3 className="founder-name">{leader.name}</h3>
                <p className="founder-title">{leader.position}</p>
              </div>
            </div>
            <div className="leader-text">
              {leader.message.split('\n').map((line, idx) => (
                <p data-aos="fade-up" data-aos-delay={Math.min(idx * 80, 400)} key={idx}>{line}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Signature Quote */}
        <div className="signature-area">
          <div className="signature-quote">"Your success is the success of the Ummah."</div>
          <div className="signature-line"></div>
        </div>

        {/* Meet Our Team */}
        <div className="meet-team">
          <Link href="/leadership" className="leadership-btn">
            <span>Meet Our Team</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .founder-message-section {
          min-height: 100vh;
          background: #ffffff;
          color: #1a472a;
          padding: 50px 0;
        }
        .founder-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .founder-header {
          text-align: center;
          margin-bottom: 5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .founder-header.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          padding: 0.8rem 2.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .section-title {
          font-size: 2.4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          font-family: 'Montserrat', sans-serif;
        }
        .arabic-text .bismillah {
          font-size: 2.2rem;
          color: #68d391;
          font-family: 'Amiri', serif;
          direction: rtl;
        }
        .leader-row {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .leader-row.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .leader-row.reverse {
          flex-direction: row-reverse;
        }
        .leader-image {
          flex: 1 1 350px;
          text-align: center;
        }
        .image-container {
          border: 4px solid #68d391;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(26,71,42,0.2);
          margin-bottom: 1rem;
        }
        .founder-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .founder-image:hover {
          transform: scale(1.05);
        }
        .leader-info {
          text-align: center;
        }
        .founder-name {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.3rem;
        }
        .founder-title {
          font-size: 1rem;
          color: #68d391;
          font-weight: 600;
          text-transform: uppercase;
        }
        .leader-text {
          flex: 2 1 600px;
        }
        .leader-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 1.5rem;
          text-align: justify;
        }
        .signature-area {
          text-align: center;
          margin: 2rem 0;
        }
        .signature-quote {
          font-size: 1.2rem;
          font-weight: 700;
          color: #68d391;
          font-style: italic;
          margin-bottom: 1rem;
        }
        .signature-line {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #68d391, transparent);
          margin: 0 auto;
        }
        .meet-team {
          text-align: center;
          margin-top: 1.5rem;
        }
        .leadership-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(26, 71, 42, 0.3);
        }
        .leadership-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(26, 71, 42, 0.4);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.9rem;
          }

          .leader-row, .leader-row.reverse {
            flex-direction: column;
            text-align: center;
          }
          .leader-text {
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
}
