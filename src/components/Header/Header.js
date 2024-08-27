import React, { useEffect, useState } from 'react';
import logo from '../img/zapiecek-logo.jpg'; // Імпорт вашого зображення
import './Header.css'; // Include header styles

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={`fixed-top d-flex align-items-center ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="index.html">
            <img src={logo} alt="ZAPIECEK Logo" className="logo-img" />
          </a>
        </h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Strona Główna</a></li>
            <li><a className="nav-link scrollto" href="#about">O Nas</a></li>
            <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
            {/* <li><a className="nav-link scrollto" href="#specials">Specials</a></li> */}
            {/* <li><a className="nav-link scrollto" href="#events">Events</a></li> */}
            {/* <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li> */}
            <li><a className="nav-link scrollto" href="#gallery">Galeria</a></li>
            {/* <li className="dropdown">
              <a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown">
                  <a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li> */}
            <li><a className="nav-link scrollto" href="#contact">Kontakt</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>
      </div>
    </header>
  );
};

export default Header;
