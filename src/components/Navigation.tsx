import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Rocket, Brain, Code2, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Improved detection: section is active when it's within the viewport center
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Wait for menu close animation before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Get element position and offset for header
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Smooth scroll with proper positioning
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 200);
  };

  const triggerEasterEgg = () => {
    console.log('🌧️ Digital Rain Activated! 🌧️');
    setEasterEggActive(true);
    
    // Close mobile menu first
    setIsMobileMenuOpen(false);
      // Store original values
      const originalBodyOverflow = document.body.style.overflow;
      const originalFilter = document.documentElement.style.filter;
      const originalTransition = document.body.style.transition;
      
      // Create full-screen container with enhanced effects
      const overlay = document.createElement('div');
      overlay.id = 'digital-rain-overlay';
      
      overlay.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 99999 !important;
        pointer-events: auto !important;
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.98), rgba(0, 20, 0, 0.98)) !important;
        overflow: hidden !important;
        cursor: pointer !important;
        animation: matrixPulse 2s ease-in-out infinite alternate !important;
      `;
      
      // Add breathing animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes matrixPulse {
          0% { background: linear-gradient(45deg, rgba(0, 0, 0, 0.98), rgba(0, 20, 0, 0.98)); }
          100% { background: linear-gradient(45deg, rgba(0, 10, 0, 0.98), rgba(0, 30, 0, 0.98)); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100vh); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
      
      // Create scanline effect for immersion
      const scanline = document.createElement('div');
      scanline.style.cssText = `
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 2px !important;
        background: linear-gradient(90deg, transparent, #00ff00, transparent) !important;
        animation: scanline 3s linear infinite !important;
        z-index: 1000 !important;
      `;
      
      // Create main canvas
      const canvas = document.createElement('canvas');
      canvas.style.cssText = `
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        opacity: 0 !important;
        transition: opacity 1.5s ease-in !important;
        display: block !important;
      `;
      
      // Force full viewport dimensions
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      
      canvas.width = vw * (window.devicePixelRatio || 1);
      canvas.height = vh * (window.devicePixelRatio || 1);
      canvas.style.width = vw + 'px';
      canvas.style.height = vh + 'px';
      
      const ctx = canvas.getContext('2d')!;
      
      // Scale for high-DPI displays
      const scale = window.devicePixelRatio || 1;
      ctx.scale(scale, scale);
      
      overlay.appendChild(scanline);
      overlay.appendChild(canvas);
      document.body.appendChild(overlay);
      
      // Enhanced Matrix characters with more variety
      const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン!@#$%^&*()_+{}[]|\\:";\'<>?,.~/`';
      const stressMessages = ['BREATHE', 'RELAX', 'FOCUS', 'CALM', 'ZEN', 'PEACE', 'SHIVAGANESHT', 'RESET'];
      
      // Create floating stress-relief messages
      const floatingTexts: Array<{
        x: number;
        y: number;
        text: string;
        opacity: number;
        size: number;
        vx: number;
        vy: number;
        pulse: number;
      }> = [];
      
      // Add floating messages periodically
      setInterval(() => {
        if (floatingTexts.length < 3) {
          floatingTexts.push({
            x: Math.random() * vw,
            y: vh + 50,
            text: stressMessages[Math.floor(Math.random() * stressMessages.length)],
            opacity: 0.8,
            size: 24 + Math.random() * 16,
            vx: (Math.random() - 0.5) * 2,
            vy: -1 - Math.random() * 2,
            pulse: Math.random() * Math.PI * 2
          });
        }
      }, 2000);
      
      // Initialize enhanced drops
      const drops: Array<{
        y: number;
        speed: number;
        chars: string[];
        opacity: number;
        trail: number[];
        color: {r: number, g: number, b: number};
        fontSize: number;
        glitch: number;
        wave: number;
      }> = [];
      
      const cols = Math.floor(vw / 18);
      
      for (let i = 0; i < cols; i++) {
        drops[i] = {
          y: Math.random() * -1000,
          speed: Math.random() * 4 + 1.5,
          chars: [],
          opacity: Math.random() * 0.8 + 0.2,
          trail: [],
          color: { 
            r: Math.random() * 50, 
            g: 200 + Math.random() * 55, 
            b: Math.random() * 50 
          },
          fontSize: Math.random() * 8 + 12,
          glitch: Math.random() * 0.02,
          wave: Math.random() * Math.PI * 2
        };
        
        const trailLength = 12 + Math.random() * 8;
        for (let j = 0; j < trailLength; j++) {
          drops[i].chars[j] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          drops[i].trail[j] = 1 - (j * 0.08);
        }
      }
      
      // Enhanced animation loop with stress-busting effects
      let time = 0;
      const animate = () => {
        time += 0.02;
        
        // Create fading background with subtle gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, vh);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.08)');
        gradient.addColorStop(0.5, 'rgba(0, 5, 0, 0.06)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.08)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, vw, vh);
        
        // Animate matrix drops with enhanced effects
        drops.forEach((drop, i) => {
          drop.y += drop.speed;
          drop.wave += 0.1;
          
          // Add horizontal wave motion for hypnotic effect
          const waveOffset = Math.sin(drop.wave + time) * 8;
          
          for (let j = 0; j < drop.chars.length; j++) {
            const charY = drop.y - j * (drop.fontSize + 3);
            const charX = i * 18 + 5 + waveOffset;
            
            if (charY > -drop.fontSize && charY < vh + drop.fontSize) {
              const trailOpacity = drop.trail[j] * drop.opacity;
              
              // Random character changes for dynamic effect
              if (Math.random() < drop.glitch) {
                drop.chars[j] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
              }
              
              // Enhanced glow effect
              const glowIntensity = j === 0 ? 25 : 15;
              ctx.shadowBlur = glowIntensity + Math.sin(time * 2) * 5;
              ctx.shadowColor = `rgba(${drop.color.r}, ${drop.color.g}, ${drop.color.b}, ${trailOpacity})`;
              
              // Main character
              ctx.fillStyle = `rgba(${drop.color.r}, ${drop.color.g}, ${drop.color.b}, ${trailOpacity})`;
              ctx.font = `${drop.fontSize}px 'Courier New', monospace`;
              ctx.fillText(drop.chars[j], charX, charY);
              
              // Bright leading character with white highlight
              if (j === 0) {
                ctx.shadowBlur = 30;
                ctx.shadowColor = `rgba(255, 255, 255, ${trailOpacity * 0.6})`;
                ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity * 0.9})`;
                ctx.fillText(drop.chars[j], charX, charY);
              }
            }
          }
          
          // Reset drop when it goes off screen
          if (drop.y > vh + 200) {
            drop.y = Math.random() * -500 - 200;
            drop.speed = Math.random() * 4 + 1.5;
            drop.fontSize = Math.random() * 8 + 12;
            drop.color.g = 200 + Math.random() * 55;
            drop.glitch = Math.random() * 0.02;
          }
        });
        
        // Animate floating stress-relief messages
        floatingTexts.forEach((text, index) => {
          text.y += text.vy;
          text.x += text.vx;
          text.pulse += 0.1;
          text.opacity -= 0.003;
          
          if (text.opacity > 0) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = `rgba(0, 255, 150, ${text.opacity})`;
            ctx.fillStyle = `rgba(0, 255, 150, ${text.opacity})`;
            ctx.font = `bold ${text.size + Math.sin(text.pulse) * 4}px 'Arial', sans-serif`;
            ctx.textAlign = 'center';
            ctx.fillText(text.text, text.x, text.y);
            ctx.textAlign = 'left';
          } else {
            floatingTexts.splice(index, 1);
          }
        });
        
        // Add breathing prompt in center
        const breatheOpacity = (Math.sin(time) + 1) * 0.3;
        ctx.shadowBlur = 30;
        ctx.shadowColor = `rgba(0, 200, 255, ${breatheOpacity})`;
        ctx.fillStyle = `rgba(0, 200, 255, ${breatheOpacity})`;
        ctx.font = 'bold 28px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('✨ BREATHE DEEPLY ✨', vw / 2, vh / 2);
        ctx.font = '18px Arial, sans-serif';
        ctx.fillText('Tap anywhere to exit', vw / 2, vh / 2 + 40);
        ctx.textAlign = 'left';
      };
      
      // Add tap/click to exit functionality with enhanced transitions
      let isExiting = false;
      const exitEffect = () => {
        if (isExiting) return;
        isExiting = true;
        
        // Start smooth fade out with particle burst (no glitch effects)
        const startFadeOut = () => {
          // Add final burst effect
          for (let i = 0; i < 30; i++) {
            floatingTexts.push({
              x: vw / 2 + (Math.random() - 0.5) * 200,
              y: vh / 2 + (Math.random() - 0.5) * 200,
              text: ['★', '✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 5)],
              opacity: 1,
              size: 15 + Math.random() * 25,
              vx: (Math.random() - 0.5) * 15,
              vy: (Math.random() - 0.5) * 15,
              pulse: Math.random() * Math.PI * 2
            });
          }
          
          // Add gratitude message
          floatingTexts.push({
            x: vw / 2,
            y: vh / 2 - 50,
            text: 'THANK YOU FOR RELAXING',
            opacity: 1,
            size: 24,
            vx: 0,
            vy: -2,
            pulse: 0
          });
          
          // Smooth canvas fade with elastic easing
          canvas.style.transition = 'opacity 2s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 2s ease-out';
          canvas.style.filter = 'blur(0px) brightness(1)';
          
          setTimeout(() => {
            canvas.style.opacity = '0';
            canvas.style.filter = 'blur(10px) brightness(0.3)';
          }, 100);
          
          // Phase 3: Background fade with color shift
          setTimeout(() => {
            overlay.style.transition = 'background 2.5s cubic-bezier(0.19, 1, 0.22, 1)';
            overlay.style.background = 'linear-gradient(45deg, rgba(0, 50, 100, 0.8), rgba(50, 0, 100, 0.8))';
          }, 800);
          
          // Phase 4: Final fade to transparent
          setTimeout(() => {
            overlay.style.background = 'rgba(0, 0, 0, 0)';
          }, 1800);
          
          // Phase 5: Cleanup with bounce effect
          setTimeout(() => {
            overlay.style.transform = 'scale(1.05)';
            overlay.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.5s ease-out';
            
            setTimeout(() => {
              overlay.style.opacity = '0';
              overlay.style.transform = 'scale(0.95)';
            }, 100);
            
            setTimeout(() => {
              // Final cleanup
              document.body.style.overflow = originalBodyOverflow;
              document.body.style.transition = originalTransition;
              document.documentElement.style.filter = originalFilter;
              
              if (overlay.parentNode) {
                document.body.removeChild(overlay);
              }
              
              if (style.parentNode) {
                document.head.removeChild(style);
              }
              
              setEasterEggActive(false);
              console.log('🌧️ Digital Rain Complete! Feeling better? 😌✨');
            }, 600);
          }, 2300);
        };
        
        // Start the smooth fade sequence immediately
        startFadeOut();
      };
      
      // Add click/tap listeners
      overlay.addEventListener('click', exitEffect);
      overlay.addEventListener('touchstart', exitEffect);
      
      // Prevent scrolling and add keyboard exit
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === ' ') {
          e.preventDefault();
          exitEffect();
        }
      };
      
      document.addEventListener('keydown', handleKeyPress);
      
      // Enhanced start animation with smooth fade-in
      let introPhase = 0;
      
      // Phase 1: Initial fade-in with subtle entrance effect
      setTimeout(() => {
        overlay.style.transition = 'background 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        overlay.style.background = 'linear-gradient(45deg, rgba(0, 0, 0, 0.98), rgba(0, 20, 0, 0.98))';
        document.body.style.overflow = 'hidden';
        
        // Add welcome message
        floatingTexts.push({
          x: vw / 2,
          y: vh / 2 + 100,
          text: 'ENTERING ZEN MODE...',
          opacity: 0.8,
          size: 18,
          vx: 0,
          vy: -2,
          pulse: 0
        });
      }, 100);
      
      // Phase 2: Canvas fade-in with elastic easing
      setTimeout(() => {
        canvas.style.transition = 'opacity 2.5s cubic-bezier(0.19, 1, 0.22, 1), filter 2s ease-out';
        canvas.style.opacity = '1';
        canvas.style.filter = 'blur(0px) brightness(1)';
      }, 500);
      
      const animationLoop = () => {
        animate();
        if (document.getElementById('digital-rain-overlay') && !isExiting) {
          requestAnimationFrame(animationLoop);
        }
      };
      
      setTimeout(animationLoop, 800);
      
      // Auto-exit after 15 seconds for stress relief session
      setTimeout(() => {
        if (!isExiting) {
          console.log('🧘‍♂️ Stress relief session complete! Hope you feel refreshed! ✨');
          // Add a gentle completion message before exit
          floatingTexts.push({
            x: vw / 2,
            y: vh / 2 - 80,
            text: 'SESSION COMPLETE',
            opacity: 1,
            size: 20,
            vx: 0,
            vy: -1,
            pulse: 0
          });
          
          setTimeout(() => {
            exitEffect();
          }, 1500);
        }
        document.removeEventListener('keydown', handleKeyPress);
      }, 15000);
  };

  const triggerMatrixMode = () => {
    setMatrixMode(true);
    // Transform the entire site
    document.body.classList.add('matrix-mode');
    document.documentElement.style.setProperty('--primary', '0 255 0');
    document.documentElement.style.setProperty('--background', '0 0 0');
    document.documentElement.style.setProperty('--foreground', '0 255 0');
    
    // Add matrix text effect
    const style = document.createElement('style');
    style.textContent = `
      .matrix-mode * {
        font-family: 'Courier New', monospace !important;
        text-shadow: 0 0 10px #00ff00;
      }
      .matrix-mode {
        background: #000 !important;
        color: #00ff00 !important;
      }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
      document.body.classList.remove('matrix-mode');
      document.documentElement.style.removeProperty('--primary');
      document.documentElement.style.removeProperty('--background');
      document.documentElement.style.removeProperty('--foreground');
      document.head.removeChild(style);
      setMatrixMode(false);
    }, 10000);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "glass backdrop-blur-80" : "backdrop-blur-20"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: isScrolled 
          ? 'linear-gradient(145deg, hsl(var(--background) / 0.7), hsl(var(--surface) / 0.5))'
          : 'linear-gradient(145deg, hsl(var(--background) / 0.3), hsl(var(--surface) / 0.1))'
      }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-lg font-bold font-mono liquid-text cursor-pointer px-4 py-2 rounded-2xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => {
              // ✨ SMOOTH AURORA EASTER EGG! ✨
              console.log('✨ Aurora Mode Activated! ✨');
              
              const colors = [
                { primary: '220 100% 70%', accent: '280 100% 75%' },  // Blue to Purple
                { primary: '280 100% 75%', accent: '320 100% 70%' },  // Purple to Pink
                { primary: '320 100% 70%', accent: '0 100% 75%' },    // Pink to Red
                { primary: '0 100% 75%', accent: '30 100% 70%' },     // Red to Orange
                { primary: '30 100% 70%', accent: '60 100% 75%' },    // Orange to Yellow
                { primary: '60 100% 75%', accent: '120 100% 70%' },   // Yellow to Green
                { primary: '120 100% 70%', accent: '180 100% 75%' },  // Green to Cyan
                { primary: '180 100% 75%', accent: '220 100% 70%' }   // Cyan to Blue
              ];
              
              // Store original values
              const originalPrimary = getComputedStyle(document.documentElement).getPropertyValue('--primary');
              const originalAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent');
              
              let colorIndex = 0;
              let animationFrame = 0;
              
              // Enhanced gradient noise canvas effect
              const canvas = document.createElement('canvas');
              canvas.style.position = 'fixed';
              canvas.style.top = '0';
              canvas.style.left = '0';
              canvas.style.width = '100%';
              canvas.style.height = '100%';
              canvas.style.zIndex = '1'; // Behind navbar (navbar is z-50)
              canvas.style.pointerEvents = 'none';
              canvas.style.mixBlendMode = 'screen'; // Better blend mode that doesn't interfere with backdrop-blur
              canvas.style.opacity = '0.3';
              canvas.width = window.innerWidth * 0.5; // Reduce for performance
              canvas.height = window.innerHeight * 0.5;
              canvas.style.imageRendering = 'pixelated';
              document.body.appendChild(canvas);
              
              const ctx = canvas.getContext('2d')!;
              
              // Perlin-like noise function
              const noise = (x: number, y: number, time: number) => {
                return (Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time * 0.8) + 
                        Math.sin(x * 0.02 + time * 1.3) * Math.cos(y * 0.02 + time * 0.6) +
                        Math.sin(x * 0.005 + time * 0.4) * Math.cos(y * 0.005 + time)) * 0.5;
              };
              
              // Smooth HSL color interpolation helper
              const interpolateHSL = (color1: string, color2: string, t: number): string => {
                const [h1, s1, l1] = color1.split(' ').map(v => parseFloat(v.replace('%', '')));
                const [h2, s2, l2] = color2.split(' ').map(v => parseFloat(v.replace('%', '')));
                
                // Handle hue wrapping for shortest path
                let hDiff = h2 - h1;
                if (hDiff > 180) hDiff -= 360;
                if (hDiff < -180) hDiff += 360;
                
                const h = (h1 + hDiff * t) % 360;
                const s = s1 + (s2 - s1) * t;
                const l = l1 + (l2 - l1) * t;
                
                return `${h} ${s}% ${l}%`;
              };
              
              // Ultra-smooth color transitions with proper interpolation
              const colorTransition = () => {
                const progress = (animationFrame / 480) % 1; // 8 seconds at 60fps
                const eased = 0.5 - 0.5 * Math.cos(progress * Math.PI * 2); // Smooth sine easing
                
                const totalProgress = eased * colors.length;
                const currentIndex = Math.floor(totalProgress);
                const nextIndex = (currentIndex + 1) % colors.length;
                const localProgress = totalProgress - currentIndex;
                
                // Smooth easing for local progress
                const smoothProgress = 0.5 - 0.5 * Math.cos(localProgress * Math.PI);
                
                const currentColorSet = colors[currentIndex];
                const nextColorSet = colors[nextIndex];
                
                // Interpolate primary and accent colors smoothly
                const interpolatedPrimary = interpolateHSL(currentColorSet.primary, nextColorSet.primary, smoothProgress);
                const interpolatedAccent = interpolateHSL(currentColorSet.accent, nextColorSet.accent, smoothProgress);
                
                // Apply smooth color transitions with CSS transitions
                document.documentElement.style.transition = 'all 0.3s ease-out';
                document.documentElement.style.setProperty('--primary', interpolatedPrimary);
                document.documentElement.style.setProperty('--accent', interpolatedAccent);
                document.documentElement.style.setProperty('--primary-glow', interpolatedPrimary);
              };
              
              // Enhanced floating gradient orbs with noise
              const particles: Array<{
                x: number, y: number, vx: number, vy: number, 
                hue: number, size: number, opacity: number,
                noiseOffsetX: number, noiseOffsetY: number
              }> = [];
              
              for (let i = 0; i < 25; i++) {
                particles.push({
                  x: Math.random() * canvas.width,
                  y: Math.random() * canvas.height,
                  vx: (Math.random() - 0.5) * 0.8, // Slower particle velocity
                  vy: (Math.random() - 0.5) * 0.8,
                  hue: Math.random() * 360,
                  size: Math.random() * 30 + 20,
                  opacity: Math.random() * 0.3 + 0.1,
                  noiseOffsetX: Math.random() * 1000,
                  noiseOffsetY: Math.random() * 1000
                });
              }
              
              const animateAurora = () => {
                const time = animationFrame * 0.02; // Slower animation timing
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Create layered gradient noise background
                const imageData = ctx.createImageData(canvas.width, canvas.height);
                const data = imageData.data;
                
                for (let x = 0; x < canvas.width; x += 2) {
                  for (let y = 0; y < canvas.height; y += 2) {
                    const noiseValue = noise(x, y, time);
                    const hue = (220 + noiseValue * 100 + time * 20) % 360;
                    const saturation = 70 + noiseValue * 30;
                    const lightness = 50 + noiseValue * 20;
                    const alpha = Math.max(0, Math.min(1, (noiseValue + 1) * 0.15));
                    
                    // Convert HSL to RGB for better performance
                    const rgb = hslToRgb(hue / 360, saturation / 100, lightness / 100);
                    
                    const index = (y * canvas.width + x) * 4;
                    data[index] = rgb[0];     // Red
                    data[index + 1] = rgb[1]; // Green  
                    data[index + 2] = rgb[2]; // Blue
                    data[index + 3] = alpha * 255; // Alpha
                  }
                }
                
                ctx.putImageData(imageData, 0, 0);
                
                // Multi-layered gradients with noise influence
                const gradient1 = ctx.createRadialGradient(
                  canvas.width * (0.3 + Math.sin(time * 0.8) * 0.2), 
                  canvas.height * (0.4 + Math.cos(time * 0.6) * 0.2), 0,
                  canvas.width * 0.5, canvas.height * 0.5, canvas.width
                );
                gradient1.addColorStop(0, `hsla(${240 + Math.sin(time) * 60}, 80%, 60%, 0.3)`);
                gradient1.addColorStop(0.5, `hsla(${300 + Math.cos(time * 1.2) * 40}, 75%, 65%, 0.2)`);
                gradient1.addColorStop(1, 'transparent');
                
                ctx.globalCompositeOperation = 'screen';
                ctx.fillStyle = gradient1;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Second gradient layer
                const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient2.addColorStop(0, `hsla(${180 + Math.sin(time * 1.5) * 80}, 85%, 70%, 0.25)`);
                gradient2.addColorStop(0.5, `hsla(${320 + Math.cos(time * 0.9) * 60}, 80%, 65%, 0.2)`);
                gradient2.addColorStop(1, `hsla(${60 + Math.sin(time * 1.3) * 40}, 90%, 75%, 0.15)`);
                
                ctx.fillStyle = gradient2;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.globalCompositeOperation = 'source-over';
                
                // Enhanced floating particles with noise distortion
                particles.forEach((particle) => {
                  // Apply noise-based distortion
                  const noiseX = noise(particle.x + particle.noiseOffsetX, particle.y, time * 0.5) * 3;
                  const noiseY = noise(particle.x, particle.y + particle.noiseOffsetY, time * 0.7) * 3;
                  
                  particle.x += particle.vx * 0.5 + noiseX * 0.3; // Slower movement
                  particle.y += particle.vy * 0.5 + noiseY * 0.3;
                  particle.hue += 0.5; // Slower color rotation
                  
                  // Smooth wrapping with fade
                  if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
                  if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
                  if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
                  if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
                  
                  // Multi-layered glowing orbs
                  const orbGradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 1.5
                  );
                  orbGradient.addColorStop(0, `hsla(${particle.hue}, 90%, 80%, ${particle.opacity * 0.8})`);
                  orbGradient.addColorStop(0.3, `hsla(${particle.hue + 30}, 85%, 75%, ${particle.opacity * 0.5})`);
                  orbGradient.addColorStop(0.7, `hsla(${particle.hue + 60}, 80%, 70%, ${particle.opacity * 0.2})`);
                  orbGradient.addColorStop(1, 'transparent');
                  
                  ctx.fillStyle = orbGradient;
                  ctx.beginPath();
                  ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
                  ctx.fill();
                });
                
                colorTransition();
                animationFrame++;
                
                if (animationFrame < 480) { // Exactly 8 seconds at 60fps
                  requestAnimationFrame(animateAurora);
                }
              };
              
              // HSL to RGB conversion helper
              const hslToRgb = (h: number, s: number, l: number): [number, number, number] => {
                const c = (1 - Math.abs(2 * l - 1)) * s;
                const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
                const m = l - c / 2;
                let r = 0, g = 0, b = 0;
                
                if (h < 1/6) { r = c; g = x; b = 0; }
                else if (h < 2/6) { r = x; g = c; b = 0; }
                else if (h < 3/6) { r = 0; g = c; b = x; }
                else if (h < 4/6) { r = 0; g = x; b = c; }
                else if (h < 5/6) { r = x; g = 0; b = c; }
                else { r = c; g = 0; b = x; }
                
                return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
              };
              
              // Gentle body enhancement
              document.body.style.transition = 'all 1.5s ease-in-out';
              document.body.style.boxShadow = '0 0 80px hsla(var(--primary) / 0.2), 0 0 40px hsla(var(--accent) / 0.1)';
              document.body.style.backdropFilter = 'blur(0.5px)';
              
              animateAurora();
              
              // Precise 8-second cleanup with smooth transition back to original
              setTimeout(() => {
                // Start fade out at 7 seconds (1 second fade)
                canvas.style.transition = 'opacity 1s ease-out';
                canvas.style.opacity = '0';
                
                // Begin restoration of body effects
                document.body.style.transition = 'all 1s ease-out';
                document.body.style.boxShadow = 'none';
                document.body.style.backdropFilter = 'none';
                
                // Start color restoration with smooth transition
                document.documentElement.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                document.documentElement.style.setProperty('--primary', originalPrimary);
                document.documentElement.style.setProperty('--accent', originalAccent);
                document.documentElement.style.removeProperty('--primary-glow');
                
                // Final cleanup after fade completes
                setTimeout(() => {
                  if (canvas.parentNode) {
                    document.body.removeChild(canvas);
                  }
                  // Remove all style overrides to return to original state
                  document.body.style.removeProperty('transition');
                  document.body.style.removeProperty('box-shadow');
                  document.body.style.removeProperty('backdrop-filter');
                  document.documentElement.style.removeProperty('transition');
                  
                  console.log('✨ Gradient Aurora Complete - Original State Restored! ✨');
                }, 1000);
                
              }, 7000); // Start cleanup at 7 seconds for perfect 8-second total
            }}
          >
            <span className="text-primary animate-pulse">&lt;</span>
            <span className="text-foreground px-2">shivaganesht</span>
            <span className="text-accent animate-pulse">/&gt;</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-all duration-500 focus:outline-none px-3 py-2 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 4px 20px hsl(var(--primary) / 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Desktop Stress Buster & Matrix Buttons */}
            <motion.button
              onClick={triggerEasterEgg}
              className="relative text-xs font-mono text-emerald-400/80 hover:text-emerald-400 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              title="Stress Relief - Digital Rain Meditation"
            >
              <div className="flex items-center gap-1">
                <Brain className="h-3 w-3" />
                <span className="text-[10px] font-semibold">ZEN</span>
              </div>
            </motion.button>
            
            <motion.button
              onClick={triggerMatrixMode}
              className="relative text-xs font-mono text-muted-foreground hover:text-primary transition-all duration-300 px-2 py-1 rounded-md hover:bg-primary/5"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              title="Enter the Matrix..."
            >
              <Code2 className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Mobile & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            >
              <ThemeToggle />
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors relative z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-20 left-4 right-4 bg-background/98 backdrop-blur-xl rounded-3xl p-6 z-[55] md:hidden shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)'
              }}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "text-primary bg-primary/20"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary opacity-60" />
                      <span>{item.label}</span>
                    </div>
                  </motion.button>
                ))}
                
                {/* Stress Relief Digital Rain Button */}
                <motion.button
                  onClick={triggerEasterEgg}
                  className="w-full mt-6 px-4 py-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 text-center font-mono text-sm border-2 border-dashed border-emerald-400/40 hover:border-emerald-400/70 transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: 0.5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <Brain className="h-4 w-4 text-emerald-400 animate-pulse" />
                      <span className="text-emerald-400 font-semibold tracking-wider">STRESS BUSTER</span>
                      <Zap className="h-4 w-4 text-cyan-400 animate-bounce" />
                    </div>
                    <div className="text-xs text-emerald-300/80 mb-1">
                      Digital Rain Meditation
                    </div>
                    <div className="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
                      <span>Tap for zen mode</span>
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🧘‍♂️
                      </motion.span>
                    </div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
