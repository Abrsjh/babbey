import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Suites from './components/Suites';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Suites />
      <Gallery />
      <Amenities />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;