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

    let warnings = '';
    const regexEmail = /^\w+@\w+(\.[a-z]{2,4}){1,2}$/;

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
      warnContent.innerHTML = warnings;
    } else {
      warnContent.style.color = 'green';
      warnContent.style.fontStyle = 'normal';
      warnContent.style.fontWeight = 'bold';
      warnContent.innerHTML = 'Enviado!';
    }
  });
};

export default registerFormValidate;
