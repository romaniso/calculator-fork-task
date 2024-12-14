const { DivideByZeroError } = require("./divide-by-zero-error");

class Calculator {
  constructor() {
    this.operandA = null;
    this.operandB = null;
    this.operation = null;
    this.result = null;
  }

  calculate(operator, a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Operand A or B is not of type Number");
    } else if (
      operator === "+" ||
      operator === "-" ||
      operator === "/" ||
      operator === "*"
    ) {
      this.operandA = a;
      this.operandB = b;

      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          if (b !== 0) {
            return a / b;
          } else {
            throw new DivideByZeroError("Zero is not divisible");
          }
        default:
          throw new Error("Invalid operator!");
      }
    } else {
      throw new Error("Invalid operation sign inserted");
    }
  }
}

const calculator = new Calculator();

console.log(calculator.calculate("+", 2, 4));
console.log(calculator.calculate("-", 2, 4));
console.log(calculator.calculate("*", 2, 4));
console.log(calculator.calculate("/", 2, 4));
console.log(calculator.calculate("/", 2, 0));
