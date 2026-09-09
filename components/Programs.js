import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ApplyLevelGate from './ApplyLevelGate';

export default function Programs() {
  const [isVisible, setIsVisible] = useState(false);
  const [isApplyGateOpen, setIsApplyGateOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const programsSection = document.getElementById('programs');
      if (programsSection) {
        const rect = programsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <section id="programs" className="programs-section">
      <div className="programs-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Our Programs</h2>
          <p className="section-description">
            Transforming traditional Islamic education with modern digital skills
          </p>
        </div>

        <div className={`vision-cards ${isVisible ? 'animate-in' : ''}`}>
          <div className="vision-card">
            <h3>Vision of As-Sa'adah</h3>
            <p>
              As-Sa'adah is a multidimensional intellectual and educational movement dedicated to empowering graduates of traditional seminaries (Madaris) with the knowledge, creativity, and practical skills necessary to meet the evolving challenges of the modern world. It envisions a transformative framework that unites classical Islamic scholarship with contemporary sciences and technology, cultivating scholars who serve not only as spiritual and moral guides but as visionary leaders contributing to social, intellectual, and economic progress.
            </p>
            <p>
              As the first organized initiative of its kind in the Muslim world, As-Sa'adah seeks to produce an independent generation capable of developing indigenous technological alternatives to Western dominance—enabling the Muslim Ummah to reclaim its global identity and contribute to the creation of a balanced, dignified, and self-reliant world order.
            </p>
          </div>

          <div className="vision-card mission-card">
            <h3>Mission of As-Sa'adah</h3>
            <p>
              As-Sa'adah's mission is to redefine the intellectual and socio-economic role of Madrasah graduates by integrating classical Islamic scholarship with modern sciences, technology, and leadership development.
            </p>
            <p>
              It seeks to cultivate a new generation of visionary 'Ulama who unite faith with functionality and tradition with transformation - reviving critical thought, fostering economic self-reliance through skill empowerment and entrepreneurship, and inspiring ethical, globally aware leadership. By bridging traditional and modern institutions and promoting indigenous technological innovation that challenges Western dominance, As-Sa'adah aims to initiate a civilizational renewal - where the Muslim Ummah reclaims its intellectual authority, moral influence, and constructive role in shaping a just, balanced, and self-sustained world order.
            </p>
          </div>
        </div>

        <div className={`batch-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="batch-header-card">
            <h3>From Learning to Leadership: The Rise of Batch 1</h3>
            <p className="batch-description">
              Our inaugural cohort, Batch 1: The Pioneers, proved that the combination of dedicated focus and ethical grounding leads to exceptional achievement. They have successfully laid the foundation for the next generation of digital scholars.
            </p>
          </div>

          <div className="batch-grid">
            {[
              {
                title: "Commitment",
                text: "Demonstrated discipline rarely seen in conventional programs."
              },
              {
                title: "Dual Mastery",
                text: "Successfully synthesized complex technical skills with their existing religious knowledge."
              },
              {
                title: "Real-World Application",
                text: "Graduates deployed impressive Capstone Projects aimed at solving community and business challenges."
              },
              {
                title: "The Al-Sa'adah Network",
                text: "Graduates are now part of an exclusive network dedicated to mentorship and ethical tech career advancement."
              }
            ].map((item) => (
              <div data-aos="fade-up" className="batch-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <blockquote className="batch-quote">
            "As-Sa'adah equipped me not only with coding skills but with the confidence to apply AI ethically. We are the new leaders, ready to serve the Ummah with knowledge and technology."
          </blockquote>
        </div>

        <div className={`cta-buttons ${isVisible ? 'animate-in' : ''}`}>
          <button
            className="primary-btn"
            onClick={() => setIsApplyGateOpen(true)}
          >
            Apply Now
          </button>
          <button 
            className="secondary-btn" 
            onClick={() => router.push("/courses")}
          >
            View Courses
          </button>
        </div>
      </div>

      <style jsx>{`
        .programs-section {
          padding: 80px 20px;
          background: #f8f9fa;
          position: relative;
        }

        .programs-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        .section-header.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #1a472a, #22543d, #68d391);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
        }

        .section-description {
          font-size: 1.2rem;
          color: #4a5568;
          max-width: 600px;
          margin: 0 auto;
        }

        .vision-cards {
          display: flex;
          gap: 2rem;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease 0.2s;
        }

        .vision-cards.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .vision-card {
          flex: 1;
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(26, 71, 42, 0.1);
          border: 1px solid rgba(26, 71, 42, 0.1);
        }

        .vision-card h3 {
          font-size: 1.8rem;
          color: #1a472a;
          margin-bottom: 1.5rem;
          font-weight: 800;
          font-family: 'Montserrat', sans-serif;
        }

        .vision-card p {
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 1rem;
          text-align: justify;
        }

        .vision-card p:last-child {
          margin-bottom: 0;
        }

        .batch-section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease 0.4s;
        }

        .batch-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .batch-header-card {
          background: linear-gradient(135deg, rgba(26, 71, 42, 0.9), rgba(34, 84, 61, 0.95));
          color: white;
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          margin-bottom: 2rem;
        }

        .batch-header-card h3 {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
        }

        .batch-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto;
        }

        .batch-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .batch-card {
          background: white;
          border-radius: 15px;
          padding: 1.8rem;
          box-shadow: 0 10px 30px rgba(26, 71, 42, 0.1);
          border: 1px solid rgba(26, 71, 42, 0.1);
          transition: all 0.3s ease;
        }

        .batch-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(26, 71, 42, 0.15);
        }

        .batch-card h4 {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          color: #1a472a;
          font-weight: 700;
        }

        .batch-card p {
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .batch-quote {
          font-size: 1.2rem;
          font-weight: 500;
          text-align: center;
          font-style: italic;
          color: #1a472a;
          background: #f0fff4;
          border-left: 5px solid #1a472a;
          padding: 1.8rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(26, 71, 42, 0.1);
          margin-bottom: 3rem;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 3rem;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease 0.6s;
        }

        .cta-buttons.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .primary-btn, .secondary-btn {
          padding: 1rem 2.5rem;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .primary-btn {
          border: none;
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          box-shadow: 0 6px 20px rgba(26, 71, 42, 0.3);
        }

        .primary-btn:hover {
          background: linear-gradient(135deg, #22543d, #2f855a);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(26, 71, 42, 0.4);
        }

        .secondary-btn {
          background: transparent;
          color: #1a472a;
          border: 2px solid #1a472a;
        }

        .secondary-btn:hover {
          background: #1a472a;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(26, 71, 42, 0.3);
        }

        @media (max-width: 768px) {
          .programs-section {
            padding: 60px 15px;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .vision-cards {
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }

          .vision-card {
            padding: 2rem;
          }

          .vision-card h3 {
            font-size: 1.5rem;
          }

          .batch-header-card {
            padding: 2rem;
          }

          .batch-header-card h3 {
            font-size: 1.8rem;
          }

          .batch-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .primary-btn, .secondary-btn {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.8rem;
          }

          .vision-card, .batch-header-card {
            padding: 1.5rem;
          }

          .batch-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <ApplyLevelGate isOpen={isApplyGateOpen} onClose={() => setIsApplyGateOpen(false)} />
    </section>
  );
}
