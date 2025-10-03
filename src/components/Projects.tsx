import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, Brain, Blocks } from "lucide-react";
import { motion } from "framer-motion";
import { LiquidBlob } from "./LiquidBlob";

const projects = [
  {
    title: "matriXO",
    description: "AI-driven Ed-Tech platform enhancing learning experiences for college students. Built with cutting-edge ML algorithms to personalize education and bridge academia-industry gaps.",
    tech: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
    icon: Brain,
    category: "EdTech Platform",
    status: "Active Development",
    highlights: ["1000+ Students", "AI-Powered", "Personalization"],
    githubUrl: "https://linkedin.com/company/matrixo" // Private/Organization repo
  },
  {
    title: "Amazon ML Challenge",
    description: "Entity extraction from product images using deep learning models. Implemented advanced computer vision techniques for automated product categorization and metadata extraction.",
    tech: ["Python", "PyTorch", "OpenCV", "BERT", "AWS"],
    icon: Code,
    category: "Machine Learning",
    status: "Competition Entry",
    highlights: ["Computer Vision", "NLP", "Deep Learning"],
    githubUrl: "https://github.com/shivaganesht/Amazon-ML-Challenge-2024"
  },
  {
    title: "PropChain",
    description: "Blockchain-based platform for fractional real estate ownership. Democratizing property investment through smart contracts and tokenization of real estate assets.",
    tech: ["Solidity", "Web3.js", "React", "MongoDB", "Ethereum"],
    icon: Blocks,
    category: "Blockchain",
    status: "Prototype",
    highlights: ["Smart Contracts", "Tokenization", "DeFi"],
    githubUrl: "https://github.com/shivaganesht/PropChain"
  },
  {
    title: "Psypher Bot",
    description: "Intelligent chatbot for mental health support and psychological assistance. Uses NLP and sentiment analysis to provide personalized mental health guidance.",
    tech: ["Python", "NLTK", "TensorFlow", "Flask", "PostgreSQL"],
    icon: Brain,
    category: "AI Healthcare",
    status: "Research",
    highlights: ["NLP", "Mental Health", "AI Assistant"],
    githubUrl: "https://github.com/shivaganesht/Psypher-An-Emotional-Intelligent-Bot"
  },
  {
    title: "Nutri Advice",
    description: "AI-powered nutrition advisor providing personalized dietary recommendations. Combines machine learning with nutritional science for optimal health outcomes.",
    tech: ["Python", "Scikit-learn", "React Native", "Firebase"],
    icon: Database,
    category: "Health Tech",
    status: "MVP",
    highlights: ["Health AI", "Mobile App", "Personalization"],
    githubUrl: "https://github.com/shivaganesht/Nutri-Advice"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden rounded-3xl mx-4 my-8">
      {/* Enhanced liquid background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-glow opacity-12" />
        <LiquidBlob size="lg" position="top-left" color="accent" className="opacity-50" />
        <LiquidBlob size="md" position="bottom-right" color="primary" className="opacity-40" />
        <LiquidBlob size="sm" position="center" color="secondary" className="opacity-35" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
            <Card className="h-full group relative overflow-hidden" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              {/* Liquid glass shimmer effect */}
              <div className="absolute inset-0 bg-gradient-animated opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl glass">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="glass text-xs">
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className="glass-button w-full text-xs"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      View on GitHub
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}