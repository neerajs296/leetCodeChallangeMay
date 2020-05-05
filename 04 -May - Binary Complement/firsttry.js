 let num = 5;
 let comp = "";
 console.log(num.dec2bin(2));
 for(let s of num.toString(2)){
     comp += 1-parseInt(s);
 }
 console.log(parseInt(comp, 2));


