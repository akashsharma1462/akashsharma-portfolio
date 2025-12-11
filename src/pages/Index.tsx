import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Toaster } from 'sonner';

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden cursor-none md:cursor-none">
      <Toaster position="top-right" theme={isDark ? 'dark' : 'light'} />
      <CustomCursor />
      <ParticleBackground />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
