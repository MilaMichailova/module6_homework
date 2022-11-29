let firstNumber = prompt("введите 1-е число (см. результат в консоли)");
let secondNumber = prompt("введите 2-е число (см. результат в консоли)");

let numderA = +firstNumber;
let numberB = +secondNumber;

let count = numderA;
let intervalId;

function func() {
  intervalId = setInterval(counter, 1000);
}

function counter() {
  console.log(count);
  count++;

  if (count > numberB) {
    clearInterval(intervalId);
    console.log("Все числа выведены!");
  }
}

func();
