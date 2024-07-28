document.addEventListener('DOMContentLoaded', () => {
    const copyEmailButton = document.getElementById('mail');
  
    if (copyEmailButton) {
      copyEmailButton.addEventListener('click', () => {
        const email = 'mmartin.mrmg@gmail.com'
        navigator.clipboard.writeText(email).then(() => {
          //alert('Correo copiado al portapapeles');
        }).catch(err => {
          //console.error('Error al copiar el correo: ', err);
        });
      });
    }
  });