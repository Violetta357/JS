// задание 1

const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

console.log(people.sort((a, b) => a.age - b.age));

//  задание 2

function map(arr, ruleFunction) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(ruleFunction(arr[i]));
  }
  return result;
}

function filter(arr, ruleFunction) {
  const mapResult = map(arr, ruleFunction);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (mapResult[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
function isPositive(num) {
  return num > 0;
}
function isMale(person) {
  return person.gender === "male";
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(peoples, isMale));

// задание 3

let time = 0; // переменная с которой начинается отсчет
const timeInterval = setInterval(function () {
  console.log(new Date());
  time += 3; // шаг интервала
  if (time >= 30) {
    // условие по истечении 30 секунд
    clearInterval(timeInterval);
    console.log("30 секунд прошло");
  }
}, 3000); // новое время по прошествию 3 секунд

// задание 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб!");
});
