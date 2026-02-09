import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Projeto não encontrado</h1>
          <Button variant="glow" asChild>
            <Link to="/">Voltar ao início</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at top, hsl(${project.accentColor} / 0.15), transparent 60%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Voltar</span>
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-5 border"
              style={{
                backgroundColor: `hsl(${project.accentColor} / 0.1)`,
                borderColor: `hsl(${project.accentColor} / 0.2)`,
                color: `hsl(${project.accentColor})`,
              }}
            >
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {project.demoUrl && (
              <Button variant="glow" size="lg" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  Ver Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outlineGlow" size="lg" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  Ver Código
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="w-full h-64 md:h-80 rounded-2xl border border-border/50 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, hsl(${project.accentColor} / 0.12), hsl(${project.accentColor} / 0.03))`,
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-2xl mx-auto mb-4 border border-white/10"
                    style={{
                      background: `linear-gradient(135deg, hsl(${project.accentColor} / 0.3), hsl(${project.accentColor} / 0.1))`,
                    }}
                  />
                  <p className="text-muted-foreground text-sm">Preview do projeto</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 md:p-8"
          >
            <h2 className="font-display font-bold text-xl md:text-2xl mb-4 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full bg-primary" />
              Contexto do Problema
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.context}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6 md:p-8"
          >
            <h2 className="font-display font-bold text-xl md:text-2xl mb-4 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full bg-primary" />
              Minha Solução
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </motion.div>

          {/* Tech Stack & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-6 md:p-8"
            >
              <h2 className="font-display font-bold text-xl mb-4 flex items-center gap-3">
                <span className="w-1 h-6 rounded-full bg-primary" />
                Tecnologias
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="badge-skill font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-6 md:p-8"
            >
              <h2 className="font-display font-bold text-xl mb-4 flex items-center gap-3">
                <span className="w-1 h-6 rounded-full bg-primary" />
                Features
              </h2>
              <ul className="space-y-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass-card glow-box p-6 md:p-8"
          >
            <h2 className="font-display font-bold text-xl md:text-2xl mb-6 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full bg-primary" />
              Resultados Alcançados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center"
                >
                  <p className="text-foreground font-medium text-sm">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center py-8"
          >
            <h3 className="font-display font-bold text-2xl mb-3">
              Gostou do que viu?
            </h3>
            <p className="text-muted-foreground mb-6">
              Vamos construir algo incrível juntos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="glow" size="xl" asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outlineGlow" size="lg" asChild>
                <Link to="/">Ver mais projetos</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
