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
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    year: 2024,
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    image: '/images/recipe-app.png',
  },
  {
    id: 'discord-bot-structure-v14',
    title: 'Discord Bot Structure v14',
    descriptionKey: 'discord-bot-structure-v14',
    technologies: ['Discord.js', 'TypeScript', 'Node.js'],
    year: 2024,
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    image: '/images/discord-bot.png',
  },
  {
    id: 'live-web-chat',
    title: 'Live Web Chat',
    descriptionKey: 'live-web-chat',
    technologies: ['React', 'WebSocket', 'Node.js', 'Express'],
    year: 2023,
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    image: '/images/chat-app.png',
  },
  {
    id: 'discord-ticket-bot',
    title: 'Discord Ticket Bot',
    descriptionKey: 'discord-ticket-bot',
    technologies: ['Discord.js', 'TypeScript', 'MongoDB'],
    year: 2023,
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    image: '/images/ticket-bot.png',
  },
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
    url: 'https://github.com/giovanni-tavares',
    icon: 'Github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/giovanni-tavares',
    icon: 'Linkedin',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:contact@giovannitavares.com',
    icon: 'Mail',
  },
];
