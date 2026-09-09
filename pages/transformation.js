import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

const pillars = [
  {
    id: 'academia',
    title: 'Academia',
    subtitle: 'Knowledge for Clarity and Empowerment',
    description:
      'This pillar goes beyond basic religious instruction by making Islamic knowledge relevant to modern life and equipping the community with skills for economic self-reliance.',
    focus: [
      {
        area: 'Religious Education',
        initiatives: 'Advanced Dars-e-Nizami studies, Tafsir and Hadith programs.',
        impact: 'Building clarity and theological depth (Purpose).'
      },
      {
        area: 'Skill Development',
        initiatives: 'IT & Digital Skills Bootcamp (Pro-preneurship collaboration).',
        impact: 'Equipping scholars and community members with halal, in-demand skills (Self-worth).'
      },
      {
        area: 'Scholarship Programs',
        initiatives: 'Financial aid for specialized Islamic and contemporary education.',
        impact: 'Removing economic barriers to knowledge and growth.'
      }
    ]
  },
  {
    id: 'counselling',
    title: 'Counselling',
    subtitle: 'Spiritual Growth and Mental Well-being',
    description:
      'Rooted in Islamic principles of healing (Shifa) and mercy (Rahmah), this pillar nurtures psychological, emotional, and spiritual resilience.',
    focus: [
      {
        area: 'Spiritual Guidance',
        initiatives: 'Personalized mentorship anchored in the Quran and Sunnah.',
        impact: 'Nurturing inner peace, self-worth, and God-consciousness.'
      },
      {
        area: 'Family & Youth Support',
        initiatives: 'Workshops and counselling for strong families and empowered youth.',
        impact: 'Strengthening community bonds and collective resilience.'
      }
    ]
  },
  {
    id: 'welfare',
    title: 'Welfare',
    subtitle: 'Justice and Compassion in Action',
    description:
      'This pillar ensures our spiritual mandate translates into tangible, life-saving support that upholds the Islamic value of justice (Adl).',
    focus: [
      {
        area: 'Economic Welfare',
        initiatives: 'Healthcare support, microfinance, and livelihood skill training.',
        impact: 'Alleviating poverty and promoting economic dignity.'
      },
      {
        area: 'Emergency Relief',
        initiatives: 'Rapid response teams for disasters and crises.',
        impact: 'Upholding compassion by serving immediate human needs.'
      },
      {
        area: 'Sustainable Projects',
        initiatives: 'Clean Water Initiative and environmental protection drives.',
        impact: 'Ensuring long-term health and community vitality.'
      }
    ]
  }
];

const methodCards = [
  {
    id: 'purpose',
    title: 'Purpose',
    kicker: 'Academia',
    body:
      'Clarity of faith is paired with relevant scholarship so believers make principled choices in every sphere of life.',
    bullets: ['Advanced Tafsir & Hadith immersions', 'Digital & vocational skill incubators', 'Scholarships that remove barriers']
  },
  {
    id: 'healing',
    title: 'Healing',
    kicker: 'Counselling',
    body:
      'Faith-rooted counselling circles, mentorship, and coaching nurture resilient families and God-conscious hearts.',
    bullets: ['Confidential mentorship & rukyah support', 'Family strengthening and youth labs', 'Mental health allies grounded in Sunnah']
  },
  {
    id: 'relief',
    title: 'Relief',
    kicker: 'Welfare',
    body:
      'Justice-driven social welfare turns compassion into food security, healthcare access, and dignified livelihoods.',
    bullets: ['Emergency & medical response teams', 'Microfinance plus livelihood training', 'Clean water and sustainability drives']
  }
];

const journeySteps = [
  {
    phase: 'Purpose',
    description: 'We ignite hearts with revelation-backed clarity so intent, worship, and work align with Prophetic guidance.'
  },
  {
    phase: 'Preparation',
    description: 'Participants gain skills, emotional wellbeing, and mentorship that translate iman into confident action.'
  },
  {
    phase: 'Participation',
    description: 'Collective projects turn individual growth into service—families counselled, students sponsored, communities revived.'
  },
  {
    phase: 'Prosperity',
    description: 'Dignity-focused welfare protects futures, creating leaders who reinvest time, knowledge, and resources back into the Ummah.'
  }
];

const actionCards = [
  {
    title: 'Support Welfare Work',
    description: 'Fund rapid relief, medical support, and sustainable projects that uphold justice and compassion.',
    href: '/donate',
    action: 'Donate Now'
  },
  {
    title: 'Join as Volunteer',
    description: 'Mentor students, coach families, or serve on the ground with our response teams and bootcamps.',
    href: '/volunteer',
    action: 'Volunteer'
  },
  {
    title: 'Collaborate or Sponsor',
    description: 'Partner with the foundation to co-design programs, offer internships, or empower a new cohort.',
    href: '/contact',
    action: 'Partner With Us'
  }
];

