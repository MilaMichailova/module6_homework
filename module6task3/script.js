function getSumFunc(firstTerm) {
  return function (secondTerm) {
    return firstTerm + secondTerm;
  };
}

let getResult = getSumFunc(3);

console.log(getResult(2));
