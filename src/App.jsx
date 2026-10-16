import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import ProjectsAndAchievements from './sections/ProjectsAndAchievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Sync activeTab with URL hash on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'skills', 'projects', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
  };

  return (
    <div className="min-h-screen bg-background text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Content Area - Only the selected view is rendered */}
      <main className="flex-1 transition-opacity duration-300">
        {activeTab === 'home' && (
          <Hero onNavigate={handleTabChange} />
        )}

        {activeTab === 'about' && (
          <About />
        )}

        {activeTab === 'skills' && (
          <Skills />
        )}

        {activeTab === 'projects' && (
          <ProjectsAndAchievements />
        )}

        {activeTab === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleTabChange} />
    </div>
  );
}
