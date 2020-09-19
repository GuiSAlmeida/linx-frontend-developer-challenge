/**
 * This function validates the form fields and renders
 * on the screen if there was an error or success.
 */
const shareFormValidate = () => {
  const form = document.getElementById('share-form');
  const name = document.getElementById('name-friend');
  const email = document.getElementById('email-friend');
  const warnContent = document.getElementById('share-warnings');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (warnContent.classList.contains('success')) {
      warnContent.classList.remove('success');
    }

    let warnings = '';
    const regexEmail = /^.+@\w+(\.[a-z]{2,4}){1,2}$/;

    if (name.value.length === 0) {
      warnings += 'Preencha campo nome!<br>';
    }
    if (!regexEmail.test(email.value)) {
      warnings += 'Preencha email válido!<br>';
    }
    if (warnings.length > 0) {
      warnContent.classList.add('warnings');
      warnContent.innerHTML = warnings;
    } else {
      if (warnContent.classList.contains('warnings')) {
        warnContent.classList.remove('warnings');
      }
      warnContent.classList.add('success');
      warnContent.innerHTML = 'Enviado!';

      name.value = '';
      email.value = '';
    }
  });
};

export default shareFormValidate;
