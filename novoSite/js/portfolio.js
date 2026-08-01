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
    title: 'Clínica Ágil',
    description: 'Sistema de agendamento para clínicas com lembretes por WhatsApp, prontuário digital e gestão de agenda.',
    icon: 'ph-first-aid-kit',
    image: 'assets/projects/clinica-agil.webp',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    ghLink: 'https://github.com/brunoom1',
  },
  {
    title: 'Fazenda Direto',
    description: 'Marketplace de produtos rurais conectando produtores e consumidores com entrega regional e chat integrado.',
    icon: 'ph-basket',
    image: 'assets/projects/fazenda-direto.webp',
    tags: ['React Native', 'Firebase'],
    ghLink: 'https://github.com/brunoom1',
  },
  {
    title: 'Fitness Tracker',
    description: 'App de treinos personalizados com planos adaptativos, acompanhamento de evolução e metas diárias.',
    icon: 'ph-barbell',
    image: 'assets/projects/fitness-tracker.webp',
    tags: ['React Native', 'Node.js'],
    ghLink: 'https://github.com/brunoom1',
  },
  {
    title: 'Recrutamento Tech',
    description: 'Plataforma de vagas para desenvolvedores com triagem por desafios técnicos e feedback estruturado.',
    icon: 'ph-briefcase',
    image: 'assets/projects/recrutamento-tech.webp',
    tags: ['Next.js', 'MongoDB'],
    ghLink: 'https://github.com/brunoom1',
  },
  {
    title: 'Bot de Atendimento',
    description: 'Assistente de WhatsApp com respostas automáticas, qualificação de leads e transferência para humano.',
    icon: 'ph-chats-circle',
    image: 'assets/projects/bot-atendimento.webp',
    tags: ['Node.js', 'WhatsApp API'],
    ghLink: 'https://github.com/brunoom1',
  },
  {
    title: 'API de Pagamentos',
    description: 'Gateway de pagamentos com assinaturas recorrentes, gestão de faturas e webhooks em tempo real.',
    icon: 'ph-credit-card',
    image: 'assets/projects/api-pagamentos.webp',
    tags: ['Node.js', 'Express', 'Stripe'],
    ghLink: 'https://github.com/brunoom1',
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
