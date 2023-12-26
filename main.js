// первое задание

let a = 10;
alert(a);

a = 20;
alert(a);


// 2 задание 

let year = 2007;
alert(`год выпуска Iphone ${year}`)

// 3 задание 

let nameJS = (`Брендан Эйх`);
alert(`создатель JavaScript - ${nameJS}`)

// 4 задание 

let b = 10;
let c = 2;
alert(` сумма - ${b+c}\n разность - ${b-c}\n произведение - ${b*c}\n частное - ${b/c}`)

// 5 задание

let result = 2**5;
alert(result)

// 6 задание 

let m = 9;
let n = 2;
alert(m%n)

// 7 задание 

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// 8 задание 

let age = prompt(`Сколько вам лет?`);
alert(age)

// 9 задание 

const user = {
    name:`Виолетта`,
    age: 31,
    isAdmin: true
}

// задание 9.1

user [`city of residence`] = `Москва`;

// задание 9.2

user.age = 25;

// задание 9.3

delete user [`city of residence`];

// задание 9.4

let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert(user[info]);