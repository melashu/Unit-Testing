const myTest = require("./MyTest");

describe("Reverse", () => {//
  test("Dose the function exist", () => {
    expect(myTest.reverseString("meshu")).toBeDefined();
  });

  test("Reverse string", () => {
    const expected = "uhsem";
    const actual = myTest.reverseString("meshu");

    expect(actual).toEqual(expected);
  });

  test("not reverse string", () => {
    const expected = "meshu";
    const actual = myTest.reverseString("meshu");

    expect(actual).not.toEqual(expected);
  });
});//
