var num = 5;
var result = 0;
    
// Convert number to binary string.
var bits = num.toString(2);
var complement = '';

// Create opposite binary string for complement.
for (var i=0; i<bits.length; i++) {
    complement += bits[i] === '0' ? '1' : '0';
}

// Convert binary string back into a number.
console.log(parseInt(complement, 2));