const fibonacci = n => n < 1 ? "OOPS" : n == 1 || n == 2 ? 1 : (() => {
    let a = 1, b = 1, c;
    for (let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  })();
      //A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. 
    //The simplest is the series 1, 1, 2, 3, 5, 8, etc.


// Do not edit below this line
module.exports = fibonacci;
