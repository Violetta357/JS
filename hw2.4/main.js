// задание 1

let i = 0;
while (i < 2) {
  console.log("привет");
  i++;
}

// задание 2

let r = 1;
while (r <= 5) {
  console.log(r);
  r++;
}

// задание 3

let x = 7;
while (x <= 22) {
  console.log(x);
  x++;
}

// задание 4

const obj = {
  'Коля': 200, 
  'Вася': 300,
  'Петя': 400,
}
for (const key in obj) {
   alert(`${key} - зарплата ${obj[key]} долларов`)
    
  }

  // задание 5

  let n = 1000;
  let num = 0;
  while (n >= 50) {
    n = n / 2;
    num++
  }
  console.log(n);
  console.log(num);
