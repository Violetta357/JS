// задание 1

function min (a,b ) {
  return a < b ? a : b 
  // return Math.min(a,b) //второй вариант
}
 console.log(min(4,8));

//  задание 2

function num (number) {
  return number % 2 == 0 ? 'Число четное' : 'Число нечетное'
  }
  console.log(num(4));
  console.log(num(7));