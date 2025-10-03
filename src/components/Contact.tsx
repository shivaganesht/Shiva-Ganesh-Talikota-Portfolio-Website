import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageCircle,
  Users,
  Code,
  Lightbulb,
  Building
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shivaganesht@icloud.com",
    href: "mailto:shivaganesht@icloud.com",
    primary: true
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana, India"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/shivaganesht",
    color: "hover:text-blue-500"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/shivaganesht",
    color: "hover:text-purple-500"
  }
];

const collaborationAreas = [
  {
    icon: Code,
    title: "EdTech Innovation",
    description: "Building next-generation educational technology solutions"
  },
  {
    icon: Lightbulb,
    title: "AI/ML Research",
    description: "Advancing machine learning applications in education and beyond"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Growing developer communities and tech ecosystems"
  },
  {
    icon: Building,
    title: "Open Source",
    description: "Contributing to and maintaining open source projects"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative rounded-3xl mx-2 sm:mx-4 my-8">
      <div className="w-full mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Open to discussing new opportunities, collaborations, and innovative ideas. 
              Whether you share a passion for technology, education, or building impactful solutions, 
              I'd love to connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-16">
            {/* Contact Information */}
            <div className="w-full space-y-6 lg:space-y-8">
              <div className="w-full p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-white/10" style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center flex-wrap">
                  <MessageCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>Get In Touch</span>
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={contact.label} className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg backdrop-blur-sm ${
                          contact.primary 
                            ? 'bg-primary/20 border border-primary/30' 
                            : 'bg-white/5 border border-white/10'
                        }`}>
                          <IconComponent className={`h-5 w-5 ${
                            contact.primary ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              className={`text-sm sm:text-base font-medium hover:text-primary transition-colors break-all ${
                                contact.primary ? 'text-primary' : 'text-foreground'
                              }`}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-sm sm:text-base font-medium break-words">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Primary CTA */}
                <div className="mt-8 pt-6">
                  <Button
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground py-3 text-lg font-medium glow-primary transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('mailto:shivaganesh9108@gmail.com', '_blank')}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div
                      key={social.label}
                      className="w-full p-4 sm:p-6 rounded-xl backdrop-blur-xl border border-white/10 transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
                      style={{
                        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
                        backdropFilter: 'blur(15px)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                      }}
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                          <IconComponent className={`h-5 sm:h-6 w-5 sm:w-6 text-muted-foreground group-hover:text-primary transition-colors ${social.color}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                            {social.label}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground break-words">{social.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Collaboration Areas */}
            <div className="w-full">
              <div className="w-full p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-white/10" style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}>
                <h3 className="text-2xl font-bold mb-6">
                  Open to Collaborate On
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm passionate about working with like-minded individuals and teams 
                  on projects that make a meaningful impact. Here are some areas where 
                  I'm actively seeking collaboration:
                </p>

                <div className="space-y-6">
                  {collaborationAreas.map((area, index) => {
                    const IconComponent = area.icon;
                    return (
                      <div key={area.title} className="flex items-start space-x-4 p-4 rounded-lg bg-surface-elevated hover:bg-primary/5 transition-all duration-300">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{area.title}</h4>
                          <p className="text-sm text-muted-foreground">{area.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Current Focus */}
                <div className="mt-8 p-6 bg-surface rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Current Focus</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      matriXO Growth
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      AI Research
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      CSR Summit 2025
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently focused on scaling matriXO's impact in EdTech while pursuing 
                    cutting-edge AI research and organizing South India's premier CSR Summit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <Card className="p-8 glass inline-block">
              <h3 className="text-xl font-semibold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Whether it's a groundbreaking EdTech solution, AI research project, 
                or community initiative, let's turn ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-primary hover:bg-primary-glow text-primary-foreground px-6 py-2 glow-primary transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('mailto:shivaganesh9108@gmail.com?subject=Collaboration Opportunity', '_blank')}
                >
                  Start a Conversation
                </Button>
                <a
                  href="https://www.linkedin.com/in/shivaganesht/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-6 py-2 rounded-md text-center inline-block"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}