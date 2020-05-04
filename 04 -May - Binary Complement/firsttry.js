 let num = 5;
// let comp = "";
// console.log(num.dec2bin(2));
// for(let s of num.toString(2)){
//     comp += 1-parseInt(s);
// }
// console.log(parseInt(comp, 2));
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

