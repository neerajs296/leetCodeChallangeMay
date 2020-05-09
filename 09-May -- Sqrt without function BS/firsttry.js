var isPerfectSquare = function(num) {

    function search(num, i, j) {
        if (j <= i) { return i*i === num; }
        var mid = Math.floor((i+j)/2);
        var sqmid = mid*mid;
        if (sqmid === num) { return true; }
        return sqmid > num ? search(num, i, mid-1) : search(num, mid+1, j);
    }
        if (num === 0 || num === 1) { return true; }
        return search(num, 2, num-1);
        
    };