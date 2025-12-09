import { GitPullRequest, Star, GitFork, Users, Award } from "lucide-react";

const contributions = [
  {
    program: "Hacktoberfest",
    year: "2025",
    description: "Participated in the annual open source celebration, contributing to multiple repositories and learning collaborative development practices.",
    icon: Award,
    highlights: ["Pull Requests Merged", "Community Collaboration", "Git Workflow Mastery"]
  },
  {
    program: "GirlScript Summer of Code",
    year: "GSSoC",
    description: "Contributed to real-world open source projects, collaborating with developers worldwide and gaining experience with large codebases.",
    icon: Users,
    highlights: ["Code Reviews", "Documentation", "Feature Contributions"]
  }
];

const stats = [
  { icon: GitPullRequest, label: "Pull Requests", value: "10+" },
  { icon: Star, label: "Stars Earned", value: "5+" },
  { icon: GitFork, label: "Repos Contributed", value: "8+" },
  { icon: Users, label: "Collaborations", value: "15+" }
];

const OpenSource = () => {
  return (
    <section id="opensource" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Open Source
              <span className="text-primary"> /&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Contributing to the developer community and learning from real-world codebases
            </p>
          </div>

          {/* GitHub Stats Card */}
          <div className="mb-12 p-8 rounded-2xl border border-border bg-card/50 card-glow">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-mono font-bold text-foreground mb-2">
                  GitHub Contributions
                </h3>
                <p className="text-muted-foreground">
                  Actively contributing to open source projects and the developer community
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Contribution Graph Placeholder */}
            <div className="mt-8 p-6 rounded-xl bg-secondary/30 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=EppaHarsha&show_icons=true&theme=transparent&hide_border=true&title_color=22D3EE&icon_color=22D3EE&text_color=94A3B8"
                  alt="GitHub Stats"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=EppaHarsha&theme=transparent&hide_border=true&stroke=22D3EE&ring=22D3EE&fire=22D3EE&currStreakLabel=22D3EE"
                  alt="GitHub Streak"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Contribution Programs */}
          <div className="grid md:grid-cols-2 gap-8">
            {contributions.map((item) => (
              <div
                key={item.program}
                className="p-8 rounded-2xl border border-border bg-card/50 card-glow group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-primary font-mono">{item.year}</span>
                    <h3 className="text-xl font-mono font-bold text-foreground">
                      {item.program}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-sm rounded-full border border-primary/30 bg-primary/5 text-primary"
                    >
                      {highlight}
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

export default OpenSource;
