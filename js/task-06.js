// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const input = document.querySelector('#validation-input');
const lengthInfo = document.querySelector('input[data-length]');
const inputLength = lengthInfo.dataset.length;

input.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == inputLength) {
        input.classList.remove('invalid');
        input.classList.add('valid')
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid')
    }
})
function event () {}