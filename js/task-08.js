// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
//     собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form');
const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');

formEl.addEventListener("submit", onFormSubmit);

let user = {
    email: '',
    password: '',
}

function onFormSubmit(event) {
    event.preventDefault();
    
    if (emailEl.value === '' || passwordEl.value === '') {
        return console.log("Please fill all the fields!")
    }
    else {
        user.email = emailEl.value;
        user.password = passwordEl.value;
    }
    event.currentTarget.reset()
   
}