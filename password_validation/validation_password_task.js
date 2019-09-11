// You need to write regex that will validate a password to make sure it meets the following criteria:
// Вам нужно написать регулярное выражение, которое проверит пароль, чтобы убедиться, что оно соответствует следующим критериям:
// + At least six characters long // Не менее шести символов
// + contains a lowercase letter // содержит строчную букву
// + contains an uppercase letter // содержит заглавную букву
// + contains a number // содержит номер
// + Valid passwords will only be alphanumeric characters // Допустимые пароли будут состоять только из буквенно-цифровых символов

// + попрошу пользователя ввести пароль // done
// + первая проверка на длину пароля // done
// второе условие, что пароль должен состоять только из букв и цифр
// третья проверка на обязательное содержание буквы в нижнем регистре
// четвёртая проверка на обязательное содержание буквы в верхнем регистре
// пятая проверка на обязательное содержание цифры

// готово почти: https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

function validatePassword() {
    var userPassword = prompt('Введите пароль минимум из 6 символов без пробелов, состоящий только из букв и цифр');
    console.log(userPassword);

    for (;;) {
        if (userPassword.length < 6) {
            alert('Пароль слишком короткий, введите не менее 6 символов');
            validatePassword();
        }
        if (userPassword.search(/[@#$%^&*]/) != -1) {
            alert("В вашем пароле должны быть только буквы и цифры");
            validatePassword();
        }
        if (userPassword.search(/[' ']/) != -1) {
            alert('В вашем пароле не должно быть пробелов');
            validatePassword();
        }
        if (userPassword.search(/[a-z]/) == -1) { // из-за флага i поиск не чувствителен к регистру, поэтому i убрала
            alert("В вашем пароле должна быть как минимум одна строчная буква");
            validatePassword();
        }
        if (userPassword.search(/[A-Z]/) == -1) { // из-за флага i поиск не чувствителен к регистру, поэтому i убрала
            alert("В вашем пароле должна быть как минимум одна заглавная буква");
            validatePassword();
        }
        if (userPassword.search(/[0-9]/) == -1) {
            alert("В вашем пароле должна быть как минимум одна цифра");
            validatePassword();
        } else {
            break;
        }
    }
    return alert('Добро пожаловать!');
}
validatePassword();