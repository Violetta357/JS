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
