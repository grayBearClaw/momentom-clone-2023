// function은 계속 반복해서 사용할 수 있는 코드 조각
// function은 ( )가 필요, 괄호 안에 있는 것을 인수(argument)라고 함
function sayHello(nameOfPerson, age) {
  console.log("Hello! My name is " + nameOfPerson + " and I'm " + age);
}

sayHello("Gray Bear", 39);
sayHello("Red Bear", 10);
sayHello("Pink Bear", 2);

// 계산기 만들기
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function divide(a, b) {
  console.log(a / b);
}

plus(10, 25);
divide(25, 5);

// player가 인사하는 function
const player = {
  name: "Gray Bear",
  sayHi: function (otherPersonsName) {
    console.log("Hi! " + otherPersonsName + " nice to meet you!");
  },
};

player.sayHi("JP");
player.sayHi("Sein");
