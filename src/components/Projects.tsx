import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, Brain, Blocks } from "lucide-react";

const projects = [
  {
    title: "matriXO",
    description: "AI-driven Ed-Tech platform enhancing learning experiences for college students. Built with cutting-edge ML algorithms to personalize education and bridge academia-industry gaps.",
    tech: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
    icon: Brain,
    category: "EdTech Platform",
    status: "Active Development",
    highlights: ["1000+ Students", "AI-Powered", "Personalization"]
  },
  {
    title: "Amazon ML Challenge",
    description: "Entity extraction from product images using deep learning models. Implemented advanced computer vision techniques for automated product categorization and metadata extraction.",
    tech: ["Python", "PyTorch", "OpenCV", "BERT", "AWS"],
    icon: Code,
    category: "Machine Learning",
    status: "Competition Entry",
    highlights: ["Computer Vision", "NLP", "Deep Learning"]
  },
  {
    title: "PropChain",
    description: "Blockchain-based platform for fractional real estate ownership. Democratizing property investment through smart contracts and tokenization of real estate assets.",
    tech: ["Solidity", "Web3.js", "React", "MongoDB", "Ethereum"],
    icon: Blocks,
    category: "Blockchain",
    status: "Prototype",
    highlights: ["Smart Contracts", "Tokenization", "DeFi"]
  },
  {
    title: "Psypher Bot",
    description: "Intelligent chatbot for mental health support and psychological assistance. Uses NLP and sentiment analysis to provide personalized mental health guidance.",
    tech: ["Python", "NLTK", "TensorFlow", "Flask", "PostgreSQL"],
    icon: Brain,
    category: "AI Healthcare",
    status: "Research",
    highlights: ["NLP", "Mental Health", "AI Assistant"]
  },
  {
    title: "Nutri Advice",
    description: "AI-powered nutrition advisor providing personalized dietary recommendations. Combines machine learning with nutritional science for optimal health outcomes.",
    tech: ["Python", "Scikit-learn", "React Native", "Firebase"],
    icon: Database,
    category: "Health Tech",
    status: "MVP",
    highlights: ["Health AI", "Mobile App", "Personalization"]
  }
];

const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.tech))
).sort();

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions spanning EdTech, AI/ML, blockchain, and healthcare. 
              Each project represents a step towards bridging technology and real-world impact.
            </p>
          </div>

          {/* Technology Filter */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-surface border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={project.title}
                  className="p-8 glass border-card-border hover:glow-card transition-all duration-500 group hover:scale-[1.02]"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              project.status === "Active Development"
                                ? "border-green-500 text-green-500"
                                : project.status === "Prototype"
                                ? "border-yellow-500 text-yellow-500"
                                : "border-blue-500 text-blue-500"
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-surface-elevated text-primary text-sm rounded-full border border-border"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                      Built with
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-surface text-foreground border border-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center">
            <Card className="p-8 glass border-card-border inline-block">
              <h3 className="text-xl font-semibold mb-4">Explore More Projects</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Discover additional projects, contributions, and experiments on my GitHub profile.
              </p>
              <Button
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-6 py-2 glow-primary transition-all duration-300 hover:scale-105"
              >
                <Github className="h-4 w-4 mr-2" />
                View GitHub Profile
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}