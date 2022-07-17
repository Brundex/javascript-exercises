const fibonacci = function(num) {
    if (num < 1) return "OOPS"
    if (num == 1 || num == 2) return 1
  
    const sequence = [1, 1];
    const sum = 1;
  
    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
        console.log(sequence);
    }
    
    return sequence[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;
