document.addEventListener('DOMContentLoaded', () => {
  const copyEmailButton = document.getElementById('mail');

  if (copyEmailButton) {
    // Crear el mensaje flotante si no existe
    let tooltip = document.createElement('div');
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

    copyEmailButton.addEventListener('click', () => {
      const email = 'contacto@mariomg.es';
      navigator.clipboard.writeText(email).then(() => {
        tooltip.style.opacity = '1';
        setTimeout(() => {
          tooltip.style.opacity = '0';
        }, 2000);
      }).catch(err => {
        console.error('Error al copiar el correo: ', err);
      });
    });
  }
});
