import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Education
              <span className="text-primary"> /&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Education Card */}
          <div className="relative">
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card/50 card-glow">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-mono font-bold text-foreground mb-2">
                        Bachelor of Technology
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        Computer Science and Engineering
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                      <Award size={18} className="text-primary" />
                      <span className="font-mono font-bold text-primary">
                        CGPA: 9.26
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} className="text-primary" />
                      <span>CVR College of Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary" />
                      <span>2023 - Present</span>
                    </div>
                  </div>

                  {/* Coursework / Highlights */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-mono text-muted-foreground mb-3">
                      Key Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures",
                        "Algorithms",
                        "Database Management",
                        "Web Development",
                        "Software Engineering",
                        "Computer Networks"
                      ].map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1.5 text-sm rounded-full border border-border bg-secondary/50 text-muted-foreground"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
