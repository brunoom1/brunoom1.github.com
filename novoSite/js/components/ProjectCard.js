/**
 * ProjectCard Component
 * Componente para representar um projeto no portfólio
 */

export class ProjectCard {
  constructor(options = {}) {
    this.title = options.title || 'Título do Projeto';
    this.description = options.description || 'Descrição do projeto';
    this.icon = options.icon || 'ph-laptop';
    this.image = options.image || null;
    this.tags = options.tags || [];
  }

  render() {
    const thumbnail = this.image
      ? `<img src="${this.image}" alt="${this.title}" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">`
      : `<i class="ph ${this.icon} text-6xl text-slate-300 group-hover:text-brand transition-colors transform group-hover:scale-110 duration-500"></i>`;

    return `
      <article class="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand/50 transition-all duration-300 shadow-sm hover:shadow-hover">
        <!-- Thumbnail -->
        <div class="h-52 bg-slate-100 relative overflow-hidden flex items-center justify-center group-hover:bg-slate-50 transition-colors">
          <div class="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent opacity-50"></div>
          ${thumbnail}
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">${this.title}</h3>
          <p class="text-sm text-slate-500 mb-4 line-clamp-3">
            ${this.description}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-2">
            ${this.tags.map((tag) => `<span class="px-2 py-1 text-[10px] uppercase font-bold tracking-wide bg-slate-100 text-slate-600 rounded border border-slate-200">${tag}</span>`).join('')}
          </div>
        </div>
      </article>
    `;
  }
}

export default ProjectCard;
