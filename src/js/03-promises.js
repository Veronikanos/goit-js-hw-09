import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');

formEl.addEventListener('submit', onSubmitPromisesHandler);

function onSubmitPromisesHandler(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target.elements;

  let firstDelay = Number(delay.value);
  let stepDelay = Number(step.value);
  let amountPromises = Number(amount.value);

  for (let i = 0; i < amountPromises; i++) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
      });
    firstDelay += stepDelay;
  }
}

function createPromise(position, delay) {
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
}
