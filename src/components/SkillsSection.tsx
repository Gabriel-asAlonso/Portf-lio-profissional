import AnimatedSection from "./AnimatedSection";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

const skillLogoMap: Record<string, { src: string; label: string }> = {
  HTML5: { src: "/skills/html.png", label: "HTML5" },
  CSS3: { src: "/skills/css.png", label: "CSS3" },
  JavaScript: { src: "/skills/javascript.png", label: "JavaScript" },
  TypeScript: { src: "/skills/type.png", label: "TypeScript" },
  Angular: { src: "/skills/angular.png", label: "Angular" },
  React: { src: "/skills/react.png", label: "React" },
  "Node.js": { src: "/skills/node.png", label: "Node.js" },
  MySQL: { src: "/skills/mySQL.png", label: "MySQL" },
  Redis: { src: "/skills/redis.png", label: "Redis" },
  Git: { src: "/skills/git.png", label: "Git" },
  GitHub: { src: "/skills/gitHub.png", label: "GitHub" },
};

const SkillsSection = () => {
  const allSkills = skillCategories.flatMap((category) => category.skills);
  const uniqueSkills = Array.from(new Set(allSkills));
  const skillsToShow = uniqueSkills.slice(0, 10);

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-mono text-sm mb-3 tracking-wider">// SKILLS</p>
            <h2 className="section-title mb-6">
              Tecnologias que <span className="gradient-text">domino</span>
            </h2>
            <p className="section-subtitle">
              Stack moderna e em constante evolução para entregar projetos robustos e escaláveis.
            </p>
          </div>
        </AnimatedSection>

        <div className="glass-card p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
            {skillsToShow.map((skill, index) => {
              const logo = skillLogoMap[skill];

              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="flex flex-col items-center w-[120px]">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-foreground/5 border border-border/60 flex items-center justify-center overflow-hidden">
                      {logo ? (
                        <img
                          src={logo.src}
                          alt={logo.label}
                          className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        />
                      ) : null}
                    </div>

                    <span className="mt-3 text-sm font-medium text-foreground/80 text-center">
                      {logo?.label ?? skill}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
