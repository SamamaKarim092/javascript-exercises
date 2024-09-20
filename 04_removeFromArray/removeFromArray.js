const removeFromArray = function(arr, ...num) {
    const newArr = arr.filter(element => !num.includes(element));
    return newArr;
};

console.log(removeFromArray([2, 5, 1, 6, 7, 9], 9, 1,2,6));

// Do not edit below this line
module.exports = removeFromArray;
