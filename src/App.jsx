import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients"; // Import já estava aqui
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // 1. Fundo removido daqui para respeitar o estilo de cada seção individual
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Projects />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
      {/* 3. Tag de fechamento corrigida */}
    </div>
  );
}

export default App;
