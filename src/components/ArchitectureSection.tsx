import { Brain, MousePointer, RefreshCw } from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Under The Hood
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Multi-Agent System
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two specialized AI agents collaborate in real-time to handle any web automation task.
          </p>
        </div>

        {/* Architecture Visualization */}
        <div className="max-w-5xl mx-auto">
          {/* Connection visualization */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden lg:block absolute top-1/2 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Thinker Agent */}
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-b from-border to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-background rounded-3xl border border-border p-8 h-full group-hover:border-transparent transition-colors duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-8 group-hover:border-foreground/20 transition-colors duration-500">
                    <Brain className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-2">The Thinker</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Strategist</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Plans task execution strategies, reasons about complex problems, and provides self-correction instructions.
                  </p>

                  <div className="space-y-3">
                    {["Strategy Planning", "Complex Reasoning", "Error Recovery"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feedback Loop */}
              <div className="flex items-center justify-center">
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-b from-foreground/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-32 h-32 rounded-full bg-card border border-border flex items-center justify-center">
                    <RefreshCw className="w-12 h-12 text-muted-foreground group-hover:text-foreground group-hover:animate-spin transition-colors duration-500" style={{ animationDuration: "3s" }} />
                  </div>
                  <p className="text-center mt-6 text-sm text-muted-foreground">Real-time Feedback</p>
                </div>
              </div>

              {/* Navigator Agent */}
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-b from-border to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-background rounded-3xl border border-border p-8 h-full group-hover:border-transparent transition-colors duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-8 group-hover:border-foreground/20 transition-colors duration-500">
                    <MousePointer className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-2">The Navigator</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Executor</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Executes web interactions, maintains browser state, and extracts data from the DOM.
                  </p>

                  <div className="space-y-3">
                    {["Click & Type", "State Management", "Data Extraction"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
