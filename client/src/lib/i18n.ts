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
      'natis-recipes': 'Aplicação web de gerenciamento de receitas que permite organizar, visualizar e armazenar receitas culinárias em uma interface simples e intuitiva.',
      'live-web-chat': 'Interface simples de chat web em tempo real que permite aos usuários enviar e receber mensagens diretamente no navegador. Desenvolvida para demonstrar conceitos básicos de interação front-end e comunicação em tempo real.'
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
      'natis-recipes': 'Recipe management web application that allows users to organize, browse, and store cooking recipes through a clean and intuitive interface.',
      'live-web-chat': 'Simple real-time web chat interface that allows users to send and receive messages directly in the browser. Built to demonstrate basic front-end interaction and live communication concepts.'
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
