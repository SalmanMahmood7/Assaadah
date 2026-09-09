import Image from "next/image";
import { useState, useEffect } from "react";
import supabase from "../lib/supabaseClient";
import ApplyLevelGate from "./ApplyLevelGate";

const FALLBACK_HERO_IMAGES = [
  {
    src: "/WhatsApp Image 2025-11-05 at 02.57.46_321328ff.jpg",
    alt: "Madaris graduates participating in structured learning"
  },
  {
    src: "/WhatsApp Image 2025-11-05 at 12.38.05_77150b61.jpg",
    alt: "Students developing technical capability"
  },
  {
    src: "/WhatsApp Image 2025-11-05 at 18.32.17_254218d3.jpg",
    alt: "Collaborative project work session"
  }
];

export default function Education() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroImages, setHeroImages] = useState(FALLBACK_HERO_IMAGES);
  const [isApplyGateOpen, setIsApplyGateOpen] = useState(false);

  useEffect(() => {
    supabase
      .from("hero_images")
      .select("*")
      .eq("page", "Homepage")
      .order("id", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setHeroImages(
          data.map((row) => ({ src: row.image, alt: row.altText || "As-Sa'adah" }))
        );
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToStructure = () => {
    const section = document.getElementById("program-structure");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-image">
          {heroImages.map((image, index) => (
            <div data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              key={image.src}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>
          ))}

          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">
                {/* NEW MAIN TITLE */}
                <h1>Religious Empowerment Program</h1>

                {/* Previous title as simple text */}
                <p className="hero-subtitle">
                  From Knowledge to Capability
                </p>

                <p className="hero-description">
                  A structured, performance-driven path for Madaris graduates.
                </p>

                <div className="hero-buttons">
                  <button
                    className="primary-btn"
                    onClick={() => setIsApplyGateOpen(true)}
                  >
                    Apply Now
                  </button>

                  <button
                    className="secondary-btn"
                    onClick={scrollToStructure}
                  >
                    Explore Structure
                  </button>
                </div>

                <p className="hero-footer-note">
                  An initiative of As-Sa&apos;adah <br />
                  Implemented by Preprenuership Pvt Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 620px;
          overflow: hidden;
        }

        .hero-image {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1.25s ease-in-out;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        .hero-content {
          text-align: center;
          color: #1a472a;
          max-width: 700px;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(15px);
          padding: 3rem;
          border-radius: 25px;
          margin: 0 auto;
        }

        .hero-content h1 {
  font-size: clamp(2rem, 4.5vw, 2.8rem); /* slightly smaller max for better 2-line fit */
  font-weight: 800;
  line-height: 1.25; /* slightly more spacing for readability */
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  max-width: 900px; /* limits width so it wraps cleanly into 2 lines */
  margin-left: auto;
  margin-right: auto; /* centers the title */
  text-align: center; /* ensure center alignment */
}

        .hero-subtitle {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .primary-btn {
          background: #1a472a;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
        }

        .secondary-btn {
          background: transparent;
          border: 2px solid #1a472a;
          color: #1a472a;
          padding: 1rem 2rem;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
        }

        .secondary-btn:hover,
        .primary-btn:hover {
          transform: translateY(-3px);
        }

        .hero-footer-note {
          font-size: 0.85rem;
          opacity: 0.8;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem 1.5rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }
        }
      `}</style>

      <ApplyLevelGate isOpen={isApplyGateOpen} onClose={() => setIsApplyGateOpen(false)} />
    </>
  );
}
