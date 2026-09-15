import { useEffect, useRef, useState } from "react";

const BRANCH_COLORS = ["#2f855a", "#c9a24b", "#1a472a"];

const levels = [
  {
    key: "level1",
    label: "Level 1",
    subtitle: "Foundation Skills",
    modules: [
      { title: "Logical Thinking", description: "Develop analytical and logical reasoning skills" },
      { title: "Python Fundamentals", description: "Learn the basics of Python programming" },
      { title: "Data Handling", description: "Manage and analyze datasets effectively" },
      { title: "Debugging Mindset", description: "Learn to debug and solve problems efficiently" },
      { title: "Responsible AI Usage", description: "Understand ethical AI practices" },
      { title: "Team Collaboration", description: "Work effectively in team environments" },
    ],
  },
  {
    key: "level2",
    label: "Level 2",
    subtitle: "Practical Bootcamp",
    modules: [
      { title: "Artificial Intelligence", description: "Machine Learning, Data Science, AI Ethics" },
      { title: "Web & App Development", description: "Full-Stack, Mobile App Development (iOS/Android)" },
      { title: "Cloud & DevOps", description: "AWS/Azure/GCP, Automation, Infrastructure Management" },
      { title: "UI/UX Designing", description: "User-Centric Design, Accessibility, Wireframing" },
      { title: "Digital Marketing", description: "SEO, SEM, Social Media Strategy, E-Commerce" },
      { title: "Emerging Technologies", description: "Blockchain, Cryptography Fundamentals" },
      { title: "Creative & Media", description: "Graphic Designing, Animation, Media Studies" },
    ],
  },
  {
    key: "level3",
    label: "Level 3",
    subtitle: "Startup Ecosystem",
    modules: [
      { title: "Idea Validation", description: "Structured evaluation and refinement of startup concepts" },
      { title: "Product Development", description: "Technical guidance to build functional prototypes" },
      { title: "Mentorship", description: "Supervision from experienced professionals" },
      { title: "Collaborative Teams", description: "Work within disciplined, structured startup teams" },
      { title: "Incubation Environment", description: "Operate within a focused and accountable ecosystem" },
      { title: "Execution Discipline", description: "Structured pathway toward real startup execution" },
    ],
  },
];

function curve(x1, y1, x2, y2) {
  const midY = (y1 + y2) / 2;
  return `M${x1},${y1} C${x1},${midY} ${x2},${midY} ${x2},${y2}`;
}

