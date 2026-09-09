import Head from "next/head";
import Layout from "../components/Layout";

export default function Impact() {
  return (
    <>
      <Head>
        <title>Our Impact - As-Sa'adah | Making a Difference</title>
        <meta name="description" content="Discover the meaningful impact As-Sa'adah has made in communities through our digital education, community development, and youth empowerment programs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
      </Head>
      <Layout>
        <div className="impact-container">
          <section className="hero-section">
            <div data-aos="fade-up" className="hero-content">
              <h1>Our Impact</h1>
              <p className="hero-subtitle">Measuring Our Success Through Community Transformation</p>
            </div>
          </section>

          <section className="impact-stats-new">
            <div data-aos="fade-up" className="stats-wrapper">
              <div className="stats-header">
                <h2 className="stats-title">Our Impact in Numbers</h2>
                <p className="stats-subtitle">Transforming communities through meaningful action</p>
              </div>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon-wrapper">
                    <div className="stat-icon">🎓</div>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">500+</div>
                    <h3 className="stat-title">Students Trained</h3>
                    <p className="stat-desc">Young people empowered with digital skills and technology education</p>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon-wrapper">
                    <div className="stat-icon">🌍</div>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">15</div>
                    <h3 className="stat-title">Communities Reached</h3>
                    <p className="stat-desc">Local communities benefiting from our development programs</p>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon-wrapper">
                    <div className="stat-icon">💼</div>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">200+</div>
                    <h3 className="stat-title">Job Placements</h3>
                    <p className="stat-desc">Graduates successfully placed in technology and digital marketing roles</p>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon-wrapper">
                    <div className="stat-icon">🤝</div>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">25+</div>
                    <h3 className="stat-title">Partner Organizations</h3>
                    <p className="stat-desc">Strategic partnerships enabling greater community impact</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="impact-stories-new">
            <div data-aos="fade-up" className="stories-container">
              <div className="stories-header">
                <span className="stories-badge">SUCCESS STORIES</span>
                <h2 className="stories-main-title">Transforming Lives, One Story at a Time</h2>
                <p className="stories-description">Discover how our programs have created lasting change in the lives of our community members</p>
              </div>
              
              <div className="stories-wrapper">
                <div className="story-item">
                  <div className="story-left">
                    <div className="story-icon-container">
                      <div className="story-icon">📚</div>
                    </div>
                    <div className="story-meta">
                      <h3 className="story-title">Digital Skills Training Success</h3>
                      <div className="story-category">Education Program</div>
                    </div>
                  </div>
                  <div className="story-right">
                    <div className="quote-mark">"</div>
                    <p className="story-quote">Through As-Sa'adah's free bootcamp, I learned web development and digital marketing. Today, I'm working as a freelance developer and helping support my family.</p>
                    <div className="story-author-info">
                      <div className="author-details">
                        <strong className="author-name">Ahmad Hassan</strong>
                        <span className="author-role">Web Developer Graduate</span>
                      </div>
                      <div className="author-avatar">AH</div>
                    </div>
                  </div>
                </div>

                <div className="story-item">
                  <div className="story-left">
                    <div className="story-icon-container">
                      <div className="story-icon">💡</div>
                    </div>
                    <div className="story-meta">
                      <h3 className="story-title">Youth Leadership Development</h3>
                      <div className="story-category">Leadership Program</div>
                    </div>
                  </div>
                  <div className="story-right">
                    <div className="quote-mark">"</div>
                    <p className="story-quote">The mentorship program helped me develop leadership skills and confidence. I now lead a youth group in my community and organize educational workshops.</p>
                    <div className="story-author-info">
                      <div className="author-details">
                        <strong className="author-name">Fatima Ali</strong>
                        <span className="author-role">Community Youth Leader</span>
                      </div>
                      <div className="author-avatar">FA</div>
                    </div>
                  </div>
                </div>

                <div className="story-item">
                  <div className="story-left">
                    <div className="story-icon-container">
                      <div className="story-icon">🚀</div>
                    </div>
                    <div className="story-meta">
                      <h3 className="story-title">Community Business Growth</h3>
                      <div className="story-category">Business Development</div>
                    </div>
                  </div>
                  <div className="story-right">
                    <div className="quote-mark">"</div>
                    <p className="story-quote">With the digital marketing skills I gained, I was able to expand my small business online and increase my income by 300% in just 6 months.</p>
                    <div className="story-author-info">
                      <div className="author-details">
                        <strong className="author-name">Muhammad Khan</strong>
                        <span className="author-role">Small Business Owner</span>
                      </div>
                      <div className="author-avatar">MK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="impact-goals">
            <div data-aos="fade-up" className="goals-content">
              <h2>Our Future Goals</h2>
              <p>Building on our success, we're committed to expanding our impact</p>
              
              <div className="goals-grid">
                <div className="goal-card">
                  <div className="goal-number">2025</div>
                  <h3>1000+ Students</h3>
                  <p>Train 1000+ students in digital skills and technology</p>
                </div>
                
                <div className="goal-card">
                  <div className="goal-number">2026</div>
                  <h3>50 Communities</h3>
                  <p>Expand our reach to 50 communities across Pakistan</p>
                </div>
                
                <div className="goal-card">
                  <div className="goal-number">2027</div>
                  <h3>Digital Hub</h3>
                  <p>Establish our main digital education hub and resource center</p>
                </div>
              </div>
            </div>
          </section>

          <section className="impact-cta">
            <div data-aos="fade-up" className="cta-content">
              <h2>Join Us in Making an Impact</h2>
              <p>Your support helps us continue transforming lives and building stronger communities</p>
              <div className="cta-buttons">
                <button className="btn-primary">Donate Now</button>
                <button className="btn-secondary">Volunteer With Us</button>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .impact-container {
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
            font-family: 'Montserrat', sans-serif;
          }

          .hero-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
          }

          .impact-stats-new {
            padding: 100px 20px;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            position: relative;
            overflow: hidden;
          }

          .impact-stats-new::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e5e7eb" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
            pointer-events: none;
          }

          .stats-wrapper {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          .stats-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .stats-title {
            font-size: 3rem;
            font-weight: 900;
            color: #1a472a;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #1a472a, #22543d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .stats-subtitle {
            font-size: 1.3rem;
            color: #64748b;
            font-weight: 500;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
            margin-top: 3rem;
          }

          .stat-item {
            background: white;
            border-radius: 24px;
            padding: 2.5rem;
            text-align: center;
            box-shadow: 0 20px 60px rgba(26, 71, 42, 0.08);
            border: 1px solid rgba(26, 71, 42, 0.05);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .stat-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #1a472a, #22543d, #2f855a);
            transform: scaleX(0);
            transition: transform 0.4s ease;
          }

          .stat-item:hover {
            transform: translateY(-12px);
            box-shadow: 0 30px 80px rgba(26, 71, 42, 0.15);
            border-color: rgba(26, 71, 42, 0.1);
          }

          .stat-item:hover::before {
            transform: scaleX(1);
          }

          .stat-icon-wrapper {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: linear-gradient(135deg, #1a472a, #22543d);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            transition: all 0.4s ease;
          }

          .stat-item:hover .stat-icon-wrapper {
            transform: scale(1.1) rotate(5deg);
            background: linear-gradient(135deg, #22543d, #2f855a);
          }

          .stat-icon {
            font-size: 2.2rem;
            filter: brightness(0) invert(1);
            transition: all 0.3s ease;
          }

          .stat-content {
            position: relative;
          }

          .stat-number {
            font-size: 3.5rem;
            font-weight: 900;
            color: #1a472a;
            margin-bottom: 0.5rem;
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #1a472a, #22543d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: all 0.3s ease;
          }

          .stat-item:hover .stat-number {
            transform: scale(1.05);
          }

          .stat-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #1a472a;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .stat-desc {
            color: #64748b;
            font-size: 1rem;
            line-height: 1.6;
            margin: 0;
            font-weight: 400;
          }


          .impact-stories-new {
            padding: 100px 20px;
            background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
            position: relative;
          }

          .stories-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .stories-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .stories-badge {
            display: inline-block;
            background: linear-gradient(135deg, #1a472a, #22543d);
            color: white;
            padding: 8px 20px;
            border-radius: 25px;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .stories-main-title {
            font-size: 3rem;
            font-weight: 900;
            color: #1a472a;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.1;
          }

          .stories-description {
            font-size: 1.2rem;
            color: #64748b;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .stories-wrapper {
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }

          .story-item {
            display: flex;
            background: white;
            border-radius: 24px;
            padding: 2.5rem;
            box-shadow: 0 20px 60px rgba(26, 71, 42, 0.08);
            border: 1px solid rgba(26, 71, 42, 0.05);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .story-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #1a472a, #22543d, #2f855a);
            transform: scaleX(0);
            transition: transform 0.4s ease;
          }

          .story-item:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 80px rgba(26, 71, 42, 0.12);
            border-color: rgba(26, 71, 42, 0.1);
          }

          .story-item:hover::before {
            transform: scaleX(1);
          }

          .story-left {
            flex: 0 0 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-right: 2rem;
            border-right: 2px solid #f1f5f9;
          }

          .story-icon-container {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #1a472a, #22543d);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            transition: all 0.4s ease;
          }

          .story-item:hover .story-icon-container {
            transform: scale(1.1) rotate(10deg);
            background: linear-gradient(135deg, #22543d, #2f855a);
          }

          .story-icon {
            font-size: 2.5rem;
            filter: brightness(0) invert(1);
          }

          .story-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #1a472a;
            margin-bottom: 0.5rem;
            font-family: 'Montserrat', sans-serif;
          }

          .story-category {
            background: #f1f5f9;
            color: #64748b;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: 500;
          }

          .story-right {
            flex: 1;
            padding-left: 2rem;
            position: relative;
          }

          .quote-mark {
            font-size: 4rem;
            color: #e2e8f0;
            font-family: serif;
            line-height: 1;
            position: absolute;
            top: -10px;
            left: 10px;
          }

          .story-quote {
            font-size: 1.1rem;
            color: #374151;
            line-height: 1.7;
            margin: 1.5rem 0 2rem 0;
            font-style: italic;
            position: relative;
            z-index: 1;
          }

          .story-author-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .author-details {
            flex: 1;
          }

          .author-name {
            display: block;
            font-size: 1.1rem;
            font-weight: 700;
            color: #1a472a;
            margin-bottom: 0.3rem;
            font-family: 'Montserrat', sans-serif;
          }

          .author-role {
            color: #64748b;
            font-size: 0.9rem;
            font-weight: 500;
          }

          .author-avatar {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #1a472a, #22543d);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .impact-goals {
            padding: 80px 20px;
            background: #f8fafc;
          }

          .goals-content {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
          }

          .goals-content h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #1a472a;
            font-family: 'Montserrat', sans-serif;
          }

          .goals-content p {
            font-size: 1.1rem;
            color: #64748b;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .goals-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .goal-card {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transition: transform 0.3s ease;
            border: 2px solid #e2e8f0;
          }

          .goal-card:hover {
            transform: translateY(-8px);
            border-color: #1a472a;
            box-shadow: 0 20px 40px rgba(26, 71, 42, 0.15);
          }

          .goal-number {
            font-size: 2rem;
            font-weight: 800;
            color: #1a472a;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .goal-card h3 {
            font-size: 1.4rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #1a472a;
            font-family: 'Montserrat', sans-serif;
          }

          .goal-card p {
            color: #64748b;
            line-height: 1.6;
          }

          .impact-cta {
            padding: 80px 20px;
            background: linear-gradient(135deg, #1a472a 0%, #22543d 100%);
            color: white;
            text-align: center;
          }

          .cta-content h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .cta-content p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            opacity: 0.9;
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
            font-family: 'Montserrat', sans-serif;
          }

          .btn-primary {
            background: white;
            color: #1a472a;
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3);
          }

          .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
          }

          .btn-secondary:hover {
            background: white;
            color: #1a472a;
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2rem;
            }
            
            .impact-stats-new {
              padding: 60px 20px;
            }
            
            .stats-title {
              font-size: 2.2rem;
            }
            
            .stats-subtitle {
              font-size: 1.1rem;
            }
            
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .stat-item {
              padding: 2rem;
            }
            
            .stat-icon-wrapper {
              width: 70px;
              height: 70px;
            }
            
            .stat-icon {
              font-size: 2rem;
            }
            
            .stat-number {
              font-size: 3rem;
            }
            
            .impact-stories-new {
              padding: 60px 20px;
            }
            
            .stories-main-title {
              font-size: 2.2rem;
            }
            
            .stories-description {
              font-size: 1.1rem;
            }
            
            .story-item {
              flex-direction: column;
              padding: 2rem;
            }
            
            .story-left {
              flex: none;
              padding-right: 0;
              padding-bottom: 2rem;
              border-right: none;
              border-bottom: 2px solid #f1f5f9;
            }
            
            .story-right {
              padding-left: 0;
              padding-top: 2rem;
            }
            
            .story-icon-container {
              width: 80px;
              height: 80px;
            }
            
            .story-icon {
              font-size: 2rem;
            }
            
            .goals-grid {
              grid-template-columns: 1fr;
            }
            
            .section-header h2 {
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

          @media (max-width: 480px) {
            .impact-stats-new {
              padding: 40px 15px;
            }
            
            .stats-title {
              font-size: 1.8rem;
            }
            
            .stats-subtitle {
              font-size: 1rem;
            }
            
            .stat-item {
              padding: 1.5rem;
            }
            
            .stat-icon-wrapper {
              width: 60px;
              height: 60px;
            }
            
            .stat-icon {
              font-size: 1.8rem;
            }
            
            .stat-number {
              font-size: 2.5rem;
            }
            
            .stat-title {
              font-size: 1.2rem;
            }
            
            .stat-desc {
              font-size: 0.9rem;
            }
            
            .impact-stories-new {
              padding: 40px 15px;
            }
            
            .stories-main-title {
              font-size: 1.8rem;
            }
            
            .stories-description {
              font-size: 1rem;
            }
            
            .story-item {
              padding: 1.5rem;
              gap: 1.5rem;
            }
            
            .story-left {
              padding-bottom: 1.5rem;
            }
            
            .story-right {
              padding-top: 1.5rem;
            }
            
            .story-icon-container {
              width: 70px;
              height: 70px;
            }
            
            .story-icon {
              font-size: 1.8rem;
            }
            
            .story-title {
              font-size: 1.2rem;
            }
            
            .quote-mark {
              font-size: 3rem;
            }
            
            .story-quote {
              font-size: 1rem;
            }
            
            .author-avatar {
              width: 45px;
              height: 45px;
              font-size: 0.9rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}