// задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 10) break;
  console.log(numbers[i]);
}

// задание 2

const arr = [1, 5, 4, 10, 0, 3];
const position = arr.indexOf(4);
console.log(position);

// задание 3

let line = [1, 3, 5, 10, 20];
line = line.join(" ");
console.log(line);

// задание 4

let array = [];
for (let i = 0; i < 3; i++) {
  array[i] = [];
  for (let a = 0; a < 3; a++) {
    array[i][a] = 1;
  }
}
console.log(array);

// задание 5

let numm = [1, 1, 1];
numm.push(2, 2, 2);
console.log(numm);

// задание 6

let arrNumber = [9, 8, 7, "a", 6, 5];
arrNumber.sort().pop();
console.log(arrNumber);

// задание 7

let number = [9, 8, 7, 6, 5];
let userNumber = +prompt("Угадай число от 1 до 10");
if (number.includes(userNumber)) {
  alert("Угадал!");
} else if (isNaN(userNumber)) {
  alert("Введенное значение не явялется числом");
} else {
  alert("Не угадал!");
}

// задание 8

let greet = "abcdef";
console.log([...greet].reverse().join(""));

// задание 9

const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(arr1.flat());

// задание  10

let arrayNum = [1, 7, 5, 3, 9];
for (let i = 0; i < arrayNum.length - 1; i++) {
  console.log(arrayNum[i] + arrayNum[i + 1]);
}

// задание 11

let element = [2, 11, 17, 8];
const square = element.map((el) => el ** 2);
console.log(square);

// задание 12

let word = ["слово", "", "слог", "длинное предложение", "буква"];
const arrWord = word.map(function (arr) {
  return arr.length;
});
console.log(arrWord);

// 13 задание

function filterPositive(array2) {
  const arr = [];
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] < 0) {
      arr.push(array2[i]);
    }
  }
  return arr;
}
let array2 = [5, -100, 55, 74, -5, -700, 333];
let negativeNumbers = filterPositive(array2);
console.log(negativeNumbers);
