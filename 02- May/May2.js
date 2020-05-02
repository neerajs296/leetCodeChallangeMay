let J = "z";
let S = "ZZ";
let c= 0;
S = S.split('');
J = J.split('');
console.log(S.length);
for(i=0; i<S.length;i++){
  for (j=0;j<J.length;j++){
    if(S[i]===J[j]){
      
      c++;
    }
    
  }
  
}
console.log('C' + c);
