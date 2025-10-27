import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { ExternalLink, MapPin, Calendar, Users, Trophy, Mic, Camera, Award, Briefcase, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LiquidBlob } from "../components/LiquidBlob";

// Same data as in Experience component but expanded
const experiences = [
  {
    id: 1,
    title: "Speaker at T-Hub Hyderabad",
    description: "Delivered insights on EdTech innovation and entrepreneurship at one of India's leading startup incubators. Shared experiences about building matriXO and the future of educational technology.",
    date: "2024",
    type: "Speaking",
    image: "/api/placeholder/400/300",
    location: "T-Hub, Hyderabad",
    impact: "Inspired 200+ entrepreneurs and students",
    links: [
      { label: "LinkedIn Post", url: "https://www.linkedin.com/in/shivaganesht" },
      { label: "Event Recording", url: "#" }
    ],
    tags: ["Speaking", "EdTech", "Innovation", "Entrepreneurship"],
    fullDescription: "Presented at T-Hub's flagship entrepreneurship event, focusing on the intersection of AI/ML and educational technology. The session covered practical insights from founding matriXO, challenges in the EdTech space, and future opportunities for tech-driven education solutions."
  },
  // Add more detailed experiences here...
];

const allGalleryImages = [
  {
    id: 1,
    url: "/api/placeholder/400/600",
    caption: "Speaking at T-Hub Hyderabad",
    event: "T-Hub Speaker Session",
    date: "2024",
    category: "Speaking"
  },
  {
    id: 2,
    url: "/api/placeholder/600/400",
    caption: "CSR Summit 2025 Core Team Meeting",
    event: "CSR Summit Organization",
    date: "2025",
    category: "Community"
  },
  {
    id: 3,
    url: "/api/placeholder/400/600",
    caption: "matriXO Founding Moment",
    event: "Entrepreneurship Journey",
    date: "2024",
    category: "Leadership"
  },
  {
    id: 4,
    url: "/api/placeholder/600/400",
    caption: "Community Tech Workshop",
    event: "Tech Community Events",
    date: "2024",
    category: "Community"
  },
  {
    id: 5,
    url: "/api/placeholder/400/600",
    caption: "Innovation Workshop at College",
    event: "Educational Initiatives",
    date: "2024",
    category: "Education"
  },
  {
    id: 6,
    url: "/api/placeholder/600/400",
    caption: "Content Creation Setup",
    event: "@stable.speaks Journey",
    date: "2024",
    category: "Content"
  },
  {
    id: 7,
    url: "/api/placeholder/400/600",
    caption: "GitHub Contributions Milestone",
    event: "Open Source Journey",
    date: "2024",
    category: "Technical"
  },
  {
    id: 8,
    url: "/api/placeholder/600/400",
    caption: "Team Building Session",
    event: "Leadership Development",
    date: "2024",
    category: "Leadership"
  },
  {
    id: 9,
    url: "/api/placeholder/400600",
    caption: "AI/ML Project Presentation",
    event: "Academic Excellence",
    date: "2024",
    category: "Education"
  },
  {
    id: 10,
    url: "/api/placeholder/600/400",
    caption: "Networking Event",
    event: "Professional Growth",
    date: "2024",
    category: "Community"
  },
  {
    id: 11,
    url: "/api/placeholder/400/600",
    caption: "Startup Pitch Session",
    event: "Entrepreneurship",
    date: "2024",
    category: "Leadership"
  },
  {
    id: 12,
    url: "/api/placeholder/600/400",
    caption: "Tech Conference",
    event: "Industry Engagement",
    date: "2024",
    category: "Speaking"
  }
];

const categories = ["All", "Speaking", "Leadership", "Community", "Technical", "Content", "Education"];

const ExperiencePage = () => {
  const [selectedImage, setSelectedImage] = useState<typeof allGalleryImages[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openImageModal = (image: typeof allGalleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const filteredImages = selectedCategory === "All" 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.category === selectedCategory);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-15" />
          <div className="absolute inset-0 bg-gradient-glow opacity-10" />
          <LiquidBlob size="lg" position="top-left" color="primary" className="opacity-40" />
          <LiquidBlob size="lg" position="bottom-right" color="accent" className="opacity-30" />
          <LiquidBlob size="md" position="center" color="secondary" className="opacity-20" />
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <Button
              onClick={goBack}
              variant="outline"
              className="mb-8 glass-button"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Experience & Impact
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A comprehensive look at my journey through innovation, leadership, and community building
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`glass-button transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-primary/20 border-primary/40 text-primary" 
                    : "hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Photo Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${selectedCategory}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm mb-1">{image.caption}</p>
                  <p className="text-white/80 text-xs mb-2">{image.event}</p>
                  <Badge className="bg-white/20 text-white text-xs">{image.category}</Badge>
                </div>
                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center p-6 rounded-2xl backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
              <p className="text-muted-foreground text-sm">Speaking Events</p>
            </div>
            <div className="text-center p-6 rounded-2xl backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold text-primary mb-2">374+</h3>
              <p className="text-muted-foreground text-sm">GitHub Contributions</p>
            </div>
            <div className="text-center p-6 rounded-2xl backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold text-primary mb-2">1000+</h3>
              <p className="text-muted-foreground text-sm">People Impacted</p>
            </div>
            <div className="text-center p-6 rounded-2xl backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold text-primary mb-2">3+</h3>
              <p className="text-muted-foreground text-sm">Organizations</p>
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
                className="relative max-w-5xl max-h-[90vh] w-full"
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
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                
                {/* Image info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white font-semibold text-xl mb-2">{selectedImage.caption}</h4>
                      <p className="text-white/80 text-sm mb-2">{selectedImage.event}</p>
                      <div className="flex items-center gap-4 text-white/70 text-sm">
                        <span>{selectedImage.date}</span>
                        <Badge className="bg-white/20 text-white">{selectedImage.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default ExperiencePage;