/**
 * Projects configuration
 * Centralized data structure for all portfolio projects
 */

export interface Project {
  id: string;
  title: string;
  descriptionKey: string; // Key to find translation in i18n
  technologies: string[];
  year: number;
  demoUrl?: string;
  githubUrl?: string;
  image: string;
}

export const projects: Project[] = [
  { 
    id: 'natis-recipes',
    title: 'Natis Recipes',
    descriptionKey: 'natis-recipes',
    technologies: ['Python', 'MkDocs', 'Markdown'],
    year: 2025,
    demoUrl: 'https://natisrecipes.giovannitavares.com',
    githubUrl: 'https://github.com/giovannipereiradev/natis-recipes',
    image: '/images/natis-recipes.png'
  },
  {
    id: 'live-web-chat',
    title: 'Live Web Chat',
    descriptionKey: 'live-web-chat',
    technologies: ['HTML & CSS', 'JavaScript', 'Docker', 'Redis', 'WebSocket'],
    year: 2025,
    demoUrl: 'https://github.com/giovannipereiradev/live-web-chat',
    githubUrl: 'https://github.com/giovannipereiradev/live-web-chat',
    image: '/images/live-web-chat.png',
  }
];

/**
 * Social links configuration
 * Centralized data structure for social media and contact links
 */

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string; // lucide-react icon name
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.giovannitavares.com/',
    icon: 'Github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.giovannitavares.com/',
    icon: 'Linkedin',
  },
  {
    id: 'credly',
    name: 'Credly',
    url: 'https://credly.giovannitavares.com/',
    icon: 'Credly',
  }
];
