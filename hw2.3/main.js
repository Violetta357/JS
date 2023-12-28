// задание 1

let password = 'пароль';
let user = prompt('Введите пароль');

if (password === user) {
    alert ('Пароль введен верно')
} else {
    alert ('Пароль введен неправильно')
}

// задание 2

let c = 7;

if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('неверно');
}

// задание 3

let d = 150;
let e = 99;

if (d > 100 || e > 100) {
    console.log('верно');
} else {
    console.log('неверно');
}

// задание 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b))

// задание 5

let monthNumber = Number(prompt("Введите порядковый номер месяца"));

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осень");
    break;
  default:
    alert('Такого месяца не существует')
    break;
}


