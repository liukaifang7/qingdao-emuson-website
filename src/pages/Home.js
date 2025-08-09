import { BrowserRouter, Routes, Route } from 'react-router-dom/dist/index.js';
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechnologyPreview from '../components/TechnologyPreview';
import CaseHighlights from '../components/CaseHighlights';
import CtaSection from '../components/CtaSection';

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <TechnologyPreview />
      <CaseHighlights />
      <CtaSection />
    </div>
  );
}

export default Home;