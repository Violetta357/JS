// задание 1

function min(a, b) {
  return a < b ? a : b;
  // return Math.min(a,b) //второй вариант
}
console.log(min(4, 8));

//  задание 2

function num(number) {
  return number % 2 == 0 ? "Число четное" : "Число нечетное";
}
console.log(num(4));
console.log(num(7));

// задание 3

function printSquare(number) {
  return number ** 2;
}
console.log(printSquare(5));

function returnSquare(number) {
  return number ** 2;
}
const result = returnSquare(10);
console.log(result);

// задание 4

function userAge() {
  let age = prompt("Сколько тебе лет?");
  if (age < 0) {
    return "Вы ввели неправильное значение";
  } else if (age <= 12) {
    return "Привет, друг!";
  } else {
    return "Добро пожаловать!";
  }
}
alert(userAge());

// задание 5

function mult(c, d) {
  if (isNaN(c) || isNaN(d)) {
    return "Одно или оба значения не являются числом";
  } else {
    return c * d;
  }
}
console.log(mult(12, 2));
console.log(mult("a", 2));

// задание 6

function cubeNumber() {
  let n = prompt("Введите число:", "");
  if (isNaN(n)) {
    return "Переданный параметр не является числом";
  } else {
    const res = n ** 3;
    return `${n} в кубе равняется ${res}`;
  }
}
alert(cubeNumber());

// задание 7

function area() {
  return Math.PI * this.radius ** 2;
}
function perimeter() {
  return 2 * Math.PI * this.radius;
}

let circle1 = {
  radius: 5,
  getArea: area,
  getPerimeter: perimeter,
};

let circle2 = {
  radius: 7,
  getArea: area,
  getPerimeter: perimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
