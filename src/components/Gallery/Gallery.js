import React from 'react';
import './Gallery.css';

// Import images
import gallery1 from '../img/gallery/gallery-1.jpg';
import gallery2 from '../img/gallery/gallery-2.jpg';
import gallery3 from '../img/gallery/gallery-3.jpg';
import gallery4 from '../img/gallery/gallery-4.jpg';
import gallery5 from '../img/gallery/gallery-5.jpg';
import gallery6 from '../img/gallery/gallery-6.jpg';
import gallery7 from '../img/gallery/gallery-7.jpg';
import gallery8 from '../img/gallery/gallery-8.jpg';

const Gallery = () => {
  const images = [
    gallery1, gallery2, gallery3, gallery4,
    gallery5, gallery6, gallery7, gallery8
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Galeria</h2>
          <p>Kilka zdjęć z Naszej Restauracji</p>
        </div>
      </div>

      <div className="container-fluid aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="gallery-item">
                <a href={image} className="gallery-lightbox" data-gall="gallery-item">
                  <img src={image} alt={`Gallery item ${index + 1}`} className="img-fluid" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
