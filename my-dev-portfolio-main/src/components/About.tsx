import {
  Code2,
  Rocket,
  Users,
  Lightbulb,
  Code,
  Terminal,
  Brain,
  Sparkles,
  Database,
  Cpu,
  Bot,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with modern technologies",
  },
  {
    icon: Rocket,
    title: "Hackathon Experience",
    description: "Rapid prototyping and agile teamwork under pressure",
  },
  {
    icon: Users,
    title: "Open Source Contributor",
    description: "Active participation in GSSoC and Hacktoberfest",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creative solutions through project-based learning",
  },
  {
    icon: Code,
    title: "LeetCode",
    description: "Consistent problem solving & DSA practice",
    link: "https://leetcode.com/eppaharsha",
  },
  {
    icon: Terminal,
    title: "CodeChef",
    description: "Competitive programming & contests",
    link: "https://www.codechef.com/users/eppaharsha",
  },
];

const learningTopics = [
  { icon: Brain, text: "Foundations of Machine Learning" },
  { icon: Code, text: "Python-based ML workflows" },
  { icon: Database, text: "Data preprocessing & feature engineering" },
  { icon: Cpu, text: "ML algorithms (SVM, Regression, Trees)" },
  { icon: Sparkles, text: "Understanding Neural Networks" },
  { icon: Lightbulb, text: "Prompt Engineering fundamentals" },
  { icon: Bot, text: "Building simple GenAI tools" },
  { icon: Zap, text: "Integrating AI into full-stack apps" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <span className="text-primary">&lt;</span>
              About Me
              <span className="text-primary"> /&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a{" "}
                <span className="text-primary font-medium">
                  Computer Science undergraduate
                </span>{" "}
                at CVR College of Engineering with a passion for building
                impactful web applications.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey includes participating in{" "}
                <span className="text-primary font-medium">hackathons</span>,
                contributing to{" "}
                <span className="text-primary font-medium">
                  open source projects
                </span>
                , and constantly exploring new technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently maintaining a{" "}
                <span className="text-primary font-medium">9.26 CGPA</span> while
                actively building real-world projects and contributing through
                GSSoC and Hacktoberfest.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-primary">
                    9.26
                  </div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-primary">
                    5+
                  </div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Wrapper = item.link ? "a" : "div";

                return (
                  <Wrapper
                    key={item.title}
                    href={item.link}
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noopener noreferrer" : undefined}
                    className="p-6 rounded-xl border border-border bg-card/50 card-glow group cursor-pointer hover:scale-[1.03] transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="font-mono font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* ✅ Currently Learning Section */}
          <div className="mt-28">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Currently Exploring</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4">
                AI / ML & Generative AI
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Expanding my skillset into the world of artificial intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {learningTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <topic.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{topic.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
