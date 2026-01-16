/**
 * ServiceCard Component
 * Componente para representar um serviço oferecido
 */

export class ServiceCard {
  constructor(options = {}) {
    this.icon = options.icon || 'ph-desktop';
    this.iconBg = options.iconBg || 'blue-50';
    this.iconColor = options.iconColor || 'text-brand';
    this.hoverBg = options.hoverBg || 'hover:bg-brand';
    this.hoverBorderColor = options.hoverBorderColor || 'hover:border-blue-100';
    this.title = options.title || 'Título do Serviço';
    this.description = options.description || 'Descrição do serviço';
  }

  render() {
    return `
      <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-soft ${this.hoverBorderColor} hover:shadow-hover transition-all group">
        <div class="w-14 h-14 bg-${this.iconBg} rounded-xl flex items-center justify-center ${this.iconColor} mb-6 group-hover:${this.hoverBg} group-hover:text-white transition-all">
          <i class="ph ${this.icon} text-3xl"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-3">${this.title}</h3>
        <p class="text-slate-500 text-sm leading-relaxed">
          ${this.description}
        </p>
      </div>
    `;
  }
}

export default ServiceCard;
