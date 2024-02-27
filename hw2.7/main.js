// задание 1
let str = "js";
str = str.toUpperCase();
console.log(str);

// задание 2
function searchStart(arr, str) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i].toLowerCase();
    if (item.startsWith(str.toLowerCase())) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
console.log(searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"));
console.log(searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"));

// задание 3
let num = 32.58884;
let down = Math.floor(num);
let up = Math.ceil(num);
let near = Math.round(num);
console.log(down, up, near);

// задание 4
const number = [52, 53, 49, 77, 21, 32]
const min = Math.min(...number);
const max = Math.max(...number);
console.log(min,max);

// задание 5
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(1,10));

// задание 6
function getRandomArrNumbers(n){
  const result = [];

  for (let i = 0; i < n/2; i++){
    result.push(Math.round(Math.random() * (n+1)))
  }
  return result
}
console.log(getRandomArrNumbers(12));

// задание 7
function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomNumber(1,5));

// задание 8
let date = new Date();
console.log(date);

// задание 9
let currentDate = new Date();
let nextDate = new Date();
let addDate = 73;
nextDate.setDate(currentDate.getDate() + addDate);
nextDate.toLocaleTimeString('ru-RU')
console.log(nextDate);
