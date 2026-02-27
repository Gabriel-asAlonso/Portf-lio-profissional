export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    icon: "Monitor",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "React"],
  },
  {
    title: "Back-end & Dados",
    icon: "Database",
    skills: ["Node.js", "MySQL"],
  },
  {
    title: "Ferramentas & DevOps",
    icon: "Wrench",
    skills: ["Git", "GitHub"],
  },
];
