/**
 * Projects configuration
 * Centralized data structure for all portfolio projects
 */

import type { translations } from './i18n';

export type DescriptionKey = keyof typeof translations['pt']['project_descriptions'];

export interface Project {
  id: string;
  title: string;
  descriptionKey: DescriptionKey;
  technologies: string[];
  year: number;
  demoUrl?: string;
  githubUrl?: string;
  image: string;
}

export const projects: Project[] = [
  { 
    id: 'my-portfolio-v4',
    title: 'My Portfolio V4',
    descriptionKey: 'my-portfolio-v4',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    year: 2026,
    demoUrl: 'https://giovannitavares.com',
    githubUrl: 'https://github.com/giovannipereiradev/my-portifolio-v4',
    image: '/images/projects/my-portfolio-v4.png'
  },
  { 
    id: 'natis-recipes',
    title: 'Natis Recipes',
    descriptionKey: 'natis-recipes',
    technologies: ['Python', 'MkDocs', 'Markdown'],
    year: 2025,
    demoUrl: 'https://natisrecipes.giovannitavares.com',
    githubUrl: 'https://github.com/giovannipereiradev/natis-recipes',
    image: '/images/projects/natis-recipes.png'
  },
  { 
    id: 'discord-bot-structure-v14',
    title: 'Discord Bot Structure V14',
    descriptionKey: 'discord-bot-structure-v14',
    technologies: ['Node.js', 'Discord.js', 'MongoDB'],
    year: 2025,
    githubUrl: 'https://github.com/giovannipereiradev/discord-bot-structure-v14',
    image: '/images/projects/discord-bot-structure-v14.png'
  },
  { 
    id: 'discord-ticket-bot-v14',
    title: 'Discord Ticket Bot V14',
    descriptionKey: 'discord-ticket-bot-v14',
    technologies: ['Node.js', 'Discord.js', 'SQLite'],
    year: 2025,
    githubUrl: 'https://github.com/giovannipereiradev/discord-ticket-bot-v14',
    image: '/images/projects/discord-ticket-bot-v14.png'
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

export type SocialIcon = 'Github' | 'Linkedin' | 'Credly';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: SocialIcon;
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
