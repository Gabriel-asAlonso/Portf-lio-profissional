import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-mono text-sm mb-3 tracking-wider">// PROJETOS</p>
            <h2 className="section-title mb-6">
              Trabalhos que{" "}
              <span className="gradient-text">entregam resultado</span>
            </h2>
            <p className="section-subtitle">
              Cada projeto é uma história de um problema real resolvido com tecnologia e design.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.1}>
              <div className="card-project group h-full flex flex-col">
                {/* Preview Gradient */}
                <div
                  className="relative h-48 md:h-56 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, hsl(${project.accentColor} / 0.15), hsl(${project.accentColor} / 0.05))`,
                  }}
                >
                  {/* Decorative Elements */}
                  <div
                    className="absolute top-6 left-6 w-16 h-16 rounded-xl border border-white/10 opacity-60"
                    style={{
                      background: `linear-gradient(135deg, hsl(${project.accentColor} / 0.3), transparent)`,
                    }}
                  />
                  <div
                    className="absolute bottom-6 right-6 w-24 h-8 rounded-lg border border-white/10 opacity-40"
                    style={{
                      background: `linear-gradient(90deg, hsl(${project.accentColor} / 0.2), transparent)`,
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-20"
                    style={{
                      background: `radial-gradient(circle, hsl(${project.accentColor} / 0.4), transparent)`,
                    }}
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/60 backdrop-blur-md border border-border/30 text-xs font-medium text-foreground">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button variant="glow" size="sm" asChild>
                      <Link to={`/projeto/${project.slug}`}>
                        Ver detalhes
                        <ArrowUpRight size={14} />
                      </Link>
                    </Button>
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={14} />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
