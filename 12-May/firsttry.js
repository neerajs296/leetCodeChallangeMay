var singleNonDuplicate = function (nums) {

    let n = nums.length;
    let lo = 0,
        hi = n - 1,
        mi;

    while (lo <= hi) {
        mi = Math.floor((lo + hi) / 2);
        mi -= mi % 2;
        if (nums[mi - 2] == nums[mi - 1]) {
            lo = mi;
        } else {
            hi = mi;
        }

        if (hi - lo < 3) {
            let hi2 = hi - hi % 2;
            return (nums[hi2 - 1] == nums[hi2 - 2] ? nums[hi2] : nums[hi2 - 2])
        }
    }

};