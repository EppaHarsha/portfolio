const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "HTML", "CSS"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Express.js", "Node.js", "Bootstrap", "Tailwind CSS"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Tools & Technologies",
    skills: ["REST APIs", "Socket.io", "Vite", "Git", "GitHub", "Postman", "Thunder Client"],
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MongoDB Atlas", "MongoDB Compass", "MySQL"],
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Authentication & Security",
    skills: ["JWT", "bcrypt", "OAuth"],
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "Development Practices",
    skills: ["Version Control", "CI/CD", "Netlify", "Vercel"],
    color: "from-sky-500 to-indigo-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Technical Skills
              <span className="text-primary"> /&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-xl border border-border bg-card/50 card-glow"
              >
                <h3 className="font-mono font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full border border-border bg-secondary/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
