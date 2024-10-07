const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
	let sumOfArray = arr.reduce((acculmulator , currentValue) => {
    return acculmulator + currentValue;
  } , 0)
  return sumOfArray;
};

const multiply = function(arr) {
  let multiplyOfArray = arr.reduce((acculmulator , currentValue) => {
    return acculmulator * currentValue
  }, 1)
  return multiplyOfArray;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
  let multiply = 1;
	for (let i = x; i >= 1; i--) {
    let number = i;
    multiply = number * multiply ;
  }
  return multiply;
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
