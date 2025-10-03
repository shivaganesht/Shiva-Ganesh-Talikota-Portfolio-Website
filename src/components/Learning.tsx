import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Target, Lightbulb, TrendingUp, Zap, Award } from "lucide-react";

const currentLearning = [
  {
    title: "Agentic AI Systems",
    description: "Exploring autonomous AI agents that can plan, execute, and adapt to complex multi-step tasks.",
    progress: 75,
    icon: Zap,
    category: "AI/ML"
  },
  {
    title: "Advanced NLP & Transformers",
    description: "Deep diving into transformer architectures, attention mechanisms, and large language models.",
    progress: 60,
    icon: Book,
    category: "Deep Learning"
  },
  {
    title: "Scaling Startup Operations",
    description: "Learning lean methodologies, growth strategies, and operational excellence for matriXO expansion.",
    progress: 45,
    icon: TrendingUp,
    category: "Business"
  },
  {
    title: "MLOps & Production AI",
    description: "Mastering deployment, monitoring, and maintenance of ML models in production environments.",
    progress: 55,
    icon: Target,
    category: "Engineering"
  }
];

const researchAreas = [
  {
    title: "Educational AI Personalization",
    description: "Developing adaptive learning algorithms that personalize educational content based on individual learning patterns and cognitive models.",
    icon: Lightbulb,
    status: "Active Research"
  },
  {
    title: "Computer Vision for EdTech",
    description: "Investigating applications of computer vision in educational settings, including automated assessment and learning analytics.",
    icon: Target,
    status: "Experimental"
  },
  {
    title: "Conversational AI for Learning",
    description: "Building intelligent tutoring systems that can engage in natural dialogue to enhance learning experiences.",
    icon: Book,
    status: "Prototype Phase"
  }
];

const certifications = [
  { name: "C Programming", issuer: "Academic", year: "2024" },
  { name: "Cybersecurity Awareness", issuer: "Industry", year: "2024" },
  { name: "Introduction to MongoDB", issuer: "MongoDB University", year: "2024" },
  { name: "Google Cloud Arcade Program", issuer: "Google Cloud", year: "2024" },
  { name: "Introduction to Graphic Design", issuer: "Coursera", year: "2023" }
];

export function Learning() {
  return (
    <section id="learning" className="py-24 px-4 sm:px-6 relative rounded-3xl mx-2 sm:mx-4 my-8">
      <div className="w-full mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Continuous Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Staying at the forefront of technology through continuous learning, research, 
              and hands-on experimentation with emerging technologies.
            </p>
          </div>

          {/* Current Learning */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <TrendingUp className="h-6 w-6 text-primary mr-3" />
              What I'm Learning Now
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {currentLearning.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="w-full p-4 sm:p-6 hover:shadow-lg transition-all duration-500 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10" style={{
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}>
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold">{item.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        
                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-primary font-medium">{item.progress}%</span>
                          </div>
                          <div className="w-full bg-surface-elevated rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-500"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Research Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Lightbulb className="h-6 w-6 text-primary mr-3" />
              Research & Exploration
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {researchAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={area.title} className="w-full p-4 sm:p-6 hover:shadow-lg transition-all duration-500 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10" style={{
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}>
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="p-2 sm:p-3 rounded-lg backdrop-blur-sm border border-white/10" style={{
                        background: 'rgba(255, 255, 255, 0.05)'
                      }}>
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                          <h4 className="text-lg sm:text-xl font-semibold break-words">{area.title}</h4>
                          <Badge
                            variant="secondary"
                            className={`text-xs px-2 py-1 backdrop-blur-sm border border-white/10 flex-shrink-0 ${
                              area.status === "Active Research"
                                ? "bg-green-500/20 text-green-500 border-green-500/20"
                                : area.status === "Experimental"
                                ? "bg-yellow-500/20 text-yellow-500 border-yellow-500/20"
                                : "bg-blue-500/20 text-blue-500 border-blue-500/20"
                            }`}
                          >
                            {area.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base break-words">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="w-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/10" style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={`${cert.name}-${index}`}
                  className="p-4 bg-surface-elevated rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <Badge variant="secondary" className="text-xs">
                    {cert.year}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Learning Philosophy */}
            <div className="mt-8 p-6 bg-surface rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-primary">Learning Philosophy</h4>
              <p className="text-muted-foreground leading-relaxed">
                "I believe in learning by doing and teaching what you learn. Technology evolves rapidly, 
                and staying curious, experimenting with new tools, and contributing to the community 
                are essential for meaningful growth. Every project is an opportunity to learn something new."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}