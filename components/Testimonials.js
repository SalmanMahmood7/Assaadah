export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Community Volunteer",
      company: "Local Community Center",
      quote: "As-Sa'adah has transformed our entire community. Through their education initiatives and support programs, we've seen real positive change in the lives of our youth and families.",
      rating: 5
    },
    {
      name: "Mohammed Hassan",
      role: "Program Beneficiary", 
      company: "Digital Education Project",
      quote: "The foundation's digital education project gave me skills and opportunities I never thought possible. They didn't just teach us - they believed in us and supported our dreams.",
      rating: 5
    },
    {
      name: "Fatima Al-Zahra",
      role: "Youth Leader",
      company: "Youth Empowerment Program",
      quote: "Through As-Sa'adah's youth empowerment program, I developed leadership skills and confidence. Now I'm helping other young people in my community reach their potential.",
      rating: 5
    },
    {
      name: "Ahmed Khaled",
      role: "Partner Organization",
      company: "Community Development NGO",
      quote: "Working with As-Sa'adah has amplified our impact. Their commitment to genuine community development and sustainable change makes them an exceptional partner.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      {/* Zigzag Header Design */}
      <div className="zigzag-header">
        <div className="header-content">
          <h2 className="main-title">
            <span className="impact-badge">IMPACT STORIES</span>
            Hear From Our <span className="community-text">Community</span>
          </h2>
          <div className="title-underline"></div>
          <p className="main-description">
            Real voices sharing how As-Sa'adah transforms lives and builds stronger communities
          </p>
        </div>
        <div className="decorative-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>


      {/* Circular CTA Section */}
      <div className="circular-cta">
        <div className="cta-circle">
          <div className="cta-inner">
            <h3>Join Our Mission</h3>
            <p>Be part of the change</p>
            <button className="circular-button">
              <span>Support Now</span>
              <div className="button-ripple"></div>
            </button>
          </div>
        </div>
        <div className="floating-elements">
          <div className="float-element el-1"></div>
          <div className="float-element el-2"></div>
          <div className="float-element el-3"></div>
          <div className="float-element el-4"></div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: #f8fafc;
          padding: 0;
          position: relative;
          overflow: hidden;
        }

        /* Square Header */
        .zigzag-header {
          background: linear-gradient(135deg, #1a472a 0%, #22543d 100%);
          padding: 80px 0;
          position: relative;
        }

        .header-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .badge-wrapper {
          margin-bottom: 1rem;
          position: relative;
        }

        .impact-badge {
          background: #1a472a;
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 0;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 2px solid #68d391;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
          transition: all 0.3s ease;
          align-self: center;
          flex-shrink: 0;
        }

        .impact-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(104, 211, 145, 0.1) 2px,
            rgba(104, 211, 145, 0.1) 4px
          );
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .main-title {
          color: #fff;
          font-size: 3.5rem;
          font-weight: 900;
          margin: 0;
          line-height: 1.3;
          font-family: 'Montserrat', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .community-text {
          color: #68d391;
          position: relative;
          display: inline-block;
        }

        .community-text::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #68d391, #9ae6b4);
          border-radius: 2px;
        }

        .title-underline {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #68d391, #9ae6b4);
          margin: 20px auto;
          border-radius: 2px;
        }

        .main-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.2rem;
          line-height: 1.8;
          margin: 30px 0 0 0;
          font-weight: 300;
        }

        .decorative-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }


        /* Circular CTA */
        .circular-cta {
          background: linear-gradient(135deg, rgba(26, 71, 42, 0.85) 0%, rgba(34, 84, 61, 0.85) 100%), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .circular-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/images.png') center/400px no-repeat;
          opacity: 0.08;
          pointer-events: none;
          z-index: 1;
        }

        .cta-circle {
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          backdrop-filter: blur(20px);
          border: 3px solid rgba(255, 255, 255, 0.2);
          animation: pulse 4s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .cta-inner {
          text-align: center;
          color: #fff;
        }

        .cta-inner h3 {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0 0 10px 0;
          font-family: 'Montserrat', sans-serif;
        }

        .cta-inner p {
          font-size: 1.1rem;
          margin: 0 0 30px 0;
          opacity: 0.9;
        }

        .circular-button {
          background: linear-gradient(135deg, #68d391, #9ae6b4);
          color: #1a472a;
          border: none;
          padding: 15px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-ripple {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          border-radius: 50px;
          transform: scale(0);
          animation: ripple 2s infinite;
        }

        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .float-element {
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: floatAround 8s linear infinite;
        }

        .el-1 { top: 20%; left: 20%; animation-delay: 0s; }
        .el-2 { top: 30%; right: 20%; animation-delay: 2s; }
        .el-3 { bottom: 30%; left: 30%; animation-delay: 4s; }
        .el-4 { bottom: 20%; right: 30%; animation-delay: 6s; }

        @keyframes floatAround {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -30px) rotate(90deg); }
          50% { transform: translate(-30px, -30px) rotate(180deg); }
          75% { transform: translate(-30px, 30px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }

          .cta-circle {
            width: 300px;
            height: 300px;
          }

          .cta-inner h3 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .zigzag-header {
            padding: 60px 0 80px 0;
          }

          .main-title {
            font-size: 2rem;
          }

          .cta-circle {
            width: 250px;
            height: 250px;
          }

          .cta-inner h3 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
