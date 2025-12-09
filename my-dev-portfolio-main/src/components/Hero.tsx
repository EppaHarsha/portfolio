import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <code className="text-sm text-muted-foreground">Available for opportunities</code>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-mono font-bold mb-4 animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Eppa Harsha Vardhan</span>
            <span className="text-foreground"></span>
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground mb-6 animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Full Stack Web Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Building modern web applications with clean code and intuitive user experiences. 
            Passionate about open source and continuous learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <Button
              asChild
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-6 py-6 text-base font-medium glow"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 px-6 py-6 text-base"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <a
              href="mailto:eppaharsha08@gmail.com"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/EppaHarsha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/eppa-harsha-vardhan-443b38325"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
