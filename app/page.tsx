'use client';

import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import About from '@/components/About';
'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  return (
    <>
      <Navbar name={portfolioData.name} />
      <main className="main-container">
        <div className="content-wrapper">
          <Hero
            name={portfolioData.name}
            role={portfolioData.role}
            about={portfolioData.about}
          />
          <Works projects={portfolioData.projects} />
          <Skills skills={portfolioData.skills} />
          {/* The Journey section is omitted as per Rule 6: "If a template section has no corresponding JSON... drop that section silently." */}
        </div>
      </main>
      <Footer email={portfolioData.contact.email} />
    </>
  );
}