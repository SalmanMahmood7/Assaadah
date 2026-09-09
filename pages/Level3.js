import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";

import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaCode,
  FaChalkboardTeacher,
  FaBuilding,
  FaBullseye,
  FaLayerGroup,
  FaQuoteLeft,
  FaCheckCircle
} from "react-icons/fa";

const FALLBACK_ECOSYSTEM_FEATURES = [
  {
    icon: <FaLightbulb />,
    title: "Idea Validation",
    desc: "Structured evaluation and refinement of startup concepts."
  },
  {
    icon: <FaCode />,
    title: "Product Development",
    desc: "Technical guidance to build functional prototypes."
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Mentorship",
    desc: "Supervision from experienced professionals."
  },
  {
    icon: <FaUsers />,
    title: "Collaborative Teams",
    desc: "Work within disciplined, structured startup teams."
  },
  {
    icon: <FaBuilding />,
    title: "Incubation Environment",
    desc: "Operate within a focused and accountable ecosystem."
  },
  {
    icon: <FaRocket />,
    title: "Execution Discipline",
    desc: "Structured pathway toward real startup execution."
  }
];

const FALLBACK_INCUBATION_POINTS = [
  "Idea validation workshops",
  "Technical product development supervision",
  "Mentorship from experienced professionals",
  "Structured execution discipline",
  "Collaborative startup team environment"
];

