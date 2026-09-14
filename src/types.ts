export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  yearsExperience: string;
  happyClients: string;
  projectsCompleted: string;
  languages: string[];
  avatarUrl?: string;
  socials: {
    dribbble: string;
    linkedin: string;
    github: string;
    facebook?: string;
  };
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  companyUrl: string;
  type: string;
  description: string;
  isActive?: boolean;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface SkillItem {
  id: string;
  name: string;
  icon: string;
  rating: number; // 1 to 5
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category?: string;
  image: string;
  link: string;
  description?: string;
  tags?: string[];
  documentType?: string;
  issueDate?: string;
  credentialId?: string;
  signatories?: string;
  keyHighlights?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  badge: string;
  credentialId?: string;
  relatedProjectId?: string;
  image?: string;
  highlights?: string[];
}

export interface GitHubRepoItem {
  id: string;
  name: string;
  fullName: string;
  description: string;
  htmlUrl: string;
  language: string;
  languageColor: string;
  category: 'AI & Full-Stack' | 'Data Analytics' | 'Web & Portfolio';
  techStack: string[];
  stars: number;
  forks: number;
  sizeKb: number;
  updatedAt: string;
  defaultBranch: string;
  cloneUrl: string;
  highlights: string[];
  demoUrl?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  achievements?: AchievementItem[];
  githubRepos?: GitHubRepoItem[];
}
