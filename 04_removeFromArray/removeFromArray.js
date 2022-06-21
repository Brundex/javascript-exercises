const removeFromArray = function (...args) {
  // Get array which is the first argument
  let array = args[0];
  // New array to save altered function
  let newArray = [];

  // The array.forEach() function iterates through the array provided in args[0]
  // (i.e if function([1,2,3,4], 4,6)is provided, the function will iterate through
  // 1, 2, 3 and 4, and check if this doesn't include the args).
  array.forEach((argsItem) => {
    // argsItem in the example above will do the following:
    // does the array [1,2,3,4] include in one of its fields, the 
    // value [1,2,3,4] (as in an array inside the array)? if not,
    // go to the next argument (4). 4 is included in args[1], so
    // the value will not be pushed to the new array.
      if (!args.includes(argsItem)) {
        newArray.push(argsItem);
    }
  })
  return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
