var floodFill = function(image, sr, sc, newColor) {
    var X=image.length, Y=image[0].length;
    var dfs=function(x,y,newColor){
        if(x<0 || x>X-1 || y<0 || y>Y-1 || image[x][y] != origin || image[x][y] == newColor) return;
        image[x][y]=newColor;
        dfs(x-1, y, newColor);
        dfs(x+1, y, newColor);
        dfs(x, y-1, newColor);
        dfs(x, y+1, newColor);
    }
    const origin=image[sr][sc];
    dfs(sr, sc, newColor);
    return image
    
};