import { Shield, Zap, Lock, Cpu, Globe, Code2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "100% local processing. Your data never leaves your browser.",
  },
  {
    icon: Zap,
    title: "Multi-Agent AI",
    description: "Thinker & Navigator agents collaborate on complex tasks.",
  },
  {
    icon: Lock,
    title: "Bring Your Key",
    description: "Use OpenAI, Anthropic, Gemini, Groq, or local Ollama.",
  },
  {
    icon: Cpu,
    title: "Zero Cost",
    description: "No subscriptions. Only pay for the AI API you choose.",
  },
  {
    icon: Globe,
    title: "Universal",
    description: "Works on any website. Automate anything you can click.",
  },
  {
    icon: Code2,
    title: "Open Source",
    description: "Fully transparent. Inspect, modify, contribute.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Why Cosmos
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Built Different
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background p-10 hover:bg-card transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-foreground/20 transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
