
const myTest = require("./MyTest");

test("Character count", () => {
  //Act
  const length = myTest.stringLength("meshu");

  //Assert
  expect(length).toBe(5);
});

test("Empty String", () => {
  expect(() => myTest.stringLength('')).toThrow();
});

test("The character is out of limit", () => {
  expect(() => myTest.stringLength("We are working with Microverse")).toThrow();
});

