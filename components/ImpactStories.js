import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import supabase from '../lib/supabaseClient';

const FALLBACK_STORIES = [
  {
    title: "Digital Skills Course Excellence",
    story: "I recently completed a 6-month Digital Skills course at As-Sa'adah, Islamabad, and it was an excellent learning experience. The instructors were supportive, the training was practical, and I gained valuable skills in digital media, social media, and modern IT tools. This course really improved my confidence and helped me adapt to today's digital world. I highly recommend it!",
    name: "Muhammad bin Tahir",
    position: "Digital Skills Graduate, Lahore",
    image: "/muhammad.jpg"
  },
  {
    title: "Full-Stack Development Journey",
    story: "At As-Sa'adah, I learned full-stack development while living a simple and focused lifestyle. This experience strengthened my technical abilities, enhanced my soft skills, and brought clarity to my vision and mission. The Bootcamp refined my competencies and gave my goals clear direction. I strongly recommend this transformative program to Ulama and graduates of Dars-e-Nizami.",
    name: "Muhammad Yousuf Umar",
    position: "Full-Stack Developer, Sadiqabad",
    image: "/Yousef.jpg"
  },
  {
    title: "Religious Empowerment Program",
    story: "The As-Sa'adah IT Bootcamp under the Religious Empowerment program was a pivotal experience that enhanced my technical proficiency and essential soft skills, giving me clear professional vision. I strongly recommend this high-value program to Ulama and graduates of Dars-e-Nizami as a strategic investment of their time.",
    name: "Syed Usman Gillani",
    position: "IT Professional, Multan",
    image: "/usman.jpg"
  },
  {
    title: "Global Digital Skills Training",
    story: "I discovered this bootcamp right after completing my educational journey in Multan. The program provided excellent training in global and digital skills that taught us how to serve the world in a better way. We received outstanding trainers who showed us how to invest our time productively and develop valuable technical skills.",
    name: "Muhammad Osama Amin",
    position: "Bootcamp Graduate, Multan",
    image: "/usamaa.jpg"
  },
  {
    title: "VR/360° Development & Professional Growth",
    story: "My experience at As-Sa'adah was truly transformative. During the Bootcamp, I gained hands-on expertise in full-stack development and developed practical VR/360° projects within a highly focused and disciplined environment. This program not only enhanced my technical capabilities but also strengthened my soft skills and provided clarity in defining my professional goals. I wholeheartedly encourage Ulama and Dars-e-Nizami graduates to participate in this program, as it offers a rare opportunity to acquire modern technical skills while enhancing personal and professional growth. This experience is not only practical but also a meaningful investment in their future.",
    name: "Owais Ahmad",
    position: "VR Developer, Dir Lower, KPK",
    image: "/owais.jpg"
  }
];

const EMPTY_SUBMISSION = { name: '', location: '', programme: '', quote: '' };

