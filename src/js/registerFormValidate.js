/**
 * This function validates the form fields and renders
 * on the screen if there was an error or success.
 */
const registerFormValidate = () => {
  const form = document.getElementById('register-form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  const warnContent = document.getElementById('register-warnings');
  const male = document.getElementById('male');
  const female = document.getElementById('female');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (warnContent.classList.contains('success')) {
      warnContent.classList.remove('success');
    }

    let warnings = '';
    const regexEmail = /^.+@\w+(\.[a-z]{2,4}){1,2}$/;

    if (name.value.length === 0 || cpf.value.length === 0) {
      warnings += 'Preencha todos campos!<br>';
    }
    if (!regexEmail.test(email.value)) {
      warnings += 'Preencha email válido!<br>';
    }
    if (!male.checked && !female.checked) {
      warnings += 'Selecione gênero!<br>';
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
      cpf.value = '';
      male.checked = false;
      female.checked = false;
    }
  });
};

export default registerFormValidate;
