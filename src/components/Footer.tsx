import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-display font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              AS
            </motion.a>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Akash Sharma. All rights reserved.
            </p>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React & Three.js
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1 font-mono">
              "Crafting Intelligent Web Experiences"
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/akashsharma1462"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/akashsharma11/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:akkrishna1462@gmail.com"
              className="p-2 glass-card rounded-lg text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
