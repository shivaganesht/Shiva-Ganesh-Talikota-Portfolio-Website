import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    
    setTheme(initialTheme);
    root.classList.remove('light', 'dark');
    root.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const root = window.document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-full bg-surface hover:bg-surface-elevated border border-border transition-all duration-300 hover:scale-105 hover:glow-card"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}