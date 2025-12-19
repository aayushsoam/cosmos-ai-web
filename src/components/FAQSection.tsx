import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Cosmos really free?",
    answer: "Yes. Cosmos is 100% free and open source. You only pay for the AI API usage from your chosen provider, using your own keys."
  },
  {
    question: "How does privacy work?",
    answer: "All processing happens locally in your browser. Your data, browsing history, and automation tasks never leave your device."
  },
  {
    question: "Which AI providers are supported?",
    answer: "Cosmos supports OpenAI, Anthropic (Claude), Google Gemini, Groq, and local models via Ollama. Switch between them anytime."
  },
  {
    question: "What can I automate?",
    answer: "Anything you can do manually: form filling, data extraction, web scraping, testing, and complex multi-step workflows."
  },
  {
    question: "Is it safe to use?",
    answer: "Yes. Open source, Manifest V3 compliant, follows Chrome security best practices. Your API keys stay local."
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Questions
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            FAQ
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-2xl border border-border px-6 data-[state=open]:border-foreground/20 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-display font-medium hover:no-underline py-6 text-lg">
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
