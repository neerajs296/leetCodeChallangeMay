
var canConstruct = function(ransomNote, magazine) {
    var r, m, rl = ransomNote.length, ml = magazine.length;
       ransomNote = ransomNote.split('').sort();
       magazine = magazine.split('').sort();
       for (r = 0, m = 0; r < rl; r += 1, m += 1) {
          while (m < ml && magazine[m] < ransomNote[r]) { m += 1; }
          if (m == ml || magazine[m] > ransomNote[r]) { return false };
       }
       return true;
    };