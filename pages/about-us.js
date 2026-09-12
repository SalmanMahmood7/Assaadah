import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DonationModal from "../components/DonationModal";
import ApplyLevelGate from "../components/ApplyLevelGate";
import supabase from "../lib/supabaseClient";

const FALLBACK_INSTRUCTORS = [
  {
    name: "Muhammad Ibrahim",
    subject: "Digital Marketing & Growth Strategist",
    bio: "Specializes in content strategy, social media marketing, and digital growth.",
    image: "/Instructors/Ibrahim.jpeg"
  },
  {
    name: "Syed Ahmed Kabir Hashmi",
    subject: "Python Specialist & Full-Stack Developer",
    bio: "AI systems integrator with deep expertise in Python and full-stack development.",
    image: "/Instructors/Syed Ahmed.jpeg"
  },
  {
    name: "Abdul Rehman",
    subject: "UI/UX Designer & Graphic Designer",
    bio: "Focuses on UI/UX design, graphic design, branding, Figma, and prototyping.",
    image: "/Instructors/Abdul Rehman.jpeg"
  },
  {
    name: "Syed Hasnain Pasha",
    subject: "English Communication and Language Trainer",
    bio: "Spoken English, Grammar & Fluency, Public Speaking, Presentation Skills",
    image: "/Instructors/Syed Hasnain.jpeg"
  }
];

const AVATAR_PLACEHOLDER =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCA3MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5Y2EzYWYiLz4KPHBhdGggZD0iTTgwIDIyMGMwLTQwIDMwLTcwIDcwLTcwczcwIDMwIDcwIDc0IiBmaWxsPSIjOWNhM2FmIi8+CjwvdGV4dD4KPC9zdmc+Cg==';

const FALLBACK_HERO_IMAGES = [
  {
    src: "/WhatsApp Image 2025-11-05 at 02.57.46_321328ff.jpg",
    alt: "Religious scholars collaborating during a digital literacy session"
  },
  {
    src: "/WhatsApp Image 2025-11-05 at 12.38.05_77150b61.jpg",
    alt: "Instructor guiding students through a digital empowerment workshop"
  },
  {
    src: "/education-hero-bg-alt.jpg",
    alt: "Aerial view of As-Sa'adah education hub"
  },
  {
    src: "/WhatsApp Image 2025-11-05 at 18.32.17_254218d3.jpg",
    alt: "Students presenting project work as part of the program"
  }
];

