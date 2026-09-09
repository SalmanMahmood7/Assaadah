import { useEffect } from "react";

export default function DonationModal({ isOpen, onClose }) {
  useEffect(() => {
    // Handle donation tab switching
    const handleTabSwitch = () => {
      const donationTabs = document.querySelectorAll('.donation-modal .donation-tabs label');
      const onceFields = document.querySelector('.donation-modal .once-fields');
      const monthlyFields = document.querySelector('.donation-modal .monthly-fields');

      donationTabs.forEach(tab => {
        tab.addEventListener('click', function() {
          donationTabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
          
          const input = this.querySelector('input');
          if (input && input.value === 'Monthly') {
            if (onceFields) onceFields.style.display = 'none';
            if (monthlyFields) monthlyFields.style.display = 'grid';
          } else {
            if (onceFields) onceFields.style.display = 'grid';
            if (monthlyFields) monthlyFields.style.display = 'none';
          }
        });
      });
    };

    // Handle amount selection
    const handleAmountSelection = () => {
      const amountButtons = document.querySelectorAll('.donation-modal .custom-option-button');
      const amountInput = document.querySelector('.donation-modal input[name="selected_amount"]');

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
      const minusBtn = document.querySelector('.donation-modal .minus');
      const plusBtn = document.querySelector('.donation-modal .plus');
      const quantityInput = document.querySelector('.donation-modal input[name="quantity"]');

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

    if (isOpen) {
      handleTabSwitch();
      handleAmountSelection();
      handleQuantity();
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.body.style.overflow = 'unset'; // Restore scroll when component unmounts
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="donation-modal">
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-wrapper">
          <button className="modal-close" onClick={onClose}>×</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          
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
              
              <div className="progress-section">
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
        </div>
      </div>

      <style jsx>{`
        .donation-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-content {
          position: relative;
          background: white;
          border-radius: 20px;
          max-width: 500px;
          max-height: 80vh;
          width: 100%;
          overflow-y: auto;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          animation: modalSlideIn 0.3s ease-out;
        }

        .modal-close {
          position: relative;
          align-self: flex-end;
          margin-bottom: 10px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Donation Panel Styles */
        .donation-panel-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 20px;
        }

        .video-section {
          flex: 1;
          min-width: 250px;
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
          z-index: 2;
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
          min-width: 280px;
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
          padding: 12px;
          background: white;
          border: 2px solid var(--border-light);
          border-radius: 12px;
          font-size: 16px;
          font-weight: bold;
          color: var(--text-dark);
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Montserrat', sans-serif;
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
          padding: 14px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
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

        @media (max-width: 768px) {
          .donation-panel-wrapper {
            flex-direction: column;
            gap: 2rem;
            padding: 20px;
          }

          .form-select-buttons {
            grid-template-columns: repeat(2, 1fr);
          }

          .modal-content {
            margin: 10px;
            max-height: 95vh;
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

          .donation-panel-wrapper {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
}
