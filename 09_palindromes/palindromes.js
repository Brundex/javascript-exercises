const palindromes = function (str) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    const cleanStr = str.toLowerCase().replace(regex, '');
    const reversed = cleanStr
                        .split('')
                        .reverse()
                        .join("");
    return cleanStr === reversed
};

// Do not edit below this line
module.exports = palindromes;
