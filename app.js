const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  square: function (a, b) {
    console.log(a ** b);
  },
};

calculator.plus(1, 1);
calculator.minus(5, 1);
calculator.multiply(2, 9);
calculator.divide(32, 4);
calculator.square(2, 4);
