function isInteger(num) {
  return Number.isInteger(num); //функція повертає "істину", якщо число ціле
}

function findPrimes(a, b) {
  let res = ""; //змінна, що приймає значення

  if (a < b) {
    for (i = a + 1; i < b; i++) {
      res += i + " "; //якщо a < b, підібрати всі числа між a і b та записати їх ч-з пробіл
    }
  } else if (a > b) {
    for (i = b + 1; i < a; i++) {
      res += i + " "; //якщо b < a, підібрати всі числа між a і b та записати їх ч-з пробіл
    }
  } else {
    res = "...";
  }

  return res; //повернути результат
}

alert("1:"); //повідомлення про першу частину завдання

alert(isInteger(1)); // true
alert(isInteger(1.5)); // false
alert(isInteger(-0.5)); // false

alert("2:");

let a = +prompt("a =", ""); //введення числа
let b = +prompt("b =", ""); //введення числа
alert(findPrimes(a, b)); //виконання функції та виведення результату
