const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

buttonStop.disabled = true;

buttonStart.addEventListener('click', startChangeColor);
buttonStop.addEventListener('click', stopChangeColor);

function startChangeColor(event) {
  timerId = setInterval(callback, 1000);

  buttonStop.disabled = !buttonStop.disabled;
  buttonStart.disabled = !buttonStart.disabled;
}

function stopChangeColor(event) {
  buttonStop.disabled = !buttonStop.disabled;
  buttonStart.disabled = !buttonStart.disabled;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function callback() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}