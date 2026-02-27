import { Github, Linkedin, Mail, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/Gabriel-asAlonso", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gasalonso/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/5511999999999", label: "WhatsApp" },
  { icon: Mail, href: "mailto:seuemail@email.com", label: "E-mail" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="hero-orb w-[500px] h-[500px] bg-primary/20 top-[-10%] left-[-10%] animate-float-slow" />
      <div className="hero-orb w-[400px] h-[400px] bg-accent/15 bottom-[-5%] right-[-5%] animate-float" />
      <div className="hero-orb w-[300px] h-[300px] bg-primary/10 top-[40%] right-[20%] animate-glow-pulse" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Disponível para projetos</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4"
        >
          Olá, eu sou{" "}
          <span className="gradient-text">Gabriel Alonso</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-display font-light text-muted-foreground mb-6"
        >
          Desenvolvedor Web Full Stack
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformo ideias em experiências digitais de alto impacto. Sites, sistemas e soluções web
          sob medida — com foco em <span className="text-foreground font-medium">performance</span>,{" "}
          <span className="text-foreground font-medium">design</span> e{" "}
          <span className="text-foreground font-medium">resultados reais</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button variant="glow" size="xl" onClick={() => scrollTo("projetos")}>
            Ver Projetos
          </Button>
          <Button variant="outlineGlow" size="xl" onClick={() => scrollTo("contato")}>
            Entrar em Contato
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground
                hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => scrollTo("sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
