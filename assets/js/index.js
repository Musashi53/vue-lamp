const button = document.getElementById('button');
const light = document.getElementById('light');

function toggleButton() {
  button.classList.toggle('active');
  light.classList.toggle('on');
}
