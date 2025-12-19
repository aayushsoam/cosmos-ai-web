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
        <title>Cosmos AI - Free AI Web Automation Extension | Open Source</title>
        <meta
          name="description"
          content="Cosmos AI is a free, open-source Chrome extension using multi-agent AI to automate complex web workflows. 100% local processing, privacy-first."
        />
        <meta name="keywords" content="AI automation, web automation, Chrome extension, open source, privacy, multi-agent AI, free automation" />
        <link rel="canonical" href="https://cosmos-ai.dev" />
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
