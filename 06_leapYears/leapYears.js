const leapYears = function(year) {
    if (year % 4 === 0){
        // This has to be checked nested to the first if statement
        // so that non-multiples of 100 or 400 are not considered false
        // even when they are divisible by 4
        if (year % 100 === 0){
            if (year % 400 !== 0){
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
