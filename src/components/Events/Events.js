import React, { useEffect } from 'react';
import Swiper from 'swiper';


// Import images
import eventBirthday from '../img/event-birthday.jpg';
import eventPrivate from '../img/event-private.jpg';
import eventCustom from '../img/event-custom.jpg';

const Events = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.events-slider', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Add other Swiper options if needed
    });
  }, []);

  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Events</h2>
          <p>Organize Your Events in our Restaurant</p>
        </div>

        <div className="events-slider swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="row event-item">
                <div className="col-lg-6">
                  <img src={eventBirthday} className="img-fluid" alt="Birthday Parties" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Birthday Parties</h3>
                  <div className="price">
                    <p><span>$189</span></p>
                  </div>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row event-item">
                <div className="col-lg-6">
                  <img src={eventPrivate} className="img-fluid" alt="Private Parties" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Private Parties</h3>
                  <div className="price">
                    <p><span>$290</span></p>
                  </div>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row event-item">
                <div className="col-lg-6">
                  <img src={eventCustom} className="img-fluid" alt="Custom Parties" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>Custom Parties</h3>
                  <div className="price">
                    <p><span>$99</span></p>
                  </div>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more slides as needed */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Events;
