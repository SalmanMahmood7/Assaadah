import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaHandsHelping,
  FaProjectDiagram,
  FaClipboardCheck
} from "react-icons/fa";

const FALLBACK_HERO_IMAGE = "/hero-islamic2.webp";

export default function CoursesPage() {
  const [heroImage, setHeroImage] = useState(FALLBACK_HERO_IMAGE);

  useEffect(() => {
    supabase
      .from("hero_images")
      .select("*")
      .eq("page", "Courses")
      .order("id", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setHeroImage(data[0].image);
      });
  }, []);


  const advantages = [
    {
      icon: <FaHandsHelping />,
      title: "Guided Mentorship",
      description:
        "Learn under structured mentorship designed to build real capability."
    },
    {
      icon: <FaProjectDiagram />,
      title: "Hands-on Practical Training",
      description:
        "Work on real projects to develop execution skills and confidence."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Performance-Based Progression",
      description:
        "Advance based on capability, discipline, and demonstrated competence."
    }
  ];

  const courses = [
    {
      icon: <FaGraduationCap />,
      label: "Level 01",
      title: "Level 1",
      description:
        "Foundation phase focused on discipline, digital literacy, and thinking.",
      gradient: "linear-gradient(135deg, #4ade80, #15803d)",
      path: "/Level1"
    },
    {
      icon: <FaLaptopCode />,
      label: "Level 02",
      title: "Level 2 (Bootcamp)",
      description:
        "Applied training phase focused on real-world technical development.",
      gradient: "linear-gradient(135deg, #2f855a, #14532d)",
      path: "/Level2"
    },
    {
      icon: <FaRocket />,
      label: "Level 03",
      title: "Level 3 (Ilm to Impact)",
      description:
        "Execution phase focused on building real projects and professional capability.",
      gradient: "linear-gradient(135deg, #1a472a, #0b2b18)",
      path: "/Level3"
    }
  ];

  return (

    <>
    <Head>
      <title>Courses | As-Sa'adah IT Boot Camp</title>
      <meta
        name="description"
        content="Courses and capability development programs at As-Sa'adah IT Boot Camp designed to build professional IT skills."
      />
      <link rel="icon" href="/images.png" />
    </Head>

    <Layout>
    <div className="courses-page">

      {/* HERO */}
      <section className="hero-section" style={{ backgroundImage: `url('${heroImage}')` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="breadcrumb">
              <Link href="/">Home</Link> / Courses
            </p>
            <h1 className="hero-title">
              Courses & Capability Development
            </h1>
            <p className="hero-subtitle">
              A structured pathway designed to transform discipline into capability.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="gradient-section">
        <div className="container">

          {/* COURSES */}
          <p className="eyebrow">The Learning Path</p>
          <h2 className="section-title">
            Our Courses
          </h2>
          <p className="section-subtitle">
            Three structured levels that carry you from foundation to real-world execution.
          </p>

          <div className="courses-list">
            {courses.map((course, index) => (
              <article data-aos="fade" data-aos-delay={Math.min(index * 80, 400)}
                className="course-row"
                key={index}
              >
                <div className="course-row-icon" style={{ background: course.gradient }}>
                  {course.icon}
                </div>
                <div className="course-row-content">
                  <span className="course-row-label">{course.label}</span>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-desc">{course.description}</p>
                </div>
                <Link href={course.path} className="start-btn">
                  Start Learning
                </Link>
              </article>
            ))}
          </div>

          {/* ADVANTAGES */}
          <p className="eyebrow advantages-eyebrow">The As-Sa&apos;adah Edge</p>
          <h2 className="section-title advantages-title">
            Why Our Courses
          </h2>

          <div className="advantages-grid">
            {advantages.map((adv, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)}
                key={index}
                className="adv-card"
              >
                <span className="adv-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="adv-icon">
                  {adv.icon}
                </div>
                <h3>{adv.title}</h3>
                <p>{adv.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>

      <style jsx global>{`
        html, body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>

      <style jsx>{`
        .courses-page {
          overflow-x: hidden;
          overflow-y: visible;
          width: 100%;
        }

        /* HERO */
        .hero-section {
          position: relative;
          background: url('/hero-islamic2.webp') center/cover no-repeat;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.55));
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          text-align: center;
          max-width: 850px;
          padding: 0 20px;
          color: white;
        }
        .breadcrumb { margin-bottom: 15px; color: #d1f0e1; }
        .breadcrumb a { color: #86efac; text-decoration: underline; }
        .hero-title { font-size: 48px; font-weight: 700; margin: 20px 0; }
        .hero-subtitle { font-size: 18px; color: #86efac; }

        /* MAIN */
        .gradient-section {
          position: relative;
          padding: 90px 20px;
          background: #ffffff;
        }
        .container { position: relative; z-index: 2; max-width: 1200px; margin: auto; }

        /* TITLES */
        .eyebrow {
          color: #2f855a;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: center;
          margin: 0 0 0.75rem;
        }

        .section-title {
          font-size: 34px;
          font-weight: 800;
          margin-bottom: 12px;
          color: #14532d;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
        }

        .section-subtitle {
          text-align: center;
          color: #4a5568;
          font-size: 1.05rem;
          max-width: 620px;
          margin: 0 auto 50px;
          line-height: 1.7;
        }

        .advantages-eyebrow {
          margin-top: 100px;
        }

        .advantages-title {
          margin-bottom: 45px;
        }

        /* ADVANTAGES */
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
          gap: 30px;
        }
        .adv-card {
          position: relative;
          background: white;
          padding: 40px 25px 30px;
          border-radius: 18px;
          border: 1px solid rgba(26, 71, 42, 0.08);
          box-shadow: 0 15px 40px rgba(26, 71, 42, 0.06);
          text-align: center;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .adv-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #68d391, #2f855a, #1a472a);
        }
        .adv-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 50px rgba(26, 71, 42, 0.14);
        }
        .adv-index {
          position: absolute;
          top: 1.1rem;
          right: 1.25rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 800;
          color: rgba(26, 71, 42, 0.15);
        }
        .adv-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 18px;
          border-radius: 18px;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          font-size: 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 10px 22px rgba(26, 71, 42, 0.28);
        }
        .adv-card h3 {
          color: #14532d;
          font-size: 1.1rem;
          margin-bottom: 0.6rem;
          font-family: 'Montserrat', sans-serif;
        }
        .adv-card p {
          color: #4a5568;
          line-height: 1.6;
          font-size: 0.92rem;
          margin: 0;
        }

        /* COURSES LIST */
        .courses-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .course-row {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          background: white;
          border-radius: 20px;
          padding: 1.75rem 2rem;
          box-shadow: 0 12px 30px rgba(26, 71, 42, 0.07);
          border: 1px solid rgba(26, 71, 42, 0.07);
          transition: all 0.3s ease;
        }
        .course-row:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(26, 71, 42, 0.14);
          border-color: rgba(47, 133, 90, 0.3);
        }

        .course-row-icon {
          flex-shrink: 0;
          width: 72px;
          height: 72px;
          border-radius: 18px;
          font-size: 28px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 10px 22px rgba(26, 71, 42, 0.25);
        }

        .course-row-content {
          flex: 1;
          min-width: 0;
        }

        .course-row-label {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #2f855a;
          margin-bottom: 0.4rem;
        }

        .course-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #14532d;
          margin: 0 0 0.4rem;
          font-family: 'Montserrat', sans-serif;
        }

        .course-desc {
          color: #4a5568;
          line-height: 1.55;
          margin: 0;
          font-size: 0.92rem;
        }

        :global(.start-btn) {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0.75rem 1.4rem;
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 50px;
          text-align: center;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }
        :global(.start-btn:hover) {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #22543d, #38a169);
          box-shadow: 0 15px 35px rgba(22,163,74,0.4);
        }
        .start-btn-arrow {
          transition: transform 0.3s ease;
        }
        :global(.start-btn:hover) .start-btn-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 700px) {
          .course-row {
            flex-wrap: wrap;
            padding: 1.5rem;
          }
          .course-row-icon {
            width: 56px;
            height: 56px;
            font-size: 22px;
          }
          :global(.start-btn) {
            width: 100%;
          }
        }

      `}</style>
    </Layout>
    </>
  );
}
