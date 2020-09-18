const shareFormValidate = () => {
  const form = document.getElementById('share-form');
  const name = document.getElementById('name-friend');
  const email = document.getElementById('email-friend');
  const warnContent = document.getElementById('share-warnings');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let warnings = '';
    const regexEmail = /^\w+@\w+(\.[a-z]{2,4}){1,2}$/;

    if (name.value.length === 0) {
      warnings += 'Preencha campo nome!<br>';
    }
    if (!regexEmail.test(email.value)) {
      warnings += 'Preencha email válido!<br>';
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

export default shareFormValidate;
