export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  context: string;
  solution: string;
  results: string[];
  stack: string[];
  features: string[];
  accentColor: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "dashboard-analytics",
    title: "Dashboard de Analytics",
    category: "Sistema Web",
    description:
      "Painel de controle completo para visualização de métricas em tempo real com gráficos interativos e relatórios automatizados.",
    fullDescription:
      "Um dashboard robusto desenvolvido para uma empresa de e-commerce que precisava acompanhar vendas, tráfego e comportamento de usuários em um único painel centralizado.",
    context:
      "A empresa utilizava planilhas manuais para análise de dados, resultando em atrasos e inconsistências nas decisões estratégicas. Precisavam de uma solução centralizada e em tempo real.",
    solution:
      "Desenvolvi um dashboard responsivo com Angular e TypeScript, integrando APIs REST para coleta de dados em tempo real. Implementei gráficos interativos com Chart.js e um sistema de filtros avançados para personalização de relatórios.",
    results: [
      "Redução de 40% no tempo de análise de dados",
      "Interface intuitiva adotada por toda equipe em 1 semana",
      "Relatórios automatizados substituíram processos manuais",
    ],
    stack: ["Angular", "TypeScript", "Chart.js", "Node.js", "MySQL"],
    features: [
      "Gráficos interativos em tempo real",
      "Filtros avançados por período e categoria",
      "Exportação para PDF e Excel",
      "100% responsivo",
    ],
    accentColor: "165 82% 46%",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "plataforma-gestao",
    title: "Plataforma de Gestão",
    category: "SaaS",
    description:
      "Sistema completo de gestão para pequenas empresas com controle de estoque, vendas e relatórios financeiros integrados.",
    fullDescription:
      "Plataforma web desenvolvida para automatizar processos de gestão de uma rede de lojas, integrando estoque, vendas, fornecedores e relatórios em um único sistema.",
    context:
      "O cliente gerenciava 3 lojas com sistemas separados e planilhas. As inconsistências entre os sistemas geravam perdas financeiras e operacionais significativas.",
    solution:
      "Criei uma plataforma unificada com módulos de estoque, PDV, financeiro e relatórios. Utilizei Angular no front-end com uma API REST robusta em Node.js e MySQL para persistência de dados.",
    results: [
      "Unificação de 3 sistemas em uma única plataforma",
      "Redução de 60% em erros de estoque",
      "ROI positivo nos primeiros 3 meses de uso",
    ],
    stack: ["Angular", "TypeScript", "Node.js", "MySQL", "Docker"],
    features: [
      "Controle de estoque multilocal",
      "PDV integrado",
      "Relatórios financeiros automatizados",
      "Dashboard gerencial",
    ],
    accentColor: "220 90% 56%",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "landing-page-saas",
    title: "Landing Page de Alta Conversão",
    category: "Landing Page",
    description:
      "Página de conversão de alta performance para produto SaaS com design moderno, animações fluidas e SEO otimizado.",
    fullDescription:
      "Landing page estratégica desenvolvida para aumentar a taxa de conversão de um produto SaaS B2B, focada em clareza de proposta de valor e experiência do usuário.",
    context:
      "O produto SaaS tinha boa qualidade técnica mas baixa conversão no site. A página anterior era genérica e não comunicava bem os benefícios do produto.",
    solution:
      "Redesenhei completamente a landing page com foco em storytelling, prova social e CTAs estratégicos. Implementei animações sutis, otimizei para SEO e garanti carregamento abaixo de 2 segundos.",
    results: [
      "Aumento de 85% na taxa de conversão",
      "Tempo de carregamento reduzido para 1.2s",
      "Primeira página no Google para keywords principais",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Figma"],
    features: [
      "Animações fluidas e performáticas",
      "SEO técnico otimizado",
      "Lighthouse score A+",
      "Design totalmente responsivo",
    ],
    accentColor: "142 70% 45%",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "api-integracao",
    title: "API de Integração",
    category: "Back-end",
    description:
      "API RESTful robusta para integração entre sistemas legados e plataformas modernas com documentação completa.",
    fullDescription:
      "API de integração desenvolvida para conectar um sistema ERP legado com plataformas modernas de e-commerce e logística, eliminando processos manuais.",
    context:
      "O cliente operava com um ERP antigo que não se comunicava com suas novas plataformas de venda online, resultando em processos manuais de sincronização de dados.",
    solution:
      "Projetei e desenvolvi uma API RESTful em Node.js que serve como middleware entre o ERP e as plataformas modernas, com tratamento de erros robusto, filas de processamento e monitoramento.",
    results: [
      "Eliminação de 100% dos processos manuais de sync",
      "Tempo de processamento de pedidos: de horas para segundos",
      "Zero downtime em 6 meses de operação",
    ],
    stack: ["Node.js", "Express", "MySQL", "Redis", "Docker"],
    features: [
      "Documentação Swagger completa",
      "Rate limiting e segurança",
      "Monitoramento em tempo real",
      "Filas assíncronas para processamento",
    ],
    accentColor: "25 95% 53%",
    demoUrl: "#",
    githubUrl: "#",
  },
];
