import akkLogo from "@/assets/akk-logo.svg";
import { Github, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img src={akkLogo} alt="Cosmos AI" className="w-8 h-8" />
            <div>
              <span className="font-display font-semibold">COSMOS.AI</span>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Open Source
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Demo</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;