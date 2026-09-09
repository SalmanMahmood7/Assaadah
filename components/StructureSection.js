import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function StructureSection() {
  const timelineRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  const timeline = [
    {
      title: "Level 1",
      description: "2 Months Online",
      details: "Kickstart your journey with foundational courses to prepare you for advanced modules.",
      link: "/Level1",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5V6H4v13.5z" />
          <path d="M4 6h16V2H4v4z" />
        </svg>
      )
    },
    {
      title: "Performance-Based Progression",
      description: "Learn and advance at your own pace",
      details: "Your progress is based on performance, allowing you to master each skill thoroughly before moving on.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" y1="12" x2="22" y2="12" />
          <polyline points="18 6 22 12 18 18" />
        </svg>
      )
    },
    {
      level: "Level 2",
      title: "Fully Funded Physical Bootcamp",
      description: "Hands-on training and mentorship",
      details: "Join an immersive bootcamp with expert mentors guiding you through real-world exercises.",
      link: "/Level2",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21v-6a9 9 0 0 1 18 0v6" />
          <path d="M12 3v18" />
        </svg>
      )
    },
    {
      title: "Real-world Project Work",
      description: "Build real projects for experience",
      details: "Work on live projects that give you practical experience and a strong portfolio to showcase.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      )
    },
    {
      level: "Level 3",
      title: "Ilm to Impact (Startup Council)",
      description: "For those who aim higher than employment — develop startup ideas in a structured incubation environment.",
      link: "/Level3",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a7 7 0 0 0-7 7c0 4.25 7 13 7 13s7-8.75 7-13a7 7 0 0 0-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      )
    },
    {
      title: "Job Placement Pathway",
      description: "Structured transition into professional roles with performance-driven support.",
      link: "/careers",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [
              ...prev,
              parseInt(entry.target.dataset.index),
            ]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <section className="structure-section">
      <p className="eyebrow">The Journey</p>
      <h2>The Program Structure</h2>
      <p className="subheading">
        A single connected path from foundation to career — every step builds on the last.
      </p>

      <div className="timeline">
        <div className="timeline-line"></div>

        {timeline.map((item, index) => {
          const Content = (
            <div className={`timeline-content ${item.level ? "milestone" : ""}`}>
              {item.level && <span className="milestone-tag">Milestone</span>}
              {item.level ? (
                <>
                  <h3>{item.level}</h3>
                  <p className="sub-title">{item.title}</p>
                </>
              ) : (
                <h3>{item.title}</h3>
              )}
              <p className="main-description">{item.description}</p>
              {item.details && <p className="details">{item.details}</p>}
              {item.link && <span className="arrow-hover">Explore →</span>}
            </div>
          );

          return (
            <div
              key={index}
              ref={(el) => (timelineRef.current[index] = el)}
              data-index={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
                visibleItems.includes(index) ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="node-icon">{item.icon}</div>

              {item.link ? (
                <Link  legacyBehavior href={item.link}>
                  <a className={`timeline-content-link ${index % 2 === 0 ? "fade-right" : "fade-left"}`}>
                    {Content}
                  </a>
                </Link>
              ) : (
                <div className={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}>
                  {Content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .structure-section {
          position: relative;
          background: #ffffff;
          padding: 6rem 1.5rem;
        }
        .eyebrow {
          color: #2f855a;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: center;
          margin: 0 0 0.75rem;
        }
        .structure-section h2 {
          font-size: 2.4rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 0.75rem;
          color: #1a472a;
          font-family: 'Montserrat', sans-serif;
        }
        .subheading {
          text-align: center;
          color: #4a5568;
          font-size: 1.05rem;
          max-width: 560px;
          margin: 0 auto 4.5rem;
          line-height: 1.7;
        }
        .timeline {
          position: relative;
          max-width: 920px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #68d391, #2f855a, #1a472a);
          border-radius: 2px;
          z-index: 1;
        }
        .timeline-item {
          position: relative;
          z-index: 2;
          width: 50%;
          padding: 1rem 2.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .timeline-item.left {
          left: 0;
          text-align: right;
        }
        .timeline-item.right {
          left: 50%;
          text-align: left;
        }
        .node-icon {
          position: absolute;
          top: 1.4rem;
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 20px rgba(26, 71, 42, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .node-icon svg {
          width: 22px;
          height: 22px;
        }
        .timeline-item.left .node-icon {
          right: -1.625rem;
        }
        .timeline-item.right .node-icon {
          left: -1.625rem;
        }
        .timeline-item.visible .node-icon {
          transform: scale(1.08);
          box-shadow: 0 0 16px rgba(47, 133, 90, 0.6);
        }
        .timeline-content {
          background: #ffffff;
          padding: 1.75rem 1.6rem;
          border-radius: 16px;
          position: relative;
          border: 1px solid rgba(26, 71, 42, 0.08);
          box-shadow: 0 10px 26px rgba(26, 71, 42, 0.07);
          transition: all 0.3s ease;
        }
        .timeline-content.milestone {
          border: 1px solid rgba(47, 133, 90, 0.35);
          box-shadow: 0 12px 30px rgba(26, 71, 42, 0.1);
        }
        .timeline-content:hover {
          box-shadow: 0 18px 40px rgba(26, 71, 42, 0.16);
          transform: translateY(-5px);
        }
        .milestone-tag {
          position: absolute;
          top: -12px;
          right: 1.4rem;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
          box-shadow: 0 6px 14px rgba(26, 71, 42, 0.3);
        }
        .timeline-item.right .milestone-tag {
          right: auto;
          left: 1.4rem;
        }
        .timeline-content .sub-title {
          font-size: 1rem;
          font-weight: 600;
          color: #2f855a;
          margin-bottom: 0.4rem;
        }
        .timeline-content h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1a472a;
          font-family: 'Montserrat', sans-serif;
        }
        .timeline-content .main-description {
          font-size: 0.95rem;
          color: #14532d;
          font-weight: 600;
        }
        .timeline-content .details {
          font-size: 0.9rem;
          color: #64748b;
          margin-top: 0.4rem;
          line-height: 1.6;
        }
        .arrow-hover {
          display: inline-block;
          margin-top: 1rem;
          color: #2f855a;
          font-weight: 700;
          font-size: 0.88rem;
          transition: transform 0.3s ease;
        }
        .timeline-content:hover .arrow-hover {
          transform: translateX(6px);
        }
        .fade-right {
          display: block;
          transform: translateX(-30px) scale(0.95);
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        .fade-left {
          display: block;
          transform: translateX(30px) scale(0.95);
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        .timeline-item.visible .fade-right,
        .timeline-item.visible .fade-left {
          transform: translateX(0) scale(1);
          opacity: 1;
        }
        .timeline-content-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        @media (max-width: 768px) {
          .timeline-item,
          .timeline-item.left,
          .timeline-item.right {
            width: 100%;
            text-align: left;
            left: 0 !important;
            margin-bottom: 3rem;
            padding: 1rem 1rem 1rem 4rem;
          }
          .timeline-item.left .milestone-tag,
          .timeline-item.right .milestone-tag {
            left: auto;
            right: 1.2rem;
          }
          .node-icon {
            width: 2.75rem;
            height: 2.75rem;
            top: 1.1rem;
            left: 0.05rem !important;
            right: auto !important;
          }
          .node-icon svg {
            width: 18px;
            height: 18px;
          }
          .timeline-line {
            left: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
