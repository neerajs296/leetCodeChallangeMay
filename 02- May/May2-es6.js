let J = "aA";
let S = "aAAbbbb";
S = S.split('');
J = J.split('');
console.log(S.length);
let missing = S.filter(item => J.indexOf(item) >= 0).length;
 
console.log('C' + missing);
