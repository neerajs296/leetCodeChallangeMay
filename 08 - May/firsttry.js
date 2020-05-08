//Dnt worked on Leetcode but work perfetly on VS!

const coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];
if(coordinates.length == 2)
   return true;

const slope = (x1, y1, x2, y2) => {
 return  Math.abs((y2-y1)/(x2-x1));
}
const slopeOne =  slope(coordinates[0][0],coordinates[0][1],coordinates[1][0],coordinates[1][1]);

const checkLine = ()=>{
for(i=2;i<coordinates.length;i++){
 slopeLine = slope(coordinates[0][0],coordinates[0][1],coordinates[i][0],coordinates[i][1]);
 if(slopeOne != slopeLine){
    return false;
 }
}
return true;
}


console.log( checkLine());