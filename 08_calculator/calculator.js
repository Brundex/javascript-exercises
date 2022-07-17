const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  const sum = array.reduce((total, current) => total + current, 0);
  return sum
};

const multiply = function(array) {
  const mult = array.reduce((total, current) => total * current, 1);
  return mult

};

const power = function(number, exponent) {
  return number ** exponent
};

const factorial = function(number) {
  let product = 1;
  for (i = number; i > 0; i--) {
    product *= i;
  }
  return product
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
