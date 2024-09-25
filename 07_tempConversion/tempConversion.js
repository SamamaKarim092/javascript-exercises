const convertToCelsius = function(fahrenheit) {
  let celcius = (5/9) * (fahrenheit - 32);
  let fixedCelcius = celcius.toFixed(1);
  if (fixedCelcius === "0.0") {
    return 0;
  }
  return parseFloat(fixedCelcius);
};

console.log(convertToCelsius(100))

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (9 / 5) * celcius + 32;
  let fixedFahrenheit = fahrenheit.toFixed(1);
  if (fixedFahrenheit === "0.0") {
    return 0;
  }
  return parseFloat(fixedFahrenheit);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
