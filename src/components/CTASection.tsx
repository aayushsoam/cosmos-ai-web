import { Button } from "@/components/ui/button";
import { Chrome, Github, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cosmic-glow opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Ready to Automate <span className="gradient-text">Smarter</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Join thousands of developers using Cosmos to automate their web workflows. 
            Free forever, privacy-first, and open source.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Chrome className="w-5 h-5" />
              Install for Chrome
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <Github className="w-5 h-5" />
              Star on GitHub
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">5K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Open Source</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">$0</div>
              <div className="text-sm text-muted-foreground">Forever Free</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
