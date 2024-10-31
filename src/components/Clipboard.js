document.addEventListener('DOMContentLoaded', () => {
    const copyEmailButton = document.getElementById('mail');
  
    if (copyEmailButton) {
      copyEmailButton.addEventListener('click', () => {
        const email = 'contacto@mariomg.es'
        navigator.clipboard.writeText(email).then(() => {
          //alert('Correo copiado al portapapeles');
        }).catch(err => {
          //console.error('Error al copiar el correo: ', err);
        });
      });
    }
  });