import Head from "next/head";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";
import {
  FaSitemap,
  FaTrophy,
  FaLandmark,
  FaChalkboardTeacher,
  FaServer,
  FaTasks,
  FaBullhorn,
  FaQuoteLeft
} from "react-icons/fa";

const FALLBACK_HERO_IMAGE = "/careers-office-bg.jpg";

const principles = [
  {
    icon: <FaSitemap />,
    title: "Structure over chaos",
    desc: "Clear roles. Defined deliverables. Operational clarity."
  },
  {
    icon: <FaTrophy />,
    title: "Performance over politics",
    desc: "Progress is based on contribution, not perception."
  },
  {
    icon: <FaLandmark />,
    title: "Institution over short-term gain",
    desc: "We build systems designed to endure and scale."
  }
];

const roleGroups = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Academic & Instruction",
    roles: ["Programming Instructors", "Teaching Assistants", "Technical Mentors", "Curriculum Contributors"]
  },
  {
    icon: <FaServer />,
    title: "Technical & Systems",
    roles: ["Backend Developers", "DevOps Support", "LMS Specialists", "QA Coordinators"]
  },
  {
    icon: <FaTasks />,
    title: "Operations",
    roles: ["Program Coordinators", "Performance Analysts", "Academic Moderators", "Compliance Officers"]
  },
  {
    icon: <FaBullhorn />,
    title: "Digital & Media",
    roles: ["Content Strategists", "Instructional Designers", "UI/UX Support", "Video Specialists"]
  }
];

const values = [
  { title: "Discipline", desc: "Consistency in execution and responsibility." },
  { title: "Structured Thinking", desc: "Clarity in systems, communication, and process." },
  { title: "Accountability", desc: "Ownership of work, outcomes, and commitments." },
  { title: "Integrity", desc: "Ethical conduct in all operational activities." },
  { title: "Long-Term Orientation", desc: "Focus on enduring institutional impact." }
];

const pathwaySteps = ["Project Completion", "Portfolio Refinement", "Interview Preparation", "Employer Introduction"];

const applySteps = [
  "Prepare your resume and relevant work",
  "Email to career@as-saadah.com",
  "Subject: Role – Full Name",
  "Await structured evaluation"
];

