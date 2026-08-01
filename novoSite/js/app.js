/**
 * Main App
 * Arquivo principal que renderiza os componentes na página index.html
 */

import { Navigation } from './components/Navigation.js';
import { Hero } from './components/Hero.js';
import { ServiceCard } from './components/ServiceCard.js';
import { ProjectCard } from './components/ProjectCard.js';
import { ContactForm } from './components/ContactForm.js';
import { Footer } from './components/Footer.js';


// Initialize Navigation
const navigation = new Navigation({
  homeLink: '#',
  links: [
    { href: '#servicos', label: 'O que faço' },
    { href: 'portfolio.html', label: 'Portfólio' },
    { href: 'projetos.html', label: 'GitHub' },
    { href: '#sobre', label: 'Sobre', hidden: false },
  ],
  ctaButton: {
    href: '#contato',
    label: 'Fale Comigo',
  },
});

navigation.mount('#app-navbar');

// Initialize Hero
const hero = new Hero({
  title: 'Software Developer',
  subtitle: 'Fullstack',
  description:
    'Especialista em criar soluções digitais robustas. Transformo sua ideia em <span class="text-slate-800 font-semibold">Aplicativos, Softwares e Web Sites</span> modernos e escaláveis.',
  primaryButton: {
    href: '#contato',
    label: 'Solicitar Orçamento',
  },
  secondaryButton: {
    href: '#projetos',
    label: 'Ver Portfólio',
  },
});

const heroSection = document.getElementById('hero-section');
if (heroSection) {
  heroSection.innerHTML = hero.render();
}

// Initialize Services
const services = [
  {
    icon: 'ph-desktop',
    iconBg: 'blue-50',
    iconColor: 'text-brand',
    title: 'Sites Institucionais',
    description:
      'Sites rápidos, otimizados para SEO e responsivos. A primeira impressão perfeita para sua empresa.',
    hoverBorderColor: 'hover:border-blue-100',
  },
  {
    icon: 'ph-code',
    iconBg: 'purple-50',
    iconColor: 'text-purple-600',
    title: 'Sistemas Web',
    description:
      'Dashboards, CRMs e plataformas SaaS. Automação e controle para processos complexos.',
    hoverBorderColor: 'hover:border-purple-100',
    hoverBg: 'hover:bg-purple-600',
  },
  {
    icon: 'ph-device-mobile',
    iconBg: 'green-50',
    iconColor: 'text-green-600',
    title: 'Aplicativos Mobile',
    description:
      'Apps para Android e iOS usando tecnologias modernas para garantir alta performance.',
    hoverBorderColor: 'hover:border-green-100',
    hoverBg: 'hover:bg-green-600',
  },
];

const servicesContainer = document.getElementById('services-container');
if (servicesContainer) {
  services.forEach((service) => {
    const card = new ServiceCard(service);
    servicesContainer.innerHTML += card.render();
  });
}

// Initialize Projects
const projects = [
  {
    title: 'Clínica Ágil',
    description:
      'Plataforma de agendamento para clínicas com lembretes automáticos por WhatsApp, prontuário digital e gestão de profissionais.',
    icon: 'ph-first-aid-kit',
    image: 'assets/projects/clinica-agil.webp',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    ghLink: 'https://github.com/brunoom1',
    demoLink: '#',
  },
  {
    title: 'Fazenda Direto',
    description:
      'Marketplace que conecta produtores rurais a consumidores, com logística de entrega regional e pagamento integrado.',
    icon: 'ph-basket',
    image: 'assets/projects/fazenda-direto.webp',
    tags: ['React Native', 'Firebase'],
    ghLink: 'https://github.com/brunoom1',
    demoLink: '#',
  },
  {
    title: 'Fitness Tracker',
    description:
      'Aplicativo de treinos personalizados com planos adaptativos, acompanhamento de evolução e metas diárias.',
    icon: 'ph-barbell',
    image: 'assets/projects/fitness-tracker.webp',
    tags: ['React Native', 'Node.js'],
    ghLink: 'https://github.com/brunoom1',
    demoLink: '#',
  },
  {
    title: 'Recrutamento Tech',
    description:
      'Plataforma de vagas para devs com triagem automática por desafios técnicos, ranking de candidatos e feedback estruturado.',
    icon: 'ph-briefcase',
    image: 'assets/projects/recrutamento-tech.webp',
    tags: ['Next.js', 'MongoDB'],
    ghLink: 'https://github.com/brunoom1',
    demoLink: '#',
  },
  {
    title: 'Bot de Atendimento',
    description:
      'Assistente de WhatsApp com respostas automáticas, qualificação de leads e transferência inteligente para atendimento humano.',
    icon: 'ph-chats-circle',
    image: 'assets/projects/bot-atendimento.webp',
    tags: ['Node.js', 'WhatsApp API'],
    ghLink: 'https://github.com/brunoom1',
    demoLink: '#',
  },
  {
    title: 'API de Pagamentos',
    description:
      'Gateway de pagamentos com assinaturas recorrentes, gestão de faturas, webhooks e painel administrativo em tempo real.',
    icon: 'ph-credit-card',
    image: 'assets/projects/api-pagamentos.webp',
    tags: ['Node.js', 'Express', 'Stripe'],
    ghLink: 'https://github.com/brunoom1',
    demoLink: '#',
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
  additionalText: 'Feito com <i class="ph-fill ph-heart text-red-500 align-middle"></i> e muito café.',
});

footer.mount('#app-footer');

// Initialize Contact Form
const contactForm = new ContactForm();
contactForm.attachEventListeners();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Navbar scroll effect
const navbar = document.getElementById('app-navbar');
window.addEventListener('scroll', () => {
  const nav = navbar.querySelector('nav');
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('shadow-md');
    }
  }
});
