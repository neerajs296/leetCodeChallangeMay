let XP, YP, XLevel, Ylevel;
const isCousins = (root, x, y) => {
    helper(root, x, y, 0, null);
    if(XLevel == Ylevel && XP != YP ) return true;
    else return false;
};

const helper = (root, x, y,level, p) => {
    if(root == null) return false;
    if(root.val == x) {
        XP = p; XLevel = level;
    } 
    if(root.val == y) {
        YP = p; Ylevel = level;
    }
     helper(root.left, x, y , level+1, root.val);
     helper(root.right, x, y, level+1,  root.val)
}
    