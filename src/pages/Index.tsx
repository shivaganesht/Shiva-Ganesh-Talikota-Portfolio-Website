import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Learning } from "@/components/Learning";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Learning />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Shiva Ganesh Talikota. Built with passion for innovation.
            </div>
            <div className="text-sm text-muted-foreground">
              Made with ❤️ using React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
