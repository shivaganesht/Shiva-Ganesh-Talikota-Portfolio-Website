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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const triggerEasterEgg = () => {
    setEasterEggActive(true);
    // Crazy matrix effect
    document.body.style.overflow = 'hidden';
    const colors = ['#00ff00', '#ff0066', '#0066ff', '#ff6600', '#66ff00'];
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    // Create matrix rain
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
    const drops: number[] = [];
    const cols = Math.floor(canvas.width / 20);
    
    for (let i = 0; i < cols; i++) {
      drops[i] = 1;
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = '20px monospace';
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillText(char, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 50);
    
    // Add glitch effect to website
    document.documentElement.style.filter = 'hue-rotate(120deg) saturate(1.5)';
    
    setTimeout(() => {
      clearInterval(interval);
      document.body.removeChild(canvas);
      document.body.style.overflow = 'auto';
      document.documentElement.style.filter = 'none';
      setEasterEggActive(false);
    }, 5000);
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
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-20 left-4 right-4 bg-background/95 backdrop-blur-md rounded-3xl p-6 z-50 md:hidden"
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