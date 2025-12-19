import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cosmos AI - Advanced Web Automation Platform | Intelligent AI Workflows</title>
        <meta
          name="description"
          content="Cosmos AI is the leading intelligent web automation platform powered by multi-agent AI. Automate complex workflows, save time, increase productivity. Experience the future of automation."
        />
        <meta name="keywords" content="Cosmos AI, web automation, AI automation platform, intelligent automation, workflow automation, multi-agent AI, business automation, RPA, robotic process automation, AI-powered automation, automation software" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://cosmos-ai.dev" />
        
        {/* Additional SEO Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cosmos AI - Advanced Web Automation Platform" />
        <meta property="og:description" content="Automate complex web workflows with intelligent multi-agent AI collaboration" />
        <meta property="og:url" content="https://cosmos-ai.dev" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cosmos AI - Web Automation Platform" />
        <meta name="twitter:description" content="Transform your workflow automation with Cosmos AI" />
        
        {/* Schema.org - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Cosmos AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cosmos AI is an intelligent web automation platform that uses multi-agent AI to automate complex workflows and business processes."
                }
              },
              {
                "@type": "Question",
                "name": "How does Cosmos AI help with automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cosmos AI automates repetitive web tasks, integrates with your applications, and enables intelligent process automation without coding."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <ArchitectureSection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
