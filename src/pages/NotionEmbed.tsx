import { useEffect, useState } from "react";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotionEmbed = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

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
    </div>
  );
};

export default NotionEmbed;
