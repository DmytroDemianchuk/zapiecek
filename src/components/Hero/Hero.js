// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative text-center text-lg-start aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-8">
            <h1>Witamy w <span>Zapiecek</span></h1>
            <h2>Świadczymy doskonałą obsługę gastronomiczną od ponad 18 lat!</h2>

            <div className="btns">
              <a href="#menu" className="btn-menu animated fadeInUp scrollto">Nasze Menu</a>
              <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Zarezerwuj Stół</a>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="glightbox play-btn"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
