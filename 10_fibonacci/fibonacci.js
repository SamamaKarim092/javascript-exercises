const fibonacci = function(num) {
    // Convert to positive integer if the input is a string number
    num = parseInt(num);

    // Handle edge cases for negative numbers or 0
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1) return 1;

    // Start the Fibonacci sequence
    let firstNum = 0; // First number in the sequence
    let secondNum = 1; // Second number in the sequence
    let sum = 0; // This will store the next Fibonacci number

    // Loop to calculate Fibonacci numbers up to the num-th position
    for (let i = 2; i <= num; i++) {
        sum = firstNum + secondNum; // Sum of the previous two numbers
        firstNum = secondNum; // Update firstNum to the next number in the sequence
        secondNum = sum; // Update secondNum to the next number
    }

    return secondNum; // Return the Fibonacci number at the num-th position
};

// Do not edit below this line
module.exports = fibonacci;
