export interface Role {
  title: string;
  range: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  range: string;
  technologies: string[];
  url?: string;
  roles?: Role[];
  startedAt: Date;
  // Fields to use when roles is not defined
  title?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  orderIndex: number;
}

export interface Overview {
  id: string;
  content: string;
}
