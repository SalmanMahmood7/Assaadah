import Head from "next/head";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "../lib/supabaseClient";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaClipboardCheck,
  FaCoins,
  FaUsers,
  FaUniversity,
  FaMobileAlt,
  FaLock,
  FaExclamationTriangle
} from "react-icons/fa";

const programOverview =
  "As-sa'adah Foundation, in partnership with Prepreneurship Pvt Ltd, operates a structured, performance-driven capability model designed to elevate graduates of traditional seminaries (Madaris) into visionary leaders, software engineers, and digital entrepreneurs. Advancement across each tier is strictly merit-based and tied to verifiable milestones.";

const levels = [
  {
    id: "level1",
    icon: <FaGraduationCap />,
    name: "Level 1",
    title: "Online Preparatory Phase",
    tagline: "Foundational Capability",
    format: "2 Months | Online / Remote",
    focus:
      "Logical Thinking, Python Programming Fundamentals, Data Handling, Debugging Mindset, Responsible AI Usage, and Collaborative Workflows.",
    groups: [
      {
        heading: "Eligibility Requirements",
        intro: "To be eligible for Level 1 admission, applicants must satisfy the following baseline criteria:",
        items: [
          {
            label: "Academic & Scholarly Qualification",
            text: "Must be a qualified graduate of the traditional seminary system with a completed Dars-e-Nizami degree (Aalim-e-Deen / recognized Shahadat-ul-Almiya equivalent) or advanced senior-year student. Candidates should have a firm background in classical Islamic sciences."
          },
          {
            label: "Hardware & Digital Literacy",
            text: "Must own or have daily access to a functional laptop/computer and possess solid foundational proficiency in operating computer systems, file management, and browser environments."
          },
          {
            label: "Linguistic Competence",
            text: "Must demonstrate functional understanding of both Arabic (to engage classical Islamic sources and texts) and English (sufficient to read technical programming documentation, IDE interfaces, and digital resources)."
          },
          {
            label: "Time Commitment",
            text: "Must be able to dedicate 2 to 3 hours daily of uninterrupted, focused study and assignment completion."
          },
          {
            label: "Learning Disposition",
            text: "Must be an absolute beginner willing to learn technical disciplines from first principles, receptive to critique, and prepared for rigorous accountability."
          }
        ]
      },
      {
        heading: "Rules & Operational Regulations",
        items: [
          {
            label: "Registration & Funnel Completion",
            text: "Must successfully pass the 3-step application funnel (Basic Information, Intent & Commitment Filter, and LMS Confirmation)."
          },
          {
            label: "Tuition & Scholarship Terms",
            text: "Preparatory tuition is Rs. 5,000 per month. Performance-based and need-based fee waivers are awarded conditionally upon verification of financial need and academic promise."
          },
          {
            label: "Attendance & Deadlines",
            text: "Students must maintain a minimum attendance rate of 85% for live sessions and submit all assigned coding exercises within established deadlines."
          },
          {
            label: "Academic Integrity",
            text: "Submissions must reflect the student's individual problem-solving. While responsible AI tooling is taught, unauthorized copying or unattributed AI-generated code will result in immediate disqualification."
          }
        ]
      }
    ]
  },
  {
    id: "level2",
    icon: <FaLaptopCode />,
    name: "Level 2",
    title: "Physical Residential Bootcamp",
    tagline: "Immersive Engineering",
    format: "Immersive, In-Person Residential Bootcamp | As-sa'adah Center, Islamabad",
    focus:
      "Full-Stack Web Development, VR/360° Media Engineering, Cloud Infrastructure, Live Industry Projects, and Soft Skills.",
    groups: [
      {
        heading: "Eligibility Requirements",
        intro: "Admission to the physical bootcamp is strictly competitive and earned through demonstrated competence in Level 1:",
        items: [
          {
            label: "Level 1 Completion Benchmark",
            text: "Candidates must have successfully completed the entire 2-month Level 1 Online Preparatory Course."
          },
          {
            label: "Performance Threshold (80%+)",
            text: "Candidates must achieve an overall aggregate evaluation score of 80% or higher across Level 1."
          },
          {
            label: "Evaluation Metrics",
            text: "The 80% benchmark is calculated through:",
            subList: [
              "Regularity and quality of daily programming assignments and homework submissions.",
              "Punctuality, attendance, and active participation in class discussions.",
              "Comprehensive Level 1 final capstone exam and logical thinking assessment."
            ]
          }
        ]
      },
      {
        heading: "Funding & Scholarship Model",
        items: [
          {
            label: "100% Fully Funded",
            text: "Candidates meeting the 80%+ threshold who are selected by the admissions committee receive a comprehensive scholarship covering tuition, technical mentoring, workspace, and residential facilities."
          },
          {
            label: "Zero Public Quotas",
            text: "Selection is evaluated purely on merit, logical clarity, and discipline; no regional, demographic, or seminary quotas are applied."
          }
        ]
      },
      {
        heading: "Rules & Operational Regulations",
        items: [
          {
            label: "Full-Time On-Campus Commitment",
            text: "Selected candidates must relocate to the As-sa'adah campus for the full duration of the bootcamp. Full-time presence is mandatory."
          },
          {
            label: "Professional & Residential Conduct",
            text: "Residents must adhere to high standards of Islamic moral character (Akhlaq), mutual respect, and focused discipline. Sectarian debates, disruptive behavior, or violations of residential safety guidelines result in immediate expulsion."
          },
          {
            label: "Project Delivery",
            text: "Candidates must complete live client/industry project modules and successfully present their final engineering portfolios."
          }
        ]
      }
    ]
  },
  {
    id: "level3",
    icon: <FaRocket />,
    name: "Level 3",
    title: "Ilm to Impact — Startup Council & Incubation Center",
    tagline: '"Live & Work" Ecosystem',
    format: "On-Campus Venture Incubation & Ecosystem Residency | As-sa'adah Center, Islamabad",
    focus: "Venture Building, Product Commercialization, Shariah-Compliant Tech Startups, and Enterprise Scaling.",
    concept:
      "Level 3 is not an academic class—it is an active startup incubator and entrepreneurial ecosystem. Eligible graduates are invited to live, work, and build directly within the As-sa'adah center. The institution provides an end-to-end commercialization environment with full institutional backing and specialized departmental resources.",
    groups: [
      {
        heading: "Eligibility Requirements",
        items: [
          {
            label: "Level 2 Performance Benchmark (80%+)",
            text: "Candidates must have demonstrated an exemplary performance score of 80% or higher during the Level 2 Physical Residential Bootcamp."
          },
          {
            label: "Clear & Viable Project Concept",
            text: "The candidate must formulate and pitch a distinct, well-defined idea—such as launching an innovative technology startup, building a digital product, spearheading a Shariah-compliant enterprise, or developing a specialized software/media project."
          },
          {
            label: "Pitch Defense",
            text: "Ideas must be formally presented to the Ilm to Impact Review Board and evaluated on feasibility, market relevance, ethical alignment, and execution capacity."
          }
        ]
      },
      {
        heading: "Complete Institutional Ecosystem Support",
        intro: "Once admitted to Level 3, founders and project leads receive comprehensive operational support:",
        items: [
          {
            label: '"Live & Work" Campus Facility',
            text: "Approved candidates receive dedicated co-living accommodations and co-working workspace inside the campus to focus exclusively on their ventures."
          },
          {
            label: "Integrated In-House Teams",
            text: "Founders are not left to build alone. As-sa'adah deploys specialized organizational units to accelerate their ventures, including:",
            subList: [
              "Marketing & Growth Team: Branding, social media marketing, campaign design, and audience acquisition.",
              "Production & Creative Team: High-end multimedia production, video production, graphic design, and UI/UX prototyping.",
              "Sales & Business Development Team: Lead generation, client outreach, B2B pipeline development, and revenue architecture.",
              "Operational Assistants & Support Staff: Logistics, administrative facilitation, and day-to-day office infrastructure."
            ]
          },
          {
            label: "Mentorship & Advisory",
            text: "Continuous strategic guidance from senior industry entrepreneurs, Shariah advisors, and technical leaders."
          },
          {
            label: "Funding & Market Access",
            text: "Assistance with seed support, client connections, and investor introductions."
          }
        ]
      },
      {
        heading: "Rules & Governance",
        items: [
          {
            label: "Milestone Accountability",
            text: "Continued residency within the \"Live and Work\" incubator is contingent upon meeting scheduled product and commercial milestones."
          },
          {
            label: "Ethical Compliance",
            text: "All incubated products and business practices must comply strictly with Islamic ethical and Shariah guidelines."
          },
          {
            label: "Collaborative Stewardship",
            text: "Level 3 founders are expected to mentor incoming cohorts and contribute to the flourishing of the broader As-sa'adah community."
          }
        ]
      }
    ]
  }
];

