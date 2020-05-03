var canConstruct = function(ransomNote, magazine) {
    var cCn = {}, chr, i, re;
    
      for (i = ransomNote.length; i--;) {
        chr = ransomNote[i];
        if (cCn[chr])
          continue;
        re = new RegExp(chr, 'g');
        if ((magazine.match(re) || []).length < (ransomNote.match(re) || []).length) 
          return false;
        cCn[chr] = true;
      }
    
      return true;  
};