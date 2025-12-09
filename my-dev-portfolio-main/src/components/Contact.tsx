import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "eppaharsha08@gmail.com",
    href: "mailto:eppaharsha08@gmail.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/EppaHarsha",
    href: "https://github.com/EppaHarsha"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/EppaHarsha",
    href: "https://www.linkedin.com/in/eppa-harsha-vardhan-443b38325"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission UI only - no backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Get In Touch
              <span className="text-primary"> /&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-mono font-bold text-foreground mb-4">
                  Let's Build Something Together
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                  Whether you need a full-stack developer or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 group card-glow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-foreground font-medium">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
