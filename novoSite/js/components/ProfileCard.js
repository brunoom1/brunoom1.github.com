/**
 * ProfileCard Component
 * Componente para exibir perfil profissional
 */

export class ProfileCard {
  constructor(options = {}) {
    this.name = options.name || 'Gabriel Mendonça';
    this.role = options.role || 'Desenvolvedor Fullstack & Mobile';
    this.rating = options.rating || 5.0;
    this.ratingLabel = options.ratingLabel || '(Workana)';
    this.location = options.location || 'Brasil';
    this.bio = options.bio || 'Especialista em transformar necessidades de negócio em soluções digitais robustas.';
    this.badge = options.badge || { text: 'Disponível', color: 'green' };
  }

  render() {
    const badgeColor = this.badge.color === 'green' ? 'bg-green-500' : 'bg-yellow-500';

    return `
      <section class="pt-32 pb-16 px-6 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-32 h-32 mx-auto rounded-full bg-white p-1 shadow-xl mb-6 relative group cursor-pointer">
            <div class="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
              <i class="ph ph-user text-5xl text-slate-300"></i>
            </div>
            <div class="absolute bottom-0 right-0 ${badgeColor} w-8 h-8 rounded-full border-4 border-white" title="${this.badge.text}"></div>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-2">${this.name}</h1>
          <p class="text-xl text-brand font-medium mb-6">${this.role}</p>
          
          <div class="flex justify-center items-center gap-6 mb-8 text-sm">
            <div class="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
              <i class="ph-fill ph-star"></i>
              <span class="font-bold text-slate-900">${this.rating}</span>
              <span class="text-slate-500">${this.ratingLabel}</span>
            </div>
            <div class="flex items-center gap-1 text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
              <i class="ph ph-map-pin"></i> ${this.location}
            </div>
          </div>

          <p class="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
            ${this.bio}
          </p>
        </div>
      </section>
    `;
  }
}

export default ProfileCard;
