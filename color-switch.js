const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

btnStart.addEventListener("click", onBtnStartClick);
btnStop.addEventListener("click", onBtnStopClick);

let timerId = null;

function onBtnStartClick() {
  timerId = setInterval(changeColor, 1000);
  btnStart.disabled = true;
}

function onBtnStopClick() {
  clearInterval(timerId);
  btnStart.disabled = false;
}

function changeColor() {
  const index = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[index];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
