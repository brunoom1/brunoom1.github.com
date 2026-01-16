/**
 * Portfolio App
 * Arquivo para renderizar os componentes na página portfolio.html
 */

import { Navigation } from './components/Navigation.js';
import { SkillTag } from './components/SkillTag.js';
import { ProjectCard } from './components/ProjectCard.js';
import { Footer } from './components/Footer.js';

// Initialize Navigation
const navigation = new Navigation({
  homeLink: 'index.html',
  links: [{ href: 'index.html', label: 'Voltar ao Início', hidden: true }],
  ctaButton: {
    href: 'https://www.workana.com/freelancer/0133136e7791fdf16febd258d1f0e7c3',
    label: 'Contratar no Workana',
    target: '_blank',
  },
});

const navHTML = navigation.render();
const navContainer = document.getElementById('app-navbar');
if (navContainer) {
  navContainer.innerHTML = navHTML;
  navigation.attachEventListeners();
}

// Initialize Skills
const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Node.js',
  'React Native',
  'Tailwind CSS',
  'Git & GitHub',
];

const skillsContainer = document.getElementById('skills-container');
if (skillsContainer) {
  skills.forEach((skill) => {
    const tag = new SkillTag(skill);
    skillsContainer.innerHTML += tag.render();
  });
}

// Initialize Projects
const projects = [
  {
    title: 'Sistema de Gestão Web',
    description: 'Desenvolvimento de plataforma SaaS para gestão empresarial, com dashboard interativo e relatórios em tempo real.',
    icon: 'ph-laptop',
    tags: ['React', 'Node.js'],
    ghLink: '#',
  },
  {
    title: 'App de Delivery',
    description: 'Aplicativo móvel para entregas com geolocalização, pagamentos in-app e painel administrativo para o restaurante.',
    icon: 'ph-device-mobile',
    tags: ['React Native', 'Firebase'],
    ghLink: '#',
  },
  {
    title: 'Marketplace de Serviços',
    description: 'Plataforma para conectar prestadores de serviços e clientes, com chat integrado e sistema de avaliações.',
    icon: 'ph-shopping-bag',
    tags: ['TypeScript', 'Next.js'],
    ghLink: '#',
  },
  {
    title: 'App de Rastreamento',
    description: 'Aplicativo para monitoramento de frotas em tempo real utilizando mapas interativos e geolocalização.',
    icon: 'ph-map-trifold',
    tags: ['React Native', 'Google Maps'],
    ghLink: '#',
  },
  {
    title: 'API de Pagamentos',
    description: 'Integração de gateway de pagamentos com sistema de assinaturas recorrentes e gestão de faturas.',
    icon: 'ph-credit-card',
    tags: ['Node.js', 'Express'],
    ghLink: '#',
  },
  {
    title: 'Landing Page Corporativa',
    description: 'Site institucional de alta conversão com animações suaves e otimização para motores de busca (SEO).',
    icon: 'ph-browser',
    tags: ['HTML5', 'Tailwind CSS'],
    ghLink: '#',
  },
];

const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
  projects.forEach((project) => {
    const card = new ProjectCard(project);
    projectsContainer.innerHTML += card.render();
  });
}

// Initialize Footer
const footer = new Footer({
  copyrightText: 'Gabriel Mendonça',
});

footer.mount('#app-footer');
