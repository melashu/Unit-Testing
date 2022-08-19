const calculator = require("./calculator");

describe("Add number", () => {
  test("Add 4 and 5 ", () => {
    //Arrange
    const expectedValue = 9;

    //Act
    const actualValue = calculator.add(4, 5);

    //Assert
    expect(actualValue).toBe(expectedValue);
  });
  test("Add 0 and 5 ", () => {
    const expectedValue = 5;
    const actualValue = calculator.add(0, 5);
    expect(actualValue).toBe(expectedValue);
  });
  test("Add 1 and -9 ", () => {
    const expectedValue = -8;
    const actualValue = calculator.add(1, -9);
    expect(actualValue).toBe(expectedValue);
  });
  test("Add 25 and 5 ", () => {
    const expectedValue = 30;
    const actualValue = calculator.add(25, 5);
    expect(actualValue).toBe(expectedValue);
  });
});

describe("Subtract number", () => {
  test("Subtract 4 and 5 ", () => {
    const expectedValue = -1;
    const actualValue = calculator.subtract(4, 5);
    expect(actualValue).toBe(expectedValue);
  });
  test("Substract 0 and 5 ", () => {
    const expectedValue = -5;
    const actualValue = calculator.subtract(0, 5);
    expect(actualValue).toBe(expectedValue);
  });
  test("Add 1 and -9 ", () => {
    const expectedValue = 10;
    const actualValue = calculator.subtract(1, -9);
    expect(actualValue).toBe(expectedValue);
  });
  test("Substract 25 and 5 ", () => {
    //Arrang
    const expectedValue = 20;
  
    //Act
    const actualValue = calculator.subtract(25, 5);

    //Assert
    expect(actualValue).toBe(expectedValue);
  });
});


describe("Multiply Number", () => {
  test("Multiply 4 and 5 ", () => {
    const expectedValue = 20;
    const actualValue = calculator.multiply(4, 5);
    expect(actualValue).toBe(expectedValue);
  });
  test("multiply 0 and 5 ", () => {
    const expectedValue = -5;
    const actualValue = calculator.multiply(0, 5);
    expect(actualValue).toBeGreaterThan(expectedValue);
  });
  test("multiply 1 and -9 ", () => {
    const expectedValue = -9;
    const actualValue = calculator.multiply(1, -9);
    expect(actualValue).toBe(expectedValue);
  });
  test("multiply 25 and 5 ", () => {
    //Arrang
    const expectedValue = 20;

    //Act
    const actualValue = calculator.multiply(25, 5);

    //Assert
    expect(actualValue).not.toBe(expectedValue);
  });
});


describe("Test capitalize word", () => {
  test('Test the first character', () => {
    const firstLetter = calculator.capitalize("string");
    expect(firstLetter).toBe("S");

  })
})
