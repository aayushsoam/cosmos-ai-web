import { Brain, MousePointer, Repeat } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "The Thinker Agent",
    subtitle: "The Strategist",
    description: "Plans task execution strategies, reasons about complex problems and edge cases, and provides self-correction and error recovery instructions.",
    features: ["Strategy & Goals", "Complex Reasoning", "Error Recovery"],
  },
  {
    icon: MousePointer,
    title: "The Navigator Agent",
    subtitle: "The Executor",
    description: "Executes direct web page interactions including clicks, typing, and scrolling. Maintains browser state and extracts data from the DOM.",
    features: ["Page Interactions", "State Management", "Data Extraction"],
  },
  {
    icon: Repeat,
    title: "Feedback Loop",
    subtitle: "Continuous Improvement",
    description: "The agents communicate in real-time, sharing execution results and state feedback to adapt and optimize the automation process.",
    features: ["Real-time Updates", "Adaptive Planning", "Self-Correction"],
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            The Core Innovation: <span className="gradient-text">Multi-Agent System</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two specialized AI agents collaborate to handle any web automation task with precision and intelligence.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30 -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
              >
                {/* Card */}
                <div className="card-gradient rounded-2xl border border-border/50 p-8 h-full hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>

                  <div className="pt-4">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="font-display text-2xl font-bold mb-1">{step.title}</h3>
                    <p className="text-accent text-sm mb-4">{step.subtitle}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground border border-border/50"
                        >
                          {feature}
                        </span>
                      ))}
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

export default HowItWorksSection;
