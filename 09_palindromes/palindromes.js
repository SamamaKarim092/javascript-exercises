const palindromes = function (string) {
    // Remove all non-alphanumeric characters (includes letters and numbers) and convert to lowercase
    const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reverseString = '';
    for (let i = cleanedString.length - 1; i >= 0; i--) {
        reverseString += cleanedString[i];
    }

    return reverseString === cleanedString;
};

console.log(palindromes('r3ace3car')); // false

// Do not edit below this line
module.exports = palindromes;
