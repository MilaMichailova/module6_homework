function primeNumberUpTo1000() {
  let num = prompt("Введите число до 1000 (по умолчанию введется 0)", "");

  if (num === null) {
    alert("Вы не ввели значение, для повтора обновите страницу");

    return;
  }

  num = +num;

  if (!isNumber(num)) {
    alert(
      "Данные неверны (введен неподхоящий тип данных). Для повтора обновите страницу"
    );

    return;
  }

  if (num > 1000) {
    alert(
      "Данные неверны (введено число больше 1000). Для повтора обновите страницу"
    );

    return;
  }

  if (num === 0 || num === 1) {
    alert(
      "это не простое число (введено 0 или 1 введите другое число). Для повтора обновите страницу"
    );

    return;
  }

  if (!isNumSiple(num)) {
    alert(` ${num} - не простое число. Для повтора обновите страницу`);

    return;
  }

  alert(` ${num} - простое число. Для повтора обновите страницу`);
}

function isNumber(num) {
  let numType = typeof num;

  if (numType === "number" && !Number.isNaN(num)) {
    return true;
  }

  return false;
}

function isNumSiple(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}

primeNumberUpTo1000();
