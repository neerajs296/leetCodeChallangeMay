var majorityElement = function(nums) {
    let c ={}
      for(let s of nums){
              if(c[s]){c[s]+=1;}
              else{c[s]=1;}    
      }
      for(let s in c){
          if(c[s]>(nums.length/2)){
              return s;
          }
      }
  };