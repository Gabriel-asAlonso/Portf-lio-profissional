import { Layout, Globe, BarChart3, Code2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Globe,
  BarChart3,
  Code2,
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-mono text-sm mb-3 tracking-wider">// SERVIÇOS</p>
            <h2 className="section-title mb-6">
              O que eu posso{" "}
              <span className="gradient-text">fazer por você</span>
            </h2>
            <p className="section-subtitle">
              Soluções digitais sob medida para cada etapa do seu negócio.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, index) => {
            const IconComp = iconMap[service.icon] || Code2;
            return (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="card-service group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                    <IconComp size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-primary/5 border border-primary/15 text-xs font-medium text-primary"
                      >
                        {highlight}
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

export default ServicesSection;
