import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Cost",
    commercial: "$200+/month",
    cosmos: "Free forever",
  },
  {
    feature: "Privacy",
    commercial: "Cloud processed",
    cosmos: "100% local",
  },
  {
    feature: "AI Models",
    commercial: "Locked-in",
    cosmos: "Your choice",
  },
  {
    feature: "Source Code",
    commercial: "Proprietary",
    cosmos: "Open Source",
  },
];

const ComparisonSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">
            The Difference
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Commercial vs Cosmos
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Commercial */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/5 to-transparent rounded-3xl" />
            <div className="relative rounded-3xl border border-border p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center">
                  <X className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">Commercial Tools</h3>
                  <p className="text-sm text-muted-foreground">$2,400+/year</p>
                </div>
              </div>

              <div className="space-y-6">
                {comparisonData.map((item) => (
                  <div key={item.feature} className="flex items-center justify-between py-4 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground">{item.feature}</span>
                    <span className="text-muted-foreground">{item.commercial}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cosmos */}
          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-b from-foreground/20 to-foreground/5 rounded-3xl" />
            <div className="relative bg-card rounded-3xl border border-foreground/10 p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                  <Check className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">Cosmos AI</h3>
                  <p className="text-sm text-muted-foreground">$0/forever</p>
                </div>
              </div>

              <div className="space-y-6">
                {comparisonData.map((item) => (
                  <div key={item.feature} className="flex items-center justify-between py-4 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground">{item.feature}</span>
                    <span className="text-foreground font-medium">{item.cosmos}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
