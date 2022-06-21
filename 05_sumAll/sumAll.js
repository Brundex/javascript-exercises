const sumAll = function(num1, num2) {

// Error-check parameters to only be positive numbers
if(!(typeof(num1) === "number") || typeof(num2) !== "number" ||
    num1 < 0 || num2 < 0){
    return "ERROR";
    }
		
// Variable to hold the final sum
let sum = 0;

// This will allow the function to work with larger number in first parameter
let maxNum = Math.max(num1, num2);
let minNum = Math.min(num1, num2);

for(minNum; minNum <= maxNum; minNum++){
	sum += minNum;
}

return sum;
};


// Do not edit below this line
module.exports = sumAll;
