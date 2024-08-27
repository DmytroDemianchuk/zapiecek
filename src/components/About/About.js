import React from 'react';
import './About.css';
import aboutImage from '../img/about.jpg'; // Импорт изображения

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div className="about-img">
              <img src={aboutImage} alt="About" /> {/* Используем импортированное изображение */}
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Wyjątkowe Doznania Kulinarne</h3>
            <p className="fst-italic">
            Każde danie w naszej restauracji to połączenie tradycji i nowoczesności, starannie przygotowane, aby zaspokoić nawet najbardziej wymagające podniebienia. Ciesz się smakami, które zabiorą Cię w podróż po kulinarnych zakątkach świata
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i>Codziennie wybieramy tylko najświeższe składniki, aby zapewnić najwyższą jakość naszych potraw. Każdy posiłek to dowód naszego zaangażowania i pasji do gotowania</li>
              <li><i className="bi bi-check-circle"></i>Zapraszamy do miejsca, gdzie czas płynie wolniej. Nasza restauracja to oaza spokoju, idealna na romantyczną kolację, spotkanie z przyjaciółmi czy rodzinny obiad</li>
            </ul>
            <p>
            Nasz zespół z pasją dba o każdy detal, aby Twoja wizyta była niezapomniana. Jesteśmy tutaj, aby spełniać Twoje kulinarne marzenia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
