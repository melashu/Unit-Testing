class calculator {
  static add = (a, b) => {
    return a + b;
  };
  static subtract = (a, b) => a - b;
  static divide = (a, b) => a / b;
  static multiply = (a, b) => a * b;
  static capitalize = (str) => str[0].toUpperCase();
}

module.exports = calculator;
