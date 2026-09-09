import Head from "next/head";
import Layout from "../components/Layout";
import { socialLinks } from "../lib/socialLinks";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - As-Sa'adah | Get in Touch</title>
        <meta name="description" content="Get in touch with As-Sa'adah. Contact us for inquiries about our community projects, partnerships, volunteering, or donations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
      </Head>
      <Layout>
        <div className="contact-container">
          <section className="hero-section">
            <div className="hero-content">
              <h1>Get in Touch</h1>
              <p className="hero-subtitle">Have questions about our Religious Empowerment Program, course levels, or admissions? Reach out — our team is available 24/7 to guide you through your journey from knowledge to capability.</p>
            </div>
          </section>

          <section className="contact-main">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="info-card">
                  <div className="icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59544 1.99522 8.06544 2.16708 8.43785 2.48353C8.81026 2.79999 9.06708 3.23945 9.15999 3.72C9.33657 4.68007 9.63272 5.62273 10.04 6.53C10.1856 6.88792 10.2374 7.27691 10.1903 7.65982C10.1433 8.04274 9.99505 8.40397 9.75999 8.7L8.51999 9.94C9.9281 12.4135 12.0865 14.5719 14.56 15.98L15.8 14.74C16.096 14.5049 16.4573 14.3567 16.8402 14.3097C17.2231 14.2626 17.6121 14.3144 17.97 14.46C18.8773 14.8673 19.8199 15.1634 20.78 15.34C21.2656 15.4336 21.7093 15.6944 22.0258 16.0713C22.3422 16.4482 22.5130 16.9232 22.51 17.41L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="info-card-body">
                    <h3>Phone</h3>
                    <p>+92 312 2221280</p>
                    <p>Available 24/7</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="info-card-body">
                    <h3>Email</h3>
                    <p>contact@as-saadah.com</p>
                    <p>We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="info-card-body">
                    <h3>Address</h3>
                    <p>As-Sa'adah</p>
                    <p>Q634+452, Chaman Zar Hill, Islamabad, Pakistan</p>
                    <p>Office Hours: Mon-Sat 9AM-6PM</p>
                  </div>
                </div>

                <div className="social-links">
                  <div className="social-links-header">
                    <div className="social-links-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                    </div>
                    <h3>Follow Us</h3>
                  </div>
                  <div className="social-icons">
                    {socialLinks.map((platform) => (
                      <a data-aos="fade-up"
                        key={platform.name}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label={platform.name}
                      >
                        <platform.Icon size={26} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <div className="form-container">
                  <p className="form-eyebrow">Get In Touch</p>
                  <h2>Send us a Message</h2>
                  <p className="form-subtitle">Fill out the form below and we'll get back to you shortly.</p>
                  <form onSubmit={(e) => {
                    e.preventDefault();

                    const name = e.target.name.value;
                    const email = e.target.email.value;
                    const subject = e.target.subject.value;
                    const inquiry = e.target.inquiry.value;
                    const message = e.target.message.value;

                    const whatsappMessage = encodeURIComponent(
                      `*New Contact Form Message*%0A` +
                      `*Name:* ${name}%0A` +
                      `*Email:* ${email}%0A` +
                      `*Subject:* ${subject}%0A` +
                      `*Inquiry Type:* ${inquiry}%0A` +
                      `*Message:* ${message}`
                    );

                    const whatsappLink = `https://api.whatsapp.com/send?phone=923122221280&text=${whatsappMessage}`;

                    window.open(whatsappLink, "_blank");
                    e.target.reset();
                  }}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name">Name</label>
                        <input id="contact-name" type="text" name="name" placeholder="Your Name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-email">Email</label>
                        <input id="contact-email" type="email" name="email" placeholder="Your Email" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-subject">Subject</label>
                        <input id="contact-subject" type="text" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-inquiry">Inquiry Type</label>
                        <select id="contact-inquiry" name="inquiry" required defaultValue="">
                          <option value="" disabled>Select Inquiry Type</option>
                          <option value="projects">Foundation Projects</option>
                          <option value="partnership">Partnership</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="donation">Donation</option>
                          <option value="education">Digital Education Initiative</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Message</label>
                      <textarea id="contact-message" name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                      Send Message
                      <span className="submit-btn-arrow">→</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="map-section">
            <div className="map-container">
              <div className="map-header">
                <h3>Visit Our Location</h3>
                <p>Find us at our main office and learning center</p>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3318.2!2d73.20727320370115!3d33.753050922857064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ1JzExLjAiTiA3M8KwMTInMjYuMiJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="As-Sa'adah Location"
                ></iframe>
              </div>
            </div>
          </section>
        </div>

        {/* --- Styles here remain exactly the same --- */}
       <style jsx>{`
          .contact-container {
            min-height: 100vh;
          }

          .hero-section {
            background: linear-gradient(135deg, #1a472a 0%, #22543d 100%);
            color: white;
            padding: 80px 20px;
            text-align: center;
          }

          .hero-content h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .contact-main {
            padding: 80px 20px;
            background: #f8f9fa;
          }

          .contact-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .info-card {
            position: relative;
            background: white;
            padding: 1.75rem;
            border-radius: 18px;
            box-shadow: 0 12px 30px rgba(26, 71, 42, 0.07);
            border: 1px solid rgba(26, 71, 42, 0.08);
            text-align: left;
            display: flex;
            align-items: flex-start;
            gap: 1.25rem;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .info-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #68d391, #2f855a, #1a472a);
          }

          .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 18px 40px rgba(26, 71, 42, 0.14);
          }

          .info-card .icon {
            flex-shrink: 0;
            width: 56px;
            height: 56px;
            border-radius: 15px;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 22px rgba(26, 71, 42, 0.28);
          }

          .info-card .icon svg {
            width: 24px;
            height: 24px;
          }

          .info-card h3 {
            font-size: 1.15rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #1a472a;
          }

          .info-card p {
            color: #64748b;
            margin-bottom: 0.35rem;
            line-height: 1.5;
            font-size: 0.92rem;
          }

          .social-links {
            position: relative;
            background: white;
            padding: 2rem;
            border-radius: 18px;
            border: 1px solid rgba(26, 71, 42, 0.08);
            box-shadow: 0 12px 30px rgba(26, 71, 42, 0.07);
            text-align: center;
            overflow: hidden;
          }

          .social-links::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #68d391, #2f855a, #1a472a);
          }

          .social-links-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
          }

          .social-links-icon {
            width: 42px;
            height: 42px;
            flex-shrink: 0;
            border-radius: 12px;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 18px rgba(26, 71, 42, 0.25);
          }

          .social-links h3 {
            font-size: 1.2rem;
            font-weight: 700;
            margin: 0;
            color: #1a472a;
          }

          .social-icons {
            display: grid;
            grid-template-columns: repeat(3, 62px);
            justify-content: center;
            gap: 1.1rem;
          }

          .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 62px;
            height: 62px;
            padding: 0.5rem;
            background: #f8fafc;
            border-radius: 16px;
            border: 1px solid rgba(26, 71, 42, 0.08);
            text-decoration: none;
            transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          }

          .social-icon:hover {
            transform: translateY(-4px) scale(1.05);
            background: white;
            box-shadow: 0 12px 24px rgba(26, 71, 42, 0.18);
          }

          .social-icon svg {
            width: 30px;
            height: 30px;
          }

          .contact-form {
            position: relative;
            background: white;
            border-radius: 20px;
            border: 1px solid rgba(26, 71, 42, 0.08);
            box-shadow: 0 15px 45px rgba(26, 71, 42, 0.09);
            overflow: hidden;
          }

          .contact-form::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, #68d391, #2f855a, #1a472a);
          }

          .form-container {
            padding: 3rem;
          }

          .form-eyebrow {
            color: #2f855a;
            font-weight: 700;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin: 0 0 0.5rem;
          }

          .form-container h2 {
            font-size: 1.85rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            color: #1a472a;
            font-family: 'Montserrat', sans-serif;
          }

          .form-subtitle {
            color: #64748b;
            font-size: 0.95rem;
            margin: 0 0 2rem;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }

          .form-group {
            margin-bottom: 1.5rem;
            display: flex;
            flex-direction: column;
          }

          .form-group label {
            font-size: 0.85rem;
            font-weight: 700;
            color: #1a472a;
            margin-bottom: 0.45rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            width: 100%;
            padding: 0.85rem 1rem;
            border: 1.5px solid rgba(26, 71, 42, 0.15);
            border-radius: 10px;
            font-size: 0.95rem;
            font-family: inherit;
            transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
            background: #f8fafc;
            box-sizing: border-box;
          }

          .form-group input:focus,
          .form-group select:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #2f855a;
            box-shadow: 0 0 0 3px rgba(47, 133, 90, 0.15);
            background: white;
          }

          .form-group textarea {
            resize: vertical;
            min-height: 120px;
          }

          .submit-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            background: linear-gradient(135deg, #1a472a, #2f855a);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .submit-btn-arrow {
            transition: transform 0.3s ease;
          }

          .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 28px rgba(26, 71, 42, 0.3);
            background: linear-gradient(135deg, #22543d, #2f855a);
          }

          .submit-btn:hover .submit-btn-arrow {
            transform: translateX(4px);
          }

          .map-section {
            padding: 60px 20px;
            background: #f8f9fa;
          }

          .map-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .map-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .map-header h3 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #1a472a;
          }

          .map-header p {
            font-size: 1.2rem;
            color: #7f8c8d;
            max-width: 600px;
            margin: 0 auto;
          }

          .map-embed {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            background: white;
            padding: 10px;
          }

          .map-embed iframe {
            border-radius: 15px;
            width: 100%;
            height: 300px;
          }

          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2rem;
            }

            .contact-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .contact-main {
              padding: 40px 20px;
            }

            .form-container {
              padding: 2rem;
            }

            .form-row {
              grid-template-columns: 1fr;
              gap: 0;
            }

            .info-card,
            .social-links {
              padding: 1.5rem;
            }

            .social-icons {
              grid-template-columns: repeat(3, 54px);
              gap: 0.8rem;
            }

            .social-icon {
              width: 54px;
              height: 54px;
              padding: 0.4rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