export default function ImpactStories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [impactStories, setImpactStories] = useState(FALLBACK_STORIES);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submission, setSubmission] = useState(EMPTY_SUBMISSION);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const loadTestimonials = () => {
    supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('display_order', { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setImpactStories(
          data.map((row) => ({
            title: row.programme || row.name,
            story: row.quote,
            name: row.name,
            position: [row.programme, row.location].filter(Boolean).join(', '),
            image: row.photo || '/muhammad.jpg'
          }))
        );
      });
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleSubmissionChange = (key, value) => {
    setSubmission((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmitTestimonial = async (e) => {
    e.preventDefault();
    if (!submission.name.trim() || !submission.quote.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in your name and testimonial.' });
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);
    const { error } = await supabase.from('testimonials').insert({
      name: submission.name.trim(),
      location: submission.location.trim(),
      programme: submission.programme.trim(),
      quote: submission.quote.trim(),
      approved: false
    });
    setSubmitting(false);

    if (error) {
      setSubmitStatus({ type: 'error', message: "Something went wrong. Please try again." });
      return;
    }

    setSubmission(EMPTY_SUBMISSION);
    setSubmitStatus({ type: 'success', message: "Thank you! Your testimonial has been submitted and will appear here once approved." });
  };

  const totalSlides = impactStories.length;
  const slideRefs = useRef([]);
  const containerRef = useRef(null);
  const resumeAutoplayTimeout = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // on mobile the wrapper uses native scroll-snap instead of the transform above,
  // so keep the pagination bullets/autoplay in sync by scrolling the active slide
  // horizontally within its own container only. Note: Element.scrollIntoView()
  // must NOT be used here — it also scrolls the page's vertical scroll position
  // to bring the element into view, which yanked the whole page down to this
  // section every time autoplay advanced, regardless of where the user was reading.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window === 'undefined' || window.innerWidth > 768) return;
    const container = containerRef.current;
    const slide = slideRefs.current[currentSlide];
    if (!container || !slide) return;
    const target = slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
    container.scrollTo({ left: target, behavior: 'smooth' });
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = () => {
    window.clearTimeout(resumeAutoplayTimeout.current);
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = () => {
    resumeAutoplayTimeout.current = window.setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="impact-stories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Student Testimonials</h2>
          <p className="section-description">
            Real stories from lives transformed through As-Sa'adah's welfare programs
          </p>
        </div>

        <div className="testimonial-slider">
          {/* Pagination Bullets */}
          <div className="slider-pagination">
            {impactStories.map((_, index) => (
              <button
                key={index}
                className={`pagination-bullet ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slides Container */}
          <div
            className="testimonial-container"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="testimonial-wrapper"
              style={{ transform: `translateX(-${currentSlide * 400}px)` }}
            >
              {/* Duplicate slides for infinite loop effect */}
              {[...impactStories, ...impactStories, ...impactStories].map((story, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 80, 400)}
                  key={index}
                  ref={(node) => {
                    if (index < totalSlides) slideRefs.current[index] = node;
                  }}
                  className="testimonial-slide"
                >
                  <div className="testimonial-inner">
                    <div className="testimonial-content">
                      <p>
                        <span className="story-title">{story.title}</span>
                        <br />
                        <span className="story-description">
                          <br />
                          {story.story}
                          <br />
                        </span>
                      </p>
                    </div>

                    <div className="testimonial-client-info">
                      <div className="testimonial-avatar">
                        <div className="testimonial-image" data-name={story.name.split(' ').map(n => n[0]).join('')}>
                          {story.image.startsWith('data:') ? (
                            <img
                              src={story.image}
                              alt={story.name}
                              className="profile-image"
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%'
                              }}
                            />
                          ) : (
                            <>
                              <Image
                                src={story.image}
                                alt={story.name}
                                width={70}
                                height={70}
                                className="profile-image"
                                onLoadingComplete={() => {
                                  console.log(`✓ Successfully loaded: ${story.image}`);
                                }}
                                onError={(e) => {
                                  console.log(`✗ Failed to load: ${story.image}`);
                                }}
                                unoptimized
                              />
                              <img
                                src={story.image}
                                alt={story.name}
                                className="profile-image-fallback"
                                onLoad={(e) => {
                                  e.target.style.display = 'block';
                                  e.target.style.opacity = '1';
                                  console.log(`✓ Fallback loaded: ${story.image}`);
                                }}
                                onError={(e) => {
                                  console.log(`✗ Fallback failed: ${story.image}`);
                                  e.target.style.display = 'none';
                                }}
                                style={{
                                  display: 'none',
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  borderRadius: '50%',
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  opacity: 0,
                                  transition: 'opacity 0.3s ease'
                                }}
                              />
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="client-details">
                        <p className="client-name">{story.name}</p>
                        <div className="client-position">{story.position}</div>
                      </div>
                    </div>

                    <div className="quote-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="37" viewBox="0 0 45 37" fill="none">
                        <path d="M20 21.3543V0H0V37H3.55556L20 21.3543ZM2.96296 2.96H17.037V20.0857L2.96296 33.4762V2.96Z" fill="#EEEEEE"/>
                        <path d="M25 37H28.5556L45 21.3543V0H25V37ZM27.963 2.96H42.037V20.0857L27.963 33.4762V2.96Z" fill="#EEEEEE"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="share-story-cta">
          <p>Are you a graduate of our program?</p>
          <button
            type="button"
            className="share-story-btn"
            onClick={() => {
              setIsFormOpen(true);
              setSubmitStatus(null);
            }}
          >
            Share Your Story
          </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="testimonial-modal-backdrop" onClick={() => setIsFormOpen(false)}>
          <div className="testimonial-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="testimonial-modal-close"
              onClick={() => setIsFormOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            {submitStatus?.type === 'success' ? (
              <div className="submission-success">
                <h3>Thank You!</h3>
                <p>{submitStatus.message}</p>
                <button type="button" className="share-story-btn" onClick={() => setIsFormOpen(false)}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3>Share Your Testimonial</h3>
                <p className="testimonial-modal-subtitle">
                  Your story will be reviewed by our team before it appears on the site.
                </p>
                <form onSubmit={handleSubmitTestimonial}>
                  <div className="testimonial-form-row">
                    <label htmlFor="testimonial-name">Name *</label>
                    <input
                      id="testimonial-name"
                      type="text"
                      value={submission.name}
                      onChange={(e) => handleSubmissionChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="testimonial-form-row">
                    <label htmlFor="testimonial-location">Location</label>
                    <input
                      id="testimonial-location"
                      type="text"
                      value={submission.location}
                      onChange={(e) => handleSubmissionChange('location', e.target.value)}
                    />
                  </div>
                  <div className="testimonial-form-row">
                    <label htmlFor="testimonial-programme">Programme</label>
                    <input
                      id="testimonial-programme"
                      type="text"
                      placeholder="e.g. Digital Skills Graduate"
                      value={submission.programme}
                      onChange={(e) => handleSubmissionChange('programme', e.target.value)}
                    />
                  </div>
                  <div className="testimonial-form-row">
                    <label htmlFor="testimonial-quote">Your Testimonial *</label>
                    <textarea
                      id="testimonial-quote"
                      rows={5}
                      value={submission.quote}
                      onChange={(e) => handleSubmissionChange('quote', e.target.value)}
                      required
                    />
                  </div>

                  {submitStatus?.type === 'error' && (
                    <p className="submission-error">{submitStatus.message}</p>
                  )}

                  <button type="submit" className="share-story-btn" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Testimonial'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .impact-stories-section {
          padding: 50px 0;
          background: #ffffff;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #1a472a;
          margin-bottom: 1rem;
          font-family: 'Montserrat', sans-serif;
        }

        .section-description {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .testimonial-slider {
          position: relative;
          overflow: hidden;
          max-width: 1200px;
          margin: 0 auto;
        }

        .slider-pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 3rem;
        }

        .pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #d1d5db;
          cursor: pointer;
        }

        .pagination-bullet.active {
          background: #1a472a;
        }

        .testimonial-container {
          position: relative;
          overflow: hidden;
          height: 540px;
        }

        .testimonial-wrapper {
          display: flex;
          transition: transform 0.5s ease;
          height: 100%;
        }

        .testimonial-slide {
          min-width: 400px;
          margin-right: 30px;
          height: 520px;
        }

        .testimonial-inner {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          height: 100%;
          position: relative;
          box-shadow: 0 10px 30px rgba(30, 58, 138, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          word-wrap: break-word;
        }

        .testimonial-content {
          flex: 1;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .testimonial-content p {
          margin: 0;
          line-height: 1.6;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .story-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a472a;
          display: block;
          margin-bottom: 0.8rem;
          line-height: 1.4;
        }

        .story-description {
          color: #666;
          font-size: 13px;
          line-height: 1.5;
          text-align: justify;
        }

        .testimonial-client-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #f0f0f0;
          flex-shrink: 0;
        }

        .testimonial-avatar {
          flex-shrink: 0;
        }

        .testimonial-image {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #1a472a;
          box-shadow: 0 4px 12px rgba(26, 71, 42, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e5e7eb;
          position: relative;
        }

        .testimonial-image::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 12px;
          color: #666;
          font-weight: bold;
          text-align: center;
          z-index: 1;
        }

        .testimonial-image img,
        .testimonial-image .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .client-details {
          flex: 1;
        }

        .client-name {
          font-weight: 700;
          color: #1a472a;
          margin: 0 0 0.2rem 0;
          font-size: 1rem;
          line-height: 1.2;
        }

        .client-position {
          color: #666;
          font-size: 0.85rem;
          font-weight: 500;
          line-height: 1.2;
        }

        .quote-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.1;
        }

        .quote-icon svg {
          width: 40px;
          height: 32px;
        }

        @media (max-width: 768px) {
          .impact-stories-section {
            padding: 60px 0;
          }

          .section-title {
            font-size: 1.9rem;
          }

          .testimonial-inner {
            padding: 2rem 1.5rem;
          }

          .testimonial-container {
            height: auto;
            min-height: 350px;
            overflow-x: auto;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            margin: 0 -20px;
            padding: 0 20px;
          }

          .testimonial-container::-webkit-scrollbar {
            display: none;
          }

          .testimonial-wrapper {
            transform: none !important;
            flex-direction: row;
            gap: 0;
            width: max-content;
          }

          .testimonial-slide {
            min-width: 82vw;
            max-width: 82vw;
            margin-right: 16px;
            height: auto;
            scroll-snap-align: center;
          }

          .slider-pagination {
            order: -1;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 480px) {
          .testimonial-inner {
            padding: 1.5rem;
          }

          .story-title {
            font-size: 15px;
          }

          .story-description {
            font-size: 13px;
          }
        }

        .share-story-cta {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2.5rem;
          border-top: 1px solid #f0f0f0;
        }

        .share-story-cta p {
          color: #4a5568;
          font-size: 1.05rem;
          margin: 0 0 1.1rem;
        }

        .share-story-btn {
          background: linear-gradient(135deg, #1a472a, #2f855a);
          color: white;
          border: none;
          padding: 0.85rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .share-story-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(26, 71, 42, 0.3);
        }

        .share-story-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .testimonial-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 43, 26, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 300;
        }

        .testimonial-modal {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 2.25rem;
          width: min(520px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        .testimonial-modal h3 {
          margin: 0 0 0.5rem;
          color: #1a472a;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.4rem;
        }

        .testimonial-modal-subtitle {
          color: #718096;
          font-size: 0.9rem;
          margin: 0 0 1.5rem;
          line-height: 1.5;
        }

        .testimonial-modal-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: transparent;
          border: none;
          font-size: 1.5rem;
          line-height: 1;
          color: #94a3b8;
          cursor: pointer;
        }

        .testimonial-modal-close:hover {
          color: #1a472a;
        }

        .testimonial-form-row {
          margin-bottom: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .testimonial-form-row label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1a472a;
        }

        .testimonial-form-row input,
        .testimonial-form-row textarea {
          padding: 0.65rem 0.8rem;
          border-radius: 10px;
          border: 1.5px solid rgba(26, 71, 42, 0.2);
          font-size: 0.9rem;
          font-family: inherit;
        }

        .testimonial-form-row input:focus,
        .testimonial-form-row textarea:focus {
          outline: none;
          border-color: #2f855a;
        }

        .testimonial-form-row textarea {
          resize: vertical;
        }

        .submission-error {
          color: #b91c1c;
          font-size: 0.85rem;
          margin: 0 0 1rem;
        }

        .submission-success {
          text-align: center;
        }

        .submission-success h3 {
          margin-bottom: 0.75rem;
        }

        .submission-success p {
          color: #4a5568;
          line-height: 1.6;
          margin: 0 0 1.5rem;
        }
      `}</style>
    </section>
  );
}
