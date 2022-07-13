function alertLogin() {
  const senha = document.querySelector('#password').value;
  const email = document.getElementById('email').value;
  if (senha === '123456' && email === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function click() {
  document.getElementById('btn-login').addEventListener('click', alertLogin);
}

window.onload = click;
