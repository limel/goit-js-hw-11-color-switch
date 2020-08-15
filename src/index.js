import './styles.css';
import './js/color-switch';

// const refs = {
//   btnStart: document.querySelector('button[data-action="start"]'),
//   btnStop: document.querySelector('button[data-action="stop"]'),
//   body: document.querySelector('body'),
// };
// let intervalId = null;

// refs.btnStart.addEventListener('click', changeColor);
// refs.btnStop.addEventListener('click', stopChangeColor);

// const colors = [
//   '#5146F2',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// function changeColor() {
//   refs.btnStart.setAttribute('disabled', 'disabled');
//   intervalId = setInterval(() => {
//     const backgroundColorBody =
//       colors[randomIntegerFromInterval(0, colors.length)];
//     refs.body.style.backgroundColor = backgroundColorBody;
//   }, 1000);
// }

// function stopChangeColor() {
//   refs.btnStart.removeAttribute('disabled');
//   clearInterval(intervalId);
// }

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
