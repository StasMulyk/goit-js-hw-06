// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


input.addEventListener('input', addInputToOutput);
function addInputToOutput() {
    input.value.trim() === ""
        ? output.textContent = "Anonymous"
        : output.textContent = input.value;
}