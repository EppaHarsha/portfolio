import { Trophy, Calendar, Users, Zap } from "lucide-react";

const experiences = [
  {
    title: "GDSC Solution Challenge",
    role: "Participant",
    period: "2025",
    description: "Collaborated in a 2-day hackathon with a 4-member team to build impactful tech solutions. Practiced rapid prototyping, agile teamwork, and real-time debugging.",
    highlights: [
      "Built solution in 48 hours",
      "Agile team collaboration",
      "Rapid prototyping",
      "Real-time debugging"
    ],
    achievement: "Recognized for innovation and execution",
    icon: Trophy
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Experience & Hackathons
              <span className="text-primary"> /&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Hands-on experience through collaborative development and competitive events
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative pl-0 md:pl-20 mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 items-center justify-center">
                  <exp.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content Card */}
                <div className="p-8 rounded-2xl border border-border bg-card/50 card-glow">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="md:hidden w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-flex items-center gap-2 text-sm text-primary font-mono mb-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-mono font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground">{exp.role}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {exp.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Zap size={14} className="text-primary shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Achievement Badge */}
                  {exp.achievement && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                      <Trophy size={16} className="text-primary" />
                      <span className="text-sm text-primary font-medium">
                        {exp.achievement}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
