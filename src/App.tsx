// 
import React from 'react'

import "./app.scss"
import Navbar from './components/navbar/Navbar';
import TestFramerMotion from './TestFramerMotion';
import Sidebar from './components/sidebar/Sidebar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/services';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>

      <section
        id='Service'>
        <Parallax type="service" />
      </section>

      <section>
        <Services />
      </section>

      <section id='Portfolio'>
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>

      {/* <TestFramerMotion />
      <TestFramerMotion /> */}
    </div>
  );
};

export default App;
