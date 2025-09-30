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
    <section id="learning" className="py-20 relative rounded-3xl mx-4 my-8">
      <div className="container mx-auto px-6">
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
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentLearning.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={item.title} className="p-6 glass-card hover:shadow-lg transition-all duration-500 rounded-3xl backdrop-blur-60">
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
                  </Card>
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
            
            <div className="space-y-6">
              {researchAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card key={area.title} className="p-6 glass-card hover:shadow-lg transition-all duration-500 rounded-3xl backdrop-blur-60">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-semibold">{area.title}</h4>
                          <Badge
                            variant="secondary"
                            className={`${
                              area.status === "Active Research"
                                ? "bg-green-500/20 text-green-500"
                                : area.status === "Experimental"
                                ? "bg-yellow-500/20 text-yellow-500"
                                : "bg-blue-500/20 text-blue-500"
                            }`}
                          >
                            {area.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <Card className="p-8 glass-card rounded-3xl backdrop-blur-60">
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
          </Card>
        </div>
      </div>
    </section>
  );
}