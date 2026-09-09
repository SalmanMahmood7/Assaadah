import { useEffect, useState, useRef } from "react";

const AUTO_ADVANCE_MS = 6000;

export default function LearnSection() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % levels.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(interval);
  }, [visible]);

  const Icons = {
    logical: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8
                 s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    python: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8
                 s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <circle cx="12" cy="12" r="5"/>
      </svg>
    ),
    data: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 0h14V7H7v2zm0 4h14v-2H7v2zm0 4h14v-2H7v2z"/>
      </svg>
    ),
    debugging: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    ),
    ai: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8
                 s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M11 6h2v6h-2zM11 14h2v2h-2z"/>
      </svg>
    ),
    team: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5
                 s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5
                 S5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h7v-2h2v2h7v-2.5
                 c0-2.33-4.67-3.5-7-3.5H8z"/>
      </svg>
    ),
    webApp: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 15h6v2H9v-2z"/>
        <path d="M8.5 9.5 6 12l2.5 2.5 1-1L8 12l1.5-1.5-1-1zm7 0-1 1L16 12l-1.5 1.5 1 1L18 12l-2.5-2.5z"/>
      </svg>
    ),
    cloud: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    uiux: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M20.7 3.3a1 1 0 0 0-1.4 0L4 18.6V20h1.4L20.7 4.7a1 1 0 0 0 0-1.4z"/>
        <path d="M13.5 6.5 17.5 10.5 15.5 12.5 11.5 8.5z"/>
      </svg>
    ),
    marketing: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M3 3v18h18v-2H5V3H3z"/>
        <path d="m6 15 4-4 3 3 6-6 1.4 1.4L13 17l-3-3-4 4z"/>
      </svg>
    ),
    blockchain: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    creative: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M3 3h18v18H3V3zm5 12 3.5-4.5L13 14l2.5-3L19 15H8z"/>
      </svg>
    ),
    idea: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2zM9 19h6v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1z"/>
      </svg>
    ),
    product: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M8 4 3 12l5 8h8l5-8-5-8H8zm2.5 4L14 12l-3.5 4-1.5-1.3L11.2 12 9 9.3z"/>
      </svg>
    ),
    mentorship: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <circle cx="12" cy="7" r="4"/>
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8H4z"/>
      </svg>
    ),
    incubation: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M4 22V10l8-6 8 6v12h-6v-7h-4v7H4z"/>
      </svg>
    ),
    rocket: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2f855a" width="40" height="40">
        <path d="M12 2c3 2 5 6 5 10 0 2-.5 3.7-1.2 5.1L12 22l-3.8-4.9C7.5 15.7 7 14 7 12c0-4 2-8 5-10z"/>
        <circle cx="12" cy="10" r="2" fill="#ffffff"/>
      </svg>
    ),
  };

  const levels = [
    {
      key: "level1",
      label: "Level 1",
      subtitle: "Foundation Skills",
      link: "/Level1",
      modules: [
        { title: "Logical Thinking", icon: Icons.logical, description: "Develop analytical and logical reasoning skills" },
        { title: "Python Fundamentals", icon: Icons.python, description: "Learn the basics of Python programming" },
        { title: "Data Handling", icon: Icons.data, description: "Manage and analyze datasets effectively" },
        { title: "Debugging Mindset", icon: Icons.debugging, description: "Learn to debug and solve problems efficiently" },
        { title: "Responsible AI Usage", icon: Icons.ai, description: "Understand ethical AI practices" },
        { title: "Team Collaboration", icon: Icons.team, description: "Work effectively in team environments" },
      ],
    },
    {
      key: "level2",
      label: "Level 2",
      subtitle: "Practical Bootcamp",
      link: "/Level2",
      modules: [
        { title: "Artificial Intelligence", icon: Icons.ai, description: "Machine Learning, Data Science, AI Ethics" },
        { title: "Web & App Development", icon: Icons.webApp, description: "Full-Stack, Mobile App Development (iOS/Android)" },
        { title: "Cloud & DevOps", icon: Icons.cloud, description: "AWS/Azure/GCP, Automation, Infrastructure Management" },
        { title: "UI/UX Designing", icon: Icons.uiux, description: "User-Centric Design, Accessibility, Wireframing" },
        { title: "Digital Marketing", icon: Icons.marketing, description: "SEO, SEM, Social Media Strategy, E-Commerce" },
        { title: "Emerging Technologies", icon: Icons.blockchain, description: "Blockchain, Cryptography Fundamentals" },
        { title: "Creative & Media", icon: Icons.creative, description: "Graphic Designing, Animation, Media Studies" },
      ],
    },
    {
      key: "level3",
      label: "Level 3",
      subtitle: "Startup Ecosystem",
      link: "/Level3",
      modules: [
        { title: "Idea Validation", icon: Icons.idea, description: "Structured evaluation and refinement of startup concepts" },
        { title: "Product Development", icon: Icons.product, description: "Technical guidance to build functional prototypes" },
        { title: "Mentorship", icon: Icons.mentorship, description: "Supervision from experienced professionals" },
        { title: "Collaborative Teams", icon: Icons.team, description: "Work within disciplined, structured startup teams" },
        { title: "Incubation Environment", icon: Icons.incubation, description: "Operate within a focused and accountable ecosystem" },
        { title: "Execution Discipline", icon: Icons.rocket, description: "Structured pathway toward real startup execution" },
      ],
    },
  ];

  const getTooltipPosition = (angle) => {
    const cos = Math.cos((angle * Math.PI) / 180);
    if (cos >= 0) {
      return { left: "120%", top: "-50%", transform: "translateY(-50%)" };
    }
    return { right: "120%", top: "-50%", transform: "translateY(-50%)" };
  };

  const outerRadius = 280;
  const currentLevel = levels[activeIndex];

  const goToLevel = (index) => {
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} id="program-structure" className="module-section">
      <h2 className="section-title">What you'll learn</h2>

      <div className="level-tabs">
        {levels.map((level, index) => (
          <button data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
            key={level.key}
            type="button"
            className={`level-tab ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToLevel(index)}
          >
            {level.label}
          </button>
        ))}
      </div>

      <div className={`infographic ${visible ? "show" : ""}`}>
        <div className="wheel-inner" key={currentLevel.key}>
          <div className="center">
            <div className="center-inner">
              <h2>{currentLevel.label}</h2>
              <p>{currentLevel.subtitle}</p>
            </div>
          </div>

          {currentLevel.modules.map((module, i) => {
            const angle = (360 / currentLevel.modules.length) * i;
            const x = outerRadius * Math.cos((angle * Math.PI) / 180);
            const y = outerRadius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={module.title}
                className="module-wrapper"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <div className="module">
                  <div className="outer-dot">
                    <div className="circle">
                      {module.icon}
                      <div className="tooltiptext" style={getTooltipPosition(angle)}>
                        <strong>{module.title}</strong><br />
                        {module.description}
                      </div>
                    </div>
                  </div>
                  <div className="label">{module.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="progress-dots">
        {levels.map((level, index) => (
          <button data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
            key={level.key}
            type="button"
            className={`progress-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToLevel(index)}
            aria-label={`Show ${level.label}`}
          />
        ))}
      </div>

      <style jsx>{`
        .module-section {
          padding: 120px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #ffffff;
        }
        .section-title { font-size: 32px; font-weight: 700; color: #1a472a; margin-bottom: 24px; }
        .level-tabs { display: flex; gap: 0.75rem; margin-bottom: 40px; flex-wrap: wrap; justify-content: center; }
        .level-tab {
          padding: 0.6rem 1.5rem;
          border-radius: 30px;
          border: 2px solid rgba(47,133,90,0.3);
          background: white;
          color: #1a472a;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .level-tab:hover {
          border-color: #2f855a;
          transform: translateY(-2px);
        }
        .level-tab.active {
          background: linear-gradient(135deg, #1a472a, #2f855a);
          border-color: transparent;
          color: white;
          box-shadow: 0 8px 20px rgba(47,133,90,0.35);
        }
        .infographic {
          position: relative;
          width: 650px;
          height: 650px;
          max-width: 100%;
          opacity: 0;
          transform: scale(0.8);
          transition: 1s ease;
        }
        .infographic.show { opacity: 1; transform: scale(1); }
        .wheel-inner {
          position: absolute;
          inset: 0;
          animation: wheelSwap 0.7s ease;
        }
        @keyframes wheelSwap {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .center { position: absolute; width: 240px; height: 240px; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 50%; background: white; border: 5px solid #2f855a; box-shadow: 0 0 0 15px rgba(47,133,90,0.08), 0 20px 40px rgba(0,0,0,0.15); display: flex; justify-content: center; align-items: center; z-index: 3; }
        .center-inner { text-align: center; }
        .center-inner h2 { font-size: 28px; color: #1a472a; margin-bottom: 5px; }
        .center-inner p { color: #2f855a; }
        .module-wrapper { position: absolute; display: flex; flex-direction: column; align-items: center; }
        .module { display: flex; flex-direction: column; align-items: center; }
        .outer-dot { width: 120px; height: 120px; border-radius: 50%; border: 2px dashed rgba(47,133,90,0.5); display: flex; justify-content: center; align-items: center; }
        .circle { width: 90px; height: 90px; border-radius: 50%; border: 3px solid #2f855a; background: white; display: flex; justify-content: center; align-items: center; box-shadow: 0 10px 25px rgba(0,0,0,0.15); position: relative; transition: transform 0.4s, box-shadow 0.4s; }
        .circle:hover { transform: scale(1.25); box-shadow: 0 0 30px rgba(47,133,90,0.7); }
        .tooltiptext { visibility: hidden; width: 180px; background-color: #2f855a; color: #fff; text-align: center; border-radius: 6px; padding: 8px 10px; position: absolute; z-index: 10; opacity: 0; transition: opacity 0.3s; font-size: 14px; }
        .circle:hover .tooltiptext { visibility: visible; opacity: 1; }
        .label { margin-top: 12px; font-weight: 600; font-size: 14px; color: #1a472a; text-align: center; max-width: 130px; }
        .progress-dots { display: flex; gap: 0.6rem; margin-top: 36px; }
        .progress-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #2f855a;
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }
        .progress-dot.active {
          background: #2f855a;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .module-section { padding: 80px 16px; }
          .infographic { transform: scale(0.6); margin: -110px 0; }
          .infographic.show { transform: scale(0.6); }
        }

        @media (max-width: 480px) {
          .infographic { transform: scale(0.45); margin: -170px 0; }
          .infographic.show { transform: scale(0.45); }
        }
      `}</style>
    </section>
  );
}
