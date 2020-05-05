var s = 'leetcode';
var r = -1;
var charCount = {};
 for(var i = 0; i < s.length; i++){
     if(charCount[s[i]]){
         charCount[s[i]] = 'More Than One';
     } else {
         charCount[s[i]] = 'One Time';
     }
 }    
 for(var j = 0; j < s.length; j++){
     if(charCount[s[j]] === 'One Time'){
       console.log( j);      
     }
 }

console.log(r);
