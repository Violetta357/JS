// задание 1
const numbers = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]==10)
  break
console.log(numbers[i]);
}

// задание 2

const arr = [1, 5, 4, 10, 0, 3]
const position  = arr.indexOf(4)
console.log(position);

// задание 3

let line = [1, 3, 5, 10, 20]
line = line.join(' ')
console.log(line);