export default function LearnSection() {
  const mindmapRef = useRef(null);
  const svgRef = useRef(null);
  const [activeBranch, setActiveBranch] = useState(null);

  useEffect(() => {
    const mindmap = mindmapRef.current;
    const svg = svgRef.current;
    if (!mindmap || !svg) return;

    const layout = () => {
      const cRect = mindmap.getBoundingClientRect();
      svg.setAttribute("width", cRect.width);
      svg.setAttribute("height", cRect.height);
      svg.setAttribute("viewBox", `0 0 ${cRect.width} ${cRect.height}`);

      const rootRect = mindmap.querySelector(".mm-root").getBoundingClientRect();
      const rootPoint = {
        x: rootRect.left + rootRect.width / 2 - cRect.left,
        y: rootRect.bottom - cRect.top,
      };

      let paths = "";
      mindmap.querySelectorAll(".mm-branch").forEach((branchEl) => {
        const li = branchEl.dataset.i;
        const color = BRANCH_COLORS[li];
        const levelEl = branchEl.querySelector(".mm-level");
        const lRect = levelEl.getBoundingClientRect();
        const levelTop = { x: lRect.left + lRect.width / 2 - cRect.left, y: lRect.top - cRect.top };
        const levelBottom = { x: levelTop.x, y: lRect.bottom - cRect.top };

        paths += `<path class="mm-link" data-branch="${li}" stroke="${color}" d="${curve(rootPoint.x, rootPoint.y, levelTop.x, levelTop.y)}" />`;

        branchEl.querySelectorAll(".mm-leaf").forEach((leafEl) => {
          const leafRect = leafEl.getBoundingClientRect();
          const leafPoint = { x: leafRect.left + leafRect.width / 2 - cRect.left, y: leafRect.top - cRect.top };
          paths += `<path class="mm-link" data-branch="${li}" stroke="${color}" d="${curve(levelBottom.x, levelBottom.y, leafPoint.x, leafPoint.y)}" />`;
        });
      });
      svg.innerHTML = paths;
    };

    const raf1 = requestAnimationFrame(() => requestAnimationFrame(layout));

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(layout, 120);
    };
    window.addEventListener("resize", onResize);

    let ro;
    if (typeof ResizeObserver === "function") {
      ro = new ResizeObserver(() => layout());
      ro.observe(mindmap);
    }

    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    const mindmap = mindmapRef.current;
    if (!svg || !mindmap) return;

    mindmap.classList.toggle("hovering", activeBranch !== null);
    svg.querySelectorAll(".mm-link").forEach((p) => {
      p.classList.toggle("mm-link-active", activeBranch !== null && p.dataset.branch === String(activeBranch));
    });
  }, [activeBranch]);

  return (
    <section id="program-structure" className="module-section">
      <h2 className="section-title">What you&rsquo;ll learn</h2>
      <p className="section-sub">One program &middot; three levels &middot; every module at a glance</p>

      <div className="mindmap" ref={mindmapRef}>
        <svg className="mm-svg" ref={svgRef} />

        <div className="mm-root">As-Sa&rsquo;adah Program</div>

        <div className="mm-branches">
          {levels.map((level, li) => (
            <div
              key={level.key}
              data-i={li}
              className={`mm-branch ${activeBranch === li ? "mm-branch-active" : ""}`}
              style={{ "--branch-color": BRANCH_COLORS[li] }}
              onMouseEnter={() => setActiveBranch(li)}
              onMouseLeave={() => setActiveBranch(null)}
            >
              <div className="mm-level">
                {level.label}
                <span>{level.subtitle}</span>
              </div>

              <div className="mm-leaves">
                {level.modules.map((module) => (
                  <div className="mm-leaf" key={module.title} tabIndex={0}>
                    <span className="mm-leaf-title">{module.title}</span>
                    <div className="mm-leaf-tip">{module.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .module-section {
          padding: 120px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #ffffff;
        }
        .section-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #1a472a;
          margin: 0 0 10px;
          font-family: 'Montserrat', sans-serif;
          text-align: center;
        }
        .section-sub {
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 0.8rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #2f855a;
          opacity: 0.85;
          margin: 0 0 56px;
          text-align: center;
        }

        .mindmap {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1440px;
        }
        .mindmap :global(.mm-link) {
          fill: none;
          stroke-width: 2;
          opacity: 0.4;
          transition: opacity 0.25s ease, stroke-width 0.25s ease;
        }
        .mindmap.hovering :global(.mm-link) {
          opacity: 0.12;
        }
        .mindmap.hovering :global(.mm-link.mm-link-active) {
          opacity: 1;
          stroke-width: 2.75;
        }

        .mm-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          overflow: visible;
        }

        .mm-root {
          position: relative;
          z-index: 2;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: #ffffff;
          font-family: Georgia, "Iowan Old Style", serif;
          font-size: 1.45rem;
          padding: 1.15rem 2.6rem;
          border-radius: 999px;
          box-shadow: 0 14px 30px rgba(26, 71, 42, 0.28);
        }

        .mm-branches {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-top: 4rem;
          width: 100%;
        }
        .mm-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1 1 0;
          min-width: 0;
          max-width: 400px;
          transition: opacity 0.25s ease;
        }
        .mindmap.hovering .mm-branch {
          opacity: 0.4;
        }
        .mindmap.hovering .mm-branch.mm-branch-active {
          opacity: 1;
        }

        .mm-level {
          background: #ffffff;
          border: 2px solid var(--branch-color, #2f855a);
          color: #16201b;
          font-weight: 700;
          padding: 0.85rem 1.6rem;
          border-radius: 10px;
          text-align: center;
          font-size: 1.05rem;
          box-shadow: 0 8px 18px rgba(22, 32, 27, 0.08);
        }
        .mm-level span {
          display: block;
          font-weight: 400;
          font-size: 0.8rem;
          color: rgba(22, 32, 27, 0.55);
          margin-top: 0.3rem;
        }

        .mm-leaves {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 2.75rem;
          width: 100%;
        }
        .mm-leaf {
          position: relative;
          width: 88%;
          background: #ffffff;
          border: 1px solid rgba(22, 32, 27, 0.12);
          border-left: 3px solid var(--branch-color, #2f855a);
          padding: 0.7rem 1.05rem;
          font-size: 0.86rem;
          font-weight: 600;
          border-radius: 0 8px 8px 0;
          box-shadow: 0 4px 10px rgba(22, 32, 27, 0.05);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          cursor: default;
        }
        .mm-leaf:hover,
        .mm-leaf:focus-visible {
          transform: translateX(3px);
          box-shadow: 0 8px 16px rgba(22, 32, 27, 0.1);
        }
        .mm-leaf:nth-child(odd) {
          align-self: flex-start;
        }
        .mm-leaf:nth-child(even) {
          align-self: flex-end;
        }

        .mm-leaf-tip {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          left: 50%;
          bottom: 100%;
          transform: translate(-50%, -8px);
          width: 200px;
          background: #1a472a;
          color: #ffffff;
          font-weight: 400;
          font-size: 0.75rem;
          line-height: 1.5;
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          z-index: 5;
          transition: opacity 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }
        .mm-leaf:hover .mm-leaf-tip,
        .mm-leaf:focus-visible .mm-leaf-tip {
          visibility: visible;
          opacity: 1;
          transform: translate(-50%, -4px);
        }

        @media (max-width: 900px) {
          .section-title {
            font-size: 1.9rem;
          }

          .mm-branches {
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
          }
          .mm-branch {
            flex: 0 1 auto;
            width: 80%;
            max-width: 320px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mm-leaf,
          .mm-leaf-tip,
          .mm-branch,
          .mindmap :global(.mm-link) {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
