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
            <div
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
        </div>

        <div className="hero-scrim" />

        <div className="hero-overlay">
          <div className="hero-content" data-aos="fade-right">
            <span className="hero-eyebrow">As-Sa&apos;adah Initiative</span>

            <h1>Religious Empowerment Program</h1>

            <p className="hero-subtitle">From Knowledge to Capability</p>

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

              <button className="secondary-btn" onClick={scrollToStructure}>
                Explore Structure
              </button>
            </div>

            <p className="hero-footer-note">
              An initiative of As-Sa&apos;adah <br />
              Implemented by Preprenuership Pvt Ltd
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 640px;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          inset: 0;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 1.6s ease-in-out, transform 8s ease-out;
        }

        .hero-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            rgba(19, 74, 46, 0.97) 0%,
            rgba(20, 82, 50, 0.93) 20%,
            rgba(22, 90, 55, 0.72) 36%,
            rgba(24, 100, 60, 0.32) 52%,
            rgba(24, 100, 60, 0) 68%
          );
        }

        .hero-overlay {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 6vw;
        }

        .hero-content {
          text-align: left;
          color: #ffffff;
          max-width: 620px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #d7ecdd;
          margin-bottom: 1.25rem;
        }

        .hero-eyebrow::before {
          content: "";
          width: 32px;
          height: 2px;
          background: #ffffff;
          opacity: 0.7;
        }

        .hero-content h1 {
          font-size: clamp(2.1rem, 4vw, 3.1rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          font-family: "Montserrat", sans-serif;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #eef7f0;
        }

        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 2.25rem;
          line-height: 1.6;
          color: #dcece0;
          max-width: 480px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-bottom: 2.25rem;
        }

        .primary-btn {
          background: #ffffff;
          color: #123420;
          border: none;
          padding: 1rem 2.2rem;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 700;
          box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.5);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.7);
          color: #ffffff;
          padding: 1rem 2.2rem;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          backdrop-filter: blur(6px);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.55);
        }

        .secondary-btn:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.16);
        }

        .hero-footer-note {
          font-size: 0.85rem;
          opacity: 0.85;
          line-height: 1.5;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 380px;
        }

        @media (max-width: 900px) {
          .hero-scrim {
            background: linear-gradient(
              180deg,
              rgba(20, 82, 50, 0.55) 0%,
              rgba(19, 74, 46, 0.82) 55%,
              rgba(19, 74, 46, 0.97) 100%
            );
          }

          .hero-overlay {
            align-items: flex-end;
            padding: 0 6vw 3.5rem;
          }

          .hero-content {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-buttons {
            flex-direction: column;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <ApplyLevelGate isOpen={isApplyGateOpen} onClose={() => setIsApplyGateOpen(false)} />
    </>
  );
}
