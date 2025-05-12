import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import ProfessionalSummary from './components/ProfessionalSummary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <ProfessionalSummary />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Languages />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
