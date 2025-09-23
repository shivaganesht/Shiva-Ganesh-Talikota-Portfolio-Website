import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting with typing animation */}
          <div className="mb-6 fade-in">
            <span className="text-primary font-mono text-lg">Hello, I'm</span>
          </div>

          {/* Main title */}
          <h1 className="hero-title mb-6 slide-up">
            Shiva Ganesh Talikota
          </h1>

          {/* Subtitle with role */}
          <div className="hero-subtitle mb-8 slide-up delay-200">
            <span className="text-foreground">Founder & CEO @ </span>
            <span className="text-primary font-semibold">matriXO</span>
            <span className="text-muted-foreground"> | EdTech • AI/ML • Innovator</span>
          </div>

          {/* Tagline */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto slide-up delay-300">
            Building AI-powered solutions and communities to bridge the gap between 
            <span className="text-primary font-medium"> academia and industry</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 bounce-in delay-500">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg font-medium glow-primary transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 bounce-in delay-700">
            <a
              href="https://github.com/shivaganesh9108"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-surface-elevated border border-border transition-all duration-300 hover:scale-110 hover:glow-card group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivaganesht"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-surface-elevated border border-border transition-all duration-300 hover:scale-110 hover:glow-card group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:shivaganesh9108@gmail.com"
              className="p-3 rounded-full bg-surface hover:bg-surface-elevated border border-border transition-all duration-300 hover:scale-110 hover:glow-card group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="mx-auto flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 bounce-in delay-1000"
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}