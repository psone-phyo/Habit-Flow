import React from "react";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
// import IntroSection from "../components/IntroSection.js";
import Features from "../components/Features.js";
import Testimonials from "../components/Testi.js";
import CTA from "../components/CTA.js";
import Footer from "../components/Footer.js";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* <IntroSection /> */}
        <Features />
        <Testimonials />
        <CTA />
        <div className="w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;