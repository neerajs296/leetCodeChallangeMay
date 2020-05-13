var removeKdigits = function (num, k) {
    let stk = new Array();
    if (k >= num.length)
        return "0";
    for (let item of num) {
        if (stk.length <= 0 || k <= 0)
            stk.push(item);
        else {
            while (stk[stk.length - 1] > item && k > 0) {
                stk.pop();
                k--;
            }
            stk.push(item);
        }
    }
    while (stk.length > 0 && stk[0] == '0')
        stk.shift();
    while (k--)
        stk.pop();
    if (stk.length <= 0)
        return '0'
    return stk.join('');

};