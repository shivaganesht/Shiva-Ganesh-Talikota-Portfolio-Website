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
          return rect.top <= 100 && rect.bottom >= 100;
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
    
    // Close mobile menu first with smooth animation
    setIsMobileMenuOpen(false);
    
    // Smooth entrance animation
    setTimeout(() => {
      // Store original values for restoration
      const originalBodyOverflow = document.body.style.overflow;
      const originalFilter = document.documentElement.style.filter;
      const originalTransition = document.body.style.transition;
      
      // Create overlay container for smoother animations
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.zIndex = '9999';
      overlay.style.pointerEvents = 'none';
      overlay.style.background = 'rgba(0, 0, 0, 0)';
      overlay.style.transition = 'background 1s ease-out';
      document.body.appendChild(overlay);
      
      // Create matrix rain canvas
      const canvas = document.createElement('canvas');
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.opacity = '0';
      canvas.style.transition = 'opacity 1.5s ease-out';
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.transform = `scale(${1 / window.devicePixelRatio})`;
      canvas.style.transformOrigin = 'top left';
      overlay.appendChild(canvas);
      
      const ctx = canvas.getContext('2d')!;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Enhanced character sets for more variety
      const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンハクスマトリクス';
      const binaryChars = '01';
      const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      
      // Dynamic colors with smooth transitions
      const baseColors = [
        { r: 0, g: 255, b: 0 },     // Matrix green
        { r: 0, g: 200, b: 100 },   // Dark green
        { r: 100, g: 255, b: 150 }, // Light green
        { r: 50, g: 150, b: 50 },   // Forest green
      ];
      
      // Initialize drops with staggered start times
      const drops: Array<{
        y: number;
        speed: number;
        chars: string[];
        opacity: number;
        trail: number[];
        color: {r: number, g: number, b: number};
        fontSize: number;
        phase: number;
      }> = [];
      
      const cols = Math.floor(window.innerWidth / 25);
      
      for (let i = 0; i < cols; i++) {
        drops[i] = {
          y: Math.random() * -2000, // Staggered start
          speed: Math.random() * 3 + 2,
          chars: [],
          opacity: Math.random() * 0.8 + 0.2,
          trail: [],
          color: baseColors[Math.floor(Math.random() * baseColors.length)],
          fontSize: Math.random() * 8 + 16,
          phase: Math.random() * Math.PI * 2
        };
        
        // Generate character trail for each column
        for (let j = 0; j < 20; j++) {
          drops[i].chars[j] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          drops[i].trail[j] = 1 - (j * 0.05);
        }
      }
      
      // Animation variables
      let animationTime = 0;
      let intensityFactor = 0;
      const maxIntensity = 1;
      
      // Smooth animation loop
      const animate = () => {
        // Gradual intensity build-up
        if (intensityFactor < maxIntensity) {
          intensityFactor += 0.02;
        }
        
        // Dynamic background with breathing effect
        const breathe = Math.sin(animationTime * 0.01) * 0.1 + 0.1;
        ctx.fillStyle = `rgba(0, 0, 0, ${0.03 + breathe * intensityFactor})`;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        
        // Draw matrix rain
        drops.forEach((drop, i) => {
          // Update drop physics
          drop.y += drop.speed * intensityFactor;
          drop.phase += 0.05;
          
          // Dynamic color pulsing
          const pulse = Math.sin(animationTime * 0.02 + i * 0.1) * 0.3 + 0.7;
          const glowIntensity = Math.sin(drop.phase) * 0.5 + 0.5;
          
          // Draw character trail
          for (let j = 0; j < drop.chars.length; j++) {
            const charY = drop.y - j * (drop.fontSize + 2);
            
            if (charY > -drop.fontSize && charY < window.innerHeight + drop.fontSize) {
              // Calculate trail opacity with smooth falloff
              const trailOpacity = Math.max(0, drop.trail[j] - j * 0.05) * drop.opacity * pulse * intensityFactor;
              
              // Dynamic character switching for more life-like effect
              if (Math.random() < 0.02) {
                if (j < 3) {
                  drop.chars[j] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                } else if (Math.random() < 0.3) {
                  drop.chars[j] = binaryChars[Math.floor(Math.random() * binaryChars.length)];
                }
              }
              
              // Enhanced glow effect
              const glowSize = (j === 0 ? 3 : 2) * glowIntensity;
              
              // Outer glow
              for (let glow = glowSize; glow > 0; glow--) {
                ctx.shadowBlur = glow * 5;
                ctx.shadowColor = `rgba(${drop.color.r}, ${drop.color.g}, ${drop.color.b}, ${trailOpacity * 0.6})`;
                ctx.fillStyle = `rgba(${drop.color.r}, ${drop.color.g}, ${drop.color.b}, ${trailOpacity * 0.3})`;
                ctx.font = `bold ${drop.fontSize + glow}px 'Courier New', monospace`;
                ctx.fillText(drop.chars[j], i * 25 + 5, charY);
              }
              
              // Main character
              ctx.shadowBlur = 15;
              ctx.shadowColor = `rgba(${drop.color.r}, ${drop.color.g}, ${drop.color.b}, ${trailOpacity})`;
              ctx.fillStyle = `rgba(${drop.color.r}, ${drop.color.g}, ${drop.color.b}, ${Math.min(1, trailOpacity * 1.5)})`;
              ctx.font = `bold ${drop.fontSize}px 'Courier New', monospace`;
              ctx.fillText(drop.chars[j], i * 25 + 5, charY);
              
              // Leading character highlight
              if (j === 0) {
                ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity * 0.8})`;
                ctx.fillText(drop.chars[j], i * 25 + 5, charY);
              }
            }
          }
          
          // Reset drop when it goes off screen
          if (drop.y > window.innerHeight + 100) {
            drop.y = Math.random() * -500 - 100;
            drop.speed = Math.random() * 3 + 2;
            drop.color = baseColors[Math.floor(Math.random() * baseColors.length)];
            drop.fontSize = Math.random() * 8 + 16;
            
            // Regenerate character trail
            for (let j = 0; j < drop.chars.length; j++) {
              drop.chars[j] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            }
          }
        });
        
        animationTime++;
      };
      
      // Start smooth entrance
      requestAnimationFrame(() => {
        // Smooth background fade-in
        overlay.style.background = 'rgba(0, 0, 0, 0.95)';
        canvas.style.opacity = '1';
        
        // Body lock with smooth transition
        document.body.style.transition = 'all 0.5s ease-out';
        document.body.style.overflow = 'hidden';
        
        // Gradual filter effects
        setTimeout(() => {
          document.documentElement.style.transition = 'filter 2s ease-out';
          document.documentElement.style.filter = 'hue-rotate(120deg) saturate(1.8) contrast(1.2) brightness(0.8)';
        }, 500);
      });
      
      // Animation loop
      const animationLoop = () => {
        animate();
        if (overlay.parentNode) {
          requestAnimationFrame(animationLoop);
        }
      };
      
      // Start animation after entrance
      setTimeout(() => {
        animationLoop();
      }, 200);
      
      // Smooth exit sequence after 6 seconds
      setTimeout(() => {
        console.log('🌧️ Digital Rain Ending - Smooth Exit 🌧️');
        
        // Phase 1: Fade canvas and restore filter (2 seconds)
        canvas.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
        canvas.style.opacity = '0';
        canvas.style.transform = `scale(${1 / window.devicePixelRatio * 1.1})`;
        
        document.documentElement.style.transition = 'filter 2s ease-out';
        document.documentElement.style.filter = 'hue-rotate(0deg) saturate(1) contrast(1) brightness(1)';
        
        // Phase 2: Fade overlay background (1 second delay)
        setTimeout(() => {
          overlay.style.transition = 'background 1.5s ease-out';
          overlay.style.background = 'rgba(0, 0, 0, 0)';
        }, 1000);
        
        // Phase 3: Complete cleanup (after all animations)
        setTimeout(() => {
          // Restore original styles
          document.body.style.overflow = originalBodyOverflow;
          document.body.style.transition = originalTransition;
          document.documentElement.style.filter = originalFilter;
          document.documentElement.style.removeProperty('transition');
          
          // Remove overlay
          if (overlay.parentNode) {
            document.body.removeChild(overlay);
          }
          
          setEasterEggActive(false);
          console.log('🌧️ Digital Rain Complete! 🌧️');
        }, 3500);
      }, 6000);
      
    }, 300); // Wait for mobile menu close animation
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
              // 🌈 EPIC COLOR STORM EASTER EGG! 🌈
              console.log('🌈 Color Storm Activated! 🌈');
              
              const colors = [
                '0 100% 60%',    // Red
                '30 100% 60%',   // Orange  
                '60 100% 60%',   // Yellow
                '120 100% 60%',  // Green
                '180 100% 60%',  // Cyan
                '240 100% 60%',  // Blue
                '270 100% 60%',  // Purple
                '300 100% 60%',  // Magenta
                '330 100% 60%'   // Pink
              ];
              
              // Store original values
              const originalPrimary = getComputedStyle(document.documentElement).getPropertyValue('--primary');
              const originalAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent');
              
              let colorIndex = 0;
              let pulseIndex = 0;
              
              // Rapid color cycling
              const colorInterval = setInterval(() => {
                const currentColor = colors[colorIndex % colors.length];
                const nextColor = colors[(colorIndex + 1) % colors.length];
                
                document.documentElement.style.setProperty('--primary', currentColor);
                document.documentElement.style.setProperty('--accent', nextColor);
                document.documentElement.style.setProperty('--primary-glow', currentColor);
                
                colorIndex++;
              }, 150);
              
              // Pulsing body animation
              const pulseInterval = setInterval(() => {
                const scale = 1 + Math.sin(pulseIndex * 0.3) * 0.02;
                const hue = (pulseIndex * 10) % 360;
                
                document.body.style.transform = `scale(${scale}) rotate(${Math.sin(pulseIndex * 0.1)}deg)`;
                document.body.style.filter = `hue-rotate(${hue}deg) saturate(1.2) brightness(1.1)`;
                document.body.style.transition = 'all 0.1s ease-out';
                
                pulseIndex++;
              }, 100);
              
              // Explosive particle effect
              const canvas = document.createElement('canvas');
              canvas.style.position = 'fixed';
              canvas.style.top = '0';
              canvas.style.left = '0';
              canvas.style.width = '100%';
              canvas.style.height = '100%';
              canvas.style.zIndex = '9999';
              canvas.style.pointerEvents = 'none';
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              document.body.appendChild(canvas);
              
              const ctx = canvas.getContext('2d')!;
              const particles: Array<{x: number, y: number, vx: number, vy: number, hue: number, life: number}> = [];
              
              // Create particles from center
              for (let i = 0; i < 100; i++) {
                particles.push({
                  x: canvas.width / 2,
                  y: canvas.height / 2,
                  vx: (Math.random() - 0.5) * 20,
                  vy: (Math.random() - 0.5) * 20,
                  hue: Math.random() * 360,
                  life: 1.0
                });
              }
              
              const animateParticles = () => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach((particle, index) => {
                  particle.x += particle.vx;
                  particle.y += particle.vy;
                  particle.life -= 0.02;
                  particle.hue += 2;
                  
                  if (particle.life > 0) {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.life * 8, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${particle.life})`;
                    ctx.fill();
                  } else {
                    particles.splice(index, 1);
                  }
                });
                
                if (particles.length > 0) {
                  requestAnimationFrame(animateParticles);
                }
              };
              
              animateParticles();
              
              // Cleanup after 4 seconds
              setTimeout(() => {
                clearInterval(colorInterval);
                clearInterval(pulseInterval);
                
                // Restore original values
                document.documentElement.style.setProperty('--primary', originalPrimary);
                document.documentElement.style.setProperty('--accent', originalAccent);
                document.documentElement.style.removeProperty('--primary-glow');
                
                // Smooth restoration
                document.body.style.transition = 'all 1s ease-out';
                document.body.style.transform = 'scale(1) rotate(0deg)';
                document.body.style.filter = 'none';
                
                // Remove canvas
                if (canvas.parentNode) {
                  document.body.removeChild(canvas);
                }
                
                setTimeout(() => {
                  document.body.style.removeProperty('transition');
                  document.body.style.removeProperty('transform');
                  document.body.style.removeProperty('filter');
                }, 1000);
                
                console.log('🌈 Color Storm Complete! 🌈');
              }, 4000);
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
            
            {/* Desktop Easter Egg Button */}
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
                
                {/* Curious Easter Egg Button for Mobile */}
                <motion.button
                  onClick={triggerEasterEgg}
                  className="w-full mt-6 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-center font-mono text-sm border-2 border-dashed border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    <span className="text-purple-400">?? CURIOUS ??</span>
                    <Sparkles className="h-4 w-4 animate-pulse" />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Dare to click? 😏
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