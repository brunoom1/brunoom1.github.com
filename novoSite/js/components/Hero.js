/**
 * Hero Component
 * Componente para a seção hero/banner da página
 */

export class Hero {
  constructor(options = {}) {
    this.title = options.title || 'Software Developer';
    this.subtitle = options.subtitle || 'Fullstack';
    this.description = options.description || 'Transformo suas ideias em soluções digitais robustas';
    this.primaryButton = options.primaryButton || { label: 'Solicitar Orçamento', href: '#contato' };
    this.secondaryButton = options.secondaryButton || { label: 'Ver Portfólio', href: '#projetos' };
    this.showScrollIndicator = options.showScrollIndicator !== false;
  }

  render() {
    const scrollIndicator = this.showScrollIndicator
      ? `<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <i class="ph ph-caret-down text-slate-400 text-2xl"></i>
        </div>`
      : '';

    return `
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-bg-main">
        <!-- Background Elements -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>

        <div class="max-w-4xl mx-auto text-center relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold tracking-widest text-brand uppercase bg-blue-50 rounded-full border border-blue-100 animate-fade-in-up">
            <span class="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            Disponível para Freelance
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            ${this.title} <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">${this.subtitle}</span>
          </h1>
          
          <p class="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            ${this.description}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="${this.primaryButton.href}" class="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transform hover:-translate-y-1">
              ${this.primaryButton.label}
            </a>
            <a href="${this.secondaryButton.href}" class="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-all border border-slate-200 hover:border-slate-300 shadow-sm">
              ${this.secondaryButton.label}
            </a>
          </div>
        </div>
        
        ${scrollIndicator}
      </section>
    `;
  }
}

export default Hero;
