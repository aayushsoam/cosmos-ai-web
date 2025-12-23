import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Play, ArrowRight, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import akkLogo from "@/assets/akk-logo.svg";

const HeroSection = () => {
  const [downloadUrl, setDownloadUrl] = useState("/downloads/cosmos-ai-extension-2025-12-23.zip");

  useEffect(() => {
    const fetchConfig = async () => {
      const { data } = await supabase
        .from("extension_config")
        .select("value")
        .eq("key", "download_url")
        .maybeSingle();
      
      if (data?.value) {
        setDownloadUrl(data.value);
      }
    };
    fetchConfig();
  }, []);

  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-foreground/3 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-foreground/2 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-10 animate-slide-up">
            <Sparkles className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium tracking-wide">Open Source • Free Forever • Privacy First</span>
          </div>

          {/* Logo Animation */}
          <div className="relative w-24 h-24 mx-auto mb-10 animate-slide-up delay-100">
            <img 
              src={akkLogo} 
              alt="Cosmos AI" 
              className="w-full h-full animate-float"
            />
            <div className="absolute inset-0 bg-foreground/10 blur-2xl rounded-full" />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 animate-slide-up delay-200">
            Cosmos AI:
            <br />
            <span className="text-muted-foreground">Intelligent Web Automation</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up delay-300">
            Cosmos AI is the leading intelligent web automation platform using multi-agent AI technology to automate complex workflows. 
            Streamline your business processes with advanced automation running entirely in your browser. No cloud. No subscriptions. Just power.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-slide-up delay-400">
            <Button variant="hero" size="xl" onClick={handleDownload} className="w-full sm:w-auto group">
              <Download className="w-5 h-5" />
              Download Extension
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToDemo} className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up delay-500">
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold mb-1">$0</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Forever</div>
            </div>
            <div className="text-center border-x border-border/50 px-4">
              <div className="font-display text-4xl md:text-5xl font-bold mb-1">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Private</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold mb-1">∞</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Tasks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
