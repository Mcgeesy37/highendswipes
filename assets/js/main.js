(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // WhatsApp links (EDIT THIS)
  const WHATSAPP_NUMBER_INTL = "491234567890"; // <-- HIER deine Nummer im internationalen Format (ohne +, ohne 00)
  const DEFAULT_TEXT = "Hi Highendswipes, ich brauche Hilfe mit meiner Website. Hier ist der Link: ";

  function buildWhatsAppUrl() {
    const text = encodeURIComponent(DEFAULT_TEXT);
    return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${text}`;
  }

  const waBtn = document.getElementById('waBtn');
  const waFloat = document.getElementById('waFloat');
  [waBtn, waFloat].forEach(el => {
    if (el) el.setAttribute('href', buildWhatsAppUrl());
  });

  // Mailto from form (works on GitHub Pages)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const url = (data.get('url') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      const subject = encodeURIComponent(`Anfrage Highendswipes – ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nE-Mail: ${email}\nWebsite: ${url}\n\nNachricht:\n${message}\n`
      );

      // EDIT THIS EMAIL
      const to = "deine-mail@domain.de";
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();
