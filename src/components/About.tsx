import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Award, Code, Brain, Rocket, Target } from "lucide-react";
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
    <section id="about" className="py-24 px-6 relative overflow-hidden rounded-3xl mx-4 my-8">
      {/* Enhanced liquid background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-15" />
        <div className="absolute inset-0 bg-gradient-glow opacity-10" />
        <LiquidBlob size="lg" position="top-right" color="secondary" className="opacity-60" />
        <LiquidBlob size="md" position="bottom-left" color="primary" className="opacity-40" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
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
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">👋 Hello, This is Shiva Ganesh Talikota!</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate entrepreneur and tech innovator dedicated to transforming education through technology. 
                As the <span className="text-primary font-medium">Founder of matriXO</span>, I'm building revolutionary EdTech solutions 
                that bridge the gap between academia and industry. I'm also part of the <span className="text-accent font-medium">CSR Summit 2025 Core Team </span> 
                and actively contribute to the developer community with <span className="text-primary font-medium">400+ GitHub contributions</span> and open-source projects.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="h-5 w-5 text-primary mr-3" />
                <span className="font-medium">Computer Science Engineering</span>
              </div>
              <p className="text-sm text-muted-foreground">KPRIT • Research in AI/ML</p>
            </motion.div>

            <motion.div 
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 text-primary mr-3" />
                <span className="font-medium">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 8).map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-surface/50 text-foreground text-xs"
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