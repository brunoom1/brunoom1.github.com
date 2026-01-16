/**
 * Projetos App (GitHub)
 * Arquivo para renderizar os repositórios do GitHub usando a RepositoryCard
 */

import { Navigation } from './components/Navigation.js';
import { RepositoryCard } from './components/RepositoryCard.js';
import { Footer } from './components/Footer.js';

// Initialize Navigation
const navigation = new Navigation({
  homeLink: 'index.html',
  links: [
    {
      href: 'index.html',
      label: 'Voltar ao Início',
      icon: 'ph-arrow-left',
    },
  ],
});

const navHTML = navigation.render();
const navContainer = document.getElementById('app-navbar');
if (navContainer) {
  navContainer.innerHTML = navHTML;
  navigation.attachEventListeners();
}

// Fetch and render GitHub repositories
async function fetchAndRenderRepos() {
  const username = 'brunoom1';
  const container = document.getElementById('repos-container');

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`
    );
    if (!response.ok) throw new Error('Falha ao carregar repositórios');

    const repos = await response.json();

    container.innerHTML = ''; // Clear loading state

    if (repos.length === 0) {
      container.innerHTML =
        '<p class="col-span-full text-center text-slate-500">Nenhum repositório público encontrado.</p>';
      return;
    }

    repos.forEach((repo) => {
      if (!repo.description) return;

      const card = new RepositoryCard(repo);
      container.innerHTML += card.render();
    });
  } catch (error) {
    console.error(error);
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <p class="text-red-500 mb-2">Ops! Não foi possível carregar os projetos.</p>
        <p class="text-slate-400 text-sm mb-4">Verifique sua conexão ou tente novamente mais tarde.</p>
        <a href="https://github.com/${username}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand-hover transition-colors">
          <i class="ph ph-github-logo text-xl"></i>
          Ir para o GitHub
        </a>
      </div>
    `;
  }
}

// Initialize Footer
const footer = new Footer({
  copyrightText: 'Gabriel Mendonça',
  additionalText: 'Dados fornecidos pela GitHub API.',
});

footer.mount('#app-footer');

// Fetch repositories
fetchAndRenderRepos();
