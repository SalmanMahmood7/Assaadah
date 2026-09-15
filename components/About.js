import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const isHomePage = router?.pathname === '/';

  const slides = [
    {
      id: 'vision',
      subtitle: "About As-Sa'adah",
      title: "Vision of As-Sa'adah",
      content: [
        "As-Sa'adah is a movement empowering Madaris graduates with modern knowledge, creativity, and technology skills—uniting classical Islamic scholarship with the tools to lead in today's world."
      ]
    },
    {
      id: 'mission',
      subtitle: "About As-Sa'adah",
      title: "Mission of As-Sa'adah",
      content: [
        "Our mission is to redefine the role of Madrasah graduates by blending Islamic scholarship with modern sciences, technology, and leadership—cultivating visionary 'Ulama ready to serve the Ummah."
      ]
    }
  ];

  useEffect(() => {
    if (!isHomePage) return;

    setIsMounted(true);
    
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isHomePage) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(slideInterval);
  }, [isHomePage, slides.length]);

  if (!isHomePage) {
    return null;
  }

  return (
    <section id="about" className="about-section-floating">
      <div className="about-container">
        <div className="about-floating-card">
          {/* Background Logo */}
          <div className="about-background-logo">
            <Image
              src="/images.png"
              alt=""
              width={800}
              height={800}
              className="background-logo-img"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="about-card-content">
            <div className="about-content-wrapper">
              {/* Logo */}
              <div className={`about-image ${isMounted && isVisible ? 'fade-in' : ''}`}>
                <Image
                  src="/images.png"
                  alt="As-Sa'adah Logo"
                  width={300}
                  height={300}
                  className="about-img"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              {/* Text Content */}
              <div className={`about-heading ${isMounted && isVisible ? 'fade-in' : ''}`}>
                <div className="about-heading-content">
                  <p className="about-section-subtitle">{slides[currentSlide].subtitle}</p>
                  <h2 className="about-section-title">{slides[currentSlide].title}</h2>
                  <div className="about-section-description">
                    {slides[currentSlide].content.map((paragraph, index) => (
                      <p data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)} key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className={`slide-indicators ${isMounted && isVisible ? 'fade-in' : ''}`}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slide-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Button */}
            <div className={`about-button ${isMounted && isVisible ? 'fade-in' : ''}`}>
              <Link href="/about-us" className="about-discover-btn">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section-floating {
          position: relative;
          z-index: 10;
          margin: 60px auto 50px;
          padding: 0 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0;
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .about-floating-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 25px 60px rgba(30, 58, 138, 0.15);
          border: 1px solid rgba(30, 58, 138, 0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          max-width: 1000px;
          margin: 0 auto;
        }

        .about-background-logo {
          position: absolute;
          top: 50%;
          left: 68%;
          transform: translate(-50%, -50%);
          z-index: 1;
          opacity: 0.12;
          pointer-events: none;
          transition: all 0.3s ease;
          width: min(600px, 90%);
          max-height: calc(100% - 40px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .background-logo-img {
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(100%) sepia(100%) hue-rotate(60deg) saturate(2);
          transition: all 0.3s ease;
        }

        .about-card-content {
          position: relative;
          z-index: 2;
        }

        .about-content-wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .about-image {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease;
          flex: 0 0 auto;
        }

        .about-image.fade-in {
          opacity: 1;
          transform: translateX(0);
        }

        .about-img {
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.2);
          transition: all 0.3s ease;
        }

        .about-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
          flex: 1;
        }

        .about-heading.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .about-section-subtitle {
          color: #1a472a;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 0.8rem;
          font-family: 'Montserrat', sans-serif;
          text-align: center;
        }

        .about-section-title {
          color: #1a472a;
          font-size: 2.4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
          line-height: 1.2;
          text-align: center;
        }

        .about-section-description {
          max-width: 100%;
        }

        .about-section-description p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 1rem 0;
          text-align: justify;
          text-justify: inter-word;
        }

        .about-section-description p:last-child {
          margin-bottom: 0;
        }

        .about-button {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.2s;
          text-align: center;
          margin-top: 1.5rem;
        }

        .about-button.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-indicators {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin: 1.5rem 0;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.1s;
        }

        .slide-indicators.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(26, 71, 42, 0.3);
          cursor: pointer;
        }

        .slide-dot.active {
          background: #1a472a;
        }

        .slide-dot:hover {
          background: rgba(26, 71, 42, 0.6);
        }

        .about-discover-btn {
          display: inline-block;
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(26, 71, 42, 0.3);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-section-floating {
            margin-top: 40px;
            margin-bottom: 40px;
          }

          .about-floating-card {
            padding: 2rem 1.8rem;
            border-radius: 18px;
            max-width: 900px;
          }

          .about-content-wrapper {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .about-image {
            align-self: center;
          }

          .about-img {
            width: 200px;
            height: 200px;
          }

          .about-section-title {
            font-size: 1.9rem;
          }

          .about-section-description p {
            font-size: 1rem;
            text-align: justify;
          }

          .about-background-logo {
            left: 50%;
            right: auto;
            width: min(420px, 100%);
            opacity: 0.14;
            transform: translate(-50%, -50%);
          }

        }

        @media (max-width: 480px) {
          .about-section-floating {
            margin-top: 30px;
            margin-bottom: 30px;
          }

          .about-floating-card {
            padding: 1.8rem 1.3rem;
            border-radius: 15px;
            max-width: 800px;
          }

          .about-img {
            width: 170px;
            height: 170px;
          }

          .about-section-title {
            font-size: 1.5rem;
          }

          .about-section-description p {
            font-size: 0.95rem;
            text-align: justify;
          }

          .about-discover-btn {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }

          .about-background-logo {
            left: 50%;
            right: auto;
            width: min(360px, 100%);
            opacity: 0.16;
            transform: translate(-50%, -50%) scale(0.9);
          }

        }
      `}</style>
    </section>
  );
}
