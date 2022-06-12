const button = document.getElementById('button');
const light = document.getElementById('light');

function lightButton() {
  button.classList.toggle('active');
  light.classList.toggle('on');
}

const nav = document.querySelector('.nav');

function navToggle() {
  nav.classList.toggle('open-nav');
}