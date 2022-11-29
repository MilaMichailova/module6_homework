let firstNumber = prompt(
  "введите 1-е натуральное число (см. результат в консоли)"
);
let secondNumber = prompt(
  "введите 2-е натуральное число (см. результат в консоли)"
);

let numberA = +firstNumber;
let numberB = +secondNumber;

let isNatural = (num) => {
  if (typeof num !== "number") {
    console.log("Bведенное значение неверно!");

    return false;
  }

  if (Number.isNaN(num)) {
    console.log("Bведенное значение неверно! ");

    return false;
  }

  if (num <= 0 || Math.floor(num) !== num) {
    console.log("Bведенное значение неверно!");

    return false;
  }

  return true;
};

let exponentiation = (base, exponent) => {
  let result = Math.pow(base, exponent);

  return console.log(result);
};

isNatural(numberA);
isNatural(numberB);

if (isNatural(numberA) === true && isNatural(numberB) === true) {
  exponentiation(numberA, numberB);
}
