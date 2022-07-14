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

const contador = document.getElementById('counter');

contador.innerHTML = 500;

const textArea = document.getElementById('textarea');

function counter() {
  console.log(textArea.value.length);
  contador.innerText = 500 - textArea.value.length;
}

textArea.addEventListener('keyup', counter);

/* requisito 21 */
/* pegar todos elementos */

const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const houseInput = document.getElementById('house');
const familyInput = document.getElementsByClassName('family');
const subjectInput = document.getElementsByClassName('subject');
const ratioInput = document.getElementsByClassName('ratio-input');
// const textAreaInput = document.getElementById('textarea');

const forFamily = () => {
  const familia = [];
  for (let i = 0; i < familyInput.length; i += 1) {
    if (familyInput[i].checked === true) {
      familia.push(familyInput[i].value);
    }
  }
  return familia;
};

const forSubjetc = () => {
  const materia = [];
  for (let index = 0; index < subjectInput.length; index += 1) {
    if (subjectInput[index].checked === true) {
      materia.push(` ${subjectInput[index].value}`);
    }
  }
  return materia;
};

function forRatio() {
  const avaliacao = [];
  for (let i = 0; i < ratioInput.length; i += 1) {
    if (ratioInput[i].checked === true) {
      avaliacao.push(ratioInput[i].value);
    }
  }

  return avaliacao;
}

function chamarfuncao() {
  click();
  counter();
}
const form = document.querySelector('main');
const divData = document.getElementById('form-data');
const btnEnviar = document.getElementById('submit-btn');
btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  divData.innerHTML = `Nome: ${firstName.value} ${lastName.value} 
  
  Email: ${emailInput.value}
  
  Casa:  ${houseInput.value} Família: ${forFamily()} 
  
  Matérias: ${forSubjetc()} Avaliação: ${forRatio()}
  
  Observações: ${textArea.value} `;
  form.style.display = 'none';
});

window.onload = chamarfuncao;
