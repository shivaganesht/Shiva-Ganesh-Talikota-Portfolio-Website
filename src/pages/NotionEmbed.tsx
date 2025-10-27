import { useEffect, useState } from "react";
import { ArrowLeft, Maximize2, Minimize2, X, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NotionEmbed = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  useEffect(() => {
    // Check if user has seen the tour before
    const hasSeenTour = localStorage.getItem('notion-tour-completed');
    if (!hasSeenTour) {
      // Show tour after a short delay for better UX
      setTimeout(() => {
        setShowTour(true);
      }, 1000);
    }
  }, []);

  const completeTour = () => {
    setShowTour(false);
    localStorage.setItem('notion-tour-completed', 'true');
  };

  const nextStep = () => {
    if (tourStep < tourSteps.length - 1) {
      setTourStep(tourStep + 1);
    } else {
      completeTour();
    }
  };

  const skipTour = () => {
    completeTour();
  };

  const tourSteps = [
    {
      title: "Welcome to Academic Planner! 📚",
      description: "This is a comprehensive Notion template designed to help you organize your academic life. Let me show you how to get started!",
      position: "center"
    },
    {
      title: "Duplicate This Template 📋",
      description: "Look for the 'Duplicate' button in the top-right corner of the Notion page. Click it to add this template to your own Notion workspace!",
      position: "top-right",
      highlight: "duplicate-button"
    },
    {
      title: "Customize Your Planner ✏️",
      description: "Once duplicated, you can edit and customize everything to fit your needs - add your courses, assignments, and schedule!",
      position: "center"
    },
    {
      title: "Full Screen Mode 🖥️",
      description: "Use the fullscreen button in the header for an immersive experience while planning your academic journey.",
      position: "top-right",
      highlight: "fullscreen-button"
    }
  ];

  const goBack = () => {
    window.history.back();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Header Controls */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
          isFullscreen ? 'opacity-0 hover:opacity-100' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={goBack}
              variant="outline"
              size="sm"
              className="glass-button"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            <h1 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Shiva's Notion Space
            </h1>

            <Button
              onClick={toggleFullscreen}
              variant="outline"
              size="sm"
              className="glass-button"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="h-4 w-4 mr-2" />
                  Exit Fullscreen
                </>
              ) : (
                <>
                  <Maximize2 className="h-4 w-4 mr-2" />
                  Fullscreen
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Notion Embed Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${isFullscreen ? 'pt-0' : 'pt-20'} h-screen`}
      >
        <div className="w-full h-full relative">
          {/* Loading Overlay */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-5 pointer-events-none" />
          
          {/* Notion iFrame */}
          <iframe
            src="https://shivaganesht.notion.site/ebd/1f4eb2243857802a8b2bf053ed4e480b"
            className="w-full h-full border-0"
            title="Shiva Ganesh Talikota - Notion Space"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              colorScheme: 'dark',
              backgroundColor: 'transparent'
            }}
          />
        </div>
      </motion.div>

      {/* Corner Decoration */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none blur-3xl" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none blur-3xl" />

      {/* Interactive Tour Overlay */}
      <AnimatePresence>
        {showTour && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
            />

            {/* Tour Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed z-[9999] ${
                tourSteps[tourStep].position === 'center' 
                  ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                  : tourSteps[tourStep].position === 'top-right'
                  ? 'top-24 right-8'
                  : 'bottom-8 left-1/2 -translate-x-1/2'
              } w-full max-w-md`}
            >
              <div 
                className="p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(30px)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={skipTour}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5 text-white/70" />
                </button>

                {/* Step Indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {tourSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === tourStep 
                          ? 'w-8 bg-primary' 
                          : index < tourStep
                          ? 'w-6 bg-primary/50'
                          : 'w-4 bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {tourSteps[tourStep].title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {tourSteps[tourStep].description}
                  </p>
                </div>

                {/* Special Instructions for Duplicate Step */}
                {tourStep === 1 && (
                  <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Copy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">
                          How to Duplicate:
                        </p>
                        <ol className="text-sm text-white/70 space-y-1 list-decimal list-inside">
                          <li>Look for "Duplicate" button in Notion's top bar</li>
                          <li>Click it to copy template to your workspace</li>
                          <li>Start customizing your academic planner!</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between gap-4">
                  <Button
                    onClick={skipTour}
                    variant="ghost"
                    className="text-white/60 hover:text-white hover:bg-white/10"
                  >
                    Skip Tour
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/50">
                      {tourStep + 1} / {tourSteps.length}
                    </span>
                    <Button
                      onClick={nextStep}
                      className="bg-primary hover:bg-primary/90 text-white px-6"
                    >
                      {tourStep === tourSteps.length - 1 ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Got it!
                        </>
                      ) : (
                        'Next'
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Arrow Pointer for specific highlights */}
              {tourSteps[tourStep].highlight === 'duplicate-button' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 right-12"
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
                    <path
                      d="M20 5 L20 30 M20 30 L15 25 M20 30 L25 25"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute -top-8 right-0 whitespace-nowrap text-primary font-semibold text-sm animate-pulse">
                    Click here! ☝️
                  </div>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotionEmbed;
