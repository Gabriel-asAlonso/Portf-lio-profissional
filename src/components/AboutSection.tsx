import { Zap, Target, Palette, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const differentiators = [
  {
    icon: Target,
    title: "Foco em Resultado",
    description: "Cada projeto é pensado para gerar valor real — não apenas código bonito, mas soluções que funcionam.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Sites e sistemas rápidos, otimizados e escaláveis. Nada de lentidão ou travamentos.",
  },
  {
    icon: Palette,
    title: "Design & UX",
    description: "Interfaces modernas e intuitivas. Design que encanta o usuário e facilita a navegação.",
  },
  {
    icon: Clock,
    title: "Entregas Rápidas",
    description: "Processo organizado e comunicação clara para entregar no prazo, sem surpresas.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-mono text-sm mb-3 tracking-wider">// SOBRE MIM</p>
            <h2 className="section-title mb-6">
              Desenvolvedor que entrega{" "}
              <span className="gradient-text">soluções reais</span>
            </h2>
            <p className="section-subtitle leading-relaxed">
              Sou desenvolvedor Full Stack apaixonado por criar experiências digitais que fazem a diferença.
              Meu foco é transformar desafios de negócio em soluções web elegantes, performáticas e que
              geram resultados mensuráveis para meus clientes.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentiators.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="card-service group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
