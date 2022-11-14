import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');
// const hh = document.querySelectorAll('input');

formEl.addEventListener('submit', onSubmitPromisesHandler);

function onSubmitPromisesHandler(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target.elements;

  let firstDelay = Number(delay.value);
  let stepDelay = Number(step.value);
  let amountPromises = Number(amount.value);

  for (let i = 0; i < amountPromises; i++) {
    createPromise(i, firstDelay);
    firstDelay += stepDelay;
  }
}

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

createPromise
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
