/**
 * Footer Component
 * Componente de rodapé reutilizável
 */

export class Footer {
  constructor(options = {}) {
    this.copyrightText = options.copyrightText || 'Gabriel Mendonça';
    this.additionalText = options.additionalText || '';
  }

  render() {
    const year = new Date().getFullYear();
    const additional = this.additionalText ? ` ${this.additionalText}` : '';

    return `
      <footer class="py-8 bg-white border-t border-slate-200 text-center">
        <p class="text-slate-500 text-sm">
          &copy; <span class="footer-year">${year}</span> ${this.copyrightText}.${additional}
        </p>
      </footer>
    `;
  }

  mount(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = this.render();
    }
  }
}

export default Footer;
