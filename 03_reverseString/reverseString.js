const reverseString = function(string) {
    let strArray = string.split("");
    let reverseArray = strArray.reverse();
    let reversedString = reverseArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
