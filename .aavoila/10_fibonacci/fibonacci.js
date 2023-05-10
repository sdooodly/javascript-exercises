const fibonacci = n => n < 1 ? "OOPS" : n == 1 || n == 2 ? 1 : (() => {
    let a = 1, b = 1, c;
    for (let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  })();

// Do not edit below this line
module.exports = fibonacci;
