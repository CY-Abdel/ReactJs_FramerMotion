// 
import React from 'react'

import "./app.scss"
import Navbar from './components/navbar/Navbar';
import TestFramerMotion from './TestFramerMotion';
import Sidebar from './components/sidebar/Sidebar';
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'>About</section>
      <section id='Service'>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section id='Portfolio'>Portfolio3</section>
      <section id='Contact'>Contact</section>

      {/* <TestFramerMotion />
      <TestFramerMotion /> */}
    </div>
  );
};

export default App;
