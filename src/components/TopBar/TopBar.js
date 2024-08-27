import React, { useEffect, useState } from 'react';
import './TopBar.css';

const TopBar = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-center justify-content-md-between">

      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
        <i class="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
      </div>

      <div class="languages d-none d-md-flex align-items-center">
        <ul>
          <li>En</li>
          <li><a href="#">De</a></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default TopBar;
