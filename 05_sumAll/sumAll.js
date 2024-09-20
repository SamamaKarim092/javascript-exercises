const sumAll = function(num1,num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }

    if(!Number.isInteger(num1 || !Number.isInteger(num2))) {
        return "ERROR";
    }

    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num1 > num2) {
        let number = 0;
        for (let i = num2; i <= num1; i++) {
            number = i + number;
        }
        return number;
    }

    else {
        let number = 0;
        for (let i = num1; i <= num2 ; i++) {
            number = i + number;
        }
        return number;
    }

};

console.log(sumAll(-14,3));

// Do not edit below this line
module.exports = sumAll;
