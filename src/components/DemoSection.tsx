import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Play } from "lucide-react";

const DemoSection = () => {
  const [demoUrl, setDemoUrl] = useState<string>("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [thumbnailUrl] = useState("/placeholder.svg");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        // Prefer an explicit demo URL from env; otherwise default to the YouTube demo
        const envDemoUrl = import.meta.env.VITE_DEMO_VIDEO_URL as string | undefined;
        if (envDemoUrl) {
          setDemoUrl(envDemoUrl);
        } else {
          // Force the YouTube demo so it's always visible in the demo section
          setDemoUrl("https://youtu.be/wCqLe2R4WeY");
        }
      } catch (error) {
        console.error('Error fetching video URL:', error);
        setDemoUrl("/video/1223.mp4");
      } finally {
        setLoading(false);
      }
    };
    fetchVideoUrl();
  }, []);

  // Initialize YouTube player after demoUrl changes (so the container div exists)
  useEffect(() => {
    if (!demoUrl || !isYouTubeUrl(demoUrl)) return;

    const videoId = getYouTubeId(demoUrl);
    if (!videoId) return;

    const createPlayer = () => {
      try {
        // @ts-ignore
        playerRef.current = new window.YT.Player('youtube-demo', {
          height: '100%',
          width: '100%',
          videoId,
          playerVars: {
            autoplay: 1,
            controls: 1,
            rel: 0,
            playsinline: 1,
          },
          events: {
            onReady: (event: any) => {
              try { event.target.setPlaybackQuality('hd1080'); } catch {}
              try { event.target.playVideo(); } catch {}
            },
            onStateChange: (event: any) => {
              // When playing, re-apply 1080p if it drops
              // @ts-ignore
              if (event.data === window.YT?.PlayerState?.PLAYING) {
                try { event.target.setPlaybackQuality('hd1080'); } catch {}
              }
            }
          }
        });
      } catch (err) {
        console.error('YouTube player init error', err);
      }
    };

    if ((window as any).YT && (window as any).YT.Player) {
      createPlayer();
    } else if (!apiLoadedRef.current) {
      apiLoadedRef.current = true;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }

      // @ts-ignore assign global callback
      (window as any).onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    }

    return () => {
      try {
        if (playerRef.current && playerRef.current.destroy) playerRef.current.destroy();
      } catch {}
      try { (window as any).onYouTubeIframeAPIReady = undefined; } catch {}
    };
  }, [demoUrl]);

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

  // Extract plain YouTube video id
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    if (url.includes("youtube.com/watch")) return url.split("v=")[1]?.split("&")[0] || null;
    if (url.includes("youtu.be/")) return url.split("youtu.be/")[1]?.split("?")[0] || null;
    return null;
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const playerRef = useRef<any>(null);
  const apiLoadedRef = useRef(false);

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
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading video...</p>
                </div>
              </div>
            ) : isVideoPlaying ? (
              isYouTubeUrl(demoUrl) ? (
                // Render a container for the YouTube IFrame API player so we can force 1080p
                <div id="youtube-demo" className="w-full h-full" />
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
