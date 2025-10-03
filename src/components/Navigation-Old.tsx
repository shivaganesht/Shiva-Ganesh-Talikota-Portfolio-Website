import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Rocket, Brain, Code2, Sparkles } from "lucide-react";
import { QuickActions } from "./QuickActions";

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
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);

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

  const openQuickActions = () => {
    console.log('🛠️ Quick Actions Panel Opening! 🛠️');
    setEasterEggActive(true);
    
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      // Create overlay
      const overlay = document.createElement('div');
      overlay.id = 'quick-actions-overlay';
      
      overlay.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 9999 !important;
        background: rgba(0, 0, 0, 0.7) !important;
        backdrop-filter: blur(10px) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        opacity: 0 !important;
        transition: all 0.3s ease-out !important;
        cursor: pointer !important;
      `;
      
      // Create panel
      const panel = document.createElement('div');
      panel.style.cssText = `
        background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9)) !important;
        border: 1px solid rgba(100, 116, 139, 0.3) !important;
        border-radius: 20px !important;
        padding: 32px !important;
        max-width: 90vw !important;
        width: 520px !important;
        max-height: 90vh !important;
        overflow-y: auto !important;
        transform: scale(0.8) translateY(20px) !important;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(59, 130, 246, 0.1) !important;
        cursor: default !important;
      `;
      
      panel.innerHTML = `
        <div style="text-align: center; margin-bottom: 24px;">
          <h2 style="
            font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
            font-size: 24px;
            font-weight: bold;
            color: #3b82f6;
            margin: 0 0 8px 0;
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          ">⚡ Quick Actions</h2>
          <p style="
            font-size: 14px;
            color: #94a3b8;
            margin: 0;
            font-family: system-ui, -apple-system, sans-serif;
          ">Developer tools at your fingertips</p>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
          
          <button id="action-json-format" style="
            background: linear-gradient(135deg, #10b981, #059669);
            border: none;
            border-radius: 12px;
            padding: 16px 12px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
          ">
            <span style="font-size: 20px;">📋</span>
            <span>JSON Formatter</span>
          </button>
          
          <button id="action-color-picker" style="
            background: linear-gradient(135deg, #8b5cf6, #7c3aed);
            border: none;
            border-radius: 12px;
            padding: 16px 12px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
          ">
            <span style="font-size: 20px;">🎨</span>
            <span>Color Tools</span>
          </button>
          
          <button id="action-base64" style="
            background: linear-gradient(135deg, #f59e0b, #d97706);
            border: none;
            border-radius: 12px;
            padding: 16px 12px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
          ">
            <span style="font-size: 20px;">🔐</span>
            <span>Base64 Tools</span>
          </button>
          
          <button id="action-uuid" style="
            background: linear-gradient(135deg, #ef4444, #dc2626);
            border: none;
            border-radius: 12px;
            padding: 16px 12px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
          ">
            <span style="font-size: 20px;">🆔</span>
            <span>UUID Generator</span>
          </button>
          
          <button id="action-timestamp" style="
            background: linear-gradient(135deg, #06b6d4, #0891b2);
            border: none;
            border-radius: 12px;
            padding: 16px 12px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(6, 182, 212, 0.2);
          ">
            <span style="font-size: 20px;">⏰</span>
            <span>Timestamp</span>
          </button>
          
          <button id="action-qr-code" style="
            background: linear-gradient(135deg, #ec4899, #db2777);
            border: none;
            border-radius: 12px;
            padding: 16px 12px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(236, 72, 153, 0.2);
          ">
            <span style="font-size: 20px;">📱</span>
            <span>QR Generator</span>
          </button>
        </div>
        
        <div id="action-content" style="
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(100, 116, 139, 0.2);
          border-radius: 12px;
          padding: 16px;
          min-height: 120px;
          display: none;
        ">
          <!-- Dynamic content area -->
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <button id="close-actions" style="
            background: rgba(100, 116, 139, 0.2);
            border: 1px solid rgba(100, 116, 139, 0.3);
            border-radius: 8px;
            padding: 8px 16px;
            color: #94a3b8;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
          ">Close</button>
        </div>
      `;
      
      overlay.appendChild(panel);
      document.body.appendChild(overlay);
      
      // Prevent panel clicks from closing overlay
      panel.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      
      // Add functionality
      const addActionHandlers = () => {
        const contentDiv = document.getElementById('action-content')!;
        
        // JSON Formatter
        document.getElementById('action-json-format')?.addEventListener('click', () => {
          contentDiv.style.display = 'block';
          contentDiv.innerHTML = \`
            <h3 style="color: #10b981; margin: 0 0 12px 0; font-size: 16px;">JSON Formatter</h3>
            <textarea id="json-input" placeholder="Paste your JSON here..." style="
              width: 100%;
              height: 80px;
              background: rgba(0, 0, 0, 0.5);
              border: 1px solid rgba(100, 116, 139, 0.3);
              border-radius: 6px;
              padding: 8px;
              color: white;
              font-family: 'JetBrains Mono', monospace;
              font-size: 12px;
              resize: vertical;
            "></textarea>
            <div style="margin: 8px 0; display: flex; gap: 8px;">
              <button id="format-json" style="
                background: #10b981;
                border: none;
                border-radius: 6px;
                padding: 6px 12px;
                color: white;
                cursor: pointer;
                font-size: 12px;
              ">Format</button>
              <button id="minify-json" style="
                background: #f59e0b;
                border: none;
                border-radius: 6px;
                padding: 6px 12px;
                color: white;
                cursor: pointer;
                font-size: 12px;
              ">Minify</button>
            </div>
            <pre id="json-output" style="
              background: rgba(0, 0, 0, 0.3);
              border: 1px solid rgba(100, 116, 139, 0.2);
              border-radius: 6px;
              padding: 8px;
              color: #a3a3a3;
              font-family: 'JetBrains Mono', monospace;
              font-size: 11px;
              white-space: pre-wrap;
              max-height: 150px;
              overflow-y: auto;
            "></pre>
          \`;
          
          document.getElementById('format-json')?.addEventListener('click', () => {
            const input = (document.getElementById('json-input') as HTMLTextAreaElement).value;
            const output = document.getElementById('json-output')!;
            try {
              const formatted = JSON.stringify(JSON.parse(input), null, 2);
              output.textContent = formatted;
              navigator.clipboard.writeText(formatted);
            } catch (e) {
              output.textContent = 'Invalid JSON: ' + (e as Error).message;
            }
          });
          
          document.getElementById('minify-json')?.addEventListener('click', () => {
            const input = (document.getElementById('json-input') as HTMLTextAreaElement).value;
            const output = document.getElementById('json-output')!;
            try {
              const minified = JSON.stringify(JSON.parse(input));
              output.textContent = minified;
              navigator.clipboard.writeText(minified);
            } catch (e) {
              output.textContent = 'Invalid JSON: ' + (e as Error).message;
            }
          });
        });
        
        // UUID Generator
        document.getElementById('action-uuid')?.addEventListener('click', () => {
          contentDiv.style.display = 'block';
          const uuid = crypto.randomUUID();
          contentDiv.innerHTML = \`
            <h3 style="color: #ef4444; margin: 0 0 12px 0; font-size: 16px;">UUID Generator</h3>
            <div style="
              background: rgba(0, 0, 0, 0.3);
              border: 1px solid rgba(100, 116, 139, 0.2);
              border-radius: 6px;
              padding: 12px;
              font-family: 'JetBrains Mono', monospace;
              font-size: 14px;
              color: #a3a3a3;
              text-align: center;
              margin: 8px 0;
            ">\${uuid}</div>
            <div style="text-align: center;">
              <button onclick="navigator.clipboard.writeText('\${uuid}'); this.textContent='Copied!'; setTimeout(() => this.textContent='Copy UUID', 1000)" style="
                background: #ef4444;
                border: none;
                border-radius: 6px;
                padding: 6px 12px;
                color: white;
                cursor: pointer;
                font-size: 12px;
              ">Copy UUID</button>
            </div>
          \`;
        });
        
        // Timestamp Converter
        document.getElementById('action-timestamp')?.addEventListener('click', () => {
          contentDiv.style.display = 'block';
          const now = Date.now();
          const date = new Date().toISOString();
          contentDiv.innerHTML = \`
            <h3 style="color: #06b6d4; margin: 0 0 12px 0; font-size: 16px;">Timestamp Tools</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 8px 0;">
              <div>
                <label style="color: #94a3b8; font-size: 12px;">Unix Timestamp:</label>
                <div onclick="navigator.clipboard.writeText('\${now}')" style="
                  background: rgba(0, 0, 0, 0.3);
                  border: 1px solid rgba(100, 116, 139, 0.2);
                  border-radius: 4px;
                  padding: 6px;
                  font-family: monospace;
                  font-size: 12px;
                  cursor: pointer;
                ">\${now}</div>
              </div>
              <div>
                <label style="color: #94a3b8; font-size: 12px;">ISO String:</label>
                <div onclick="navigator.clipboard.writeText('\${date}')" style="
                  background: rgba(0, 0, 0, 0.3);
                  border: 1px solid rgba(100, 116, 139, 0.2);
                  border-radius: 4px;
                  padding: 6px;
                  font-family: monospace;
                  font-size: 12px;
                  cursor: pointer;
                  overflow: hidden;
                  text-overflow: ellipsis;
                ">\${date}</div>
              </div>
            </div>
          \`;
        });
        
        // Color Tools
        document.getElementById('action-color-picker')?.addEventListener('click', () => {
          contentDiv.style.display = 'block';
          contentDiv.innerHTML = \`
            <h3 style="color: #8b5cf6; margin: 0 0 12px 0; font-size: 16px;">Color Tools</h3>
            <input type="color" id="color-picker" value="#3b82f6" style="
              width: 60px;
              height: 40px;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              margin-right: 12px;
            ">
            <div id="color-output" style="
              margin: 12px 0;
              font-family: 'JetBrains Mono', monospace;
              font-size: 12px;
            "></div>
          \`;
          
          const updateColor = () => {
            const color = (document.getElementById('color-picker') as HTMLInputElement).value;
            const r = parseInt(color.substr(1, 2), 16);
            const g = parseInt(color.substr(3, 2), 16);
            const b = parseInt(color.substr(5, 2), 16);
            
            document.getElementById('color-output')!.innerHTML = \`
              <div onclick="navigator.clipboard.writeText('\${color}')" style="margin: 4px 0; cursor: pointer; color: #a3a3a3;">HEX: \${color}</div>
              <div onclick="navigator.clipboard.writeText('rgb(\${r}, \${g}, \${b})')" style="margin: 4px 0; cursor: pointer; color: #a3a3a3;">RGB: rgb(\${r}, \${g}, \${b})</div>
              <div onclick="navigator.clipboard.writeText('hsl(\${Math.round(((r/255*360 + g/255*360 + b/255*360)/3))}, 50%, 50%)')" style="margin: 4px 0; cursor: pointer; color: #a3a3a3;">HSL: hsl(\${Math.round(((r/255*360 + g/255*360 + b/255*360)/3))}, 50%, 50%)</div>
            `;
          };
          
          document.getElementById('color-picker')?.addEventListener('input', updateColor);
          updateColor();
        });
        
        // Base64 Tools
        document.getElementById('action-base64')?.addEventListener('click', () => {
          contentDiv.style.display = 'block';
          contentDiv.innerHTML = \`
            <h3 style="color: #f59e0b; margin: 0 0 12px 0; font-size: 16px;">Base64 Encoder/Decoder</h3>
            <textarea id="base64-input" placeholder="Enter text to encode or base64 to decode..." style="
              width: 100%;
              height: 60px;
              background: rgba(0, 0, 0, 0.5);
              border: 1px solid rgba(100, 116, 139, 0.3);
              border-radius: 6px;
              padding: 8px;
              color: white;
              font-family: 'JetBrains Mono', monospace;
              font-size: 12px;
              resize: vertical;
            "></textarea>
            <div style="margin: 8px 0; display: flex; gap: 8px;">
              <button id="encode-base64" style="
                background: #f59e0b;
                border: none;
                border-radius: 6px;
                padding: 6px 12px;
                color: white;
                cursor: pointer;
                font-size: 12px;
              ">Encode</button>
              <button id="decode-base64" style="
                background: #d97706;
                border: none;
                border-radius: 6px;
                padding: 6px 12px;
                color: white;
                cursor: pointer;
                font-size: 12px;
              ">Decode</button>
            </div>
            <pre id="base64-output" style="
              background: rgba(0, 0, 0, 0.3);
              border: 1px solid rgba(100, 116, 139, 0.2);
              border-radius: 6px;
              padding: 8px;
              color: #a3a3a3;
              font-family: 'JetBrains Mono', monospace;
              font-size: 11px;
              white-space: pre-wrap;
              max-height: 100px;
              overflow-y: auto;
            "></pre>
          \`;
          
          document.getElementById('encode-base64')?.addEventListener('click', () => {
            const input = (document.getElementById('base64-input') as HTMLTextAreaElement).value;
            const output = document.getElementById('base64-output')!;
            try {
              const encoded = btoa(input);
              output.textContent = encoded;
              navigator.clipboard.writeText(encoded);
            } catch (e) {
              output.textContent = 'Encoding error: ' + (e as Error).message;
            }
          });
          
          document.getElementById('decode-base64')?.addEventListener('click', () => {
            const input = (document.getElementById('base64-input') as HTMLTextAreaElement).value;
            const output = document.getElementById('base64-output')!;
            try {
              const decoded = atob(input);
              output.textContent = decoded;
              navigator.clipboard.writeText(decoded);
            } catch (e) {
              output.textContent = 'Decoding error: ' + (e as Error).message;
            }
          });
        });
        
        // QR Code Generator
        document.getElementById('action-qr-code')?.addEventListener('click', () => {
          contentDiv.style.display = 'block';
          contentDiv.innerHTML = \`
            <h3 style="color: #ec4899; margin: 0 0 12px 0; font-size: 16px;">QR Code Generator</h3>
            <input type="text" id="qr-input" placeholder="Enter text or URL..." style="
              width: 100%;
              background: rgba(0, 0, 0, 0.5);
              border: 1px solid rgba(100, 116, 139, 0.3);
              border-radius: 6px;
              padding: 8px;
              color: white;
              font-size: 12px;
              margin-bottom: 8px;
            ">
            <button id="generate-qr" style="
              background: #ec4899;
              border: none;
              border-radius: 6px;
              padding: 6px 12px;
              color: white;
              cursor: pointer;
              font-size: 12px;
              margin-bottom: 12px;
            ">Generate QR</button>
            <div id="qr-output" style="text-align: center;"></div>
          \`;
          
          document.getElementById('generate-qr')?.addEventListener('click', () => {
            const input = (document.getElementById('qr-input') as HTMLInputElement).value;
            const output = document.getElementById('qr-output')!;
            if (input.trim()) {
              // Using QR Server API for simplicity
              const qrUrl = \`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=\${encodeURIComponent(input)}\`;
              output.innerHTML = \`<img src="\${qrUrl}" alt="QR Code" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">\`;
            }
          });
        });
      };
      
      // Add hover effects to buttons
      const buttons = panel.querySelectorAll('button');
      buttons.forEach(button => {
        if (button.id !== 'close-actions') {
          button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.05)';
          });
          button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
          });
        }
      });
      
      addActionHandlers();
      
      // Close functionality
      const closePanel = () => {
        overlay.style.opacity = '0';
        panel.style.transform = 'scale(0.8) translateY(20px)';
        setTimeout(() => {
          if (overlay.parentNode) {
            document.body.removeChild(overlay);
          }
          setEasterEggActive(false);
        }, 300);
      };
      
      document.getElementById('close-actions')?.addEventListener('click', closePanel);
      overlay.addEventListener('click', closePanel);
      
      // Show panel with animation
      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        panel.style.transform = 'scale(1) translateY(0)';
      });
      
    }, 100);
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
                
                {/* Quick Actions Button for Mobile */}
                <motion.button
                  onClick={openQuickActions}
                  className="w-full mt-6 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-center font-mono text-sm border-2 border-dashed border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg">⚡</span>
                    <span className="text-blue-400">QUICK ACTIONS</span>
                    <span className="text-lg">⚡</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Developer Tools �️
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