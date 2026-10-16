import React from "react";
import { SprinklesBackground } from "./components/SprinklesBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Interests } from "./components/Interests";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="portfolio-app">
      {/* Background Sprinkles & Ambient Dessert Shimmer */}
      <SprinklesBackground />

      {/* Main Single-Page Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Interests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
