const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.buttonStart.addEventListener('click', onChangeColor);
refs.buttonStop.addEventListener('click', onStopChangeColor);

let timerId = null;

function onChangeColor() {
  refs.buttonStart.setAttribute('disabled', 'disabled');

  timerId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
}

function onStopChangeColor() {
  clearInterval(timerId);
  refs.buttonStart.removeAttribute('disabled');
}
