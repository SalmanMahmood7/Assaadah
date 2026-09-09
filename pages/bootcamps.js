import Head from "next/head";
import Layout from "../components/Layout";

export default function Bootcamps() {
  return (
    <>
      <Head>
        <title>Digital Education Project - As-Sa'adah</title>
        <meta name="description" content="Learn about As-Sa'adah's Digital Education Initiative - our community project providing free technology bootcamps and digital literacy training to underserved communities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
      </Head>
      <Layout>
        <div className="bootcamps-container">
          <section className="hero-section">
            <div data-aos="fade-up" className="hero-content">
              <h1>Digital Education Initiative</h1>
              <p className="hero-subtitle">As-Sa'adah's Community Education Project</p>
            </div>
          </section>

          <section className="bootcamps-intro">
            <div data-aos="fade-up" className="container">
              <div className="intro-content">
                <h2>Bridging the Digital Divide</h2>
                <p>Our Digital Education Initiative is one of As-Sa'adah's core projects, designed to provide free technology education to underserved communities. Through comprehensive bootcamps, mentorship programs, and career support, we're working to create equal opportunities in the digital economy while empowering individuals and strengthening communities.</p>
              </div>
            </div>
          </section>

          <section className="bootcamps-grid">
            <div data-aos="fade-up" className="bootcamp-card">
              <div className="bootcamp-icon">
                <img src="/digital marketing icon.png" alt="Digital Marketing" width="50" height="50" />
              </div>
              <h3>Digital Marketing Training</h3>
              <div className="duration">Part of Digital Education Initiative</div>
              <p>Free comprehensive training in digital marketing skills for community members seeking economic empowerment.</p>
            </div>

            <div className="bootcamp-card">
              <div className="bootcamp-icon">
                <img src="/development icon.png" alt="Web Development" width="50" height="50" />
              </div>
              <h3>Web Development Training</h3>
              <div className="duration">Part of Digital Education Initiative</div>
              <p>Free technology training program helping community members build valuable programming and web development skills.</p>
            </div>

            <div className="bootcamp-card">
              <div className="bootcamp-icon">
                <img src="/film making icon.png" alt="Content Creation" width="50" height="50" />
              </div>
              <h3>Content Creation Training</h3>
              <div className="duration">Part of Digital Education Initiative</div>
              <p>Free training in digital content creation and storytelling to help community members develop creative and communication skills.</p>
            </div>
          </section>

          <section className="bootcamp-benefits">
            <div data-aos="fade-up" className="container">
              <h2>Foundation Project Impact</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h3>Community Focus</h3>
                  <p>Designed specifically to serve underserved communities and bridge the digital divide.</p>
                </div>
                <div className="benefit-item">
                  <h3>Holistic Support</h3>
                  <p>Beyond training, we provide mentorship, career guidance, and ongoing community support.</p>
                </div>
                <div className="benefit-item">
                  <h3>Sustainable Impact</h3>
                  <p>Creating lasting change by empowering individuals with skills for economic independence.</p>
                </div>
                <div className="benefit-item">
                  <h3>Foundation Values</h3>
                  <p>Rooted in our commitment to education, empowerment, and community development.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="application-process">
            <div data-aos="fade-up" className="container">
              <h2>How Our Digital Education Initiative Works</h2>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Community Outreach</h3>
                    <p>We identify underserved communities and assess their specific educational needs and opportunities.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Program Design</h3>
                    <p>Customize training programs to meet community needs and individual learning goals.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Education Delivery</h3>
                    <p>Provide comprehensive, hands-on training with expert instructors and mentorship support.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Ongoing Support</h3>
                    <p>Continue supporting graduates with career guidance, networking, and community connections.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        <style jsx>{`
          .bootcamps-container {
            min-height: 100vh;
          }

          .hero-section {
            background: linear-gradient(135deg, #cd871f 0%, #b57418 100%);
            color: white;
            padding: 100px 20px;
            text-align: center;
          }

          .hero-content h1 {
            font-size: 3.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .hero-subtitle {
            font-size: 1.3rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
          }

          .bootcamps-intro {
            padding: 80px 20px;
            background: #f8f9fa;
          }

          .intro-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .intro-content h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: #333;
            font-family: 'Montserrat', sans-serif;
          }

          .intro-content p {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #666;
          }

          .bootcamps-grid {
            padding: 60px 20px;
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem;
          }

          .bootcamp-card {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 2px solid #f0f0f0;
            text-align: center;
          }

          .bootcamp-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
            border-color: #cd871f;
          }

          .bootcamp-icon {
            margin-bottom: 1rem;
          }

          .bootcamp-card h3 {
            font-size: 1.4rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #333;
            font-family: 'Montserrat', sans-serif;
          }

          .duration {
            display: inline-block;
            background: linear-gradient(135deg, #cd871f, #b57418);
            color: white;
            padding: 0.3rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .bootcamp-card p {
            color: #666;
            margin-bottom: 0;
            line-height: 1.5;
            font-size: 0.95rem;
          }

          .features {
            margin-bottom: 2rem;
          }

          .features h4 {
            color: #cd871f;
            margin-bottom: 1rem;
            font-size: 1.2rem;
            font-weight: 600;
          }

          .features ul {
            list-style: none;
            padding: 0;
          }

          .features li {
            padding: 0.5rem 0;
            color: #555;
            position: relative;
            padding-left: 1.5rem;
          }

          .features li:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #cd871f;
            font-weight: bold;
          }

          .bootcamp-details {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 10px;
            border-left: 4px solid #cd871f;
          }

          .detail-item {
            margin-bottom: 0.5rem;
            color: #666;
          }

          .detail-item:last-child {
            margin-bottom: 0;
          }

          .bootcamp-benefits {
            padding: 80px 20px;
            background: #f8f9fa;
          }

          .bootcamp-benefits h2 {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 3rem;
            color: #333;
            font-family: 'Montserrat', sans-serif;
          }

          .benefits-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }

          .benefit-item {
            background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
            padding: 2.5rem 2rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            transition: all 0.4s ease;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
          }

          .benefit-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(135deg, #cd871f, #b57418);
            transform: scaleX(0);
            transition: transform 0.4s ease;
          }

          .benefit-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(205, 135, 31, 0.15);
            border-color: rgba(205, 135, 31, 0.2);
          }

          .benefit-item:hover::before {
            transform: scaleX(1);
          }

          .benefit-item h3 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 1.2rem;
            color: #2c3e50;
            font-family: 'Montserrat', sans-serif;
            position: relative;
            transition: color 0.3s ease;
          }

          .benefit-item:hover h3 {
            color: #cd871f;
          }

          .benefit-item p {
            color: #5a6c7d;
            line-height: 1.7;
            font-size: 0.95rem;
            font-weight: 400;
          }

          .application-process {
            padding: 80px 20px;
          }

          .application-process h2 {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 3rem;
            color: #333;
            font-family: 'Montserrat', sans-serif;
          }

          .process-steps {
            max-width: 1000px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .step {
            display: flex;
            align-items: center;
            gap: 2rem;
            padding: 2rem;
            background: white;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          }

          .step-number {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #cd871f, #b57418);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            flex-shrink: 0;
          }

          .step-content h3 {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #333;
            font-family: 'Montserrat', sans-serif;
          }

          .step-content p {
            color: #666;
            line-height: 1.6;
            margin: 0 0 1.5rem 0;
          }

          .step-clickable {
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .step-clickable:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(205, 135, 31, 0.15);
          }

          .apply-redirect-btn {
            background: linear-gradient(135deg, #cd871f, #b57418);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(205, 135, 31, 0.3);
            font-size: 0.9rem;
          }

          .apply-redirect-btn:hover {
            background: linear-gradient(135deg, #b57418, #9e6216);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(205, 135, 31, 0.4);
          }

          .cta-section {
            background: linear-gradient(135deg, #2d5016, #3a6b1e);
            padding: 80px 20px;
            text-align: center;
            color: white;
          }

          .cta-content h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .cta-content p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            opacity: 0.9;
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
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-family: 'Montserrat', sans-serif;
          }

          .btn-primary {
            background: linear-gradient(135deg, #cd871f, #b57418);
            color: white;
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(205, 135, 31, 0.4);
          }

          .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
          }

          .btn-secondary:hover {
            background: white;
            color: #2d5016;
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(255, 255, 255, 0.3);
          }

          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2.5rem;
            }
            
            .bootcamps-grid {
              padding: 40px 20px;
            }
            
            .bootcamp-card {
              padding: 2rem;
            }
            
            .benefits-grid {
              grid-template-columns: 1fr;
            }
            
            .step {
              flex-direction: column;
              text-align: center;
              gap: 1rem;
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
        `}</style>
      </Layout>
    </>
  );
}