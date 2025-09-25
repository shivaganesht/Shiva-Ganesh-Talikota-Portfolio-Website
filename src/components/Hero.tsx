import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { LiquidBlob, StaticBlob } from "./LiquidBlob";
import { useEffect, useState } from "react";

export function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced liquid background effects */}
      <div className="absolute inset-0">
        {prefersReducedMotion ? (
          <>
            <StaticBlob size="lg" position="top-left" color="primary" />
            <StaticBlob size="md" position="bottom-right" color="accent" />
            <StaticBlob size="sm" position="center" color="secondary" />
            <StaticBlob size="md" position="top-right" color="primary" />
          </>
        ) : (
          <>
            <LiquidBlob size="lg" position="top-left" color="primary" />
            <LiquidBlob size="md" position="bottom-right" color="accent" />
            <LiquidBlob size="sm" position="center" color="secondary" />
            <LiquidBlob size="md" position="top-right" color="primary" className="delay-2000" />
            <LiquidBlob size="sm" position="bottom-left" color="accent" className="delay-4000" />
          </>
        )}
        
        {/* Enhanced mesh gradient overlays */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-glow opacity-15" />
        <div className="absolute inset-0" style={{
          background: `conic-gradient(from 45deg at 30% 70%, hsl(210 100% 60% / 0.1), hsl(220 100% 50% / 0.08), hsl(240 100% 60% / 0.12), hsl(210 100% 60% / 0.1))`,
          animation: 'gradientShift 15s linear infinite'
        }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting with motion */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-primary font-mono text-lg">Hello, I'm</span>
          </motion.div>

          {/* Main title with stagger animation */}
          <motion.h1 
            className="hero-title mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Shiva Ganesh Talikota
          </motion.h1>

          {/* Subtitle with role */}
          <motion.div 
            className="hero-subtitle mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <span className="text-foreground">Founder & CEO @ </span>
            <span className="text-primary font-semibold">matriXO</span>
            <span className="text-muted-foreground"> | EdTech • AI/ML • Innovator</span>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            Building AI-powered solutions and communities to bridge the gap between 
            <span className="text-primary font-medium"> academia and industry</span>
          </motion.p>

          {/* CTA Buttons with liquid glass effect */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="glass-button text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300"
                aria-label="View my projects"
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="glass border-primary/30 text-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300"
                aria-label="Contact me"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with glass morphism */}
          <motion.div 
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            {[
              { 
                href: "https://github.com/shivaganesh9108", 
                icon: Github, 
                label: "GitHub Profile",
                external: true 
              },
              { 
                href: "https://www.linkedin.com/in/shivaganesht/", 
                icon: Linkedin, 
                label: "LinkedIn Profile",
                external: true 
              },
              { 
                href: "mailto:shivaganesh9108@gmail.com", 
                icon: Mail, 
                label: "Send Email",
                external: false 
              }
            ].map(({ href, icon: Icon, label, external }, index) => (
              <motion.a
                key={href}
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="p-3 rounded-full glass-card group focus:outline-none focus:ring-2 focus:ring-primary/50"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator with smooth animation */}
          <motion.button
            onClick={() => scrollToSection("about")}
            className="mx-auto flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            whileHover={{ y: -2 }}
            aria-label="Scroll to about section"
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}