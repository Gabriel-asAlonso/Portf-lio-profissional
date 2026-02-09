import { Monitor, Database, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Database,
  Wrench,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-mono text-sm mb-3 tracking-wider">// SKILLS</p>
            <h2 className="section-title mb-6">
              Tecnologias que{" "}
              <span className="gradient-text">domino</span>
            </h2>
            <p className="section-subtitle">
              Stack moderna e em constante evolução para entregar projetos robustos e escaláveis.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const IconComp = iconMap[category.icon] || Monitor;
            return (
              <AnimatedSection key={category.title} delay={catIndex * 0.15}>
                <div className="glass-card p-6 md:p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <IconComp size={18} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span key={skill} className="badge-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
