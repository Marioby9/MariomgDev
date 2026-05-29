const setupClipboardEmail = () => {
  const copyEmailButton = document.getElementById('mail');
  const emailText = document.getElementById('contact-email');

  if (!copyEmailButton) {
    return;
  }

  const email = ['contacto', '@', 'mariomg.es'].join('');

  if (emailText) {
    emailText.textContent = email;
  }

  if (copyEmailButton.dataset.clipboardReady === 'true') {
    return;
  }

  const tooltip = document.createElement('div');
  tooltip.textContent = 'Copiado';
  tooltip.className = 'email-tooltip';
  tooltip.style.cssText = `
    position: absolute;
    background-color: black;
    color: white;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.875rem;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    margin-top: 5px;
    z-index: 10;
  `;

  copyEmailButton.style.position = 'relative';
  copyEmailButton.appendChild(tooltip);

  copyEmailButton.addEventListener('click', (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      tooltip.style.opacity = '1';
      setTimeout(() => {
        tooltip.style.opacity = '0';
      }, 2000);
    }).catch((err) => {
      console.error('Error al copiar el correo: ', err);
    });
  });

  copyEmailButton.dataset.clipboardReady = 'true';
};

document.addEventListener('DOMContentLoaded', setupClipboardEmail);
document.addEventListener('astro:page-load', setupClipboardEmail);