export default function CareersPage() {
  const [heroImage, setHeroImage] = useState(FALLBACK_HERO_IMAGE);

  useEffect(() => {
    supabase
      .from("hero_images")
      .select("*")
      .eq("page", "Careers")
      .order("id", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setHeroImage(data[0].image);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Careers | As-Sa'adah IT Boot Camp</title>
        <meta
          name="description"
          content="Explore career pathways, opportunities, and professional growth through As-Sa'adah IT Boot Camp."
        />
        <link rel="icon" href="/images.png" />
      </Head>

    <Layout>

      {/* ================= HERO ================= */}
      <section className="hero-section" style={{ backgroundImage: `url('${heroImage}')` }}>
        <div className="hero-overlay">
          <div className="hero-content">

            <h1 className="hero-title">
              Build Systems. Build People. Build the Future.
            </h1>

            <p className="hero-subtitle">
              A structured educational ecosystem seeking disciplined, capable contributors.
            </p>

          </div>
        </div>
      </section>


      {/* ================= OVERVIEW ================= */}
      <section className="section section-white">
        <div className="container purpose-layout">

          <div className="purpose-text">
            <p className="eyebrow">Who We Are</p>
            <h2>A Long-Term Institution, Not a Short-Term Initiative</h2>

            <p>
              As-Sa&apos;adah is a structured educational ecosystem built through strategic
              collaboration between specialized organizations focused on long-term capability development.
            </p>

            <p>
              We are building disciplined systems — not short-term initiatives.
              We seek individuals aligned with responsibility, rigor, and institutional thinking.
            </p>
          </div>

          <div className="purpose-highlight">
            <span className="quote-icon"><FaQuoteLeft /></span>
            <p>We build systems designed to endure and scale — not projects designed to impress.</p>
          </div>

        </div>
      </section>


      {/* ================= WHY WORK WITH US ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Culture</p>
            <h2>Why Work With Us</h2>
          </div>

          <div className="principles-grid">
            {principles.map((p, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="principle-card" key={index}>
                <div className="principle-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= WHO WE'RE LOOKING FOR ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Open Roles</p>
            <h2>Who We Are Looking For</h2>
          </div>

          <div className="role-grid">
            {roleGroups.map((group, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="role-card" key={index}>
                <div className="role-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <ul>
                  {group.roles.map((role, i) => (
                    <li data-aos="fade" data-aos-delay={Math.min(i * 80, 400)} key={i}>{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= WHAT WE VALUE ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Standards</p>
            <h2>What We Value</h2>
          </div>

          <div className="value-grid">
            {values.map((v, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="value-card" key={index}>
                <span className="value-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= JOB PLACEMENT PATHWAY ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The Pathway</p>
            <h2>Job Placement Pathway</h2>
            <p className="section-lead">
              Structured transition into professional roles based on demonstrated performance and readiness.
            </p>
          </div>

          <div className="pathway-flow">
            {pathwaySteps.map((step, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="pathway-step-wrapper" key={index}>
                <div className="pathway-step">
                  <div className="pathway-circle">{index + 1}</div>
                  <span>{step}</span>
                </div>
                {index < pathwaySteps.length - 1 && <div className="pathway-line" />}
              </div>
            ))}
          </div>

          <div className="pathway-detail">
            <ul>
              <li>Portfolio and GitHub refinement</li>
              <li>Mock technical interviews</li>
              <li>Resume and profile development</li>
              <li>Employer introductions</li>
              <li>Partner organization referrals</li>
            </ul>
            <p className="note">Placement is earned progression — not guaranteed placement.</p>
          </div>
        </div>
      </section>


      {/* ================= HOW TO APPLY / CTA ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Get Started</p>
            <h2>How To Apply</h2>
          </div>

          <div className="apply-grid">
            {applySteps.map((step, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="apply-step-card" key={index}>
                <span className="apply-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>

          <div className="cta-block">
            <h3>Ready to contribute to something lasting?</h3>
            <p>Send us your resume and relevant work to begin the evaluation process.</p>
            <a href="mailto:careers@assaadah.org" className="cta-button">
              Apply Now →
            </a>
          </div>
        </div>
      </section>


      {/* ================= CLOSING ================= */}
      <section className="section section-white">
        <div className="container closing-block">
          <h3 className="closing-title">Institutional Mission Statement</h3>
          <p>
            As-Sa&apos;adah is building a long-term educational institution rooted in discipline,
            capability, and responsibility.
          </p>
          <p className="closing-bold">
            If you are seeking comfort, this may not be for you.
          </p>
          <p className="closing-bold highlight">
            If you are seeking meaningful contribution, we welcome you.
          </p>
        </div>
      </section>


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

/* ============ HERO ============ */
.hero-section {
  position: relative;
  background: url('/careers-office-bg.jpg') center/cover no-repeat;
  min-height: 480px;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(10,30,20,0.72), rgba(10,30,20,0.88));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 clamp(1rem, 5vw, 3rem);
}

.hero-content {
  text-align: center;
  max-width: 900px;
  color: white;
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

/* ============ SECTION SHELL ============ */
.section {
  padding: clamp(3.5rem, 7vw, 6.5rem) clamp(1.25rem, 5vw, 3rem);
  border-top: 1px solid rgba(26, 71, 42, 0.07);
}

.section-white {
  background: #ffffff;
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

/* ============ PRINCIPLES ============ */
.principles-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.principle-card {
  flex: 0 1 320px;
  max-width: 360px;
  background: white;
  padding: 2rem 1.75rem;
  border-radius: 18px;
  border: 1px solid rgba(26, 71, 42, 0.08);
  box-shadow: 0 12px 30px rgba(26, 71, 42, 0.06);
  transition: all 0.3s ease;
}

.principle-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 45px rgba(26, 71, 42, 0.15);
}

.principle-icon {
  width: 54px;
  height: 54px;
  border-radius: 15px;
  background: linear-gradient(135deg, #1a472a, #2f855a);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 18px;
  box-shadow: 0 10px 22px rgba(26, 71, 42, 0.25);
}

.principle-card h3 {
  font-size: 1.1rem;
  color: #14532d;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.principle-card p {
  font-size: 0.92rem;
  color: #4a5568;
  line-height: 1.7;
}

/* ============ ROLES ============ */
.role-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.role-card {
  flex: 0 1 270px;
  max-width: 300px;
  background: white;
  padding: 1.8rem 1.6rem;
  border-radius: 18px;
  border: 1px solid rgba(26, 71, 42, 0.08);
  box-shadow: 0 12px 30px rgba(26, 71, 42, 0.06);
  transition: all 0.3s ease;
}

.role-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(26, 71, 42, 0.13);
}

.role-icon {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: linear-gradient(135deg, #1a472a, #2f855a);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  margin-bottom: 14px;
}

.role-card h3 {
  font-size: 1.05rem;
  color: #14532d;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.role-card ul {
  margin: 0;
  padding-left: 1.1rem;
  color: #4a5568;
  font-size: 0.88rem;
  line-height: 1.8;
}

/* ============ VALUES ============ */
.value-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.value-card {
  position: relative;
  flex: 0 1 220px;
  max-width: 240px;
  background: #f0fdf4;
  border: 1px solid rgba(22, 163, 74, 0.18);
  border-radius: 16px;
  padding: 1.8rem 1.5rem;
  text-align: center;
}

.value-index {
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a472a, #2f855a);
  color: white;
  font-weight: 800;
  font-size: 0.85rem;
  margin-bottom: 14px;
  font-family: 'Montserrat', sans-serif;
}

.value-card h3 {
  font-size: 1rem;
  color: #14532d;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.value-card p {
  font-size: 0.86rem;
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

/* ============ PATHWAY ============ */
.pathway-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0;
  margin-bottom: 2.5rem;
}

.pathway-step-wrapper {
  display: flex;
  align-items: center;
}

.pathway-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 140px;
}

.pathway-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a472a, #2f855a);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  box-shadow: 0 10px 22px rgba(26, 71, 42, 0.3);
}

.pathway-step span {
  font-size: 0.85rem;
  font-weight: 600;
  color: #14532d;
}

.pathway-line {
  flex: 0 0 50px;
  height: 2px;
  background: linear-gradient(90deg, #68d391, #2f855a);
  margin: 0 4px;
}

.pathway-detail {
  max-width: 700px;
  margin: 0 auto;
  background: white;
  border: 1px solid rgba(26, 71, 42, 0.08);
  border-radius: 18px;
  padding: 2rem 2.2rem;
  box-shadow: 0 12px 30px rgba(26, 71, 42, 0.06);
}

.pathway-detail ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a5568;
  line-height: 1.9;
}

.pathway-detail .note {
  margin-top: 16px;
  color: #64748b;
  font-style: italic;
}

/* ============ APPLY GRID ============ */
.apply-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.apply-step-card {
  flex: 0 1 260px;
  max-width: 280px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f0fdf4;
  border: 1px solid rgba(22, 163, 74, 0.18);
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
}

.apply-number {
  font-weight: 800;
  color: #2f855a;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.apply-step-card p {
  margin: 0;
  color: #14532d;
  font-weight: 500;
  font-size: 0.92rem;
}

/* ============ CTA ============ */
.cta-block {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
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

/* ============ CLOSING ============ */
.closing-block {
  max-width: 720px;
  text-align: center;
}

.closing-title {
  font-size: 1.4rem;
  color: #14532d;
  margin-bottom: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}

.closing-block p {
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 12px;
}

.closing-bold {
  font-weight: 700;
  color: #14532d;
}

.closing-bold.highlight {
  color: #2f855a;
}

@media(max-width:900px) {
  .purpose-layout {
    grid-template-columns: 1fr;
  }
}

@media(max-width:768px) {
  .hero-title {
    font-size: 32px;
  }

  .pathway-line {
    display: none;
  }
}

@media(max-width:640px) {
  .principle-card,
  .role-card {
    flex-basis: 100%;
    max-width: 420px;
  }
}

`}</style>

    </Layout>
    </>
  );
}
