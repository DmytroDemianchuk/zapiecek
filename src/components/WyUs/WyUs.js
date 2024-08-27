// components/InnerPage/InnerPage.js
import React, { useEffect } from 'react';
import './WyUs.css'; // Переконайтесь, що цей файл CSS включає оновлені стилі
import 'aos/dist/aos.css'; // Імплементуйте бібліотеку AOS для анімації при скролінгу
import AOS from 'aos';

const WyUs = () => {
  useEffect(() => {
    // Ініціалізація AOS з параметрами
    AOS.init({
      duration: 1000, // Тривалість анімації в мілісекундах
      once: true // Анімація відбудеться лише один раз при першому скролінгу
    });
  }, []);

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-title">
          <h2>Dlaczego My</h2>
          <p>Dlaczego Warto Wybrać Naszą Restaurację</p>
        </div>
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon"><i className="bi bi-heart-fill"></i></div>
              <h4>Wyjątkowy Smak</h4>
              <p>Nasze potrawy przygotowywane są з najwyższej jakości składników, aby zapewnić niezapomniane doznania kulinarne</p>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon"><i className="bi bi-house-door-fill"></i></div>
              <h4>Przyjazna Atmosfera</h4>
              <p>W naszym lokalu poczujesz się jak w domu. Ciepła і приtulna атмосфера sprawi, że każda wizyta będzie wyjątkowa</p>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon"><i className="bi bi-person-check-fill"></i></div>
              <h4>Profesjonalna Obsługa</h4>
              <p>Nasz zespół to profesjonaliści з pasją do gotowania i obsługi klienta. Zawsze służymy pomocą i dbamy o każdy szczegół</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WyUs;
