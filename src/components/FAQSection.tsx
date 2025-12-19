import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Cosmos really free?",
    answer: "Yes! Cosmos is 100% free and open source. You only pay for the AI API usage from your chosen provider (OpenAI, Anthropic, Gemini, etc.), and you use your own API keys."
  },
  {
    question: "How does privacy work?",
    answer: "All processing happens locally in your browser. Your data, browsing history, and automation tasks never leave your device. The only external communication is with the AI API you choose to use."
  },
  {
    question: "Which AI providers are supported?",
    answer: "Cosmos supports OpenAI, Anthropic (Claude), Google Gemini, Groq, and even local models via Ollama. You can switch between providers at any time."
  },
  {
    question: "What can I automate with Cosmos?",
    answer: "Almost anything you can do manually in a browser: form filling, data extraction, web scraping, repetitive tasks, testing, and complex multi-step workflows across multiple websites."
  },
  {
    question: "Is it safe to use?",
    answer: "Yes. Cosmos is open source so you can inspect the code. It uses Manifest V3 standards and follows Chrome's security best practices. Your API keys are stored locally and never shared."
  },
  {
    question: "How do I get started?",
    answer: "Install the extension from the Chrome Web Store, add your API key from your preferred AI provider, and start automating! Check our documentation for tutorials and examples."
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about Cosmos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-gradient rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
