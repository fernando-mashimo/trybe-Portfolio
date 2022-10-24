const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');
const checkBox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counterDisplay = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
const studentInfo = document.querySelector('#studentInfo'); // captura ou cria alguns elementos que preciso para gerar a página final
const report = document.createElement('section');
report.setAttribute('id', 'form-data');
const nameDisplay = document.createElement('div');
const emailDisplay = document.createElement('div');
const houseDisplay = document.createElement('div');
const familyDisplay = document.createElement('div');
const subjectsDisplay = document.createElement('div');
const evaluationDisplay = document.createElement('div');
const commentsDisplay = document.createElement('div');

function validateLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
}

function enableSubmit(event) {
  if (event.target.checked !== true) {
    submitBtn.disabled = true;
  } else submitBtn.disabled = false;
}

function renderStudentInfo(inputName, inputLastName, inputEmail, house) {
  const family = document.querySelector('input[name="family"]:checked').value;
  const subjectList = document.querySelectorAll('input[type="checkbox"]:checked');
  const subject = [];
  for (let index = 0; index < subjectList.length - 1; index += 1) {
    subject.push(subjectList[index].value);
  }
  let subjectString = '';
  subjectString = subject.join(', ');
  const evaluation = document.querySelector('input[name="rate"]:checked').value;
  const comments = document.querySelector('#textarea').value;
  nameDisplay.innerText = `Nome: ${inputName} ${inputLastName}`;
  emailDisplay.innerText = `Email: ${inputEmail}`;
  houseDisplay.innerText = `Casa: ${house}`;
  familyDisplay.innerText = `Família: ${family}`;
  subjectsDisplay.innerText = `Matérias: ${subjectString}`;
  evaluationDisplay.innerText = `Avaliação: ${evaluation}`;
  commentsDisplay.innerText = `Observações: ${comments}`;
}

function submitData(event) {
  event.preventDefault();
  form.style.display = 'none';
  studentInfo.appendChild(report);
  report.appendChild(nameDisplay);
  report.appendChild(emailDisplay);
  report.appendChild(houseDisplay);
  report.appendChild(familyDisplay);
  report.appendChild(subjectsDisplay);
  report.appendChild(evaluationDisplay);
  report.appendChild(commentsDisplay);
  const inputName = document.querySelector('#input-name').value;
  const inputLastName = document.querySelector('#input-lastname').value;
  const inputEmail = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  renderStudentInfo(inputName, inputLastName, inputEmail, house);
}

function counter() {
  const typedChars = textArea.value.length;
  const remainingChars = 500 - typedChars;
  counterDisplay.innerText = `${remainingChars}`;
}

loginBtn.addEventListener('click', validateLogin);
checkBox.addEventListener('click', enableSubmit);
submitBtn.addEventListener('click', submitData); // ENVIAR
textArea.addEventListener('keyup', counter);