const overviewInsights = [
  {
    id: 'insight-streams',
    title: 'Connected Streams',
    description: 'Academia, counselling, and welfare move in sync to serve the Ummah as one living body.'
  },
  {
    id: 'insight-sunnah',
    title: 'Applied Sunnah',
    description: 'Programs co-designed with Ulama, therapists, and field experts to remain relevant and merciful.'
  },
  {
    id: 'insight-journey',
    title: 'Actionable Journey',
    description: 'Guided pathways that welcome seekers, prepare contributors, and equip community champions.'
  }
];

export default function Transformation() {
  return (
    <>
      <Head>
        <title>The Pillars of Transformation - As-Sa'adah</title>
        <meta
          name="description"
          content="Explore the Academia, Counselling, and Welfare pillars that power As-Sa'adah's holistic transformation."
        />
      </Head>
      <Layout>
        <section className="transformation-page">
          <div className="aurora" />
          <div className="aurora aurora--right" />
          <div className="transformation-shell">
            <div className="transformation-overview">
              <h1 className="overview-title">From Understanding to Uplifting Lives</h1>
              <p className="overview-subtext">
                Three synchronized streams move believers from knowledge to healing to relief, ensuring every household
                experiences faith-led dignity.
              </p>

              <div className="overview-insights">
                {overviewInsights.map((insight) => (
                  <div data-aos="fade-up" key={insight.id} className="focus-tile insight-tile">
                    <span className="focus-label">{insight.title}</span>
                    <p className="focus-value">{insight.description}</p>
                  </div>
                ))}
              </div>

              <div className="overview-cta-row">
                <a href="#pillars" className="primary-btn">
                  Explore the Streams
                </a>
                <Link href="/courses" className="ghost-btn">
                  View Programs
                </Link>
              </div>
            </div>

            <div className="methodology" id="pillars">
              <div className="section-heading">
                <h2>Three streams, one mission</h2>
                <p>
                  Academia, Counselling, and Welfare constantly inform each other. Together they ensure clarity of faith,
                  strength of character, and protection of community—an integrated ecosystem keeping the Sunnah alive in modern life.
                </p>
              </div>

              <div className="method-grid">
                {methodCards.map((card) => (
                  <article data-aos="fade-up" key={card.id} className="method-card">
                    <div className="method-title-row">
                      <h3 className="method-title">{card.title}</h3>
                    </div>
                    <p>{card.body}</p>
                    <ul>
                      {card.bullets.map((point) => (
                        <li data-aos="fade-up" key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="pillars-section" id="practice">
              <div className="section-heading pillars-heading">
                <h2>The pillars in practice</h2>
                <p>Each pillar houses focus areas that move believers from inspiration to measurable transformation.</p>
                <div className="pillar-chips">
                  {pillars.map((pillar) => (
                    <span data-aos="fade-up" key={pillar.id} className="pillar-chip">
                      {pillar.title}
                    </span>
                  ))}
                </div>
              </div>

              {pillars.map((pillar) => (
                <article data-aos="fade-up" key={pillar.id} className="pillar-card">
                  <div className="pillar-header">
                    <p className="pillar-card-label">{pillar.subtitle}</p>
                    <div className="pillar-title-row">
                      <h3>{pillar.title}</h3>
                    </div>
                    <p className="pillar-card-description">{pillar.description}</p>
                  </div>

                  <div className="pillar-focus-grid">
                    {pillar.focus.map((item) => (
                      <div data-aos="fade-up" key={item.area} className="focus-tile">
                        <span className="focus-label">{item.area}</span>
                        <p className="focus-value">{item.initiatives}</p>
                        <p className="focus-impact">{item.impact}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="journey-lab" id="journey">
              <div className="section-heading">
                <h2>The transformation journey</h2>
                <p>Every program is built to move people through a cycle of growth, contribution, and shared prosperity.</p>
              </div>
              <div className="journey-track">
                {journeySteps.map((step) => (
                  <div data-aos="fade-up" key={step.phase} className="journey-step">
                    <h4>{step.phase}</h4>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="impact-cta">
              <h2>Ready to support the movement?</h2>
              <p>
                Volunteer, contribute, or collaborate with As-Sa'adah to amplify holistic change rooted in
                prophetic guidance.
              </p>
              <div className="cta-row">
                <Link href="/donate" className="primary-btn">
                  Support Welfare Work
                </Link>
                <Link href="/volunteer" className="ghost-btn">
                  Join as Volunteer
                </Link>
                <Link href="/contact" className="outline-btn">
                  Talk to the Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>

      <style jsx>{`
        .transformation-page {
          position: relative;
          min-height: 100vh;
          padding: 140px 0 120px;
          background: linear-gradient(180deg, #ffffff 0%, #f6fbf7 55%, #ffffff 100%);
          overflow: hidden;
        }

        .aurora {
          position: absolute;
          width: 70vw;
          height: 70vw;
          top: -25vw;
          left: -10vw;
          background: radial-gradient(circle, rgba(57, 189, 143, 0.2), transparent 60%);
          filter: blur(80px);
          opacity: 0.4;
          pointer-events: none;
        }

        .aurora--right {
          top: auto;
          bottom: -30vw;
          left: auto;
          right: -20vw;
          background: radial-gradient(circle, rgba(31, 99, 157, 0.18), transparent 65%);
        }

        .transformation-shell {
          position: relative;
          width: min(1240px, 92%);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          z-index: 2;
        }

        .transformation-overview {
          background: white;
          border-radius: 36px;
          padding: 2.8rem;
          border: 1px solid rgba(26, 71, 42, 0.08);
          box-shadow: 0 35px 90px rgba(5, 21, 12, 0.12);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
          align-items: center;
        }

        .overview-title {
          margin: 0.2rem 0 0.6rem;
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          line-height: 1.05;
          text-align: center;
          white-space: normal;
        }

        .overview-subtext {
          margin: 0 auto;
          line-height: 1.6;
          color: var(--text-gray);
          max-width: 720px;
          text-align: center;
        }

        .overview-cta-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .overview-insights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          width: 100%;
        }

        .insight-tile {
          background: rgba(243, 248, 244, 0.9);
        }



        .primary-btn,
        .ghost-btn,
        .outline-btn,
        .tertiary-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.9rem 1.9rem;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          border: 1px solid transparent;
        }

        .primary-btn {
          background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
          color: white;
          box-shadow: 0 15px 35px rgba(26, 71, 42, 0.3);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
        }

        .ghost-btn {
          border-color: rgba(26, 71, 42, 0.28);
          color: var(--primary-color);
          background: transparent;
        }

        .ghost-btn:hover {
          background: rgba(26, 71, 42, 0.08);
        }

        .outline-btn {
          border-color: rgba(255, 255, 255, 0.7);
          color: white;
          background: transparent;
        }

        .outline-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .methodology {
          background: white;
          border-radius: 32px;
          padding: 2.8rem;
          border: 1px solid rgba(26, 71, 42, 0.12);
          box-shadow: 0 30px 80px rgba(5, 21, 12, 0.12);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .section-heading {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          color: var(--primary-color);
          text-align: center;
          align-items: center;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(1.8rem, 2.6vw, 2.6rem);
          color: var(--primary-color);
        }

        .section-heading p {
          margin: 0;
          color: var(--text-gray);
          max-width: 720px;
          line-height: 1.6;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .method-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.4rem;
        }

        .method-card {
          border-radius: 24px;
          padding: 1.8rem;
          color: #0b1c12;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          border: 1px solid rgba(26, 71, 42, 0.12);
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(244, 248, 245, 0.9));
          box-shadow: 0 20px 45px rgba(5, 21, 12, 0.08);
        }

        .method-card p {
          margin: 0;
          color: rgba(11, 28, 18, 0.8);
          line-height: 1.6;
        }

        .method-card ul {
          margin: 0;
          padding-left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          color: rgba(11, 28, 18, 0.85);
        }

        .method-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .method-title {
          font-size: 1.7rem;
          font-weight: 700;
          margin: 0;
        }


        .pillars-section {
          background: rgba(255, 255, 255, 0.98);
          border-radius: 32px;
          padding: 2.8rem;
          border: 1px solid rgba(26, 71, 42, 0.12);
          box-shadow: 0 20px 60px rgba(5, 21, 12, 0.12);
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
        }

        .pillars-heading {
          text-align: center;
          align-items: center;
        }

        .pillar-chips {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-top: 0.6rem;
        }

        .pillar-chip {
          padding: 0.45rem 1.2rem;
          border-radius: 999px;
          border: 1px solid rgba(26, 71, 42, 0.18);
          font-weight: 600;
          color: var(--primary-color);
          background: rgba(26, 71, 42, 0.05);
          font-size: 0.9rem;
        }

        .pillar-card {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 248, 245, 0.9));
          border-radius: 26px;
          border: 1px solid rgba(26, 71, 42, 0.08);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          position: relative;
          overflow: hidden;
        }

        .pillar-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          z-index: 1;
        }

        .pillar-card-label {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.78rem;
          color: var(--secondary-color);
          margin: 0;
        }

        .pillar-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .pillar-title-row h3 {
          margin: 0;
          font-size: 1.8rem;
          color: var(--primary-color);
        }

        .pillar-card-description {
          margin: 0;
          color: var(--text-gray);
          line-height: 1.6;
        }

        .pillar-focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .focus-tile {
          border-radius: 20px;
          padding: 1rem;
          border: 1px solid rgba(26, 71, 42, 0.12);
          background: rgba(26, 71, 42, 0.04);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          min-height: 160px;
        }

        .focus-label {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.7rem;
          color: rgba(26, 71, 42, 0.8);
        }

        .focus-value {
          margin: 0;
          color: var(--primary-color);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .focus-impact {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-gray);
        }

        .journey-lab {
          background: rgba(255, 255, 255, 0.97);
          border-radius: 32px;
          padding: 2.8rem;
          border: 1px solid rgba(26, 71, 42, 0.12);
          box-shadow: 0 28px 70px rgba(5, 21, 12, 0.12);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .journey-track {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.2rem;
        }

        .journey-step {
          position: relative;
          border-radius: 24px;
          padding: 1.6rem;
          background: rgba(26, 71, 42, 0.06);
          border: 1px solid rgba(26, 71, 42, 0.12);
          min-height: 200px;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .journey-step h4 {
          margin: 0;
          font-size: 1.4rem;
          color: var(--primary-color);
        }

        .journey-step p {
          margin: 0;
          color: var(--text-gray);
          line-height: 1.6;
        }

        .action-card {
          border-radius: 24px;
          padding: 1.8rem;
          border: 1px solid rgba(26, 71, 42, 0.12);
          background: white;
          color: var(--primary-color);
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          min-height: 220px;
          box-shadow: 0 20px 45px rgba(5, 21, 12, 0.1);
        }

        .action-card h4 {
          margin: 0;
          font-size: 1.4rem;
          color: var(--primary-color);
        }

        .action-card p {
          margin: 0;
          color: var(--text-gray);
          line-height: 1.6;
          flex: 1;
        }

        .tertiary-link {
          color: var(--primary-color);
          border-color: rgba(26, 71, 42, 0.2);
          align-self: flex-start;
          padding: 0.6rem 1.4rem;
          font-size: 0.9rem;
          background: rgba(26, 71, 42, 0.08);
        }

        .tertiary-link:hover {
          background: var(--primary-color);
          color: white;
        }

        .impact-cta {
          border-radius: 36px;
          padding: 3rem;
          background: white;
          color: var(--primary-color);
          text-align: center;
          box-shadow: 0 30px 85px rgba(5, 21, 12, 0.15);
          border: 1px solid rgba(26, 71, 42, 0.1);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .impact-cta h2 {
          margin: 0;
          font-size: clamp(2rem, 3vw, 2.8rem);
          color: var(--primary-color);
        }

        .impact-cta p {
          margin: 0 auto;
          max-width: 680px;
          color: var(--text-gray);
          line-height: 1.7;
        }

        .impact-cta .ghost-btn {
          border-color: rgba(26, 71, 42, 0.3);
          color: var(--primary-color);
        }

        .impact-cta .outline-btn {
          border-color: rgba(26, 71, 42, 0.3);
          color: var(--primary-color);
        }

        .impact-cta .outline-btn:hover {
          background: rgba(26, 71, 42, 0.08);
          color: var(--primary-color);
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        @keyframes cardMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .transformation-shell {
            gap: 2rem;
          }

          .transformation-overview,
          .methodology,
          .pillars-section,
          .journey-lab,
          .impact-cta {
            padding: 2rem;
          }

          .overview-title {
            font-size: 2rem;
            line-height: 1.2;
          }

          .overview-subtext,
          .section-heading p {
            text-align: justify;
            text-align-last: center;
          }

          .overview-cta-row {
            flex-direction: column;
            align-items: stretch;
          }

          .overview-insights,
          .method-grid,
          .journey-track {
            grid-template-columns: 1fr;
          }

          .section-heading {
            text-align: center;
            align-items: center;
          }

          .section-heading p {
            text-align: justify;
            text-align-last: center;
          }

          .pillar-focus-grid {
            grid-template-columns: 1fr;
          }

          .pillar-card {
            padding: 1.5rem;
          }

          .pillar-title-row h3 {
            font-size: 1.5rem;
          }

          .journey-step {
            min-height: auto;
          }
        }

        @media (max-width: 560px) {
          .transformation-overview,
          .methodology,
          .pillars-section,
          .journey-lab,
          .impact-cta {
            padding: 1.5rem;
          }

          .overview-title {
            font-size: 1.8rem;
          }

          .overview-cta-row a {
            width: 100%;
          }

          .focus-tile {
            padding: 0.9rem;
          }

          .pillar-card {
            padding: 1.2rem;
          }

          .pillar-focus-grid {
            gap: 0.8rem;
          }

          .cta-row {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
