import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Name */}
          <div className="font-mono text-lg font-bold text-primary">
            &lt;EHV /&gt;
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Eppa Harsha Vardhan.</span>
            
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:eppaharsha08@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/EppaHarsha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/eppa-harsha-vardhan-443b38325"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
