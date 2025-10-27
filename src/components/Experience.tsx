import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar, Users, Trophy, Mic, Camera, Award, Briefcase, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LiquidBlob } from "./LiquidBlob";

const experiences = [
  {
    id: 1,
    title: "Speaker at T-Hub Hyderabad",
    description: "Delivered insights on EdTech innovation and entrepreneurship at one of India's leading startup incubators",
    date: "2024",
    type: "Speaking",
    image: "/api/placeholder/400/300", // Replace with actual image URL
    location: "T-Hub, Hyderabad",
    impact: "Inspired 200+ entrepreneurs and students",
    links: [
      { label: "LinkedIn Post", url: "https://www.linkedin.com/in/shivaganesht" },
      { label: "Event Details", url: "#" }
    ],
    tags: ["Speaking", "EdTech", "Innovation", "Entrepreneurship"]
  },
  {
    id: 2,
    title: "Founder & CEO at matriXO",
    description: "Building revolutionary EdTech solutions that bridge the gap between academia and industry",
    date: "2024 - Present",
    type: "Leadership",
    image: "/api/placeholder/400/300", // Replace with matriXO logo/photo
    location: "Hyderabad, India",
    impact: "Transforming education for thousands of students",
    links: [
      { label: "Company Profile", url: "#" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/shivaganesht" }
    ],
    tags: ["Leadership", "EdTech", "Startup", "Innovation"]
  },
  {
    id: 3,
    title: "CSR Summit 2025 Core Team",
    description: "Part of the organizing committee for India's premier Corporate Social Responsibility summit",
    date: "2025",
    type: "Community",
    image: "/api/placeholder/400/300", // Replace with CSR Summit photo
    location: "India",
    impact: "Organizing event for 1000+ CSR professionals",
    links: [
      { label: "Summit Website", url: "#" },
      { label: "Instagram", url: "https://instagram.com/stable.speaks" }
    ],
    tags: ["CSR", "Community", "Organization", "Leadership"]
  },
  {
    id: 4,
    title: "GitHub Open Source Contributor",
    description: "Active contributor to open-source projects with 374+ contributions and multiple repositories",
    date: "2023 - Present",
    type: "Technical",
    image: "/api/placeholder/400/300", // Replace with GitHub stats visualization
    location: "Global",
    impact: "374+ contributions, GitHub Pro member",
    links: [
      { label: "GitHub Profile", url: "https://github.com/shivaganesht" },
      { label: "Projects", url: "https://github.com/shivaganesht" }
    ],
    tags: ["Open Source", "Development", "Community", "Technical"]
  },
  {
    id: 5,
    title: "Content Creator @stable.speaks",
    description: "Sharing insights on technology, entrepreneurship, and innovation through social media",
    date: "2023 - Present",
    type: "Content",
    image: "/api/placeholder/400/300", // Replace with content creation photo
    location: "Digital",
    impact: "Growing community of tech enthusiasts",
    links: [
      { label: "Instagram", url: "https://instagram.com/stable.speaks" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/shivaganesht" }
    ],
    tags: ["Content Creation", "Social Media", "Tech", "Community"]
  },
  {
    id: 6,
    title: "B.Tech in Computer Science Engineering",
    description: "Specializing in AI & ML at KPRIT, Hyderabad with focus on practical applications",
    date: "2022 - 2026",
    type: "Education",
    image: "/api/placeholder/400/300", // Replace with college/graduation photo
    location: "KPRIT, Hyderabad",
    impact: "Academic excellence in AI/ML domain",
    links: [
      { label: "University Profile", url: "#" }
    ],
    tags: ["Education", "AI/ML", "Computer Science", "Academic"]
  }
];

const galleryImages = [
  {
    id: 1,
    url: "/api/placeholder/300/400", // Replace with actual photo
    caption: "Speaking at T-Hub Hyderabad",
    event: "T-Hub Speaker Session"
  },
  {
    id: 2,
    url: "/api/placeholder/400/300", // Replace with actual photo
    caption: "CSR Summit 2025 Core Team",
    event: "CSR Summit Organization"
  },
  {
    id: 3,
    url: "/api/placeholder/300/400", // Replace with actual photo
    caption: "matriXO Founder Moment",
    event: "Entrepreneurship Journey"
  },
  {
    id: 4,
    url: "/api/placeholder/400/300", // Replace with actual photo
    caption: "Community Building",
    event: "Tech Community Events"
  },
  {
    id: 5,
    url: "/api/placeholder/300/400", // Replace with actual photo
    caption: "Innovation Workshop",
    event: "Educational Initiatives"
  },
  {
    id: 6,
    url: "/api/placeholder/400/300", // Replace with actual photo
    caption: "Content Creation",
    event: "@stable.speaks Journey"
  }
];

const typeIcons = {
  Speaking: Mic,
  Leadership: Briefcase,
  Community: Users,
  Technical: Award,
  Content: Camera,
  Education: Trophy
};

const typeColors = {
  Speaking: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Leadership: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Community: "bg-green-500/10 text-green-400 border-green-500/20",
  Technical: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Content: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Education: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
};

export function Experience() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const openImageModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative overflow-hidden rounded-3xl mx-2 sm:mx-4 my-8">
      {/* Enhanced liquid background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-15" />
        <div className="absolute inset-0 bg-gradient-glow opacity-10" />
        <LiquidBlob size="lg" position="top-left" color="primary" className="opacity-40" />
        <LiquidBlob size="lg" position="bottom-right" color="accent" className="opacity-30" />
        <LiquidBlob size="md" position="center" color="secondary" className="opacity-20" />
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Experience & Impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A journey of innovation, leadership, and community building across technology and entrepreneurship
            </p>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid gap-8 mb-20">
          {experiences.map((experience, index) => {
            const IconComponent = typeIcons[experience.type as keyof typeof typeIcons];
            const colorClass = typeColors[experience.type as keyof typeof typeColors];
            
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex lg:items-center gap-8`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    className="p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-white/10"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg border ${colorClass}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.date}</span>
                            <MapPin className="h-4 w-4 ml-2" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{experience.impact}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-surface/50 text-foreground text-xs backdrop-blur-sm border border-white/5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.links.map((link) => (
                        <Button
                          key={link.label}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, '_blank')}
                          className="glass-button text-xs"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Image */}
                <div className="flex-1 max-w-md">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">{experience.title}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Photo Gallery - Limited Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              Moments & Memories
            </h3>
            <p className="text-muted-foreground">
              Capturing the journey of innovation, leadership, and community impact
            </p>
          </div>
          
          {/* Show only first 6 images (2 rows of 3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {galleryImages.slice(0, 6).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm mb-1">{image.caption}</p>
                  <p className="text-white/80 text-xs">{image.event}</p>
                </div>
                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* See All Button */}
          <div className="text-center">
            <Button
              onClick={() => window.location.href = '/experience'}
              className="glass-button px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Camera className="h-5 w-5 mr-2" />
              See All Moments
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-full object-contain rounded-2xl"
              />
              
              {/* Close button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-white font-semibold text-lg mb-1">{selectedImage.caption}</h4>
                <p className="text-white/80 text-sm">{selectedImage.event}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}