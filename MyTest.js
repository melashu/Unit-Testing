class MyTest {
  static stringLength(string) {
    const length = string.length;
    if (length >= 1 && length <= 10) return length;
    else throw new Error("The input character is out of the box");
  }

  
  static reverseString = str => str.split('').reverse().join('');

}

module.exports = MyTest;
