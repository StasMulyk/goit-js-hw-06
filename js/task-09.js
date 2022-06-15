// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color
//     и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  textEl.textContent = hexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
