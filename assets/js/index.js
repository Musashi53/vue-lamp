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

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

scrollReveal.reveal(`.home__container`);
