import { useState, useEffect } from 'react';

export default function WelfarePrograms() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('welfare-programs');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const welfarePrograms = [
    {
      id: 1,
      title: "Healthcare Support",
      category: "Medical Aid",
      description: "Providing essential medical care and health services to underserved communities through mobile clinics, free consultations, and medicine distribution.",
      icon: "🏥",
      beneficiaries: "2,500+",
      locations: "15 Areas",
      features: [
        "Free Medical Checkups",
        "Medicine Distribution",
        "Mobile Health Clinics",
        "Emergency Medical Aid",
        "Health Education Programs"
      ],
      color: "#e53e3e",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Education Empowerment",
      category: "Learning Support",
      description: "Building educational foundations through scholarship programs, learning centers, and digital literacy initiatives for children and adults.",
      icon: "📚",
      beneficiaries: "3,200+",
      locations: "22 Schools",
      features: [
        "Scholarship Programs",
        "Adult Literacy Classes",
        "Digital Learning Centers",
        "Educational Material Supply",
        "Teacher Training Programs"
      ],
      color: "#3182ce",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Food Security",
      category: "Nutrition Aid",
      description: "Ensuring no one goes hungry through food distribution programs, community kitchens, and sustainable farming initiatives.",
      icon: "🍽️",
      beneficiaries: "5,000+",
      locations: "30 Centers",
      features: [
        "Daily Meal Programs",
        "Food Package Distribution",
        "Community Kitchens",
        "Nutrition Education",
        "Emergency Food Relief"
      ],
      color: "#38a169",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Economic Development",
      category: "Livelihood",
      description: "Creating sustainable livelihoods through skill development, microfinance, and entrepreneurship support programs.",
      icon: "💼",
      beneficiaries: "1,800+",
      locations: "12 Centers",
      features: [
        "Skill Development Training",
        "Microfinance Support",
        "Business Mentorship",
        "Job Placement Assistance",
        "Entrepreneurship Programs"
      ],
      color: "#9f7aea",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Clean Water Initiative",
      category: "Infrastructure",
      description: "Providing access to clean, safe drinking water through well construction, water purification systems, and sanitation programs.",
      icon: "💧",
      beneficiaries: "4,500+",
      locations: "25 Villages",
      features: [
        "Water Well Construction",
        "Water Purification Systems",
        "Sanitation Facilities",
        "Hygiene Education",
        "Water Conservation Programs"
      ],
      color: "#00b3d4",
      image: "/clean-water-initiative.webp"
    },
    {
      id: 6,
      title: "Women Empowerment",
      category: "Social Support",
      description: "Empowering women through skills training, leadership development, and creating safe spaces for personal and professional growth.",
      icon: "👩",
      beneficiaries: "2,100+",
      locations: "18 Centers",
      features: [
        "Skills Training Programs",
        "Leadership Development",
        "Women Support Groups",
        "Legal Aid Services",
        "Health & Wellness Programs"
      ],
      color: "#e53e3e",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="welfare-programs" className="welfare-programs-section">
      {/* Wavy Header */}
      <div className="wave-header">
        <div className="header-content">
          <div className="floating-badge">
            <span className="welfare-badge">WELFARE PROGRAMS</span>
          </div>
          <h2 className="section-heading">
            Transforming Lives Through <span className="gradient-text">Comprehensive Care</span>
          </h2>
          <p className="section-subtitle">
            Our multi-dimensional welfare programs address the root causes of poverty and create lasting change in communities across the region.
          </p>
        </div>
        
        {/* Animated Stats */}
        <div className={`stats-container ${isVisible ? 'animate-in' : ''}`}>
          <div className="stat-card">
            <div className="stat-number">18,600+</div>
            <div className="stat-label">Lives Impacted</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">122</div>
            <div className="stat-label">Active Locations</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6</div>
            <div className="stat-label">Core Programs</div>
          </div>
        </div>
      </div>

      {/* Interactive Program Tabs */}
      <div className="programs-container">
        <div className="tab-navigation">
          {welfarePrograms.map((program, index) => (
            <button data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
              key={program.id}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              style={{ '--tab-color': program.color }}
            >
              <span className="tab-icon">{program.icon}</span>
              <span className="tab-text">{program.title}</span>
            </button>
          ))}
        </div>

        {/* Program Content */}
        <div className="program-content">
          {welfarePrograms.map((program, index) => (
            <div data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
              key={program.id}
              className={`program-panel ${activeTab === index ? 'active' : ''}`}
              style={{ '--program-color': program.color }}
            >
              <div className="program-layout">
                <div className="program-info">
                  <div className="program-header">
                    <div className="program-category">{program.category}</div>
                    <h3 className="program-title">{program.title}</h3>
                    <p className="program-description">{program.description}</p>
                  </div>

                  <div className="program-stats">
                    <div className="stat-item">
                      <div className="stat-value">{program.beneficiaries}</div>
                      <div className="stat-name">Beneficiaries</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">{program.locations}</div>
                      <div className="stat-name">Locations</div>
                    </div>
                  </div>

                  <div className="program-features">
                    <h4>Key Features</h4>
                    <div className="features-grid">
                      {program.features.map((feature, idx) => (
                        <div data-aos="fade-up" data-aos-delay={Math.min(idx * 80, 400)} key={idx} className="feature-tag">
                          <span className="feature-dot"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="program-actions">
                    <button className="primary-button">Learn More</button>
                    <button className="secondary-button">Get Involved</button>
                  </div>
                </div>

                <div className="program-visual">
                  <div className="image-container">
                    <img src={program.image} alt={program.title} />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <div className="program-icon">{program.icon}</div>
                        <div className="impact-text">Making Impact</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .welfare-programs-section {
          background: linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);
          position: relative;
          overflow: hidden;
        }

        /* Wave Header */
        .wave-header {
          background: linear-gradient(135deg, #1a472a 0%, #22543d 50%, #2f855a 100%);
          padding: 80px 20px 120px 20px;
          position: relative;
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .floating-badge {
          margin-bottom: 2rem;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .welfare-badge {
          background: linear-gradient(135deg, #68d391, #9ae6b4);
          color: #1a472a;
          padding: 12px 32px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          box-shadow: 0 8px 25px rgba(104, 211, 145, 0.3);
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .welfare-badge::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .section-heading {
          color: #ffffff;
          font-size: 3.8rem;
          font-weight: 900;
          margin: 0 0 1.5rem 0;
          line-height: 1.1;
          font-family: 'Montserrat', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #68d391, #9ae6b4, #c6f6d5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.3rem;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto 3rem auto;
          font-weight: 300;
        }

        /* Animated Stats */
        .stats-container {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .stats-container.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem 2.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }

        .stat-number {
          color: #68d391;
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          font-family: 'Montserrat', sans-serif;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          font-weight: 500;
        }

        /* Programs Container */
        .programs-container {
          max-width: 1400px;
          margin: -60px auto 0 auto;
          padding: 0 20px 100px 20px;
          position: relative;
          z-index: 3;
        }

        .tab-navigation {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 3rem;
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 25px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        }

        .tab-button {
          background: #f7fafc;
          border: 2px solid transparent;
          border-radius: 15px;
          padding: 1.2rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-weight: 600;
          color: #4a5568;
        }

        .tab-button:hover {
          background: rgba(var(--tab-color), 0.1);
          border-color: rgba(var(--tab-color), 0.3);
          transform: translateY(-2px);
        }

        .tab-button.active {
          background: linear-gradient(135deg, rgba(var(--tab-color), 0.1), rgba(var(--tab-color), 0.05));
          border-color: var(--tab-color);
          color: var(--tab-color);
          box-shadow: 0 8px 25px rgba(var(--tab-color), 0.2);
        }

        .tab-icon {
          font-size: 1.5rem;
        }

        .tab-text {
          font-size: 0.9rem;
        }

        /* Program Content */
        .program-content {
          position: relative;
          min-height: 600px;
        }

        .program-panel {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          transform: translateX(30px);
          transition: all 0.5s ease;
        }

        .program-panel.active {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        .program-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          background: #ffffff;
          border-radius: 30px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(var(--program-color), 0.1);
        }

        .program-header {
          margin-bottom: 2rem;
        }

        .program-category {
          color: var(--program-color);
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.8rem;
        }

        .program-title {
          color: #1a202c;
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0 0 1rem 0;
          font-family: 'Montserrat', sans-serif;
        }

        .program-description {
          color: #4a5568;
          font-size: 1.1rem;
          line-height: 1.7;
          margin: 0;
        }

        .program-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, rgba(var(--program-color), 0.1), rgba(var(--program-color), 0.05));
          border-radius: 15px;
          border: 1px solid rgba(var(--program-color), 0.2);
        }

        .stat-value {
          color: var(--program-color);
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.3rem;
          font-family: 'Montserrat', sans-serif;
        }

        .stat-name {
          color: #4a5568;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .program-features h4 {
          color: #1a202c;
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4a5568;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          background: var(--program-color);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .program-actions {
          display: flex;
          gap: 1rem;
        }

        .primary-button {
          background: var(--program-color);
          color: #ffffff;
          border: none;
          padding: 0.9rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(var(--program-color), 0.3);
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(var(--program-color), 0.4);
        }

        .secondary-button {
          background: transparent;
          color: var(--program-color);
          border: 2px solid var(--program-color);
          padding: 0.9rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-button:hover {
          background: var(--program-color);
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Program Visual */
        .program-visual {
          position: relative;
        }

        .image-container {
          position: relative;
          height: 100%;
          min-height: 400px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .image-container:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(var(--program-color), 0.8), rgba(var(--program-color), 0.6));
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .image-container:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          color: #000000;
        }

        .program-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .impact-text {
          font-size: 1.2rem;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .section-heading {
            font-size: 2.8rem;
          }

          .stats-container {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }

          .program-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
          }

          .tab-navigation {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .section-heading {
            font-size: 2.2rem;
          }

          .tab-navigation {
            grid-template-columns: 1fr;
          }

          .program-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .program-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
