let num = Date.now() % 100;

const repeatString = function(word,num) {
    if (num < 0) {
        return 'ERROR';
    }

    if (word === "") {
        return "";
    }

    let result = "";
    for (let i = 1; i <= num; i++) {
        result += word
    }
    return result;

   
};

// Do not edit below this line
module.exports = repeatString;
