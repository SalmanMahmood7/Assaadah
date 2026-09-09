import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function Donate() {
  useEffect(() => {
    // Handle donation tab switching
    const handleTabSwitch = () => {
      const donationTabs = document.querySelectorAll('.donation-tabs label');
      const onceFields = document.querySelector('.once-fields');
      const monthlyFields = document.querySelector('.monthly-fields');

      donationTabs.forEach(tab => {
        tab.addEventListener('click', function() {
          donationTabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
          
          const input = this.querySelector('input');
          if (input && input.value === 'Monthly') {
            onceFields.style.display = 'none';
            monthlyFields.style.display = 'grid';
          } else {
            onceFields.style.display = 'grid';
            monthlyFields.style.display = 'none';
          }
        });
      });
    };

    // Handle amount selection
    const handleAmountSelection = () => {
      const amountButtons = document.querySelectorAll('.custom-option-button');
      const amountInput = document.querySelector('input[name="selected_amount"]');

      amountButtons.forEach(button => {
        button.addEventListener('click', function() {
          const parentGrid = this.closest('.form-select-buttons');
          parentGrid.querySelectorAll('.custom-option-button').forEach(b => b.classList.remove('selected'));
          this.classList.add('selected');
          if (amountInput) {
            amountInput.value = this.dataset.price;
          }
        });
      });
    };

    // Handle quantity buttons
    const handleQuantity = () => {
      const minusBtn = document.querySelector('.minus');
      const plusBtn = document.querySelector('.plus');
      const quantityInput = document.querySelector('input[name="quantity"]');

      if (minusBtn && quantityInput) {
        minusBtn.addEventListener('click', function() {
          let value = parseInt(quantityInput.value);
          if (value > 1) {
            quantityInput.value = value - 1;
          }
        });
      }

      if (plusBtn && quantityInput) {
        plusBtn.addEventListener('click', function() {
          let value = parseInt(quantityInput.value);
          quantityInput.value = value + 1;
        });
      }
    };

    // Initialize all handlers
    handleTabSwitch();
    handleAmountSelection();
    handleQuantity();

    return () => {
      // Cleanup event listeners
      const donationTabs = document.querySelectorAll('.donation-tabs label');
      const amountButtons = document.querySelectorAll('.custom-option-button');
      const minusBtn = document.querySelector('.minus');
      const plusBtn = document.querySelector('.plus');

      donationTabs.forEach(tab => {
        tab.removeEventListener('click', () => {});
      });
      amountButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
      if (minusBtn) minusBtn.removeEventListener('click', () => {});
      if (plusBtn) plusBtn.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <>
      <Head>
        <title>Donate - As-Sa'adah</title>
        <meta name="description" content="Support As-Sa'adah's Islamic welfare programs through Zakat, Sadaqah, and charitable donations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
      </Head>
      <Layout>
        <div className="donate-page">
          {/* Hero Section */}
          <section className="donate-hero">
            <div data-aos="fade-up" className="container">
              <div className="donate-hero-content">
                <h1>Make a Difference Through Islamic Giving</h1>
                <p>Your donations enable As-Sa'adah to provide comprehensive welfare services including education, healthcare, poverty relief, and spiritual development programs based on Islamic principles.</p>
              </div>
            </div>
          </section>

          {/* Donation Panel */}
          <section className="donation-panel-section">
            <div data-aos="fade-up" className="container">
              <div className="donation-panel-wrapper">
                <div className="video-section">
                  <div className="video-container">
                    <iframe 
                      src="https://www.youtube.com/embed/qsKcLtGzPpI?feature=oembed&loop=0&mute=0&controls=1" 
                      allowFullScreen 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                      title="Hajj Sail Video">
                    </iframe>
                    <div className="video-overlay" onClick={(e) => e.target.style.display = 'none'}>
                      <div className="play-button"></div>
                    </div>
                  </div>
                  
                  <div className="progress-section desktop-only">
                    <div className="progress-info">
                      <div>
                        <span className="raised">$335,000</span> 
                        <span>of <span className="goal">$625,000</span> goal</span>
                      </div>
                    </div>
                    <div className="progress-bar-background">
                      <div className="progress-bar"></div>
                      <span className="percent">54%</span>
                    </div>
                  </div>
                </div>

                <div className="donation-form-section">
                  <div className="progress-section mobile-only">
                    <div className="progress-info">
                      <div>
                        <span className="raised">$335,000</span> 
                        <span>of <span className="goal">$625,000</span> goal</span>
                      </div>
                    </div>
                    <div className="progress-bar-background">
                      <div className="progress-bar"></div>
                      <span className="percent">54%</span>
                    </div>
                  </div>

                  <form className="donation-form" method="post" action="/donate/">
                    <div className="donation-tabs">
                      <label className="active">
                        <input type="radio" name="donation_option" value="Once" defaultChecked />
                        Once
                      </label>
                      <label>
                        <input type="radio" name="donation_option" value="Monthly" />
                        Monthly
                      </label>
                    </div>

                    <div className="box-title">Your most generous donation</div>

                    <div className="once-fields form-select-buttons">
                      <button type="button" className="custom-option-button" data-price="1250">
                        <span className="price">$1250</span>
                      </button>
                      <button type="button" className="custom-option-button" data-price="625">
                        <span className="price">$625</span>
                      </button>
                      <button type="button" className="custom-option-button" data-price="375">
                        <span className="price">$375</span>
                      </button>
                      <button type="button" className="custom-option-button" data-price="150">
                        <span className="price">$150</span>
                      </button>
                      <button type="button" className="custom-option-button selected" data-price="70">
                        <span className="price">$70</span>
                      </button>
                      <button type="button" className="custom-option-button" data-price="30">
                        <span className="price">$30</span>
                      </button>
                    </div>

                    <div className="monthly-fields form-select-buttons">
                      <button type="button" className="custom-option-button" data-price="375">
                        <span className="price">$375</span>
                      </button>
                      <button type="button" className="custom-option-button" data-price="165">
                        <span className="price">$165</span>
                      </button>
                      <button type="button" className="custom-option-button" data-price="75">
                        <span className="price">$75</span>
                      </button>
                      <button type="button" className="custom-option-button" data-price="45">
                        <span className="price">$45</span>
                      </button>
                      <button type="button" className="custom-option-button selected" data-price="12">
                        <span className="price">$12</span>
                      </button>
                      <button type="button" className="custom-option-button" data-price="6">
                        <span className="price">$6</span>
                      </button>
                    </div>

                    <div className="custom-amount-box">
                      <div className="currency-input">
                        <input type="number" name="selected_amount" placeholder="0.00" defaultValue="70" step="0.01" min="1" />
                        <span className="currency-symbol">$</span>
                        <span className="after">Custom Amount</span>
                      </div>
                    </div>

                    <div className="quantity">
                      <input type="button" value="-" className="minus btn" />
                      <input type="number" defaultValue="1" min="1" name="quantity" />
                      <input type="button" value="+" className="plus btn" />
                    </div>

                    <button type="submit" className="single_add_to_cart_button">
                      Donate and Support
                    </button>
                  </form>

                  <div className="info-box">
                    <div className="info-text">This Project is Zakat Applicable</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Donation Categories */}
          <section className="donation-categories">
            <div data-aos="fade-up" className="container">
              <h2>Choose Your Donation Type</h2>
              <div className="categories-grid">
                <div className="category-card">
                  <div className="category-icon">💰</div>
                  <h3>Zakat</h3>
                  <p>Fulfill your religious obligation by giving 2.5% of your wealth to help the poor and needy through our Islamic welfare programs.</p>
                  <button className="donate-btn">Give Zakat</button>
                </div>
                <div className="category-card">
                  <div className="category-icon">🤲</div>
                  <h3>Sadaqah</h3>
                  <p>Earn continuous rewards through voluntary charity that supports our education, healthcare, and community development initiatives.</p>
                  <button className="donate-btn">Give Sadaqah</button>
                </div>
                <div className="category-card">
                  <div className="category-icon">🌙</div>
                  <h3>Ramadan & Eid</h3>
                  <p>Special donations during holy months to provide food, clothing, and gifts to orphans, widows, and disadvantaged families.</p>
                  <button className="donate-btn">Festival Donation</button>
                </div>
                <div className="category-card">
                  <div className="category-icon">🏥</div>
                  <h3>Emergency Relief</h3>
                  <p>Support immediate humanitarian aid for disaster victims, refugees, and those in urgent need of medical assistance.</p>
                  <button className="donate-btn">Emergency Aid</button>
                </div>
              </div>
            </div>
          </section>

          {/* Donation Impact */}
          <section className="donation-impact">
            <div data-aos="fade-up" className="container">
              <h2>Your Donation Impact</h2>
              <div className="impact-grid">
                <div className="impact-item">
                  <div className="impact-amount">$50</div>
                  <div className="impact-description">
                    <h4>Education Support</h4>
                    <p>Provides school supplies and books for 5 students for one month</p>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-amount">$100</div>
                  <div className="impact-description">
                    <h4>Medical Care</h4>
                    <p>Covers basic medical treatment and medicines for a family of 4</p>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-amount">$200</div>
                  <div className="impact-description">
                    <h4>Food Security</h4>
                    <p>Provides monthly food rations for a needy family</p>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-amount">$500</div>
                  <div className="impact-description">
                    <h4>Skills Training</h4>
                    <p>Sponsors vocational training for one person to become self-reliant</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact for Donations */}
          <section className="donation-contact">
            <div data-aos="fade-up" className="container">
              <div className="contact-content">
                <h2>Ready to Donate?</h2>
                <p>Contact us to learn about secure donation methods and get receipts for your contributions.</p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">📞</div>
                    <div className="method-info">
                      <h4>Phone</h4>
                      <p>+92 312 2221280</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="method-icon">✉️</div>
                    <div className="method-info">
                      <h4>Email</h4>
                      <p>assaadahcontact525@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="transparency-note">
                  <h4>100% Transparency Promise</h4>
                  <p>We ensure all donations are used according to Islamic principles with complete transparency and accountability. Regular reports are provided to all donors.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .donate-page {
            padding-top: 0;
          }

          .donate-hero {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 100px 0;
            text-align: center;
          }

          /* Donation Panel Styles */
          .donation-panel-section {
            padding: 100px 0;
            background: var(--white);
          }

          .donation-panel-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 3rem;
            align-items: flex-start;
            max-width: 1200px;
            margin: 0 auto;
          }

          .video-section {
            flex: 1;
            min-width: 300px;
          }

          .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: 12px;
            background: #000;
            box-shadow: 0 10px 40px rgba(26, 71, 42, 0.15);
          }

          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }

          .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: opacity 0.3s;
            border-radius: 12px;
          }

          .play-button {
            width: 80px;
            height: 80px;
            background: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s;
            animation: pulse 2s infinite;
            box-shadow: 0 0 0 0 rgba(26, 71, 42, 0.7);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
          }

          .play-button:hover {
            transform: translate(-50%, -50%) scale(1.1);
            animation: none;
          }

          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              box-shadow: 0 0 0 0 rgba(26, 71, 42, 0.7);
            }
            50% {
              transform: translate(-50%, -50%) scale(1.05);
              box-shadow: 0 0 0 10px rgba(26, 71, 42, 0);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              box-shadow: 0 0 0 0 rgba(26, 71, 42, 0);
            }
          }

          .play-button::after {
            content: '';
            width: 0;
            height: 0;
            border-left: 25px solid white;
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            margin-left: 2px;
          }

          .progress-section {
            margin-top: 25px;
          }

          .progress-info {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 15px;
            font-size: 18px;
          }

          .raised {
            color: var(--primary-color);
            font-weight: bold;
            font-size: 28px;
            font-family: 'Montserrat', sans-serif;
          }

          .goal {
            color: var(--text-gray);
            font-weight: 500;
          }

          .progress-bar-background {
            position: relative;
            background: var(--light-grey);
            height: 32px;
            border-radius: 16px;
            overflow: hidden;
          }

          .progress-bar {
            background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            height: 100%;
            border-radius: 16px;
            transition: width 1.5s ease;
            width: 53.7449%;
          }

          .percent {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #333;
            font-weight: bold;
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
          }

          .donation-form-section {
            flex: 1;
            min-width: 350px;
          }

          .donation-tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 25px;
          }

          .donation-tabs label {
            flex: 1;
            padding: 14px 20px;
            background: var(--light-bg);
            border: 2px solid var(--border-light);
            border-radius: 12px;
            text-align: center;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Montserrat', sans-serif;
            color: var(--text-dark);
          }

          .donation-tabs label.active {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
          }

          .donation-tabs input[type="radio"] {
            display: none;
          }

          .box-title {
            font-size: 22px;
            font-weight: bold;
            color: var(--primary-color);
            margin-bottom: 25px;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
          }

          .form-select-buttons {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 25px;
          }

          .monthly-fields {
            display: none;
          }

          .custom-option-button {
            padding: 16px;
            background: white;
            border: 2px solid var(--border-light);
            border-radius: 12px;
            font-size: 18px;
            font-weight: bold;
            color: var(--text-dark);
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Montserrat', sans-serif;
          }

          .custom-option-button:hover {
            border-color: var(--primary-color);
            background: var(--light-bg);
          }

          .custom-option-button.selected {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
          }

          .custom-amount-box {
            margin-bottom: 25px;
          }

          .currency-input {
            position: relative;
            display: flex;
            align-items: center;
          }

          .currency-input input {
            width: 100%;
            padding: 16px 16px 16px 50px;
            font-size: 18px;
            border: 2px solid var(--border-light);
            border-radius: 12px;
            transition: border-color 0.3s;
            background: white;
            color: var(--text-dark);
            font-family: 'Poppins', sans-serif;
          }

          .currency-input input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(26, 71, 42, 0.1);
          }

          .currency-symbol {
            position: absolute;
            left: 20px;
            font-size: 18px;
            font-weight: bold;
            color: var(--text-gray);
          }

          .after {
            position: absolute;
            right: 20px;
            color: var(--medium-grey);
            font-size: 14px;
          }

          .quantity {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 25px;
          }

          .quantity .btn {
            width: 45px;
            height: 45px;
            background: var(--light-bg);
            border: 2px solid var(--border-light);
            border-radius: 12px;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            color: var(--text-dark);
          }

          .quantity .btn:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
          }

          .quantity input {
            width: 80px;
            padding: 12px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            border: 2px solid var(--border-light);
            border-radius: 12px;
            background: white;
            color: var(--text-dark);
          }

          .quantity input:focus {
            outline: none;
            border-color: var(--primary-color);
          }

          .single_add_to_cart_button {
            width: 100%;
            padding: 18px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-family: 'Montserrat', sans-serif;
            box-shadow: 0 8px 25px rgba(26, 71, 42, 0.3);
          }

          .single_add_to_cart_button:hover {
            background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(26, 71, 42, 0.4);
          }

          .info-box {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px 20px;
            background: linear-gradient(135deg, #f8fffe, #e8f5f3);
            border-radius: 16px;
            margin-top: 25px;
            box-shadow: 0 4px 15px rgba(26, 71, 42, 0.1);
            transition: all 0.3s ease;
          }

          .info-text {
            color: var(--primary-color);
            font-size: 15px;
            font-weight: 600;
            font-family: 'Montserrat', sans-serif;
          }

          .desktop-only {
            display: block;
          }

          .mobile-only {
            display: none;
          }

          @media (max-width: 768px) {
            .donation-panel-wrapper {
              flex-direction: column;
              gap: 2rem;
            }

            .form-select-buttons {
              grid-template-columns: repeat(2, 1fr);
            }

            .desktop-only {
              display: none;
            }

            .mobile-only {
              display: block;
            }

            .donation-panel-section {
              padding: 60px 0;
            }
          }

          @media (max-width: 480px) {
            .form-select-buttons {
              grid-template-columns: 1fr;
            }

            .custom-option-button {
              padding: 14px;
              font-size: 16px;
            }

            .box-title {
              font-size: 20px;
            }

            .raised {
              font-size: 24px;
            }
          }

          .donate-hero-content h1 {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            font-family: 'Montserrat', sans-serif;
          }

          .donate-hero-content p {
            font-size: 1.2rem;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
          }

          .donation-categories {
            padding: 100px 0;
            background: var(--light-bg);
          }

          .donation-categories h2 {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 4rem;
            font-family: 'Montserrat', sans-serif;
          }

          .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .category-card {
            background: white;
            padding: 3rem 2rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(30, 58, 138, 0.1);
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .category-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(30, 58, 138, 0.2);
            border-color: var(--primary-color);
          }

          .category-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
          }

          .category-card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .category-card p {
            color: var(--text-gray);
            line-height: 1.6;
            margin-bottom: 2rem;
          }

          .donate-btn {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
          }

          .donate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
          }

          .donation-impact {
            padding: 100px 0;
            background: white;
          }

          .donation-impact h2 {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 4rem;
            font-family: 'Montserrat', sans-serif;
          }

          .impact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .impact-item {
            display: flex;
            align-items: center;
            gap: 2rem;
            background: var(--light-bg);
            padding: 2rem;
            border-radius: 15px;
            border-left: 5px solid var(--primary-color);
          }

          .impact-amount {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--primary-color);
            font-family: 'Montserrat', sans-serif;
          }

          .impact-description h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 0.5rem;
            font-family: 'Montserrat', sans-serif;
          }

          .impact-description p {
            color: var(--text-gray);
            margin: 0;
          }

          .donation-contact {
            padding: 100px 0;
            background: linear-gradient(135deg, rgba(30, 58, 138, 0.1), rgba(59, 130, 246, 0.1));
          }

          .contact-content {
            text-align: center;
          }

          .contact-content h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .contact-content > p {
            font-size: 1.2rem;
            color: var(--text-gray);
            margin-bottom: 3rem;
          }

          .contact-methods {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
          }

          .contact-method {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: white;
            padding: 1.5rem 2rem;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(30, 58, 138, 0.1);
          }

          .method-icon {
            font-size: 2rem;
          }

          .method-info h4 {
            font-weight: 600;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
            font-family: 'Montserrat', sans-serif;
          }

          .method-info p {
            color: var(--text-gray);
            margin: 0;
          }

          .transparency-note {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            max-width: 600px;
            margin: 0 auto;
            border: 2px solid var(--primary-color);
          }

          .transparency-note h4 {
            color: var(--primary-color);
            font-weight: 700;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
          }

          .transparency-note p {
            color: var(--text-gray);
            line-height: 1.6;
            margin: 0;
          }

          @media (max-width: 768px) {
            .donate-hero-content h1 {
              font-size: 2rem;
            }

            .donate-hero-content p {
              font-size: 1rem;
            }

            .donation-categories h2,
            .donation-impact h2,
            .contact-content h2 {
              font-size: 2rem;
            }

            .categories-grid,
            .impact-grid {
              grid-template-columns: 1fr;
            }

            .contact-methods {
              flex-direction: column;
              gap: 1.5rem;
            }

            .impact-item {
              flex-direction: column;
              text-align: center;
              gap: 1rem;
            }
          }

          @media (max-width: 480px) {
            .donate-hero {
              padding: 60px 0;
            }

            .donation-categories,
            .donation-impact,
            .donation-contact {
              padding: 60px 0;
            }

            .category-card {
              padding: 2rem 1.5rem;
            }

            .impact-amount {
              font-size: 2rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
