import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#opensource", label: "Open Source" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const RESUME_URL = "/resume.pdf"; // <-- file in public/resume.pdf

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "nav-blur bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-mono text-xl font-bold text-primary">
            &lt;EHV /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Resume Download Button */}
            <a
              href={RESUME_URL}
              download
              className="text-sm px-4 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-background transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden nav-blur bg-background/95 border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Resume Link */}
            <a
              href={RESUME_URL}
              download
              className="text-primary font-medium hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
