function digitRootSort(a) {
    var sortedA = a.sort();
    var roots = [];
    // itereate through array
    for (var i = 0; i < sortedA.length; i++) {
        // for each number, compute digit root
        var curr = sortedA[i];
        var sum = 0;
        while (curr > 0) {
            sum += curr % 10;
            curr = Math.floor(curr/10);
        }
        // save root and index and push to array
        roots.push({'root': sum, 'index': i});
    }
    // sort new array by root value
    var sortedRoots = roots.sort((b,c) => {
        if (b.root < c.root) {
            return -1;
        } else if (b.root > c.root) {
            return 1;
        } else {
            // compare original values
            if (sortedA[b.index] < sortedA[c.index]) {
                return -1;
            } else {
                return 1;
            }
        }

    });
    // iterate through new array and push correct index of a into new array
    var result = [];
    for (var j = 0; j < sortedRoots.length; j++) {
        var ind = sortedRoots[j]['index'];
        result.push(a[ind]);
    }
    return result;
}