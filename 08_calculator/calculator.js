const add = (...args) => args.reduce((total, currentValue) => total + currentValue, 0);


const subtract = (a, b = 0) => (a - b);


const sum = (arr) => arr.reduce((total, currentValue) => total + currentValue, 0);

const multiply = (arr) => {
  let answer = 1;
  arr.forEach((arg) => {
    answer *= arg;
  });
  return answer;
};


const power = (a, b) => a ** b;

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
