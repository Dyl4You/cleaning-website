// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

// contact form → Cloudflare Worker
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const body = {
      name:    form.name.value,
      email:   form._replyto.value,
      message: form.message.value,
    };

    const res = await fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    toast(res.ok
      ? 'Thanks! We’ll reply soon ✉️'
      : 'Sorry—something went wrong 🛑');

    if (res.ok) form.reset();
  });

  function toast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.className = 'toast';
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 4000);
  }
}
