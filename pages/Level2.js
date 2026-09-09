import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";
import {
  FaBuilding,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLayerGroup,
  FaQuoteLeft
} from "react-icons/fa";

const stats = [
  { icon: <FaBuilding />, label: "Format", value: "Physical Bootcamp" },
  { icon: <FaGraduationCap />, label: "Funding", value: "Fully Funded" },
  { icon: <FaChalkboardTeacher />, label: "Guidance", value: "Expert Mentorship" },
  { icon: <FaLayerGroup />, label: "Tracks", value: "8 Specializations" }
];

const DEFAULT_COURSE_GRADIENT = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

const FALLBACK_BOOTCAMP_COURSES = [
  {
    title: "Artificial Intelligence (AI)",
    coreFocus: "Machine Learning, Data Science, AI Ethics",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
        <circle cx="12" cy="5" r="2"/>
        <path d="m12 7-3 4"/>
        <path d="m15 11-3-4"/>
        <path d="M8 15h.01"/>
        <path d="M16 15h.01"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Web & App Development",
    coreFocus: "Full-Stack, Mobile App Development (iOS/Android)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="14" x="2" y="3" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Cloud & DevOps",
    coreFocus: "AWS/Azure/GCP, Automation, Infrastructure Management",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    title: "UI/UX Designing",
    coreFocus: "User-Centric Design, Accessibility, Wireframing",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/>
        <path d="m14 7 3 3"/>
        <path d="M5 6v4"/>
        <path d="M19 14v4"/>
        <path d="M10 2v2"/>
        <path d="M7 8H3"/>
        <path d="M21 16h-4"/>
        <path d="M11 3H9"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    title: "Digital Marketing & E-Commerce",
    coreFocus: "SEO, SEM, Social Media Strategy, Online Business Development",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    title: "Emerging Technologies",
    coreFocus: "Blockchain, Cryptography Fundamentals",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  },
  {
    title: "Creative & Media",
    coreFocus: "Graphic Designing, Design & Animation, Media Studies",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="m9 9 5 12 1.774-5.226L21 14 9 9z"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  },
  {
    title: "AR & VR Development",
    coreFocus: "Augmented Reality, Virtual Reality, Immersive Experience Design",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="8" width="20" height="10" rx="3"/>
        <circle cx="8" cy="13" r="2"/>
        <circle cx="16" cy="13" r="2"/>
        <path d="M9 8V6a3 3 0 0 1 6 0v2"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)"
  }
];

