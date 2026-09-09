import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

const CORE_VALUES = [
  {
    title: "Compassion (Rahmah)",
    description:
      "Showing mercy and active kindness to all people, reflecting the prophetic tradition of care and dignity.",
  },
  {
    title: "Justice ('Adl)",
    description:
      "Prioritizing fairness and equity in decisions, partnerships, and distribution of resources—especially for the vulnerable.",
  },
  {
    title: "Trustworthiness (Amanah)",
    description:
      "Maintaining full transparency and accountability with every donation, campaign, and promise we fulfill.",
  },
  {
    title: "Excellence (Ihsan)",
    description:
      "Delivering programs with the highest quality so that impact remains profound and sustainable.",
  },
];

const PROGRAM_AREAS = [
  {
    title: "Education & Digital Literacy",
    description:
      "Breaking the cycle of poverty through Islamic learning and modern, market-relevant skills.",
    initiatives: [
      "IT & Digital Skills Bootcamp (Ulema Focus)",
      "Scholarship Programs",
    ],
  },
  {
    title: "Healthcare Services",
    description:
      "Ensuring access to medical care, preventive health education, and financial assistance.",
    initiatives: ["Mobile Clinics", "Medical Assistance Funds", "Community Health Drives"],
  },
  {
    title: "Economic Development",
    description:
      "Equipping families for self-sufficiency via vocational training and micro-entrepreneurship.",
    initiatives: ["Skill Training Centers", "Interest-Free Microfinance (Qarz-e-Hasana)"],
  },
  {
    title: "Poverty Alleviation",
    description:
      "Providing immediate relief while working toward dignified, long-term food security.",
    initiatives: ["Food Distribution", "Ramadan & Eid Relief", "Community Kitchens"],
  },
  {
    title: "Emergency Relief",
    description:
      "Delivering rapid, dignified aid to communities struck by disasters.",
    initiatives: ["Disaster Response Teams", "Shelter & Rehabilitation Support"],
  },
  {
    title: "Spiritual & Social Development",
    description:
      "Promoting spiritual growth and emotional wellbeing through sound Islamic engagement.",
    initiatives: ["Islamic Education Classes", "Character Building Workshops"],
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - As-Sa'adah</title>
        <meta
          name="description"
          content="Discover the mission, core values, and holistic programs of As-Sa'adah as we pursue social welfare rooted in Tawhid and Ihsan."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="about-page">
          <section className="about-hero">
            <div className="hero-overlay">
              <div className="hero-content">
                <h1>
                  <span>Compassionate Welfare</span>
                  <span>Rooted in Faith</span>
                </h1>
                <p className="hero-subtext">
                  Translating Tawhid and Ihsan into action by nurturing hearts,
                  strengthening families, and providing dignified relief.
                </p>
                <p className="hero-subtext">
                  From classrooms to counseling circles and rapid-response welfare,
                  every stream reflects prophetic ethics and measurable impact.
                </p>
                <div className="hero-cta">
                  <Link href="/courses" className="primary-btn">
                    Explore Our Programs
                  </Link>
                  <Link href="/donate" className="secondary-btn">
                    Support the Mission
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="about-container">
            <section className="values-section content-section" id="core-values">
              <div className="section-heading">
                <h2>Our Core Values (MANDATE)</h2>
                <p>These principles govern every decision, partnership, and program we deliver.</p>
              </div>
              <div className="values-grid">
                {CORE_VALUES.map((value) => (
                  <article data-aos="fade-up" className="value-card" key={value.title}>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="programs-section content-section">
              <div className="section-heading">
                <h2>The Breadth of Our Programs</h2>
                <p>
                  Holistic empowerment requires synchronized efforts across knowledge, healing, and relief.
                  Our pillars work together to serve the Ummah as one living body.
                </p>
              </div>
              <div className="program-grid">
                {PROGRAM_AREAS.map((program) => (
                  <article data-aos="fade-up" className="program-card" key={program.title}>
                    <div className="program-card-header">
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                    </div>
                    <div className="program-card-body">
                      <h4>Key Initiatives</h4>
                      <ul>
                        {program.initiatives.map((item) => (
                          <li data-aos="fade-up" key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="impact-section">
              <h2>Our Commitment to Impact</h2>
              <p>
                We believe in measurable results. Our responsibility is to move
                beyond temporary relief and deliver permanent empowerment while
                staying accountable to our donors and beneficiaries.
              </p>
              <p>
                Each program is continually monitored and evaluated so that
                every resource contributes meaningfully to the spiritual and
                worldly advancement of the people we serve.
              </p>
            </section>
          </div>
        </div>

        <style jsx>{`
          .about-page {
            background: #fafafa;
            padding: 100px 0;
          }

          .about-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .about-hero {
            position: relative;
            width: 100%;
            min-height: 85vh;
            margin-bottom: 4rem;
            overflow: hidden;
            isolation: isolate;
          }

          .about-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url("/hero-image-4.jpg");
            background-size: cover;
            background-position: center;
            filter: brightness(0.75);
            z-index: -2;
            transform: scale(1.03);
          }

          .about-hero::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(120deg, rgba(6, 19, 66, 0.85), rgba(10, 68, 86, 0.7));
            z-index: -1;
          }

          .hero-overlay {
            position: relative;
            min-height: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4.5rem 0;
          }

          .hero-content {
            text-align: left;
            width: 100%;
            max-width: 1200px;
            padding: 0 2.5rem;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-content h1 {
            font-size: clamp(2.6rem, 4.5vw, 3.8rem);
            line-height: 1.15;
            margin-bottom: 1.4rem;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .hero-content h1 span {
            display: block;
          }

          .hero-subtext {
            font-size: 1.15rem;
            line-height: 1.8;
            margin-bottom: 0.8rem;
            color: rgba(255, 255, 255, 0.92);
            max-width: 900px;
          }

          .hero-cta {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
            justify-content: flex-start;
          }

          .primary-btn,
          .secondary-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.95rem 2.2rem;
            border-radius: 999px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            text-decoration: none;
            font-size: 0.95rem;
          }

          .primary-btn {
            background: #fff;
            color: var(--primary-color);
            box-shadow: 0 15px 35px rgba(255, 255, 255, 0.25);
          }

          .secondary-btn {
            border: 2px solid rgba(255, 255, 255, 0.75);
            color: #fff;
            background: transparent;
          }

          .primary-btn:hover,
          .secondary-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .card-eyebrow {
            font-size: 0.85rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: var(--secondary-color);
            font-weight: 600;
            margin-bottom: 0.4rem;
          }

          .eyebrow {
            font-size: 0.85rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: var(--secondary-color);
            font-weight: 600;
            display: inline-block;
            margin-bottom: 0.8rem;
          }

          .section-header {
            max-width: 760px;
            margin-bottom: 2.5rem;
          }

          .section-header h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #122044;
          }

          .section-lead {
            font-size: 1.05rem;
            color: #4f5665;
            line-height: 1.7;
          }

          .values-section,
          .programs-section {
            margin-bottom: 4rem;
          }

          .values-section .section-heading {
            text-align: center;
            margin-bottom: 2rem;
          }

          .values-section .section-heading h2 {
            font-size: 2rem;
            color: #122044;
            margin-bottom: 0.8rem;
          }

          .values-section .section-heading p {
            color: #4f5665;
            font-size: 1.05rem;
          }

          .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
          }

          .value-card {
            background: #fff;
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 12px 30px rgba(18, 32, 68, 0.08);
            border-top: 4px solid var(--secondary-color);
          }

          .value-card h3 {
            margin-bottom: 0.8rem;
            color: var(--primary-color);
            font-size: 1.1rem;
          }

          .value-card p {
            margin: 0;
            color: #414141;
            line-height: 1.6;
          }

          .programs-section .section-heading {
            text-align: center;
            margin-bottom: 2rem;
          }

          .programs-section .section-heading h2 {
            font-size: 2rem;
            color: #122044;
            margin-bottom: 0.8rem;
          }

          .programs-section .section-heading p {
            color: #4f5665;
            font-size: 1.05rem;
          }

          .program-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.8rem;
          }

          .program-card {
            background: #fff;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 18px 40px rgba(14, 32, 73, 0.08);
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            border: 1px solid #edf2f7;
            height: 100%;
          }

          .program-card-header h3 {
            margin-bottom: 0.6rem;
            color: var(--primary-color);
            font-size: 1.2rem;
          }

          .program-card-header p {
            margin: 0;
            color: #3a3a3a;
            line-height: 1.6;
          }

          .program-card-body h4 {
            margin: 0 0 0.6rem;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--secondary-color);
          }

          .program-card-body ul {
            margin: 0;
            padding-left: 1.2rem;
            color: #262626;
            line-height: 1.6;
          }

          .program-card-body li {
            margin-bottom: 0.4rem;
          }

          .impact-section {
            background: #fff;
            border-radius: 22px;
            padding: 2.5rem;
            box-shadow: 0 30px 60px rgba(18, 32, 68, 0.07);
            text-align: center;
          }

          .impact-section h2 {
            margin-bottom: 1rem;
            color: var(--primary-color);
          }

          .impact-section p {
            margin-bottom: 0.8rem;
            color: #2c2c2c;
            line-height: 1.7;
          }

          @media (max-width: 768px) {
            .about-page {
              padding: 70px 0;
            }

            .about-hero {
              min-height: 75vh;
            }

            .hero-overlay {
              padding: 3rem 0;
            }

            .hero-content h1 {
              font-size: 2.3rem;
            }

            .hero-content {
              text-align: center;
              align-items: center;
            }

            .hero-cta {
              flex-direction: column;
              justify-content: center;
            }

            .section-header h2 {
              font-size: 1.6rem;
            }

            .impact-section {
              padding: 2rem;
            }
          }

          @media (max-width: 480px) {
            .primary-btn,
            .secondary-btn {
              width: 100%;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
