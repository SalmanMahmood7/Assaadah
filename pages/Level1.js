import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";
import {
  FaClock,
  FaLaptop,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaCheckCircle,
  FaBrain,
  FaCode,
  FaBug,
  FaUsers,
  FaRobot,
  FaTimesCircle,
  FaQuoteLeft,
  FaUniversity,
  FaMobileAlt,
  FaPaintBrush,
  FaLanguage,
  FaBullhorn,
  FaBook
} from "react-icons/fa";

const FALLBACK_ELIGIBILITY = [
  "Male & Female Madaris Graduates (Separate Classes)",
  "Absolute beginners welcome",
  "Those willing to commit 2–3 hours daily",
  "Those ready to follow strict deadlines and discipline",
];

const FALLBACK_LEARNING_TOPICS = [
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design & Figma",
    points: [
      "Figma fundamentals — frames, auto layout, components & prototyping",
      "Graphic design essentials: social media posts, posters, logos & branding",
      "Mobile app UI design with interactive prototyping (Smart Animate)",
      "Responsive website UI design, from wireframes to a complete landing page"
    ]
  },
  {
    icon: <FaCode />,
    title: "Python, VS Code & GitHub",
    points: [
      "Python fundamentals: variables, conditionals, loops & functions",
      "Data structures — lists, dictionaries, tuples & sets",
      "Object-oriented programming, file handling & error handling",
      "Git, GitHub, APIs, SQLite databases & a final capstone project"
    ]
  },
  {
    icon: <FaLanguage />,
    title: "Executive English Language",
    points: [
      "Foundation grammar: parts of speech, nouns, verbs & tenses",
      "Tense transformation and connected sentence structures",
      "Modal auxiliary verbs for ability, obligation & deduction",
      "Conditional sentences and practical communication skills"
    ]
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing & Freelancing",
    points: [
      "Digital marketing fundamentals, SEO & marketing funnels",
      "Competitor research, brand analysis & AI tools for marketing",
      "Meta Business Suite, Facebook Pages & Ads campaigns",
      "Client hunting and freelancing to launch a marketing career"
    ]
  }
];

const LEARNING_TOPIC_ICONS = [
  { match: /ui\/?ux|figma|design/i, icon: <FaPaintBrush /> },
  { match: /python|github|code|git/i, icon: <FaCode /> },
  { match: /english|language/i, icon: <FaLanguage /> },
  { match: /marketing|freelanc/i, icon: <FaBullhorn /> }
];

function iconForTopicTitle(title) {
  const found = LEARNING_TOPIC_ICONS.find(({ match }) => match.test(title || ""));
  return found ? found.icon : <FaBrain />;
}

const COURSE_DETAILS = [
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design & Figma",
    summary: "From Figma fundamentals to complete, portfolio-ready UI/UX projects.",
    phases: [
      { title: "Figma Basics", desc: "Interface, layout, typography & color theory" },
      { title: "Graphic Design", desc: "Social posts, posters, logos & branding" },
      { title: "Mobile UI", desc: "App screens, prototyping & interactive flows" },
      { title: "Website UI", desc: "Wireframes to a complete responsive website" }
    ]
  },
  {
    icon: <FaCode />,
    title: "Python, VS Code & GitHub",
    summary: "A builder-challenge format — from the basics to a GitHub capstone project.",
    phases: [
      { title: "Python Foundations", desc: "Variables, loops, functions & data structures" },
      { title: "OOP & Files", desc: "Classes, objects & persistent file storage" },
      { title: "Git & APIs", desc: "Version control, APIs & SQLite databases" },
      { title: "Capstone Project", desc: "Build, document & publish to GitHub" }
    ]
  },
  {
    icon: <FaLanguage />,
    title: "Executive English Language",
    summary: "Building grammar accuracy into confident, real-world communication.",
    phases: [
      { title: "Foundation Grammar", desc: "Parts of speech, verbs & tenses" },
      { title: "Tense Transformation", desc: "English & Urdu tense conversion" },
      { title: "Connected Sentences", desc: "Past, present & future in context" },
      { title: "Modal Verbs", desc: "Ability, obligation & deduction" },
      { title: "Conditionals", desc: "Real & unreal situations, final review" }
    ]
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing & Freelancing",
    summary: "From marketing fundamentals to running campaigns and freelancing.",
    phases: [
      { title: "Marketing Basics", desc: "SEO, funnels & organic vs. paid" },
      { title: "Digital Tools", desc: "AI tools, Gmail & Facebook setup" },
      { title: "Research", desc: "Competitor & brand analysis" },
      { title: "Meta & Ads", desc: "Business Suite & Facebook Ads campaigns" },
      { title: "Freelancing", desc: "Client hunting & launching a career" }
    ]
  }
];

