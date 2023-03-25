function setDataName () {
  const dataName = document.getElementById('data-name');
  const inputDataName = document.getElementById('input-name');
  const inputDataLastName = document.getElementById('input-lastname');

  dataName.innerHTML = `Nome: ${inputDataName.value} ${inputDataLastName.value}`;
}

function setDataEmail () {
  const dataEmail = document.getElementById('data-email');
  const inputDataEmail = document.getElementById('input-email');

  dataEmail.innerHTML = `Email: ${inputDataEmail.value}`;
}

function setDataHouse () {
  const inputHouse = document.getElementById('house');
  const dataHouse = document.getElementById('data-house');
  const inputDataHouse = inputHouse.options[inputHouse.selectedIndex];

  dataHouse.innerHTML = `Casa: ${inputDataHouse.text}`;
}

function setDataFamily () {
  const dataFamily = document.getElementById('data-family');
  const inputDataFamily = document.querySelector('input[name="family"]:checked');

  dataFamily.innerHTML = `Família: ${inputDataFamily.value}`;
}

function setDataMatter () {
  const dataMatter = document.getElementById('data-matter');
  const inputDataMatter = document.querySelectorAll('.subject:checked');
  const matterArray = [];

  inputDataMatter.forEach((currentValue) => {
    matterArray.push(currentValue.value);
  });

  dataMatter.innerHTML = `Matérias: ${matterArray.join(', ')}`;
}

function setDataEvaluation () {
  const dataEvaluation = document.getElementById('data-evaluation');
  const inputDataEvaluation = document.querySelector('input[name="rate"]:checked');

  dataEvaluation.innerHTML = `Avaliação: ${inputDataEvaluation.value}`;
}

function setDataTextarea () {
  const dataTextarea = document.getElementById('data-textarea');
  const inputDataTextarea = document.getElementById('textarea');

  dataTextarea.innerHTML = `Observações: ${inputDataTextarea.value}`;
}

function generateForm (event) {
  event.preventDefault();

  const formData = document.getElementById('form-data');
  const evaluationForm = document.getElementById('evaluation-form');

  setDataName();
  setDataEmail();
  setDataHouse();
  setDataFamily();
  setDataMatter();
  setDataEvaluation();
  setDataTextarea();
  evaluationForm.style.display = 'none';
  formData.style.display = 'block';
}

function agreementListener () {
  const inputAgreement = document.getElementById('agreement');
  const submitButton = document.getElementById('submit-btn');

  if (inputAgreement.checked === false) {
    submitButton.setAttribute('disabled', 'disabled');
  } else if (inputAgreement.checked === true) {
    submitButton.removeAttribute('disabled');
  }
}

function submitLogin (event) {
  event.preventDefault();

  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  }
}

function verifyLogin () {
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  if (emailInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    alert('Email ou senha inválidos.');
  }
}

function counterListener () {
  const inputCounter = document.getElementById('counter');
  const inputTextarea = document.getElementById('textarea');
  const count = 500 - inputTextarea.value.length;

  inputCounter.innerHTML = (count < 0) ? 0 : count;
}

window.onload = () => {
  const loginForm = document.querySelector('.trybewarts-login');
  const loginButton = document.getElementById('login-btn');
  const inputTextarea = document.getElementById('textarea');
  const inputAgreement = document.getElementById('agreement');
  const evaluationForm = document.getElementById('evaluation-form');

  loginForm.addEventListener('submit', submitLogin);
  loginButton.addEventListener('click', verifyLogin);
  inputTextarea.addEventListener('input', counterListener);
  inputAgreement.addEventListener('change', agreementListener);
  evaluationForm.addEventListener('submit', generateForm);
};