export default function Programs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplyGateOpen, setIsApplyGateOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroImages, setHeroImages] = useState(FALLBACK_HERO_IMAGES);
  const [instructors, setInstructors] = useState(FALLBACK_INSTRUCTORS);
  const [activeInstructor, setActiveInstructor] = useState(0);

  const router = useRouter();

  useEffect(() => {
    supabase
      .from("hero_images")
      .select("*")
      .eq("page", "About Us")
      .order("id", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setHeroImages(
          data.map((row) => ({ src: row.image, alt: row.altText || "As-Sa'adah" }))
        );
      });

    supabase
      .from("instructors")
      .select("*")
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setInstructors(
          data.map((row) => ({
            name: row.name,
            subject: row.subject,
            bio: row.bio,
            image: row.photo || AVATAR_PLACEHOLDER
          }))
        );
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const openDonationModal = () => {
    setIsModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>About - As-Sa'adah | Community Impact Initiatives</title>
        <meta name="description" content="Explore As-Sa'adah's community impact projects including our Digital Education Initiative, Community Development programs, and Youth Empowerment efforts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
      </Head>
      <Layout>
        <section className="hero">
          <div className="hero-image">
            {heroImages.map((image, index) => (
              <div data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
                className={`hero-slide ${index === currentSlide ? "active" : ""}`}
                key={image.src}
                aria-hidden={index !== currentSlide}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  unoptimized={true}
                />
              </div>
            ))}

            <div className="hero-overlay">
              <div>
                <h1>
                  Religious Empowerment Program
                  <br />
                  for Madrasa Graduates
                </h1>
                <div>
                    <button className="primary-btn" onClick={() => setIsApplyGateOpen(true)}>
                      Apply Now
                    </button>
                  <button className="secondary-btn" onClick={() => router.push("/courses")}>
                    View Course
                  </button>
                </div>
              </div>
            </div>

            <div className="hero-progress" role="tablist" aria-label="Select hero visual">
              {heroImages.map((_, index) => (
                <button data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
                  key={`hero-progress-${index}`}
                  type="button"
                  className={`progress-dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Show hero image ${index + 1}`}
                  aria-pressed={index === currentSlide}
                />
              ))}
            </div>
          </div>
        </section>

        <DonationModal isOpen={isModalOpen} onClose={closeDonationModal} />
        <ApplyLevelGate isOpen={isApplyGateOpen} onClose={() => setIsApplyGateOpen(false)} />

        <div className="programs-container main-content">
          <section className="vision-section">
            <div className="vision-grid">
              <div className="vision-card">
                <div className="vision-icon" aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h2>Vision of As-Sa'adah</h2>
                <p>
                  As-Sa'adah is a multidimensional intellectual and educational movement dedicated to empowering graduates of traditional seminaries (Madaris) with the knowledge, creativity, and practical skills necessary to meet the evolving challenges of the modern world. It envisions a transformative framework that unites classical Islamic scholarship with contemporary sciences and technology, cultivating scholars who serve not only as spiritual and moral guides but as visionary leaders contributing to social, intellectual, and economic progress.
                </p>
                <p>
                  As the first organized initiative of its kind in the Muslim world, As-Sa'adah seeks to produce an independent generation capable of developing indigenous technological alternatives to Western dominance&mdash;enabling the Muslim Ummah to reclaim its global identity and contribute to the creation of a balanced, dignified, and self-reliant world order.
                </p>
              </div>
              <div className="vision-card programs-mission-card">
                <div className="vision-icon" aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h2>Mission of As-Sa'adah</h2>
                <p>
                  As-Sa'adah's mission is to redefine the intellectual and socio-economic role of Madrasah graduates by integrating classical Islamic scholarship with modern sciences, technology, and leadership development.
                </p>
                <p>
                  It seeks to cultivate a new generation of visionary 'Ulama who unite faith with functionality and tradition with transformation - reviving critical thought, fostering economic self-reliance through skill empowerment and entrepreneurship, and inspiring ethical, globally aware leadership. By bridging traditional and modern institutions and promoting indigenous technological innovation that challenges Western dominance, As-Sa'adah aims to initiate a civilizational renewal - where the Muslim Ummah reclaims its intellectual authority, moral influence, and constructive role in shaping a just, balanced, and self-sustained world order.
                </p>
              </div>
            </div>

            <div className="batch-section">
              <div className="batch-header-card">
                <div className="batch-header-left">
                  <span className="batch-badge">Batch 1 &middot; The Pioneers</span>
                  <h2>From Learning to Leadership: The Rise of Batch 1</h2>
                </div>
                <div className="batch-header-divider" aria-hidden="true"></div>
                <p className="batch-description">
                  Our inaugural cohort, Batch 1: The Pioneers, proved that the combination of dedicated focus and ethical grounding leads to exceptional achievement. They have successfully laid the foundation for the next generation of digital scholars.
                </p>
              </div>

              <div className="batch-grid" role="list">
                {[
                  {
                    title: "Commitment",
                    text: "Demonstrated discipline rarely seen in conventional programs.",
                    icon: (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                      </svg>
                    )
                  },
                  {
                    title: "Dual Mastery",
                    text: "Successfully synthesized complex technical skills with their existing religious knowledge.",
                    icon: (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                    )
                  },
                  {
                    title: "Real-World Application",
                    text: "Graduates deployed impressive Capstone Projects aimed at solving community and business challenges.",
                    icon: (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      </svg>
                    )
                  },
                  {
                    title: "The Al-Sa'adah Network",
                    text: "Graduates are now part of an exclusive network dedicated to mentorship and ethical tech career advancement.",
                    icon: (
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <article data-aos="fade" data-aos-delay={Math.min(index * 80, 400)} className="batch-card" key={item.title} role="listitem">
                    <span className="batch-card-index">{String(index + 1).padStart(2, "0")}</span>
                    <div className="batch-card-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

          </section>

          <section className="levels-intro-section">
            <div className="levels-intro-header">
              <p className="levels-intro-eyebrow">The Pathway</p>
              <h2>Our Program Levels</h2>
              <p className="levels-intro-description">
                A structured, performance-driven path for Madaris graduates &mdash; from an online foundation to a fully-funded physical bootcamp.
              </p>
            </div>

            <div className="levels-intro-grid">
              <article className="level-intro-card">
                <span className="level-intro-badge">Level 01</span>
                <h3>Online Preparatory Course</h3>
                <p>
                  A 2-month, fully online foundation phase open to absolute beginners. Students build logical thinking, Python programming basics, debugging, and responsible AI use &mdash; developing the discipline and digital literacy needed before advancing further.
                </p>
                <Link href="/Level1">Learn More About Level 1</Link>
              </article>

              <article className="level-intro-card">
                <span className="level-intro-badge">Level 02</span>
                <h3>Physical Bootcamp</h3>
                <p>
                  Candidates who complete Level 1 with the required consistency advance into an immersive, fully-funded physical bootcamp across seven specialization tracks &mdash; including AI, Web & App Development, Cloud & DevOps, and UI/UX &mdash; under expert mentorship.
                </p>
                <Link href="/Level2">Learn More About Level 2</Link>
              </article>
            </div>
          </section>

          <section id="instructors" className="instructors-section">
            <div className="instructors-inner">
              <div className="instructors-header">
                <p className="instructors-eyebrow">Religious Empowerment Program</p>
                <h2 className="instructors-title">Meet Our Instructors</h2>
                <p className="instructors-description">
                  The mentors guiding students through the technical and communication skills of the program.
                </p>
              </div>

              <div className="team-tabs">
                <div className="team-menu">
                  {instructors.map((instructor, index) => (
                    <button
                      type="button"
                      key={instructor.name}
                      className={`team-menu-item ${activeInstructor === index ? "active" : ""}`}
                      onClick={() => setActiveInstructor(index)}
                    >
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        onError={(e) => {
                          e.target.src = AVATAR_PLACEHOLDER;
                        }}
                      />
                      <h4>{instructor.name}</h4>
                      <span>{instructor.subject}</span>
                    </button>
                  ))}
                </div>

                {instructors.map((instructor, index) => (
                  index === activeInstructor && (
                    <div className="team-detail" key={instructor.name}>
                      <div className="team-detail-content">
                        <h4>{instructor.name}</h4>
                        <p className="team-detail-role">{instructor.subject}</p>
                        {instructor.bio && <p>{instructor.bio}</p>}
                        <div className="team-detail-cta">
                          <Link href="/contact" className="contact-member-btn">
                            Contact Member
                          </Link>
                        </div>
                      </div>
                      <div className="team-detail-image">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          onError={(e) => {
                            e.target.src = AVATAR_PLACEHOLDER;
                          }}
                        />
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .hero {
            position: relative;
            width: 100%;
            height: 100vh;
            min-height: 620px;
            overflow: hidden;
            z-index: 1;
          }

          .hero-image {
            position: relative;
            width: 100%;
            height: 100%;
            isolation: isolate;
          }

          .hero-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1.25s ease-in-out, transform 1.25s ease-in-out;
            z-index: 0;
            transform: scale(1.025);
          }
          
          .main-content {
            position: relative;
            z-index: 2;
            background: white;
          }

          .hero-slide.active {
            opacity: 1;
            transform: scale(1);
            z-index: 1;
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            display: flex;
            align-items: center;
            z-index: 2;
            padding: 0 20px;
            color: #1a472a;
          }

          .hero-overlay h1 {
            font-size: 4.5rem;
            font-weight: 900;
            margin-bottom: 2rem;
            font-family: 'Montserrat', sans-serif;
            color: #f7fff1;
            text-shadow: 0 18px 35px rgba(0, 0, 0, 0.9), 0 0 12px rgba(0, 0, 0, 0.45);
            line-height: 1.1;
            letter-spacing: -0.02em;
          }

          .hero-overlay button {
            padding: 1rem 2.25rem;
            border-radius: 32px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-right: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .hero-overlay .primary-btn {
            border: none;
            background: linear-gradient(135deg, #1a472a, #22543d);
            color: white;
            box-shadow: 0 6px 20px rgba(26, 71, 42, 0.4);
          }

          .hero-overlay .primary-btn:hover {
            background: linear-gradient(135deg, #22543d, #2f855a);
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(26, 71, 42, 0.45);
          }

          .hero-overlay .secondary-btn {
            background: #ffffff;
            color: #1a472a;
            border: none;
            box-shadow: 0 6px 15px rgba(26, 71, 42, 0.15);
          }

          .hero-overlay .secondary-btn:hover {
            background: #ffffff;
            color: #1a472a;
            transform: translateY(-4px);
            box-shadow: 0 10px 24px rgba(26, 71, 42, 0.2);
          }

          .hero-progress {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 0.75rem;
            z-index: 3;
          }

          .progress-dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.8);
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
            outline: none;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.15);
          }

          .progress-dot:hover {
            border-color: #ffffff;
          }

          .progress-dot.active {
            background: #1a472a;
            border-color: #1a472a;
            transform: scale(1.15);
          }

          .hero-content {
            text-align: center;
            color: #1a472a;
            max-width: 650px;
            background: rgba(255, 255, 255, 0.35);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            padding: 3rem 3.5rem;
            border-radius: 25px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
          }

          .hero-content-left {
            text-align: left;
            margin: 0;
            margin-left: 4rem;
            max-width: 650px;
          }

          .hero-title {
            font-size: 2.8rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1.2rem;
            font-family: 'Montserrat', sans-serif;
            text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
          }

          .hero-title-multiline {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .hero-title-line {
            display: block;
          }

          .hero-title-line-typed {
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }

          .line-green {
            display: block;
            margin-bottom: 0.5rem;
          }

          .hero-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .hero-actions-left {
            justify-content: flex-start;
          }

          .hero-btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 30px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-family: 'Montserrat', sans-serif;
          }

          .hero-btn.primary {
            background: linear-gradient(135deg, #1a472a, #22543d);
            color: white;
            box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
          }

          .hero-btn.primary:hover {
            background: linear-gradient(135deg, #22543d, #2f855a);
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(26, 71, 42, 0.4);
          }

          .hero-btn.secondary {
            background: transparent;
            color: #1a472a;
            border: 2px solid #1a472a;
          }

          .hero-btn.secondary:hover {
            background: #1a472a;
            color: white;
            transform: translateY(-3px);
          }

          .programs-container {
            min-height: 100vh;
          }

          .vision-section {
            padding: 80px 20px;
            background: #f8f9fa;
          }

          .vision-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .vision-card,
          .programs-mission-card {
            width: 100%;
            margin: 0;
            background: white;
            padding: clamp(2rem, 3vw, 2.75rem);
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(26, 71, 42, 0.1);
            border-top: 4px solid #2f855a;
            box-sizing: border-box;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .vision-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 28px 70px rgba(26, 71, 42, 0.14);
          }

          .vision-icon {
            width: 60px;
            height: 60px;
            border-radius: 16px;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.25rem;
            box-shadow: 0 10px 22px rgba(26, 71, 42, 0.28);
          }

          .batch-section {
            margin-top: 3rem;
            display: flex;
            flex-direction: column;
            gap: 2.2rem;
          }

          .batch-header-card {
            background: white;
            border: 1px solid rgba(26, 71, 42, 0.1);
            border-left: 6px solid #2f855a;
            color: #1a472a;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(26, 71, 42, 0.08);
            display: grid;
            grid-template-columns: 1.1fr auto 1fr;
            align-items: center;
            gap: 2rem;
            text-align: left;
          }

          .batch-header-left h2 {
            font-size: 1.9rem;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.3;
          }

          .batch-badge {
            display: inline-block;
            background: #f0fff4;
            border: 1px solid rgba(47, 133, 90, 0.3);
            color: #2f855a;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            padding: 0.4rem 1rem;
            border-radius: 20px;
            margin-bottom: 1rem;
          }

          .batch-header-divider {
            width: 1px;
            align-self: stretch;
            background: rgba(26, 71, 42, 0.12);
          }

          .batch-description {
            font-size: 1rem;
            line-height: 1.7;
            color: #4a5568;
            margin: 0;
          }

          .batch-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .batch-card {
            position: relative;
            background: white;
            border-radius: 18px;
            padding: 2rem 1.5rem 1.5rem;
            box-shadow: 0 12px 30px rgba(26, 71, 42, 0.06);
            border: 1px solid rgba(26, 71, 42, 0.08);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .batch-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #68d391, #2f855a, #1a472a);
          }

          .batch-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 50px rgba(26, 71, 42, 0.16);
          }

          .batch-card-index {
            position: absolute;
            top: 1.25rem;
            right: 1.5rem;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.85rem;
            font-weight: 800;
            color: rgba(26, 71, 42, 0.15);
            letter-spacing: 1px;
          }

          .batch-card-icon {
            width: 50px;
            height: 50px;
            border-radius: 14px;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.1rem;
            box-shadow: 0 10px 22px rgba(26, 71, 42, 0.25);
          }

          .batch-card h3 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: #1a472a;
          }

          .batch-card p {
            color: #4a5568;
            line-height: 1.55;
            margin: 0;
          }

          .batch-quote {
            position: relative;
            font-size: 1.15rem;
            font-weight: 500;
            text-align: center;
            font-style: italic;
            color: #1a472a;
            background: #f0fff4;
            border-left: 5px solid #1a472a;
            padding: 2rem 1.75rem 1.75rem;
            border-radius: 18px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            display: block;
          }

          .batch-quote-mark {
            display: block;
            font-family: 'Montserrat', sans-serif;
            font-size: 3.5rem;
            font-weight: 800;
            font-style: normal;
            line-height: 1;
            color: rgba(26, 71, 42, 0.18);
            margin-bottom: -0.5rem;
          }

          .levels-intro-section {
            max-width: 1100px;
            margin: 4rem auto 0;
            padding: 0 1.5rem;
          }

          .levels-intro-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 2.5rem;
          }

          .levels-intro-eyebrow {
            display: inline-block;
            color: #2f855a;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin: 0 0 0.5rem;
          }

          .levels-intro-header h2 {
            font-size: clamp(1.6rem, 3vw, 2.2rem);
            color: #1a472a;
            margin: 0 0 0.75rem;
            font-family: 'Montserrat', sans-serif;
          }

          .levels-intro-description {
            color: #4a5568;
            line-height: 1.7;
            margin: 0;
          }

          .levels-intro-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.75rem;
          }

          .level-intro-card {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            border: 1px solid rgba(26, 71, 42, 0.12);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
          }

          .level-intro-badge {
            display: inline-block;
            background: #f0fff4;
            color: #1a472a;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 0.35rem 0.85rem;
            border-radius: 20px;
            margin-bottom: 0.9rem;
          }

          .level-intro-card h3 {
            font-size: 1.3rem;
            color: #1a472a;
            margin: 0 0 0.75rem;
            font-family: 'Montserrat', sans-serif;
          }

          .level-intro-card p {
            color: #4a5568;
            line-height: 1.65;
            margin: 0 0 1.1rem;
          }

          .level-intro-card :global(a) {
            color: #2f855a;
            font-weight: 700;
            text-decoration: none;
          }

          .level-intro-card :global(a:hover) {
            text-decoration: underline;
          }

          .vision-card h2,
          .programs-mission-card h2 {
            font-size: clamp(0.95rem, 2.4vw, 1.9rem);
            color: #1a472a;
            margin: 0 0 1.25rem;
            font-weight: 800;
            text-align: left;
            letter-spacing: -0.01em;
            display: block;
            line-height: 1.2;
            white-space: normal;
          }

          .vision-card p,
          .programs-mission-card p {
            font-size: clamp(1rem, 1.6vw, 1.05rem);
            line-height: 1.85;
            color: #444;
            margin-bottom: 0;
            text-align: justify;
            word-break: normal;
            overflow-wrap: break-word;
            hyphens: auto;
          }

          .vision-card p + p,
          .programs-mission-card p + p {
            margin-top: 1rem;
          }

          .cta-section {
            background: #f8f9fa;
            padding: 80px 20px;
            text-align: center;
          }

          .cta-content h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #333;
          }

          .cta-content p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .btn-primary, .btn-secondary {
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }

          .btn-primary {
            background: linear-gradient(135deg, #1a472a 0%, #22543d 100%);
            color: white;
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(26, 71, 42, 0.3);
          }

          .btn-secondary {
            background: transparent;
            color: #1a472a;
            border: 2px solid #1a472a;
          }

          .btn-secondary:hover {
            background: #1a472a;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(26, 71, 42, 0.3);
          }

          .instructors-section {
            position: relative;
            margin-top: 4rem;
            padding: 20px 0 10px;
            scroll-margin-top: 100px;
          }

          .instructors-inner {
            max-width: 1320px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .instructors-header {
            text-align: center;
            margin-bottom: 3.5rem;
          }

          .instructors-eyebrow {
            color: #2f855a;
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 0.75rem;
          }

          .instructors-title {
            font-size: 2.6rem;
            font-weight: 900;
            background: linear-gradient(135deg, #1a472a, #22543d, #68d391);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-family: 'Montserrat', sans-serif;
            margin: 0 0 1.1rem;
            line-height: 1.1;
          }

          .instructors-description {
            font-size: 1.1rem;
            color: #4a5568;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.7;
          }

          .team-tabs {
            max-width: 1000px;
            margin: 0 auto;
          }

          .team-menu {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            margin-bottom: 2.5rem;
          }

          .team-menu-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: transparent;
            border: none;
            padding: 1rem 0.75rem;
            border-radius: 16px;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .team-menu-item:hover {
            background: #f0fdf4;
          }

          .team-menu-item img {
            width: 76px;
            height: 76px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 0.75rem;
            border: 3px solid transparent;
            transition: border-color 0.3s ease;
          }

          .team-menu-item.active img {
            border-color: #2f855a;
          }

          .team-menu-item h4 {
            font-size: 0.95rem;
            font-weight: 700;
            color: #1a472a;
            margin: 0 0 0.25rem;
            font-family: 'Montserrat', sans-serif;
          }

          .team-menu-item span {
            font-size: 0.75rem;
            color: #718096;
            line-height: 1.4;
          }

          .team-menu-item.active span {
            color: #2f855a;
            font-weight: 600;
          }

          .team-detail {
            position: relative;
            display: flex;
            align-items: center;
            gap: 2.5rem;
            background: linear-gradient(160deg, rgba(255, 255, 255, 0.98), rgba(240, 253, 244, 0.95));
            border-radius: 24px;
            padding: 2.5rem;
            box-shadow: 0 15px 40px rgba(26, 71, 42, 0.1);
            border: 1px solid rgba(26, 71, 42, 0.08);
            overflow: hidden;
          }

          .team-detail::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 6px;
            background: linear-gradient(180deg, #68d391, #2f855a, #1a472a);
          }

          .team-detail-content {
            flex: 1;
            min-width: 0;
            text-align: left;
          }

          .team-detail-content h4 {
            font-size: 1.6rem;
            font-weight: 800;
            color: #1a472a;
            margin: 0 0 0.5rem;
            font-family: 'Montserrat', sans-serif;
          }

          .team-detail-role {
            font-size: 1rem;
            color: #2f855a;
            font-weight: 600;
            margin: 0 0 0.9rem;
          }

          .team-detail-content p {
            font-size: 0.95rem;
            color: #4a5568;
            line-height: 1.65;
            margin: 0;
          }

          .team-detail-cta {
            margin-top: 1.5rem;
          }

          :global(.contact-member-btn) {
            display: inline-block;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: #ffffff;
            font-weight: 700;
            font-size: 0.9rem;
            padding: 0.75rem 1.75rem;
            border-radius: 30px;
            text-decoration: none;
            box-shadow: 0 10px 22px rgba(26, 71, 42, 0.28);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          :global(.contact-member-btn:hover) {
            transform: translateY(-3px);
            box-shadow: 0 14px 28px rgba(26, 71, 42, 0.35);
          }

          .team-detail-image {
            flex-shrink: 0;
            width: 200px;
            height: 200px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(26, 71, 42, 0.25);
          }

          .team-detail-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          @media (max-width: 768px) {
            .hero {
              height: 100vh;
              min-height: 560px;
            }

            .hero-image {
              height: 100%;
              min-height: inherit;
            }

            .hero-slide {
              height: 100%;
            }

            .hero-overlay h1 {
              font-size: 2.5rem;
            }

            .hero-overlay button {
              width: 100%;
              margin-right: 0;
              margin-bottom: 1rem;
            }

            .hero-progress {
              bottom: 15px;
            }

            .progress-dot {
              width: 10px;
              height: 10px;
            }

            .hero-content h1 {
              font-size: 2rem;
            }

            .vision-section {
              padding: 60px 15px;
            }

            .vision-card,
            .programs-mission-card {
              width: min(580px, 100%);
              padding: clamp(1.5rem, 7vw, 2.25rem);
              margin: 0 auto 1.25rem;
              border-radius: 20px;
            }

            .batch-header-card {
              grid-template-columns: 1fr;
              padding: 2rem;
              gap: 1.25rem;
            }

            .batch-header-divider {
              display: none;
            }

            .instructors-section {
              margin-top: 2.5rem;
            }

            .instructors-header {
              margin-bottom: 2rem;
            }

            .instructors-title {
              font-size: 2rem;
            }

            .team-menu {
              grid-template-columns: repeat(2, 1fr);
            }

            .team-detail {
              flex-direction: column-reverse;
              padding: 1.5rem;
              gap: 1.5rem;
              text-align: center;
            }

            .team-detail-content {
              text-align: center;
            }

            .team-detail-image {
              width: 160px;
              height: 160px;
            }

            .batch-header-left h2 {
              font-size: 1.6rem;
            }

            .batch-grid {
              grid-template-columns: 1fr;
            }

            .programs-mission-card {
              margin-top: 1.5rem;
            }

            .vision-card h2,
            .programs-mission-card h2 {
              font-size: clamp(0.95rem, 5vw, 2rem);
              text-align: center;
              margin: 0.4rem auto 0.85rem;
              display: block;
              white-space: normal;
            }

            .vision-card p,
            .programs-mission-card p {
              font-size: 0.98rem;
              margin-bottom: 0;
              text-align: justify;
              line-height: 1.6;
            }

            .vision-card p + p,
            .programs-mission-card p + p {
              margin-top: 0.75rem;
            }

            .cta-content h2 {
              font-size: 2rem;
            }
            
            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }
            
            .btn-primary, .btn-secondary {
              width: 100%;
              max-width: 300px;
            }
          }

          @media (max-width: 540px) {
            .vision-card,
            .programs-mission-card {
              width: calc(100% - 24px);
              padding: 1.4rem 1.6rem;
              margin: 0 auto 1.25rem;
            }

            .vision-card h2,
            .programs-mission-card h2 {
              font-size: clamp(0.9rem, 5.5vw, 1.6rem);
              line-height: 1.2;
              white-space: normal;
              text-align: center;
              display: block;
              margin: 0.25rem auto 0.75rem;
            }

            .vision-card p,
            .programs-mission-card p {
              font-size: 0.95rem;
              line-height: 1.5;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
