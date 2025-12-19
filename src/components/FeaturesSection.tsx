import { Shield, Zap, Cpu, Lock, Globe, Layers } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Privacy-First",
    description: "All processing happens locally in your browser. Your data never leaves your device.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Multi-Agent AI",
    description: "Thinker and Navigator agents work together to plan and execute complex tasks.",
    color: "text-primary",
  },
  {
    icon: Lock,
    title: "Bring Your Own Key",
    description: "Use your own API keys for OpenAI, Anthropic, Gemini, Groq, or Ollama.",
    color: "text-accent",
  },
  {
    icon: Cpu,
    title: "100% Free",
    description: "No subscriptions, no hidden fees. Completely free and open source forever.",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Compatible with any website. Automate forms, data extraction, navigation, and more.",
    color: "text-accent",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Built on modern Manifest V3 standards with a clean, extensible codebase.",
    color: "text-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 cosmic-glow opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Cosmos</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for developers, researchers, and anyone who wants powerful AI automation 
            without the $200/month price tag.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-gradient rounded-2xl border border-border/50 p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
