function alertLogin() {
  const senha = document.querySelector('#password').value;
  const email = document.getElementById('email').value;
  if (senha === '123456' && email === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}

function click() {
  document.getElementById('btn-login').addEventListener('click', alertLogin);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
}

window.onload = click;
