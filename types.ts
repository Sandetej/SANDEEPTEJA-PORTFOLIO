
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  period?: string;
  category?: string;
  technologies: string[];
  problem: string;
  solution: string; // Methodologies and tools
  impact: string; // Quantifiable outcomes
  github?: string; // Optional link
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Education {
  university: string;
  degree: string;
  location: string;
  gpa: string;
  period: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
