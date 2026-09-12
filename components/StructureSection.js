import { useEffect, useRef } from "react";
import Link from "next/link";

const timeline = [
  {
    title: "Level 1",
    description: "2 Months Online",
    details: "Kickstart your journey with foundational courses to prepare you for advanced modules.",
    link: "/Level1",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
    )
  }
];

export default function StructureSection() {
  const listRef = useRef(null);
  const trackRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const setTrackHeight = () => {
      const list = listRef.current;
      const track = trackRef.current;
      if (!list || !track) return;

      const icons = list.querySelectorAll(".icon-holder");
      const lastIcon = icons[icons.length - 1];
      if (!lastIcon) return;

      const listRect = list.getBoundingClientRect();
      const iconRect = lastIcon.getBoundingClientRect();
      const trackHeight = iconRect.top - listRect.top + iconRect.height / 2;
      track.style.height = `${trackHeight}px`;
    };

    setTrackHeight();
    window.addEventListener("resize", setTrackHeight);

    const handleScroll = () => {
      const list = listRef.current;
      const track = trackRef.current;
      const inner = innerRef.current;
      if (!list || !track || !inner) return;

      const rect = list.getBoundingClientRect();
      const viewportMarker = window.innerHeight * 0.5;
      const filled = viewportMarker - rect.top;
      const clamped = Math.max(0, Math.min(filled, track.offsetHeight));
      inner.style.height = `${clamped}px`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setTrackHeight);
    };
  }, []);

  return (
    <section className="timeline-section">
      <div className="section-overlay" />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white mb-4">The Program Structure</h2>
          </div>

          <div className="col-lg-10 col-12 mx-auto">
            <div className="timeline-container">
              <ul className="vertical-scrollable-timeline" ref={listRef}>
                <div className="list-progress" ref={trackRef}>
                  <div className="inner" ref={innerRef} />
                </div>

                {timeline.map((item) => {
                  const body = (
                    <>
                      {item.level && <span className="milestone-tag">Milestone</span>}
                      {item.level ? (
                        <>
                          <h4 className="text-white mb-3">{item.level}</h4>
                          <p className="text-white sub-title">{item.title}</p>
                        </>
                      ) : (
                        <h4 className="text-white mb-3">{item.title}</h4>
                      )}

                      <p className="text-white">{item.description}</p>
                      {item.details && <p className="text-white">{item.details}</p>}
                      {item.link && <span className="arrow-hover">Explore</span>}

                      <div className="icon-holder">{item.icon}</div>
                    </>
                  );

                  return (
                    <li key={item.title}>
                      {item.link ? (
                        <Link href={item.link} className="timeline-link">
                          {body}
                        </Link>
                      ) : (
                        <div className="timeline-link">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-12 text-center mt-5">
            <p className="text-white">
              Want to see where this path leads?
              <Link href="/apply" className="btn custom-btn custom-border-btn ms-3">
                Apply Now
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          background-image: url("/journey-path.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          position: relative;
          padding: 100px 20px;
        }

        .section-overlay {
          background-image: linear-gradient(15deg, #1a472a 0%, #2f855a 100%);
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          width: 100%;
          height: 100%;
          opacity: 0.85;
        }

        .container {
          position: relative;
          max-width: 1140px;
          margin: 0 auto;
        }

        .col-lg-10 {
          max-width: 900px;
          margin: 0 auto;
        }

        h2 {
          color: #ffffff;
          font-size: 2.4rem;
          font-weight: 800;
          font-family: "Montserrat", sans-serif;
        }

        .mb-4 {
          margin-bottom: 1.5rem;
        }

        .mt-5 {
          margin-top: 3rem;
        }

        .text-center {
          text-align: center;
        }

        .vertical-scrollable-timeline {
          list-style-type: none;
          position: relative;
          padding-left: 0;
          margin: 0;
        }

        .list-progress {
          width: 8px;
          background-color: rgba(255, 255, 255, 0.25);
          position: absolute;
          left: 52px;
          top: 0;
          overflow: hidden;
          border-radius: 4px;
        }

        .list-progress .inner {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 0;
          background-color: #ffffff;
          transition: height 0.1s linear;
        }

        .vertical-scrollable-timeline li {
          position: relative;
          padding: 20px 0 65px 145px;
        }

        .vertical-scrollable-timeline li:last-child {
          padding-bottom: 0;
        }

        .vertical-scrollable-timeline li p {
          line-height: 1.7;
        }

        .icon-holder {
          position: absolute;
          left: 0;
          top: 0;
          width: 104px;
          height: 104px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #2f855a;
          border-radius: 50%;
          color: #ffffff;
          z-index: 1;
        }

        .icon-holder::before {
          content: "";
          width: 80px;
          height: 80px;
          border: 4px solid #fff;
          position: absolute;
          background-color: #2f855a;
          border-radius: 50%;
          z-index: -1;
        }

        .mb-3 {
          margin-bottom: 1rem;
        }

        .text-white {
          color: #ffffff;
        }

        .vertical-scrollable-timeline h4 {
          color: #ffffff;
          font-size: 1.35rem;
          font-weight: 700;
          font-family: "Montserrat", sans-serif;
        }

        .vertical-scrollable-timeline p {
          color: #ffffff;
        }

        .sub-title {
          color: #ffffff;
          font-weight: 600;
          opacity: 0.85;
        }

        .milestone-tag {
          display: inline-block;
          background: #ffffff;
          color: #1a472a;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
          margin-bottom: 0.75rem;
        }

        .arrow-hover {
          display: inline-block;
          margin-top: 0.75rem;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.5rem 1.25rem;
          border: 2px solid #ffffff;
          border-radius: 30px;
          transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
        }

        :global(.timeline-link) {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        :global(.timeline-link:hover) .arrow-hover {
          transform: translateX(6px);
          background: #ffffff;
          color: #1a472a;
        }

        :global(.custom-btn) {
          display: inline-block;
          background: transparent;
          color: #ffffff;
          font-weight: 700;
          padding: 0.6rem 1.5rem;
          border-radius: 30px;
          text-decoration: none;
          border: 2px solid #ffffff;
          transition: background 0.3s ease, color 0.3s ease;
          margin-left: 0.75rem;
        }

        :global(.custom-btn:hover) {
          background: #ffffff;
          color: #1a472a;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 1.9rem;
          }

          .list-progress {
            left: 38px;
          }

          .vertical-scrollable-timeline li {
            padding-left: 105px;
          }

          .icon-holder {
            width: 76px;
            height: 76px;
          }

          .icon-holder::before {
            width: 58px;
            height: 58px;
            border-width: 3px;
          }
        }
      `}</style>
    </section>
  );
}
