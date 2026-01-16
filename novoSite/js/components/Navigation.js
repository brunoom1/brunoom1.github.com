/**
 * Navigation Component
 * Componente reutilizável para a navegação fixa no topo das páginas
 */

export class Navigation {
  constructor(options = {}) {
    this.options = {
      homeLink: options.homeLink || '#',
      links: options.links || [],
      ...options,
    };
  }

  render() {
    const linksHTML = this.options.links
      .map(
        (link) =>
          `<a href="${link.href}" class="text-sm font-medium text-slate-600 hover:text-brand transition-colors ${
            link.hidden ? 'hidden md:block' : ''
          }">${link.label}</a>`
      )
      .join('');

    const ctaButton = this.options.ctaButton
      ? `<a href="${this.options.ctaButton.href}" class="px-5 py-2.5 bg-brand hover:bg-brand-hover text-white rounded-lg transition-all shadow-lg shadow-brand/20 hover:shadow-brand/30 font-medium ${
          this.options.ctaButton.class || ''
        }">${this.options.ctaButton.label}</a>`
      : '';

    return `
      <nav class="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-lg border-b border-slate-200 transition-all duration-300" id="navbar">
        <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <!-- Logo -->
          <a href="${this.options.homeLink}" class="text-xl font-bold text-text-title tracking-tight hover:text-brand transition-colors">
            Gabriel Mendonça
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-8">
            ${linksHTML}
            ${ctaButton}
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden text-slate-700 text-2xl p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <i class="ph ph-list"></i>
          </button>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 py-6 px-6 flex flex-col gap-4 shadow-xl">
          ${this.options.links
            .map(
              (link) =>
                `<a href="${link.href}" class="text-lg font-medium text-slate-700 hover:text-brand transition-colors mobile-link">${link.label}</a>`
            )
            .join('')}
          ${this.options.ctaButton ? `<a href="${this.options.ctaButton.href}" class="text-lg font-medium text-brand mobile-link">${this.options.ctaButton.label}</a>` : ''}
        </div>
      </nav>
    `;
  }

  attachEventListeners() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }
  }

  mount(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = this.render();
      this.attachEventListeners();
    }
  }
}

export default Navigation;
