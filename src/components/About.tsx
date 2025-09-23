import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Award, Code, Brain, Rocket, Target } from "lucide-react";
import profileImage from "@/assets/shiva-profile.jpg";

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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about leveraging technology to solve real-world problems 
              and bridge the gap between academia and industry.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Profile Image Section */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group">
                {/* Animated background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 animate-pulse transition-all duration-700"></div>
                
                {/* Profile container */}
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                    <img 
                      src={profileImage} 
                      alt="Shiva Ganesh Talikota - AI/ML Engineer & Entrepreneur" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    {/* Tech overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10"></div>
                  </div>
                  
                  {/* Floating tech indicators */}
                  <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-mono font-semibold animate-bounce shadow-lg">
                    <Brain className="inline w-4 h-4 mr-1" />
                    AI/ML
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-surface border-2 border-primary/50 text-primary px-4 py-2 rounded-full text-sm font-mono font-semibold animate-pulse shadow-lg backdrop-blur-sm">
                    <Rocket className="inline w-4 h-4 mr-1" />
                    Founder
                  </div>
                  <div className="absolute top-1/2 -left-6 bg-accent/90 text-background px-3 py-1 rounded-full text-xs font-mono rotate-90 shadow-lg">
                    <Target className="inline w-3 h-3 mr-1" />
                    EdTech
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio Section */}
              <Card className="p-8 glass border-card-border glow-card">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <span className="text-lg font-medium">Based in Hyderabad, Telangana, India</span>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As the <span className="text-primary font-medium">Founder & CEO of matriXO</span>, 
                    I'm dedicated to revolutionizing education through AI-powered solutions. My journey 
                    began with a deep curiosity for technology and its potential to transform lives.
                  </p>
                  <p>
                    With a background in Computer Science Engineering from KPRIT, I've channeled my 
                    passion for innovation into building bridges between academic excellence and 
                    industry demands. My exposure to the biomedical field through my family has 
                    instilled a problem-solving mindset that drives every project I undertake.
                  </p>
                  <p>
                    Currently serving on the <span className="text-primary font-medium">
                    CSR Summit 2025 Core Team</span> as Director of Sponsorship Relations, 
                    I'm committed to fostering meaningful collaborations that create positive 
                    impact in the tech ecosystem.
                  </p>
                </div>
              </Card>

              {/* Education */}
              <Card className="p-6 glass border-card-border">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <span className="text-lg font-semibold">Education</span>
                </div>
                <div className="text-muted-foreground">
                  <p className="font-medium">Computer Science Engineering</p>
                  <p className="text-sm">Kommuri Pratap Reddy Institute of Technology (KPRIT)</p>
                </div>
              </Card>

              {/* Skills and Languages */}
              <div className="space-y-6">
                {/* Technical Skills */}
                <Card className="p-6 glass border-card-border">
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-primary mr-3" />
                    <span className="text-lg font-semibold">Technical Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-surface-elevated text-foreground border border-border hover:border-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Languages */}
                <Card className="p-6 glass border-card-border">
                  <h3 className="text-lg font-semibold mb-4">Languages</h3>
                  <div className="space-y-3">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{lang.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {lang.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Core Competencies */}
                <Card className="p-6 glass border-card-border">
                  <h3 className="text-lg font-semibold mb-4">Core Competencies</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• AI & ML Research</div>
                    <div>• Strategic Planning & Execution</div>
                    <div>• Innovation & Adaptability</div>
                    <div>• Community Building & Leadership</div>
                    <div>• Lean & Six Sigma Methodologies</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <Card className="p-8 glass border-card-border glow-card">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Key Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}