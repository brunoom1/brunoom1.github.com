/**
 * RepositoryCard Component
 * Componente para representar um repositório do GitHub
 */

export class RepositoryCard {
  constructor(repo = {}) {
    this.name = repo.name || 'Repository';
    this.description = repo.description || 'No description provided.';
    this.language = repo.language || 'Code';
    this.stars = repo.stargazers_count || 0;
    this.isFork = repo.fork || false;
    this.url = repo.html_url || '#';
    this.updatedAt = repo.updated_at || new Date().toISOString();
  }

  getUpdatedDate() {
    return new Date(this.updatedAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  render() {
    const iconClass = this.isFork ? 'ph-git-fork' : 'ph-git-repository';

    return `
      <article class="bg-white rounded-xl border border-slate-200 p-6 hover:border-brand/50 hover:shadow-hover transition-all flex flex-col h-full group">
        <div class="flex items-start justify-between mb-4">
          <div class="p-3 bg-blue-50 text-brand rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">
            <i class="ph ${iconClass} text-2xl"></i>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded" title="Stars">
              <i class="ph ph-star-fill text-yellow-400"></i> ${this.stars}
            </div>
          </div>
        </div>
        
        <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors truncate" title="${this.name}">
          ${this.name}
        </h3>
        
        <p class="text-sm text-slate-500 mb-6 flex-grow line-clamp-3">
          ${this.description}
        </p>
        
        <div class="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div class="flex items-center gap-3">
            <span class="text-xs font-semibold text-slate-600 flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-brand"></span> ${this.language}
            </span>
            <span class="text-[10px] text-slate-400" title="Last update">
              ${this.getUpdatedDate()}
            </span>
          </div>
          <a href="${this.url}" target="_blank" class="text-sm font-medium text-brand hover:text-brand-hover flex items-center gap-1">
            Ver <i class="ph ph-arrow-right"></i>
          </a>
        </div>
      </article>
    `;
  }
}

export default RepositoryCard;
