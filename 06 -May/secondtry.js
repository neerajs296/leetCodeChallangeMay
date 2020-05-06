var majorityElement = function(nums) {
    let r = 0, c = 0;
   for(var i = 0; i<nums.length; i++ ) {
        if(c == 0){
            r = nums[ i ];
            c = 1;
        }else if(r == nums[i]){
           c++;
        }else{
           c--;
        }
    }
 return r;
};