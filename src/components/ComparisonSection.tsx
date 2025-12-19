import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Cost",
    oldWay: "$200+ per month subscription",
    cosmosWay: "Free (Bring Your Own Key)",
    cosmosHighlight: true,
  },
  {
    feature: "AI Model",
    oldWay: "Proprietary, locked-in",
    cosmosWay: "Flexible (OpenAI, Anthropic, Gemini, Groq, Ollama)",
    cosmosHighlight: true,
  },
  {
    feature: "Data Privacy",
    oldWay: "Processed on external cloud servers",
    cosmosWay: "100% local, in-browser processing",
    cosmosHighlight: true,
  },
  {
    feature: "Source Code",
    oldWay: "Closed, proprietary",
    cosmosWay: "100% Free and Open Source",
    cosmosHighlight: true,
  },
  {
    feature: "Flexibility",
    oldWay: "Low",
    cosmosWay: "High",
    cosmosHighlight: true,
  },
];

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 cosmic-glow opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            A Fundamentally <span className="gradient-text">Better Approach</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Commercial tools cost $2,400+ per year. Cosmos gives you the same power for free.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-border/50">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary/50">
              <div className="p-6 font-display font-semibold">Feature</div>
              <div className="p-6 font-display font-semibold text-center border-x border-border/30">Commercial Tools</div>
              <div className="p-6 font-display font-semibold text-center">
                <span className="gradient-text">Cosmos</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-card" : "bg-secondary/20"}`}
              >
                <div className="p-6 font-medium">{row.feature}</div>
                <div className="p-6 text-center text-muted-foreground border-x border-border/30 flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive" />
                  <span>{row.oldWay}</span>
                </div>
                <div className="p-6 text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span className={row.cosmosHighlight ? "text-accent" : ""}>{row.cosmosWay}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row) => (
              <div key={row.feature} className="card-gradient rounded-xl border border-border/50 p-6">
                <h4 className="font-display font-semibold mb-4">{row.feature}</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Commercial Tools</p>
                      <p className="text-sm text-muted-foreground">{row.oldWay}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Cosmos</p>
                      <p className="text-sm text-accent">{row.cosmosWay}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
