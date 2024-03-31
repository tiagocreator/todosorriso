'use strict';

// contact form 'fake sent' confirmation script
const form = document.querySelector('.contact-form');
const formText = document.querySelector('.form-text');
const formContent = document.querySelector('.form-content');
const sendFormBtn = document.querySelector('.send-form');
const sentIcon = '../src/assets/img/sent.png';

const submitForm = (e) => {
  e.preventDefault();
  formText.style.display = 'none';
  formContent.innerHTML = `
    <div>
      <p>Obrigado por preferir nossos serviços. Um atendente irá entrar em contato com você em breve pelo número de telefone. O horário de atendimento é de segunda a sexta das 08:00 as 18:00.</p>
      <img class='sent-icon' src='${sentIcon}' alt='' />
    </div>
  `;
  sendFormBtn.style.display = 'none';
};
form.addEventListener('submit', submitForm);
