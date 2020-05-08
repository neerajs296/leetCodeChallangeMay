var checkStraightLine = function(coordinates) {
    const n = coordinates.length;
   
   for (let i = 0; i < n - 2; i++) {
       const area = Math.abs(1/2 * (
           (coordinates[i][0] * coordinates[i + 1][1] + coordinates[i + 1][0] * coordinates[i + 2][1] + coordinates[i + 2][0] * coordinates[i][1]) -
           (coordinates[i][1] * coordinates[i + 1][0] + coordinates[i + 1][1] * coordinates[i + 2][0] + coordinates[i + 2][1] * coordinates[i][0])
       ));
       
       if (area > 0) return false;
   }
   
   return true;
};