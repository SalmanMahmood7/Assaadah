import { useEffect } from "react";

export default function DonationPanel() {
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
  }, []);

  return (
    <section className="donation-panel-section" id="donation-panel">
      <div data-aos="fade-up" className="container">
        <div className="donation-panel-wrapper">
          <div className="video-section">
            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/WHNNLbJ1yNA?feature=oembed&loop=0&mute=0&controls=1" 
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
                  <span className="raised">£268,725</span> 
                  <span>of <span className="goal">£500,000</span> goal</span>
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
                  <span className="raised">£268,725</span> 
                  <span>of <span className="goal">£500,000</span> goal</span>
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
                  ❤️ Monthly
                </label>
              </div>

              <div className="box-title">Your most generous donation</div>

              <div className="once-fields form-select-buttons">
                <button type="button" className="custom-option-button" data-price="1000">
                  <span className="price">£1000</span>
                </button>
                <button type="button" className="custom-option-button" data-price="500">
                  <span className="price">£500</span>
                </button>
                <button type="button" className="custom-option-button" data-price="300">
                  <span className="price">£300</span>
                </button>
                <button type="button" className="custom-option-button" data-price="120">
                  <span className="price">£120</span>
                </button>
                <button type="button" className="custom-option-button selected" data-price="55">
                  <span className="price">£55</span>
                </button>
                <button type="button" className="custom-option-button" data-price="25">
                  <span className="price">£25</span>
                </button>
              </div>

              <div className="monthly-fields form-select-buttons">
                <button type="button" className="custom-option-button" data-price="300">
                  <span className="price">£300</span>
                </button>
                <button type="button" className="custom-option-button" data-price="130">
                  <span className="price">£130</span>
                </button>
                <button type="button" className="custom-option-button" data-price="60">
                  <span className="price">£60</span>
                </button>
                <button type="button" className="custom-option-button" data-price="35">
                  <span className="price">£35</span>
                </button>
                <button type="button" className="custom-option-button selected" data-price="10">
                  <span className="price">£10</span>
                </button>
                <button type="button" className="custom-option-button" data-price="5">
                  <span className="price">£5</span>
                </button>
              </div>

              <div className="custom-amount-box">
                <div className="currency-input">
                  <input type="number" name="selected_amount" placeholder="0.00" defaultValue="55" step="0.01" min="1" />
                  <span className="currency-symbol">£</span>
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
              <div className="info-icon">ℹ️</div>
              <div className="info-text">This Project is Zakat Applicable</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        }

        .play-button:hover {
          transform: scale(1.1);
        }

        .play-button::after {
          content: '';
          width: 0;
          height: 0;
          border-left: 25px solid white;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          margin-left: 5px;
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
          color: white;
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
          gap: 15px;
          padding: 20px;
          background: var(--light-bg);
          border-left: 4px solid var(--primary-color);
          border-radius: 12px;
          margin-top: 25px;
        }

        .info-icon {
          font-size: 24px;
        }

        .info-text {
          color: var(--text-gray);
          font-size: 16px;
          font-weight: 500;
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
      `}</style>
    </section>
  );
}