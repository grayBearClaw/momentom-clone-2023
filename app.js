const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(5, 10);
const minusResult = calculator.minus(plusResult, 5);
const multiplyResult = calculator.multiply(minusResult, 3);
const divideResult = calculator.divide(multiplyResult, 2);
const squareResult = calculator.square(divideResult, 2);

console.log(plusResult);
console.log(minusResult);
console.log(multiplyResult);
console.log(divideResult);
console.log(squareResult);
