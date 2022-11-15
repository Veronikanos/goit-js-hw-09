const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

buttonStop.disabled = true;

buttonStart.addEventListener('click', startChangeColor);
buttonStop.addEventListener('click', stopChangeColor);

function startChangeColor() {
  timerId = setInterval(setColorToBody, 1000);
  changeBtnStatus();
}

function stopChangeColor() {
  changeBtnStatus();
  clearInterval(timerId);
}

function setColorToBody() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBtnStatus() {
  buttonStop.disabled = !buttonStop.disabled;
  buttonStart.disabled = !buttonStart.disabled;
}
