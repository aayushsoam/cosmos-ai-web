import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Play } from "lucide-react";

const DemoSection = () => {
  const [demoUrl, setDemoUrl] = useState("/video/Democratizing_AI_Automation.mp4");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [thumbnailUrl] = useState("/placeholder.svg");

  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return url;
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  return (
    <section id="demo" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">
            See It In Action
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Watch Demo
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See how Cosmos AI automates complex web workflows with intelligent multi-agent collaboration.
          </p>
          <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors underline"
          >
            .
          </a>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card">
            {isVideoPlaying ? (
              isYouTubeUrl(demoUrl) ? (
                <iframe
                  src={getEmbedUrl(demoUrl)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                >
                  <source src={demoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            ) : (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                {/* Thumbnail Background */}
                <img 
                  src={thumbnailUrl} 
                  alt="Video thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-muted/20" />
                
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                   linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />

                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
                  </div>
                  {!demoUrl && (
                    <p className="text-muted-foreground text-sm">
                      Demo video coming soon
                    </p>
                  )}
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            )}
          </div>
          <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-center w-full text-primary hover:text-primary/80 transition-colors underline"
          >
            .
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
