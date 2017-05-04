// find total water that collects between towers
// height is an array of skyline

var trap = function(height) {
    var totalWater = 0;
    var leftMax = 0;
    var rightMax = 0;
    var leftIndex = 0;
    var rightIndex = height.length - 1;
    // start at opposite ends of array
    while (leftIndex < rightIndex) {
        // check if maxs need to be updated
        var leftHeight = height[leftIndex];
        var rightHeight = height[rightIndex];
        if (leftHeight > leftMax) {
            leftMax = leftHeight;
        }
        if (rightHeight > rightMax) {
            rightMax = rightHeight;
        }
        // check if leftMax is less than rightMax
        if (leftMax <= rightMax) {
            totalWater += leftMax - leftHeight;
            // increment leftIndex up
            leftIndex++;
        } else {
            // right Max is less than leftMax
            totalWater += rightMax - rightHeight;
            // decrement rightIndex
            rightIndex--;
        }
    }
    return totalWater;
};