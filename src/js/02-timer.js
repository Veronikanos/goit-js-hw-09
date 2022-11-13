import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const myInput = document.querySelector('input#datetime-picker');
const btnEl = document.querySelector('[data-start]');
const NumbersEl = document.querySelectorAll('.value');

let intervalId;
let selectedDate;

btnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];

    if (selectedDates[0] <= new Date()) {
      btnEl.disabled = true;
      Notify.failure('Please choose a date in the future');
    } else {
      btnEl.disabled = false;
    }
  },
};
const fp = flatpickr(myInput, options); // flatpickr

btnEl.addEventListener('click', startTimer);

function startTimer(event) {
  intervalId = setInterval(() => {
    let remainingTime = selectedDate - new Date();

    if (remainingTime < 0) {
      Notify.info('Time is over!');
      clearInterval(intervalId);
      return;
    }
    renderTimer(convertMs(remainingTime));
  }, 1000);
}

function renderTimer(obj) {
  const values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    NumbersEl[i].textContent = addLeadingZero(values[i]) || '00';
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
