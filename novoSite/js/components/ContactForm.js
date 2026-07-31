/**
 * ContactForm Component
 * Componente reutilizável para o formulário de contato com envio via API
 */

export class ContactForm {
  constructor(options = {}) {
    this.options = {
      endpoint: 'https://gabrielmendonca.com.br/api/contact',
      ...options,
    };
  }

  async submit(form) {
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;

    button.disabled = true;
    button.innerHTML = 'Enviando...';

    try {
      const data = new URLSearchParams(new FormData(form));
      const response = await fetch(this.options.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      this.showModal();
      form.reset();
    } catch (error) {
      console.error(error);
      alert('Não foi possível enviar sua mensagem. Tente novamente mais tarde.');
    } finally {
      button.disabled = false;
      button.innerHTML = originalText;
    }
  }

  showModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  hideModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  attachEventListeners() {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.submit(form);
      });
    }

    const closeBtn = document.getElementById('contact-modal-close');
    const overlay = document.getElementById('contact-modal');
    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', () => this.hideModal());
      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) this.hideModal();
      });
    }
  }
}

export default ContactForm;