const cooperativeFundInfo = {
  title: "Reserve Your Seat: Cooperative Fund",
  description:
    "To reserve your seat in this program, the next step is to submit the cooperative fund. The cooperative fund for the two-month introductory course is PKR 5,000. You can submit it through either of the following methods:",
  bankTransfer: {
    icon: <FaUniversity />,
    heading: "Bank Transfer",
    details: [
      { label: "Bank", value: "Faysal Bank" },
      { label: "Account Name", value: "AS-SA-ADAH INTERNATIONAL" },
      { label: "IBAN", value: "PK34FAYS3483301000003457" }
    ]
  },
  mobileWallet: {
    icon: <FaMobileAlt />,
    heading: "Easypaisa / JazzCash",
    details: [
      { label: "Account Title", value: "MUNEER AHMED ALVI" },
      { label: "Easypaisa Number", value: "0321 8823953" }
    ]
  },
  note:
    "After submitting the cooperative fund, please send the transaction receipt (screenshot) to our admissions team so your registration can be completed and you can be added to the final class group."
};

const disciplinaryNotice = {
  title: "Academic Performance and Disciplinary Action",
  items: [
    "Expulsion from institution.",
    "Payment of full monthly accommodation and meal costs for the corresponding period."
  ]
};

export default function AdmissionTerms() {
  const router = useRouter();
  const [activeLevel, setActiveLevel] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [verifiedLevels, setVerifiedLevels] = useState({});
  const [studentId, setStudentId] = useState("");
  const [idError, setIdError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [formLinks, setFormLinks] = useState({ "Level 1": "https://forms.gle/BFadm5ZTHHpTtoWCA" });
  const [comingSoon, setComingSoon] = useState(false);

  const current = levels[activeLevel];
  const needsGate = current.id !== "level1" && !verifiedLevels[current.id];

  useEffect(() => {
    if (!router.isReady) return;
    const queryLevel = router.query.level;
    if (!queryLevel) return;
    const index = levels.findIndex((level) => level.id === queryLevel);
    if (index !== -1) setActiveLevel(index);
  }, [router.isReady, router.query.level]);

  useEffect(() => {
    supabase
      .from("apply_form_links")
      .select("level, formUrl")
      .then(({ data }) => {
        if (!data) return;
        setFormLinks((prev) => {
          const next = { ...prev };
          data.forEach((row) => {
            next[row.level] = row.formUrl || "";
          });
          return next;
        });
      });
  }, []);

  const handleLevelSwitch = (index) => {
    setActiveLevel(index);
    setStudentId("");
    setIdError("");
    setAccepted(false);
    setComingSoon(false);
  };

  const handleVerifyId = async (event) => {
    event.preventDefault();
    const trimmed = studentId.trim();
    if (!trimmed) {
      setIdError("Please enter your student ID / roll number.");
      return;
    }

    setVerifying(true);
    setIdError("");

    const { data, error } = await supabase
      .from("student_access_ids")
      .select("id")
      .eq("level", current.name)
      .eq("studentId", trimmed)
      .maybeSingle();

    setVerifying(false);

    if (error || !data) {
      setIdError(`We couldn't verify that ID for ${current.name}. Please double-check and try again, or contact the admissions team.`);
      return;
    }

    setVerifiedLevels((prev) => ({ ...prev, [current.id]: true }));
  };

  const handleContinue = () => {
    if (!accepted) return;
    const url = formLinks[current.name];
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      setComingSoon(true);
    }
  };

  return (
    <>
      <Head>
        <title>Admission Terms & Conditions | As-Sa'adah IT Boot Camp</title>
        <meta
          name="description"
          content="Official eligibility criteria, rules, and progression regulations for Level 1, Level 2, and Level 3 of the As-Sa'adah Religious Empowerment Program."
        />
      </Head>
      <Layout>

        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <p className="hero-eyebrow">As-Sa&apos;adah Religious Empowerment Program</p>
          <h1>Official Eligibility Criteria, Rules &amp; Progression Regulations</h1>
          <p className="hero-subtitle">Across All Levels — Level 1, Level 2, and Level 3</p>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="overview">
          <div className="overview-card">
            <span className="overview-badge">Program Overview &amp; Progression Philosophy</span>
            <p>{programOverview}</p>
          </div>
        </section>

        {/* ================= LEVEL TABS ================= */}
        <section className="levels-section">

          <div className="level-tabs">
            {levels.map((level, index) => (
              <button data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
                key={level.id}
                className={`level-tab ${activeLevel === index ? "active" : ""}`}
                onClick={() => handleLevelSwitch(index)}
                type="button"
              >
                <span className="tab-icon">{level.icon}</span>
                <span className="tab-text">
                  <span className="tab-name">{level.name}</span>
                  <span className="tab-title">{level.title}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="level-panel">

            <div className="panel-header">
              <span className="panel-tagline">{current.tagline}</span>
              <h2>{current.name}: {current.title}</h2>
              <div className="panel-meta">
                <span><strong>Format:</strong> {current.format}</span>
                <span><strong>Focus:</strong> {current.focus}</span>
              </div>
            </div>

            {needsGate ? (
              <div className="id-gate">
                <span className="id-gate-icon"><FaLock /></span>
                <h3>Verify Your Student ID</h3>
                <p>
                  {current.name} is restricted to enrolled students. Enter your unique student
                  ID / roll number to view the rules, terms, and application link for this level.
                </p>
                <form className="id-gate-form" onSubmit={handleVerifyId}>
                  <input
                    type="text"
                    value={studentId}
                    onChange={(event) => setStudentId(event.target.value)}
                    placeholder="Enter your student ID / roll number"
                    disabled={verifying}
                  />
                  <button type="submit" disabled={verifying}>
                    {verifying ? "Verifying..." : "Verify ID"}
                  </button>
                </form>
                {idError && (
                  <p className="id-gate-error">
                    <FaExclamationTriangle /> {idError}
                  </p>
                )}
              </div>
            ) : (
              <>
                {current.concept && (
                  <div className="concept-box">
                    <span className="concept-label">Concept &amp; Vision</span>
                    <p>{current.concept}</p>
                  </div>
                )}

                {current.groups.map((group, gi) => (
                  <div data-aos="fade-up" data-aos-delay={Math.min(gi * 80, 400)} className="rule-group" key={gi}>
                    <h3>
                      <span className="group-index">{gi + 1}</span>
                      {group.heading}
                    </h3>
                    {group.intro && <p className="group-intro">{group.intro}</p>}

                    <div className="rule-items">
                      {group.items.map((item, ii) => (
                        <div data-aos="fade-up" data-aos-delay={Math.min(ii * 80, 400)} className="rule-item" key={ii}>
                          <p><strong>{item.label}</strong>{item.text ? `: ${item.text}` : ""}</p>
                          {item.subList && (
                            <ul>
                              {item.subList.map((sub, si) => (
                                <li data-aos="fade-up" data-aos-delay={Math.min(si * 80, 400)} key={si}>{sub}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

          </div>
        </section>

        {/* ================= PAYMENT (Level 1 only) ================= */}
        {activeLevel === 0 && (
          <section className="payment-section">
            <div className="section-head">
              <p className="eyebrow">Reserve Your Seat</p>
              <h2>{cooperativeFundInfo.title}</h2>
              <p className="section-lead">{cooperativeFundInfo.description}</p>
            </div>

            <div className="payment-grid">
              <div className="payment-card">
                <div className="payment-icon">{cooperativeFundInfo.bankTransfer.icon}</div>
                <h3>{cooperativeFundInfo.bankTransfer.heading}</h3>
                <ul>
                  {cooperativeFundInfo.bankTransfer.details.map((item) => (
                    <li data-aos="fade-up" key={item.label}><strong>{item.label}:</strong> {item.value}</li>
                  ))}
                </ul>
              </div>
              <div className="payment-card">
                <div className="payment-icon">{cooperativeFundInfo.mobileWallet.icon}</div>
                <h3>{cooperativeFundInfo.mobileWallet.heading}</h3>
                <ul>
                  {cooperativeFundInfo.mobileWallet.details.map((item) => (
                    <li data-aos="fade-up" key={item.label}><strong>{item.label}:</strong> {item.value}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="payment-note">{cooperativeFundInfo.note}</p>
          </section>
        )}

        {/* ================= DISCIPLINARY + CONSENT ================= */}
        {!needsGate && (
          <section className="consent-section">
            <div className="disciplinary-card">
              <span className="disciplinary-icon"><FaClipboardCheck /></span>
              <div>
                <h3>{disciplinaryNotice.title}</h3>
                <ul>
                  {disciplinaryNotice.items.map((item) => (
                    <li data-aos="fade-up" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="consent-card">
              <span className="consent-note">I confirm that all information provided above is accurate.</span>
              <label className="consent-checkbox">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(event) => setAccepted(event.target.checked)}
                />
                <span>I accept all terms and conditions</span>
              </label>
              <button
                type="button"
                className={`consent-button ${accepted ? "active" : "disabled"}`}
                disabled={!accepted}
                onClick={handleContinue}
              >
                Continue to Application →
              </button>
              {comingSoon && (
                <p className="coming-soon-note">
                  <FaExclamationTriangle /> The {current.name} application form is coming soon.
                  Please check back later or contact the admissions team.
                </p>
              )}
            </div>
          </section>
        )}

        <style jsx>{`
          /* ============ HERO ============ */
          .hero {
            position: relative;
            overflow: hidden;
            text-align: center;
            padding: 140px clamp(1.25rem, 5vw, 3rem) 70px;
            background: linear-gradient(160deg, #1a472a, #14532d 55%, #0b2b18);
            color: white;
          }

          .hero-glow {
            position: absolute;
            top: -140px;
            left: 50%;
            transform: translateX(-50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(104, 211, 145, 0.25), transparent 70%);
            pointer-events: none;
          }

          .hero-eyebrow {
            position: relative;
            color: #86efac;
            font-weight: 700;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin: 0 0 1rem;
          }

          .hero h1 {
            position: relative;
            font-size: clamp(1.8rem, 4vw, 2.7rem);
            font-weight: 800;
            font-family: 'Montserrat', sans-serif;
            max-width: 900px;
            margin: 0 auto 0.9rem;
            line-height: 1.3;
          }

          .hero-subtitle {
            position: relative;
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.05rem;
          }

          /* ============ OVERVIEW ============ */
          .overview {
            background: #ffffff;
            padding: clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 3rem) 0;
          }

          .overview-card {
            max-width: 960px;
            margin: 0 auto;
            background: #f0fdf4;
            border: 1px solid rgba(47, 133, 90, 0.2);
            border-radius: 20px;
            padding: clamp(1.75rem, 3vw, 2.25rem);
          }

          .overview-badge {
            display: inline-block;
            color: #2f855a;
            font-weight: 700;
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 0.75rem;
          }

          .overview-card p {
            margin: 0;
            color: #14532d;
            line-height: 1.8;
            font-size: 1rem;
          }

          /* ============ LEVEL TABS ============ */
          .levels-section {
            background: #ffffff;
            padding: clamp(2.5rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 3rem) clamp(3rem, 6vw, 5rem);
          }

          .level-tabs {
            max-width: 960px;
            margin: 0 auto 2rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }

          .level-tab {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-align: left;
            background: white;
            border: 2px solid rgba(26, 71, 42, 0.1);
            border-radius: 16px;
            padding: 1rem 1.1rem;
            cursor: pointer;
            transition: all 0.25s ease;
            font-family: inherit;
          }

          .level-tab:hover {
            border-color: rgba(47, 133, 90, 0.4);
            transform: translateY(-2px);
          }

          .level-tab.active {
            background: linear-gradient(135deg, #1a472a, #2f855a);
            border-color: transparent;
            box-shadow: 0 15px 35px rgba(26, 71, 42, 0.25);
          }

          .tab-icon {
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: #f0fdf4;
            color: #2f855a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            transition: all 0.25s ease;
          }

          .level-tab.active .tab-icon {
            background: rgba(255, 255, 255, 0.15);
            color: #86efac;
          }

          .tab-text {
            display: flex;
            flex-direction: column;
            min-width: 0;
          }

          .tab-name {
            font-weight: 800;
            color: #14532d;
            font-size: 0.95rem;
            font-family: 'Montserrat', sans-serif;
          }

          .tab-title {
            font-size: 0.78rem;
            color: #64748b;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .level-tab.active .tab-name {
            color: white;
          }

          .level-tab.active .tab-title {
            color: rgba(255, 255, 255, 0.75);
          }

          /* ============ LEVEL PANEL ============ */
          .level-panel {
            max-width: 960px;
            margin: 0 auto;
          }

          .panel-header {
            background: linear-gradient(160deg, #1a472a, #14532d);
            border-radius: 22px;
            padding: clamp(1.75rem, 3vw, 2.5rem);
            color: white;
            margin-bottom: 1.5rem;
          }

          .panel-tagline {
            display: inline-block;
            background: rgba(255, 255, 255, 0.12);
            color: #a7f3d0;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 0.35rem 0.85rem;
            border-radius: 20px;
            margin-bottom: 0.9rem;
          }

          .panel-header h2 {
            margin: 0 0 1rem;
            font-size: clamp(1.3rem, 2.6vw, 1.7rem);
            font-family: 'Montserrat', sans-serif;
          }

          .panel-meta {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.92rem;
            color: rgba(255, 255, 255, 0.85);
            line-height: 1.6;
          }

          .panel-meta strong {
            color: #86efac;
          }

          .concept-box {
            background: #f0fdf4;
            border-left: 4px solid #2f855a;
            border-radius: 14px;
            padding: 1.5rem 1.75rem;
            margin-bottom: 1.5rem;
          }

          .concept-label {
            display: block;
            color: #2f855a;
            font-weight: 700;
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
          }

          .concept-box p {
            margin: 0;
            color: #14532d;
            line-height: 1.75;
          }

          .rule-group {
            background: white;
            border: 1px solid rgba(26, 71, 42, 0.08);
            border-radius: 20px;
            padding: clamp(1.5rem, 3vw, 2.25rem);
            box-shadow: 0 12px 30px rgba(26, 71, 42, 0.06);
            margin-bottom: 1.5rem;
          }

          .rule-group h3 {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin: 0 0 1rem;
            color: #1a472a;
            font-size: 1.15rem;
            font-family: 'Montserrat', sans-serif;
          }

          .group-index {
            flex-shrink: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85rem;
            font-weight: 700;
          }

          .group-intro {
            color: #4a5568;
            margin: 0 0 1rem;
            line-height: 1.7;
          }

          .rule-items {
            display: flex;
            flex-direction: column;
            gap: 0.9rem;
          }

          .rule-item {
            padding-left: 1rem;
            border-left: 3px solid rgba(47, 133, 90, 0.2);
          }

          .rule-item p {
            margin: 0;
            color: #4a5568;
            line-height: 1.75;
          }

          .rule-item strong {
            color: #14532d;
          }

          .rule-item ul {
            margin: 0.6rem 0 0;
            padding-left: 1.2rem;
            color: #4a5568;
            line-height: 1.75;
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
          }

          /* ============ ID GATE ============ */
          .id-gate {
            background: white;
            border: 1px solid rgba(26, 71, 42, 0.08);
            border-radius: 20px;
            padding: clamp(2rem, 5vw, 3rem);
            box-shadow: 0 12px 30px rgba(26, 71, 42, 0.06);
            text-align: center;
          }

          .id-gate-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            font-size: 22px;
            margin-bottom: 1rem;
          }

          .id-gate h3 {
            margin: 0 0 0.6rem;
            color: #14532d;
            font-size: 1.2rem;
            font-family: 'Montserrat', sans-serif;
          }

          .id-gate > p {
            max-width: 520px;
            margin: 0 auto 1.5rem;
            color: #4a5568;
            line-height: 1.7;
          }

          .id-gate-form {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem;
            max-width: 480px;
            margin: 0 auto;
          }

          .id-gate-form input {
            flex: 1 1 260px;
            padding: 0.85rem 1rem;
            border-radius: 12px;
            border: 2px solid rgba(26, 71, 42, 0.15);
            font-size: 0.95rem;
            font-family: inherit;
          }

          .id-gate-form input:focus {
            outline: none;
            border-color: #2f855a;
          }

          .id-gate-form button {
            flex: 0 0 auto;
            padding: 0.85rem 1.5rem;
            border-radius: 12px;
            border: none;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            font-weight: 700;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.25s ease;
          }

          .id-gate-form button:hover {
            transform: translateY(-2px);
          }

          .id-gate-form button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }

          .id-gate-error {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            max-width: 480px;
            margin: 1.25rem auto 0;
            color: #991b1b;
            background: #fef2f2;
            border: 1px solid rgba(220, 38, 38, 0.2);
            border-radius: 12px;
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
            line-height: 1.5;
          }

          /* ============ PAYMENT ============ */
          .payment-section {
            background: #f4f9f6;
            padding: clamp(3rem, 6vw, 4.5rem) clamp(1.25rem, 5vw, 3rem);
          }

          .section-head {
            max-width: 700px;
            margin: 0 auto 2.5rem;
            text-align: center;
          }

          .eyebrow {
            color: #2f855a;
            font-weight: 700;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin: 0 0 0.6rem;
          }

          .section-head h2 {
            margin: 0 0 0.75rem;
            color: #1a472a;
            font-size: clamp(1.4rem, 2.6vw, 1.8rem);
            font-family: 'Montserrat', sans-serif;
          }

          .section-lead {
            color: #4a5568;
            line-height: 1.7;
            margin: 0;
          }

          .payment-grid {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
          }

          .payment-card {
            flex: 0 1 320px;
            max-width: 360px;
            background: white;
            border: 1px solid rgba(26, 71, 42, 0.08);
            border-radius: 18px;
            padding: 1.75rem 1.6rem;
            box-shadow: 0 12px 30px rgba(26, 71, 42, 0.06);
          }

          .payment-icon {
            width: 48px;
            height: 48px;
            border-radius: 13px;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 19px;
            margin-bottom: 14px;
          }

          .payment-card h3 {
            font-size: 1.02rem;
            color: #14532d;
            margin: 0 0 0.75rem;
            font-family: 'Montserrat', sans-serif;
          }

          .payment-card ul {
            margin: 0;
            padding-left: 1.1rem;
            color: #4a5568;
            font-size: 0.92rem;
            line-height: 1.85;
          }

          .payment-card li strong {
            color: #14532d;
          }

          .payment-note {
            max-width: 700px;
            margin: 1.75rem auto 0;
            text-align: center;
            color: #64748b;
            font-size: 0.9rem;
            font-style: italic;
            line-height: 1.7;
          }

          /* ============ DISCIPLINARY + CONSENT ============ */
          .consent-section {
            background: #ffffff;
            padding: clamp(3rem, 6vw, 4.5rem) clamp(1.25rem, 5vw, 3rem);
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
            max-width: 700px;
            margin: 0 auto;
          }

          .disciplinary-card {
            display: flex;
            gap: 1rem;
            background: #fef2f2;
            border: 1px solid rgba(220, 38, 38, 0.2);
            border-radius: 18px;
            padding: 1.5rem 1.6rem;
          }

          .disciplinary-icon {
            flex-shrink: 0;
            width: 42px;
            height: 42px;
            border-radius: 12px;
            background: linear-gradient(135deg, #dc2626, #991b1b);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 17px;
          }

          .disciplinary-card h3 {
            margin: 0 0 0.5rem;
            color: #991b1b;
            font-size: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .disciplinary-card ul {
            margin: 0;
            padding-left: 1.1rem;
            color: #7f1d1d;
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .consent-card {
            background: #f0fdf4;
            border: 1px solid rgba(47, 133, 90, 0.2);
            border-radius: 18px;
            padding: 1.75rem 1.75rem 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .consent-note {
            font-size: 0.95rem;
            color: #14532d;
          }

          .consent-checkbox {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            font-size: 0.95rem;
            color: #14532d;
          }

          .consent-checkbox input {
            width: 17px;
            height: 17px;
          }

          .consent-button {
            padding: 0.95rem;
            border-radius: 12px;
            font-weight: 700;
            border: none;
            font-size: 0.98rem;
            transition: all 0.25s ease;
          }

          .consent-button.disabled {
            background: #e5e7eb;
            color: #6b7280;
            cursor: not-allowed;
          }

          .consent-button.active {
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            cursor: pointer;
            box-shadow: 0 12px 28px rgba(26, 71, 42, 0.3);
          }

          .consent-button.active:hover {
            transform: translateY(-2px);
          }

          .coming-soon-note {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0;
            color: #991b1b;
            background: #fef2f2;
            border: 1px solid rgba(220, 38, 38, 0.2);
            border-radius: 12px;
            padding: 0.75rem 1rem;
            font-size: 0.88rem;
            line-height: 1.5;
          }

          @media (max-width: 768px) {
            .level-tabs {
              grid-template-columns: 1fr;
            }

            .tab-title {
              white-space: normal;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
