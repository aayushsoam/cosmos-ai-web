import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cosmos - AI Web Automation for Everyone | Free & Open Source</title>
        <meta
          name="description"
          content="Cosmos is a free, open-source Chrome extension that uses multi-agent AI to automate complex web workflows. Privacy-first, runs entirely in your browser."
        />
        <meta name="keywords" content="AI automation, web automation, Chrome extension, open source, privacy, multi-agent AI" />
        <link rel="canonical" href="https://cosmos-extension.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
