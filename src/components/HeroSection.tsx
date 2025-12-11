import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const typingTexts = [
  'Scalable Web Apps',
  'Real-time Chat Systems',
  'MERN Stack Platforms',
  'AI Integrated Solutions',
  'Cloud DevOps Pipelines',
];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block glass-card px-4 py-2 rounded-full mb-6"
            >
              <span className="text-primary font-mono">👋 Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Akash</span>
              <br />
              <span className="text-foreground">Sharma</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full-Stack Developer | MERN | DevOps | AI Integration
            </motion.p>

            {/* Typing Animation */}
            <motion.div
              className="text-2xl md:text-3xl font-mono mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-muted-foreground">I build </span>
              <span className="neon-text">{displayText}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                <Mail className="mr-2" />
                Hire Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="https://github.com/akashsharma1462"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:neon-border transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/akashsharma11/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:neon-border transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Avatar / Visual */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Glowing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-secondary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-accent/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Center avatar placeholder */}
              <div className="absolute inset-12 rounded-full glass-card neon-border flex items-center justify-center overflow-hidden">
                <div className="text-8xl font-display font-bold gradient-text">AS</div>
              </div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-4 right-8 p-3 glass-card rounded-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              <motion.div
                className="absolute top-20 -left-4 p-3 glass-card rounded-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <motion.div
                className="absolute bottom-10 -right-4 p-3 glass-card rounded-xl"
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </div>

      {/* Current Status Badge */}
      {/* <motion.div
        className="fixed bottom-8 right-8 z-40 hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="glass-card p-4 rounded-xl neon-border">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Currently Building</p>
              <p className="text-sm font-semibold text-primary">AI Interview Analysis Module</p>
            </div>
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
