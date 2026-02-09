import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "15+", label: "Projetos Entregues" },
  { value: "10+", label: "Clientes Satisfeitos" },
  { value: "8+", label: "Tecnologias Dominadas" },
  { value: "3+", label: "Anos de Experiência" },
];

const ResultsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="glass-card glow-box p-8 md:p-12 lg:p-16">
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-3 tracking-wider">// RESULTADOS</p>
              <h2 className="section-title">
                Números que{" "}
                <span className="gradient-text">comprovam</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-2">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base font-medium">
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResultsSection;