export default function LevelTwoPage() {
  const [bootcampCourses, setBootcampCourses] = useState(FALLBACK_BOOTCAMP_COURSES);
  const [heroImage, setHeroImage] = useState("/hero-islamic2.webp");

  useEffect(() => {
    supabase
      .from("hero_images")
      .select("*")
      .eq("page", "Level 2")
      .order("id", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setHeroImage(data[0].image);
      });

    supabase
      .from("courses")
      .select("*")
      .eq("level", "Level 2")
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setBootcampCourses(
          data.map((row) => ({
            title: row.title,
            coreFocus: row.focus,
            gradient: DEFAULT_COURSE_GRADIENT,
            icon: <FaLayerGroup />
          }))
        );
      });
  }, []);

  return (
    <>
      <Head>
  <title>Level 2  | As-Sa'adah IT Boot Camp</title>
  <meta
    name="description"
    content="Level 2 Development Program focusing on practical IT skills including web development, tools, and real-world applications."
  />
  <link rel="icon" href="/images.png" />
</Head>

      <Layout>

        {/* ================= HERO ================= */}
        <section className="hero-section" style={{ backgroundImage: `url('${heroImage}')` }}>
          <div className="hero-overlay">
            <div className="hero-content">
              <p className="breadcrumb">
                <Link href="/courses">Courses</Link> / Level 2
              </p>

              <span className="hero-badge">Level 02 &middot; Bootcamp Phase</span>

              <h1 className="hero-title">As-Sa&apos;adah IT Boot Camp</h1>
              <p className="hero-subtitle">Flagship Religious Empowerment Initiative</p>
            </div>
          </div>

          <div className="stats-bar">
            {stats.map((stat, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="stat-item" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <div>
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ================= OVERVIEW ================= */}
        <section className="section section-white section-after-hero">
          <div className="container purpose-layout">

            <div className="purpose-text">
              <p className="eyebrow">The Bootcamp Phase</p>
              <h2>Where Discipline Turns Into Capability</h2>

              <p>
                Candidates who complete Level 1 with the required consistency and discipline
                advance into an immersive, fully-funded physical bootcamp — built to convert
                foundational thinking into real, applied technical skill.
              </p>

              <p>
                Across eight specialization tracks, students work under expert mentorship,
                build real projects, and are evaluated continuously on performance — not attendance.
              </p>
            </div>

            <div className="purpose-highlight">
              <span className="quote-icon"><FaQuoteLeft /></span>
              <p>Hands-on training, expert mentorship, and real-world execution — this is where capability is built.</p>
            </div>

          </div>
        </section>


        {/* ================= COURSES GRID ================= */}
        <section className="section section-white">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Specializations</p>
              <h2>Choose Your Track</h2>
              <p className="section-lead">
                Eight structured specialization tracks, each designed to build a distinct professional capability.
              </p>
            </div>

            <div className="bootcamp-grid" role="list">
              {bootcampCourses.map((course, index) => (
                <article data-aos="fade" data-aos-delay={Math.min(index * 80, 400)}
                  className="bootcamp-card"
                  key={course.title}
                  role="listitem"
                >
                  <div className="card-header" style={{ background: course.gradient }}>
                    <div className="course-icon">{course.icon}</div>
                    <div className="card-badge">Course {index + 1}</div>
                  </div>
                  <div className="card-content">
                    <h3 className="bootcamp-card-title">{course.title}</h3>
                    <div className="bootcamp-card-body">
                      <p className="focus-label">Core Focus:</p>
                      <p className="focus-text">{course.coreFocus}</p>
                    </div>
                    <div className="card-footer">
                     <Link href="/ComingSoon">
                        <button className="learn-more-btn">Learn More</button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="section section-white">
          <div className="container cta-block">
            <h3>Ready to begin Level 2?</h3>
            <p>See how Level 2 fits into the complete As-Sa&apos;adah pathway.</p>
            <div className="cta-actions">
              <Link href="/admission-terms?level=level2" className="cta-button">
                Apply Now →
              </Link>
              <Link href="/courses" className="cta-button-secondary">
                ← Back to Courses
              </Link>
            </div>
          </div>
        </section>

        <style jsx>{`
          /* ============ HERO ============ */
          .hero-section {
            position: relative;
            background: url('/hero-islamic2.webp') center/cover no-repeat;
            min-height: 620px;
            padding-bottom: 90px;
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(10,30,20,0.6), rgba(10,30,20,0.78));
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 140px clamp(1rem, 5vw, 3rem) 0;
          }

          .hero-content {
            text-align: center;
            max-width: 900px;
            color: white;
          }

          .breadcrumb {
            margin-bottom: 14px;
            color: #d1f0e1;
          }

          .breadcrumb :global(a) {
            color: #86efac;
            text-decoration: underline;
          }

          .hero-badge {
            display: inline-block;
            background: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.3);
            color: #86efac;
            font-size: 0.78rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 0.4rem 1rem;
            border-radius: 50px;
            margin-bottom: 18px;
          }

          .hero-title {
            font-size: clamp(30px, 4.5vw, 46px);
            font-weight: 800;
            margin-bottom: 15px;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.2;
          }

          .hero-subtitle {
            font-size: 18px;
            color: #86efac;
          }

          /* STATS BAR — straddles hero / white section boundary */
          .stats-bar {
            position: absolute;
            left: 50%;
            bottom: -70px;
            transform: translateX(-50%);
            z-index: 5;
            border-radius: 20px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1px;
            background-color: rgba(26, 71, 42, 0.08);
            max-width: 1100px;
            width: calc(100% - 2.5rem);
            overflow: hidden;
          }

          .stat-item {
            background: white;
            display: flex;
            align-items: center;
            gap: 0.9rem;
            padding: 1.5rem 1.4rem;
          }

          .stat-icon {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
          }

          .stat-label {
            font-size: 0.72rem;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin: 0 0 0.2rem;
          }

          .stat-value {
            font-size: 1rem;
            font-weight: 700;
            color: #1a472a;
            margin: 0;
          }

          /* ============ SECTION SHELL ============ */
          .section {
            padding: clamp(3.5rem, 7vw, 6.5rem) clamp(1.25rem, 5vw, 3rem);
            border-top: 1px solid rgba(26, 71, 42, 0.07);
          }

          .section-white {
            background: #ffffff;
          }

          .section-after-hero {
            padding-top: calc(clamp(3.5rem, 7vw, 6.5rem) + 70px);
          }

          .container {
            max-width: 1280px;
            margin: 0 auto;
            width: 100%;
          }

          .section-head {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 3rem;
          }

          .eyebrow {
            color: #2f855a;
            font-weight: 700;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 0.6rem;
          }

          .section-head h2,
          .purpose-text h2 {
            font-size: clamp(1.7rem, 3vw, 2.1rem);
            color: #14532d;
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
          }

          .section-lead {
            color: #475569;
            font-size: 1.02rem;
            margin-top: 0.75rem;
            line-height: 1.7;
          }

          /* ============ PURPOSE ============ */
          .purpose-layout {
            display: grid;
            grid-template-columns: 1.3fr 1fr;
            gap: clamp(2rem, 5vw, 4rem);
            align-items: center;
          }

          .purpose-text p {
            color: #475569;
            line-height: 1.85;
            margin: 18px 0;
            font-size: 1.02rem;
          }

          .purpose-highlight {
            position: relative;
            background: linear-gradient(160deg, #1a472a, #14532d);
            border-radius: 22px;
            padding: 2.5rem 2.2rem;
            color: white;
            box-shadow: 0 25px 60px rgba(26, 71, 42, 0.25);
          }

          .quote-icon {
            display: inline-flex;
            color: #86efac;
            font-size: 1.6rem;
            margin-bottom: 1rem;
            opacity: 0.8;
          }

          .purpose-highlight p {
            font-size: 1.15rem;
            font-weight: 600;
            line-height: 1.6;
            margin: 0;
          }

          /* COURSES GRID */
          .bootcamp-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
          }

          .bootcamp-card {
            flex: 0 1 340px;
            max-width: 380px;
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(26, 71, 42, 0.1);
            transition: all 0.4s ease;
            position: relative;
            display: flex;
            flex-direction: column;
          }

          .bootcamp-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 30px 80px rgba(26, 71, 42, 0.15);
          }

          .card-header {
            padding: 2rem;
            position: relative;
            overflow: hidden;
          }

          .course-icon {
            margin-bottom: 1rem;
            position: relative;
            z-index: 2;
            display: flex;
            justify-content: center;
            color: white;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          }

          .card-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(10px);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            z-index: 2;
          }

          .card-content {
            padding: 2rem;
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .bootcamp-card-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #1a472a;
            margin-bottom: 1rem;
          }

          .bootcamp-card-body {
            flex: 1;
            margin-bottom: 1.5rem;
          }

          .focus-label {
            color: #1a472a;
            font-weight: 600;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 0.5rem !important;
          }

          .focus-text {
            color: #4a5568;
            line-height: 1.6;
            font-size: 0.95rem;
          }

          .learn-more-btn {
            width: 100%;
            padding: 0.75rem 1.5rem;
            background: transparent;
            color: #1a472a;
            border: 2px solid #1a472a;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .learn-more-btn:hover {
            background: #1a472a;
            color: white;
          }

          /* ============ CTA ============ */
          .cta-block {
            text-align: center;
            max-width: 640px;
            background: white;
            border: 1px solid rgba(26, 71, 42, 0.08);
            border-radius: 24px;
            padding: clamp(2.5rem, 5vw, 3.5rem);
            box-shadow: 0 20px 50px rgba(26, 71, 42, 0.08);
          }

          .cta-block h3 {
            font-size: clamp(1.5rem, 3vw, 1.9rem);
            margin-bottom: 10px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 800;
            color: #14532d;
          }

          .cta-block p {
            color: #4a5568;
            margin-bottom: 28px;
            font-size: 1.05rem;
          }

          .cta-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          :global(.cta-button) {
            display: inline-block;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            font-weight: 700;
            padding: 15px 38px;
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 15px 35px rgba(26, 71, 42, 0.3);
          }

          :global(.cta-button:hover) {
            transform: translateY(-3px);
            box-shadow: 0 20px 42px rgba(26, 71, 42, 0.4);
            background: linear-gradient(135deg, #22543d, #38a169);
          }

          :global(.cta-button-secondary) {
            display: inline-block;
            background: transparent;
            color: #1a472a;
            font-weight: 700;
            padding: 15px 38px;
            border-radius: 50px;
            text-decoration: none;
            border: 2px solid #1a472a;
            transition: all 0.3s ease;
          }

          :global(.cta-button-secondary:hover) {
            background: #1a472a;
            color: white;
            transform: translateY(-3px);
          }

          @media (max-width: 900px) {
            .purpose-layout {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 32px;
            }
          }

          @media (max-width: 640px) {
            .stats-bar {
              grid-template-columns: repeat(2, 1fr);
              bottom: -95px;
            }

            .section-after-hero {
              padding-top: calc(clamp(3.5rem, 7vw, 6.5rem) + 95px);
            }

            .bootcamp-card {
              flex-basis: 100%;
              max-width: 420px;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
