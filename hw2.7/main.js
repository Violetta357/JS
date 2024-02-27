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