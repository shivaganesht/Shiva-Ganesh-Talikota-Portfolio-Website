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
            className="mb-6 pt-24 md:pt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-primary font-mono text-lg">Hello, I'm</span>
          </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-4xl mx-auto liquid-text"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{
            filter: "drop-shadow(0 0 40px hsl(var(--primary) / 0.4))"
          }}
        >
          Shiva Ganesh Talikota
        </motion.h1>

          {/* Subtitle with role */}
          <motion.p 
            className="text-1xl md:text-1xl text-muted-foreground font-medium mb-8 max-w-1xl mx-auto p-5 rounded-3xl backdrop-blur-60"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{
              background: "linear-gradient(145deg, hsl(var(--background) / 0.4), hsl(var(--surface) / 0.2))",
              boxShadow: "0 16px 128px hsl(var(--background) / 0.5), 0 8px 24px hsl(var(--primary) / 0.12)"
            }}
          >
            Founder at matriXO • EdTech Entrepreneur • AI/ML Enthusiast • Community Leader
            <br />Transforming education through innovative technology and building impactful solutions.
          </motion.p>

          {/* CTA Buttons with liquid glass effect - UPDATED STYLES */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {/* View My Work Button - Removed unnecessary glass-button class for custom styling */}
            <motion.a
              href="#projects"
              className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-10 py-4 rounded-[24px] font-semibold text-primary-foreground text-lg shadow-2xl overflow-hidden cursor-pointer"
              style={{
                background: `linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--primary-glow) / 1.0))`,
                boxShadow: `
                  inset 0 2px 4px hsl(var(--primary-foreground) / 0.4), 
                  0 10px 40px hsl(var(--primary) / 0.5),
                  0 0 0 1px hsl(var(--primary) / 0.1)
                `,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: 'translateY(0)'
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                boxShadow: "0 20px 60px hsl(var(--primary) / 0.6)",
                borderRadius: "30px" // Slight organic change on hover
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={(e) => {
                e.preventDefault();
                // Easter egg: Sparkle effect
                const sparkles = document.createElement('div');
                sparkles.innerHTML = '✨'.repeat(10);
                sparkles.style.position = 'fixed';
                sparkles.style.top = '50%';
                sparkles.style.left = '50%';
                sparkles.style.transform = 'translate(-50%, -50%)';
                sparkles.style.pointerEvents = 'none';
                sparkles.style.zIndex = '1000';
                document.body.appendChild(sparkles);
                setTimeout(() => sparkles.remove(), 2000);
                
                document.getElementById('projects')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              {/* Inner shimmer layer */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatDelay: 5 }}
                style={{ clipPath: 'polygon(0% 0%, 5% 0%, 20% 100%, 15% 100%)' }}
              />
              ✨ View My Work
            </motion.a>
            
            {/* Get in Touch Button - Enhanced glass style */}
            <motion.a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-10 py-4 rounded-[24px] font-semibold text-foreground overflow-hidden cursor-pointer"
              style={{
                background: `linear-gradient(145deg, hsl(var(--background) / 0.5), hsl(var(--surface) / 0.3))`,
                border: '1px solid hsl(var(--accent) / 0.4)',
                backdropFilter: 'blur(50px) saturate(180%)',
                boxShadow: `
                  inset 0 1px 2px hsl(var(--foreground) / 0.1),
                  0 8px 30px hsl(var(--background) / 0.4),
                  0 2px 16px hsl(var(--accent) / 0.2)
                `,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: 'translateY(0)'
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                borderRadius: "30px",
                boxShadow: `
                  inset 0 1px 2px hsl(var(--foreground) / 0.15),
                  0 15px 40px hsl(var(--accent) / 0.4)
                `
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              <span className="relative z-10">
                🚀 Get in Touch
              </span>
            </motion.a>
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
                href: "https://github.com/shivaganesht", 
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
                className="p-3 rounded-full group focus:outline-none"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
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
            className="mx-auto flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 focus:outline-none rounded-lg p-2"
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
              <ArrowDown className="h-5 w-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
