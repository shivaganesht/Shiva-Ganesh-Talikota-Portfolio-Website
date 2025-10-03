import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, GraduationCap, Award, Code, Brain, Rocket, Target, Download } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/shiva-profile.jpg";
import { LiquidBlob } from "./LiquidBlob";

const skills = [
  "Python", "JavaScript", "TypeScript", "Java", "React", "Next.js", 
  "Node.js", "TensorFlow", "PyTorch", "AWS", "Azure", "GCP", 
  "MongoDB", "PostgreSQL", "Docker", "Blockchain", "Solidity", "OpenCV"
];

const languages = [
  { name: "Telugu", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Professional" },
  { name: "French", level: "Professional" },
  { name: "Spanish", level: "Limited" }
];

const achievements = [
  "Founded and leading matriXO - Revolutionary EdTech platform",
  "CSR Summit 2025 Core Team Member",
  "374+ GitHub contributions with active open-source involvement",
  "Built innovative projects: PropChain, Psypher Bot, Amazon ML Challenge",
  "Community Leader and Tech Content Creator (@stable.speaks)",
  "GitHub Pro Member with multiple achievements and trophies"
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden rounded-3xl mx-2 sm:mx-4 my-8">
      {/* Enhanced liquid background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-15" />
        <div className="absolute inset-0 bg-gradient-glow opacity-10" />
        <LiquidBlob size="lg" position="top-right" color="secondary" className="opacity-60" />
        <LiquidBlob size="md" position="bottom-left" color="primary" className="opacity-40" />
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative inline-block mb-8">
              <motion.div
                className="w-64 h-64 mx-auto lg:mx-0 rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={profileImage}
                  alt="Shiva Ganesh Talikota - Founder of matriXO, EdTech Entrepreneur"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full blur-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
            
            {/* Download Resume Button */}
            <motion.div
              className="mt-6 mx-auto lg:mx-1 w-fit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => window.open('https://drive.google.com/file/d/1YfeCYlsVvlrvVo7WMSo8dBQ50Nb6JmNI/view?usp=sharing', '_blank')}
                className="glass-button px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl text-foreground"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Download className="h-5 w-5 mr-3" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              className="p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-white/10"
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-primary break-words">👋 Hello, This is Shiva Ganesh Talikota!</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base break-words">
                I'm a passionate entrepreneur and tech innovator dedicated to transforming education through technology. 
                As the <span className="text-primary font-medium">Founder of matriXO</span>, I'm building revolutionary EdTech solutions 
                that bridge the gap between academia and industry. I'm also part of the <span className="text-accent font-medium">CSR Summit 2025 Core Team </span> 
                and actively contribute to the developer community with <span className="text-primary font-medium">400+ GitHub contributions</span> and open-source projects.
              </p>
            </motion.div>

            <motion.div 
              className="w-full p-4 sm:p-6 rounded-xl backdrop-blur-xl border border-white/10"
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">B.Tech in Computer Science Engineering</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">CSE - AI & ML • KPRIT, Hyderabad</p>
            </motion.div>

            <motion.div 
              className="w-full p-4 sm:p-6 rounded-xl backdrop-blur-xl border border-white/10"
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {skills.slice(0, 8).map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-surface/50 text-foreground text-xs backdrop-blur-sm border border-white/5"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}