export default function LevelOnePage() {
  const [eligibilityPoints, setEligibilityPoints] = useState(FALLBACK_ELIGIBILITY);
  const [learningTopics, setLearningTopics] = useState(FALLBACK_LEARNING_TOPICS);
  const [activeCourse, setActiveCourse] = useState(0);
  const [heroImage, setHeroImage] = useState("/hero-islamic2.webp");
  const [applyFormUrl, setApplyFormUrl] = useState("https://forms.gle/BFadm5ZTHHpTtoWCA");

  useEffect(() => {
    supabase
      .from("apply_form_links")
      .select("formUrl")
      .eq("level", "Level 1")
      .maybeSingle()
      .then(({ data }) => {
        if (data?.formUrl) setApplyFormUrl(data.formUrl);
      });

    supabase
      .from("hero_images")
      .select("*")
      .eq("page", "Level 1")
      .order("id", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setHeroImage(data[0].image);
      });

    supabase
      .from("level_rules")
      .select("*")
      .eq("level", "Level 1")
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setEligibilityPoints(data.map((row) => row.rule));
      });

    supabase
      .from("courses")
      .select("*")
      .eq("level", "Level 1")
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setLearningTopics(
          data.map((row) => ({
            icon: iconForTopicTitle(row.title),
            title: row.title,
            points: (row.focus || "").split("\n").map((s) => s.trim()).filter(Boolean)
          }))
        );
      });
  }, []);

  const stats = [
    { icon: <FaClock />, label: "Duration", value: "2 Months" },
    { icon: <FaLaptop />, label: "Mode", value: "Online" },
    { icon: <FaBook />, label: "Courses Taught", value: `${learningTopics.length}` },
    { icon: <FaCalendarCheck />, label: "Daily Commitment", value: "2–3 Hours" },
    { icon: <FaMoneyBillWave />, label: "Monthly Fee", value: "Rs. 5,000" }
  ];

  const evaluationCriteria = ["Logical clarity", "Consistency", "Submission discipline", "Team participation", "Delivery under deadline"];

  const paymentMethods = [
    {
      icon: <FaUniversity />,
      title: "Bank Transfer",
      details: [
        { label: "Bank", value: "Faysal Bank" },
        { label: "Account Name", value: "AS-SA-ADAH INTERNATIONAL" },
        { label: "IBAN", value: "PK34FAYS3483301000003457" }
      ]
    },
    {
      icon: <FaMobileAlt />,
      title: "Easypaisa / JazzCash",
      details: [
        { label: "Account Title", value: "MUNEER AHMED ALVI" },
        { label: "Number", value: "0321 8823953" }
      ]
    }
  ];

  return (
    <>
    <Head>
  <title>Level 1 | Foundations Program | As-Sa'adah IT Boot Camp</title>
  <meta
    name="description"
    content="Level 1 Foundations Program at As-Sa'adah IT Boot Camp covering computer fundamentals, digital literacy, and core IT skills."
  />
  <link rel="icon" href="/images.png" />
</Head>

    <Layout>

      {/* ================= HERO ================= */}
      <section className="hero-section" style={{ backgroundImage: `url('${heroImage}')` }}>
        <div className="hero-overlay">
          <div className="hero-content">

            <span className="hero-badge">Level 01 &middot; Foundation Phase</span>

            <h1 className="hero-title">
              Preparatory Technology & Capability Program
            </h1>

            <p className="hero-subtitle">
              2 Month Online Preparatory Course
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


      {/* ================= PURPOSE ================= */}
      <section className="section section-white section-after-hero">
        <div className="container purpose-layout">

          <div className="purpose-text">
            <p className="eyebrow">Why This Program Exists</p>
            <h2>Purpose of This Program</h2>

            <p>
              Madaris produce disciplined, principled and knowledgeable graduates.
              However, many graduates lack structured exposure to modern technical skills,
              logical problem-solving training, and pathways toward dignified economic participation.
            </p>

            <p>
              Assaada&apos;h has designed a structured, performance-based preparatory program
              to bridge this gap — while maintaining discipline, seriousness, and dignity.
            </p>
          </div>

          <div className="purpose-highlight">
            <span className="quote-icon"><FaQuoteLeft /></span>
            <p>This is not a casual IT course. It is a structured capability-building phase.</p>
          </div>

        </div>
      </section>


      {/* ================= WHO THIS PROGRAM IS FOR ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Eligibility</p>
            <h2>Who This Program Is For</h2>
          </div>

          <div className="eligibility-grid">
            {eligibilityPoints.map((point, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} key={index} className="eligibility-card">
                <span className="eligibility-check"><FaCheckCircle /></span>
                <p>{point}</p>
              </div>
            ))}
          </div>

          <p className="note">No prior programming knowledge is required.</p>
        </div>
      </section>


      {/* ================= WHAT STUDENTS LEARN ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Curriculum</p>
            <h2>What Students Will Learn</h2>
            <p className="section-lead">
              The program focuses on thinking and discipline before advanced technology.
            </p>
          </div>

          <div className="learning-grid">
            {learningTopics.map((topic, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="learning-card" key={index}>
                <span className="learning-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="learning-icon">{topic.icon}</div>
                <h3>{topic.title}</h3>
                <ul>
                  {topic.points.map((point, i) => (
                    <li data-aos="fade" data-aos-delay={Math.min(i * 80, 400)} key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= COURSE CURRICULUM DETAILS ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">In-Depth Breakdown</p>
            <h2>Course Curriculum in Detail</h2>
            <p className="section-lead">
              Select a course to see what it covers.
            </p>
          </div>

          <div className="course-tabs" role="tablist">
            {COURSE_DETAILS.map((course, index) => (
              <button data-aos="fade" data-aos-delay={Math.min(index * 80, 400)}
                type="button"
                key={course.title}
                role="tab"
                aria-selected={activeCourse === index}
                className={`course-tab ${activeCourse === index ? "active" : ""}`}
                onClick={() => setActiveCourse(index)}
              >
                <span className="course-tab-icon">{course.icon}</span>
                {course.title}
              </button>
            ))}
          </div>

          <div className="course-tab-panel">
            <p className="course-tab-summary">{COURSE_DETAILS[activeCourse].summary}</p>
            <div className="phase-grid">
              {COURSE_DETAILS[activeCourse].phases.map((phase) => (
                <div data-aos="fade" className="phase-card" key={phase.title}>
                  <h4>{phase.title}</h4>
                  <p>{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= DISCIPLINE ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Standards</p>
            <h2>Discipline & Structure</h2>
            <p className="section-lead">
              This program is strictly performance-based. Students are evaluated weekly on:
            </p>
          </div>

          <div className="criteria-tags">
            {evaluationCriteria.map((c, i) => (
              <span data-aos="fade" data-aos-delay={Math.min(i * 80, 400)} key={i} className="criteria-tag">{c}</span>
            ))}
          </div>

          <div className="strict-grid">
            <div className="strict-card">
              <span className="strict-icon"><FaTimesCircle /></span>
              <p>No shortcuts</p>
            </div>
            <div className="strict-card">
              <span className="strict-icon"><FaTimesCircle /></span>
              <p>No favoritism</p>
            </div>
            <div className="strict-card">
              <span className="strict-icon"><FaTimesCircle /></span>
              <p>No guaranteed progression</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= EDUCATIONAL PHILOSOPHY ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our Approach</p>
            <h2>Educational Philosophy</h2>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card red-card">
              <span className="philosophy-icon red"><FaTimesCircle /></span>
              <h4>This program does NOT:</h4>
              <ul>
                <li>Replace Deeni education</li>
                <li>Interfere with religious identity</li>
                <li>Compromise values</li>
              </ul>
            </div>

            <div className="philosophy-card">
              <span className="philosophy-icon"><FaCheckCircle /></span>
              <h4>It aims to:</h4>
              <ul>
                <li>Strengthen structured thinking</li>
                <li>Build technical literacy</li>
                <li>Prepare graduates for dignified economic participation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ================= FEE & PAYMENT ================= */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Reserve Your Seat</p>
            <h2>Cooperative Fund Payment</h2>
            <p className="section-lead">
              To reserve your seat, submit the cooperative fund for the two-month introductory
              course: <strong>PKR 5,000</strong>, via either of the following methods.
            </p>
          </div>

          <div className="payment-grid">
            {paymentMethods.map((method, index) => (
              <div data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="payment-card" key={index}>
                <div className="payment-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <ul>
                  {method.details.map((d, i) => (
                    <li data-aos="fade" data-aos-delay={Math.min(i * 80, 400)} key={i}><strong>{d.label}:</strong> {d.value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="payment-note">
            After paying, send the transaction receipt (screenshot) to our admissions team so
            your registration can be completed and you can be added to the final class group.
          </p>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="section section-white">
        <div className="container cta-block">
          <h3>Ready to begin Level 1?</h3>
          <p>Take the first step toward structured capability building.</p>
          <div className="cta-actions">
            <a
              href={applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Apply Now
            </a>
            <Link href="/courses" className="cta-button-secondary">
              Back to Courses
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
  background: linear-gradient(to bottom, rgba(10,30,20,0.65), rgba(10,30,20,0.82));
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

/* STATS BAR — straddles the hero / white section boundary */
.stats-bar {
  position: absolute;
  left: 50%;
  bottom: -70px;
  transform: translateX(-50%);
  z-index: 5;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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

/* ============ ELIGIBILITY ============ */
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

.note {
  margin-top: 24px;
  font-style: italic;
  color: #475569;
  text-align: center;
}

/* ============ LEARNING GRID ============ */
.learning-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.learning-card {
  position: relative;
  background: white;
  border-radius: 18px;
  padding: 2rem 1.75rem;
  border: 1px solid rgba(26, 71, 42, 0.08);
  box-shadow: 0 12px 30px rgba(26, 71, 42, 0.06);
  transition: all 0.3s ease;
  overflow: hidden;
}

.learning-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #68d391, #2f855a, #1a472a);
}

.learning-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 45px rgba(26, 71, 42, 0.15);
}

.learning-index {
  position: absolute;
  top: 1.4rem;
  right: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: rgba(26, 71, 42, 0.1);
}

.learning-icon {
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

.learning-card h3 {
  font-size: 1.15rem;
  color: #14532d;
  margin-bottom: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.learning-card ul {
  margin: 0;
  padding-left: 1.1rem;
  color: #4a5568;
  font-size: 0.92rem;
  line-height: 1.8;
}

/* ============ COURSE CURRICULUM DETAILS ============ */
.course-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.course-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 1.5px solid rgba(26, 71, 42, 0.15);
  color: #1a472a;
  padding: 0.65rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.course-tab:hover {
  border-color: #1a472a;
}

.course-tab.active {
  background: linear-gradient(135deg, #1a472a, #2f855a);
  border-color: transparent;
  color: white;
  box-shadow: 0 10px 25px rgba(26, 71, 42, 0.3);
}

.course-tab-icon {
  display: flex;
  font-size: 1rem;
}

.course-tab-panel {
  background: #f8fafc;
  border-radius: 20px;
  padding: 2rem clamp(1.25rem, 4vw, 2.5rem);
}

.course-tab-summary {
  text-align: center;
  color: #4a5568;
  font-size: 1rem;
  margin: 0 0 1.75rem;
}

.phase-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.phase-card {
  background: white;
  border-radius: 14px;
  padding: 1.5rem;
  border: 1px solid rgba(26, 71, 42, 0.08);
  box-shadow: 0 8px 20px rgba(26, 71, 42, 0.05);
}

.phase-card h4 {
  font-size: 0.98rem;
  color: #14532d;
  margin: 0 0 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.phase-card p {
  margin: 0;
  color: #4a5568;
  font-size: 0.88rem;
  line-height: 1.55;
}

@media (max-width: 1100px) {
  .phase-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .phase-grid {
    grid-template-columns: 1fr;
  }

  .course-tab-panel {
    padding: 1.5rem 1.25rem;
  }
}

/* ============ DISCIPLINE ============ */
.criteria-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  margin: 0 0 3rem;
}

.criteria-tag {
  background: #f0fdf4;
  color: #2f855a;
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  border: 1px solid rgba(47, 133, 90, 0.25);
}

.strict-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;
}

.strict-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border: 1px solid rgba(220, 38, 38, 0.15);
  border-radius: 14px;
  padding: 1.3rem 1.4rem;
  box-shadow: 0 10px 26px rgba(26, 71, 42, 0.05);
}

.strict-card p {
  color: #14532d;
  margin: 0;
  font-weight: 600;
}

.strict-icon {
  color: #dc2626;
  display: flex;
  font-size: 1.2rem;
  flex-shrink: 0;
}

/* ============ PHILOSOPHY ============ */
.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
}

.philosophy-card {
  position: relative;
  background: #f0fdf4;
  border: 1px solid rgba(22, 163, 74, 0.2);
  padding: 2.5rem 2.2rem;
  border-radius: 20px;
}

.philosophy-card.red-card {
  border-color: rgba(220, 38, 38, 0.2);
  background: #fef2f2;
}

.philosophy-icon {
  display: inline-flex;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a472a, #2f855a);
  color: white;
  font-size: 20px;
  margin-bottom: 1.2rem;
}

.philosophy-icon.red {
  background: linear-gradient(135deg, #dc2626, #991b1b);
}

.philosophy-card h4 {
  margin-bottom: 14px;
  color: #14532d;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.15rem;
}

.philosophy-card.red-card h4 {
  color: #991b1b;
}

.philosophy-card ul {
  margin-left: 20px;
  color: #475569;
  line-height: 1.9;
}

/* ============ FEE & PAYMENT ============ */
.payment-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.payment-card {
  flex: 0 1 320px;
  max-width: 360px;
  background: #f0fdf4;
  border: 1px solid rgba(22, 163, 74, 0.2);
  border-radius: 18px;
  padding: 1.75rem 1.6rem;
}

.payment-icon {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: linear-gradient(135deg, #1a472a, #2f855a);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 14px;
  box-shadow: 0 8px 20px rgba(26, 71, 42, 0.25);
}

.payment-card h3 {
  font-size: 1.05rem;
  color: #14532d;
  margin-bottom: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.payment-card ul {
  margin: 0;
  padding-left: 1.1rem;
  color: #4a5568;
  font-size: 0.92rem;
  line-height: 1.9;
}

.payment-card li strong {
  color: #14532d;
}

.payment-note {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  color: #64748b;
  font-size: 0.92rem;
  font-style: italic;
  line-height: 1.7;
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

@media(max-width: 1100px) {
  .learning-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(max-width: 900px) {
  .purpose-layout {
    grid-template-columns: 1fr;
  }
}

@media(max-width: 640px) {
  .hero-section {
    padding-bottom: 2rem;
  }

  .stats-bar {
    position: static;
    left: auto;
    bottom: auto;
    transform: none;
    grid-template-columns: repeat(2, 1fr);
    margin: -50px auto 0;
  }

  .section-after-hero {
    padding-top: clamp(3.5rem, 7vw, 6.5rem);
  }

  .learning-grid {
    grid-template-columns: 1fr;
  }
}

`}</style>

    </Layout>
    </>
  );
}
