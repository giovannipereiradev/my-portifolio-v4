/**
 * Internationalization (i18n) configuration
 * Supports Portuguese (pt) and English (en)
 */

export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    // Navigation
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    // Hero Section
    hero: {
      name: 'Giovanni Tavares',
      title: 'Desenvolvedor e Analista de Segurança',
      description: 'Este portfólio não é apenas uma coleção de projetos, mas o registro de uma jornada de aprendizado, desafios superados e crescimento constante na tecnologia.',
      cta_primary: 'Entrar em Contato',
      cta_secondary: 'Meus Projetos',
    },
    // About Section
    about: {
      title: 'Sobre',
      content: 'Sempre fui aquele tipo de pessoa que precisava tocar, mexer, quebrar pra entender como as coisas funcionavam, e tecnologia foi onde isso finalmente virou algo maior. Aprendi tudo na prática, errando muito, consertando, errando de novo, e foi exatamente assim que descobri que quando algo me interessa de verdade não parece esforço. Hoje trabalho com segurança da informação, vim do desenvolvimento, e amanhã estarei em algo novo que me faça querer aprender tudo do zero. No fundo, minha curiosidade sempre foi o que guiou tudo isso. É ela que me faz continuar explorando, testando ideias e buscando entender cada vez mais.',
    },
    // Projects Section
    projects: {
      title: 'Projetos',
      demo: 'Demo',
      github: 'GitHub',
      technologies: 'Tecnologias',
      year: 'Ano',
    },
    // Project Descriptions
    project_descriptions: {
      'natis-recipes': 'Plataforma de receitas com busca avançada e filtros inteligentes. Desenvolvida com foco em experiência do usuário e performance.',
      'discord-bot-structure-v14': 'Estrutura robusta para desenvolvimento de bots Discord usando Discord.js v14. Inclui sistema de comandos, eventos e middleware.',
      'live-web-chat': 'Sistema de chat em tempo real com WebSocket. Suporta múltiplas salas, autenticação de usuários e histórico de mensagens.',
      'discord-ticket-bot': 'Bot para gerenciamento de tickets em servidores Discord. Automatiza criação, fechamento e arquivamento de tickets.',
    },
    // Contact Section
    contact: {
      title: 'Contato',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      credly: 'Credly'
    },
    // Theme and Language
    theme: {
      light: 'Claro',
      dark: 'Escuro',
    },
    language: {
      pt: 'Português',
      en: 'English',
    },
  },
  en: {
    // Navigation
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      name: 'Giovanni Tavares',
      title: 'Developer, Security Analyst',
      description: 'This portfolio is not just a collection of projects, but a reflection of a journey of learning, challenges overcome, and continuous growth in technology.',
      cta_primary: 'Get in Touch',
      cta_secondary: 'My Projects',
    },
    // About Section
    about: {
      title: 'About',
      content: 'I’ve always been the kind of person who needed to take things apart, experiment, and sometimes break them just to understand how they worked. Technology was where that curiosity finally turned into something bigger. I learned mostly through practice, making mistakes, fixing them, and trying again, and that’s how I realized that when something truly interests me, learning never feels like effort. Today I work in information security with a background in development, and tomorrow I might be exploring something completely new that makes me want to learn everything from scratch. At the core of it all is curiosity. It is what keeps me exploring, testing ideas, and constantly trying to understand more.',
    },
    // Projects Section
    projects: {
      title: 'Projects',
      demo: 'Demo',
      github: 'GitHub',
      technologies: 'Technologies',
      year: 'Year',
    },
    // Project Descriptions
    project_descriptions: {
      'natis-recipes': 'Recipe platform with advanced search and intelligent filters. Developed with focus on user experience and performance.',
      'discord-bot-structure-v14': 'Robust structure for Discord bot development using Discord.js v14. Includes command system, events, and middleware.',
      'live-web-chat': 'Real-time chat system with WebSocket. Supports multiple rooms, user authentication, and message history.',
      'discord-ticket-bot': 'Bot for managing tickets in Discord servers. Automates ticket creation, closure, and archiving.',
    },
    // Contact Section
    contact: {
      title: 'Contact',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      credly: 'Credly'
    },
    // Theme and Language
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
    language: {
      pt: 'Português',
      en: 'English',
    },
  },
};

export const getTranslation = (language: Language) => translations[language];
