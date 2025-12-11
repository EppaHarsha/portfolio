import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

 const projects = [
  {
    title: "Wandridge",
    subtitle: "Travel Booking Platform",
    description:
      "A travel booking web app inspired by Airbnb, allowing users to explore stays, manage bookings, and connect with hosts. Features responsive UI, intuitive navigation, and dynamic server-side rendering.",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "JavaScript"],
    github: "https://github.com/EppaHarsha/Wandridge",
    live: "https://wandridge.onrender.com",
    featured: true,
  },

  {
    title: "Real-Time Chat Rooms",
    subtitle: "WebSocket Chat Application",
    description:
      "A real-time chat application with multiple rooms using WebSockets. Enables instant messaging with RESTful API integration and a responsive, modern UI.",
    techStack: ["React.js", "Node.js", "Express.js", "Socket.io"],
    github: "https://github.com/EppaHarsha/ChatApp",
    live: "https://chat-app-neon-delta-13.vercel.app/",
    featured: true,
  },

  {
    title: "SmartSummarizer",
    subtitle: "AI Chrome Extension",
    description:
      "Chrome Extension powered by Google Gemini AI to summarize web pages in Brief, Detailed, and Bullet Point modes. Features customizable API key integration and clipboard copy.",
    techStack: [
      "JavaScript",
      "Chrome Extension API",
      "Google Gemini AI",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/EppaHarsha/SmartSummarizer",
    live: null,
    featured: true,
  },

  // ⭐ NEW PROJECT ADDED HERE
  {
    title: "Confera",
    subtitle: "Real-Time Video Conferencing App",
    description:
      "A Zoom-inspired real-time video conferencing platform featuring WebRTC video calling, multi-user rooms, screen sharing, live transcription, and real-time meeting summaries. Built with a scalable architecture and modern UI.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "WebRTC",
      "TailwindCSS"
    ],
    github: "https://github.com/EppaHarsha/Confera",
    live: "https://confera-two.vercel.app/",
    featured: true,
  },
];



const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Featured Projects
              <span className="text-primary"> /&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing my skills in full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative p-8 rounded-2xl border border-border bg-card/50 card-glow overflow-hidden"
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1 space-y-4">
                    {/* Title */}
                    <div>
                      <span className="text-sm text-primary font-mono">{project.subtitle}</span>
                      <h3 className="text-2xl font-mono font-bold text-foreground mt-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-md bg-primary/10 text-primary font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex lg:flex-col gap-3 shrink-0">
                    <Button
                      asChild
                      variant="outline"
                      className="border-border hover:border-primary/50 hover:bg-primary/10"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        asChild
                        className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Globe size={18} />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              <a
                href="https://github.com/EppaHarsha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={18} />
                View All Projects on GitHub
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
