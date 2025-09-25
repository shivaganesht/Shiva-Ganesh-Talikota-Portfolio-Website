import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Award, Code, Brain, Rocket, Target } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/shiva-profile.jpg";
import { LiquidBlob } from "./LiquidBlob";

const skills = [
  "Python", "TensorFlow", "PyTorch", "JavaScript", "TypeScript", 
  "React", "Node.js", "Next.js", "AWS", "Azure", "MongoDB", 
  "Data Structures", "Machine Learning", "Deep Learning"
];

const languages = [
  { name: "Telugu", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Professional" },
  { name: "French", level: "Professional" },
  { name: "Spanish", level: "Limited" }
];

const achievements = [
  "Successfully launched matriXO, an AI-driven Ed-Tech platform",
  "AI & ML researcher contributing to groundbreaking projects",
  "Spearheaded initiatives at TurboHire resulting in 20% efficiency increase",
  "Over 1800 contributions to Google Crowdsource for ML model enhancement"
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
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
                className="w-64 h-64 mx-auto lg:mx-0 rounded-3xl overflow-hidden glass-card"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={profileImage}
                  alt="Shiva Ganesh Talikota - Founder & CEO of matriXO"
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
              className="glass-card p-8 rounded-2xl"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">👋 Hello from Hyderabad!</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate technologist and entrepreneur dedicated to transforming education through AI and machine learning. 
                As the Founder & CEO of <span className="text-primary font-medium">matriXO</span>, I'm building innovative solutions 
                that bridge the gap between academic learning and industry requirements.
              </p>
            </motion.div>

            <motion.div 
              className="glass-card p-6 rounded-xl"
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
              className="glass-card p-6 rounded-xl"
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
                    className="bg-surface/50 text-foreground border border-border/50 text-xs"
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