export default function LevelThreePage() {
  const [ecosystemFeatures, setEcosystemFeatures] = useState(FALLBACK_ECOSYSTEM_FEATURES);
  const [incubationPoints, setIncubationPoints] = useState(FALLBACK_INCUBATION_POINTS);
  const [heroImage, setHeroImage] = useState("/hero-islamic2.webp");

  useEffect(() => {
    supabase
      .from("hero_images")
      .select("*")
      .eq("page", "Level 3")
      .order("id", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setHeroImage(data[0].image);
      });

    supabase
      .from("courses")
      .select("*")
      .eq("level", "Level 3")
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setEcosystemFeatures(
          data.map((row) => ({ icon: <FaLightbulb />, title: row.title, desc: row.focus }))
        );
      });

    supabase
      .from("level_rules")
      .select("*")
      .eq("level", "Level 3")
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setIncubationPoints(data.map((row) => row.rule));
      });
  }, []);

  const stats = [
    { icon: <FaRocket />, label: "Track", value: "Startup Incubation" },
    { icon: <FaUsers />, label: "Format", value: "Team-Based" },
    { icon: <FaBullseye />, label: "Model", value: "Performance-Based" },
    { icon: <FaLayerGroup />, label: "Access", value: "Selective Council" }
  ];

  return (
    <>
    <Head>
  <title>Level 3 | Specialization & Career Track | As-Sa'adah IT Boot Camp</title>
  <meta
    name="description"
    content="Level 3 Specialization Program preparing students for professional careers in AI, software development, and advanced IT fields."
  />
  <link rel="icon" href="/images.png" />
</Head>
    <Layout>

      {/* ================= HERO ================= */}
      <section className="hero-section" style={{ backgroundImage: `url('${heroImage}')` }}>
        <div className="hero-overlay">
          <div className="hero-content">

            <p className="breadcrumb">
              <Link href="/">Home</Link> / Level 3
            </p>

            <span className="hero-badge">Level 03 &middot; Startup Ecosystem</span>

            <h1 className="hero-title">
              Startup Ecosystem & Incubation
            </h1>

            <p className="hero-subtitle">
              For those who aim higher than employment.
            </p>

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


      {/* ================= PROGRAM PURPOSE ================= */}
      <section className="section section-white section-after-hero">
        <div className="container purpose-layout">

          <div className="purpose-text">
            <p className="eyebrow">Program Purpose</p>
            <h2>Beyond Job Readiness</h2>

            <p>
              Beyond job readiness, Assaada&apos;h provides a structured Startup Ecosystem
              for high-potential participants who demonstrate discipline,
              capability, and execution readiness.
            </p>

            <p>
              Selected teams are supported to develop structured startup ideas,
              build technical prototypes, and operate within a disciplined
              incubation environment.
            </p>
          </div>

          <div className="purpose-highlight">
            <span className="quote-icon"><FaQuoteLeft /></span>
            <p>This ecosystem is selective, structured, and performance-based.</p>
          </div>

        </div>
      </section>


      {/* ================= ECOSYSTEM STRUCTURE ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Ecosystem Structure</p>
            <h2>What The Council Provides</h2>
          </div>

          <div className="features-grid">
            {ecosystemFeatures.map((item, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="feature-card" key={index}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= INCUBATION ENVIRONMENT ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Incubation Environment</p>
            <h2>Structured Support, From Idea To Execution</h2>
          </div>

          <div className="eligibility-grid">
            {incubationPoints.map((point, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} key={index} className="eligibility-card">
                <span className="eligibility-check"><FaCheckCircle /></span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= OUR OBJECTIVE ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our Objective</p>
            <h2>Founders Who Combine Skill With Integrity</h2>
            <p className="section-lead">
              Our goal is to nurture responsible, value-driven founders
              who combine technical skill with integrity, discipline,
              and accountability.
            </p>
          </div>

          <div className="strict-grid">
            <div className="strict-card">
              <p>Selection is performance-based.</p>
            </div>
            <div className="strict-card">
              <p>Participation is earned, not granted.</p>
            </div>
            <div className="strict-card">
              <p>Execution discipline is mandatory.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="section section-white">
        <div className="container cta-block">
          <h3>Ready to build something real?</h3>
          <p>Explore the full program structure and see where Level 3 leads.</p>
          <div className="cta-actions">
            <Link href="/admission-terms?level=level3" className="cta-button">
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

/* ============ FEATURES GRID ============ */
.features-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.feature-card {
  flex: 0 1 320px;
  max-width: 360px;
  background: white;
  padding: 2rem 1.75rem;
  border-radius: 18px;
  border: 1px solid rgba(26, 71, 42, 0.08);
  box-shadow: 0 12px 30px rgba(26, 71, 42, 0.06);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 45px rgba(26, 71, 42, 0.15);
}

.feature-icon {
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

.feature-card h3 {
  font-size: 1.15rem;
  color: #14532d;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.feature-card p {
  font-size: 0.92rem;
  color: #4a5568;
  line-height: 1.7;
}

/* ============ ELIGIBILITY / INCUBATION GRID ============ */
.eligibility-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.eligibility-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: white;
  border: 1px solid rgba(22, 163, 74, 0.18);
  padding: 1.6rem 1.5rem;
  border-radius: 16px;
  color: #14532d;
  font-weight: 500;
  box-shadow: 0 10px 26px rgba(26, 71, 42, 0.05);
  transition: all 0.3s ease;
}

.eligibility-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 34px rgba(26, 71, 42, 0.12);
}

.eligibility-check {
  color: #16a34a;
  font-size: 1.2rem;
  margin-top: 2px;
  flex-shrink: 0;
}

/* ============ STRICT GRID ============ */
.strict-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;
}

.strict-card {
  background: #f0fdf4;
  border: 1px solid rgba(47, 133, 90, 0.2);
  border-radius: 14px;
  padding: 1.4rem 1.4rem;
  text-align: center;
}

.strict-card p {
  color: #14532d;
  margin: 0;
  font-weight: 600;
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

:global(.cta-button:hover) {
  transform: translateY(-3px);
  box-shadow: 0 20px 42px rgba(26, 71, 42, 0.4);
  background: linear-gradient(135deg, #22543d, #38a169);
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
}

@media(max-width:640px) {
  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    bottom: -95px;
  }

  .section-after-hero {
    padding-top: calc(clamp(3.5rem, 7vw, 6.5rem) + 95px);
  }

  .feature-card {
    flex-basis: 100%;
    max-width: 420px;
  }
}

`}</style>

    </Layout>
    </>
  );
}
