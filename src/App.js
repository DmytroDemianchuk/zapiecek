// App.js
import React from 'react';
// import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import About from './components/About/About'
import WyUs from './components/WyUs/WyUs';

import Menu from './components/Menu/Menu';
// import Specials from './components/Specials/Specials';
// import Events from './components/Events/Events';
import BookATable from './components/BookATable/BookATable';
// import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-background">
      {/* <TopBar /> */}
      <Header />
      <Hero />
      <main id="main">
        <About />
        <WyUs />
        <Menu />
        {/* <Specials /> */}
        {/* <Events /> */}
        <BookATable />
        {/* <Testimonials /> */}
        <Gallery />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
