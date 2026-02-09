export interface Service {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    icon: "Layout",
    title: "Landing Pages",
    description:
      "Páginas de conversão otimizadas para captar leads e vender. Design moderno com foco em performance e SEO.",
    highlights: ["Alta conversão", "SEO otimizado", "Design responsivo"],
  },
  {
    icon: "Globe",
    title: "Sites Institucionais",
    description:
      "Sites profissionais que transmitem credibilidade e posicionam sua marca no digital com excelência.",
    highlights: ["Design premium", "Performance A+", "Fácil gestão"],
  },
  {
    icon: "BarChart3",
    title: "Dashboards & Sistemas",
    description:
      "Painéis de controle e sistemas web sob medida para automatizar processos e tomar decisões com dados.",
    highlights: ["Dados em tempo real", "UX intuitiva", "Escalável"],
  },
  {
    icon: "Code2",
    title: "APIs & Integrações",
    description:
      "Desenvolvimento de APIs robustas e integrações entre sistemas para conectar seu negócio ao digital.",
    highlights: ["Documentação completa", "Alta disponibilidade", "Segurança"],
  },
];
