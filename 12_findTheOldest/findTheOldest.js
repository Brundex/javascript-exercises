const findTheOldest = function(array) {
    const ages = array.map(function(element) {
        if (!element.yearOfDeath) {
          return 2022 - element.yearOfBirth
        }
        else {
          return element.yearOfDeath - element.yearOfBirth
        }
      })
      const max = Math.max(...ages);
      const oldest = ages.indexOf(max);
      return array[oldest]
};

// Do not edit below this line
module.exports = findTheOldest;
