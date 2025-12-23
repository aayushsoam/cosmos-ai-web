import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowUpRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const CTASection = () => {
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

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/3 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Start Automating
            <br />
            <span className="text-muted-foreground">Today</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Join thousands using Cosmos to automate their web workflows. 
            Free. Private. Powerful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" onClick={handleDownload} className="w-full sm:w-auto group">
              <Download className="w-5 h-5" />
              Download Extension
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
