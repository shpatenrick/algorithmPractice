function textJustification(words, l) {
    var result = [];
    for (var i = 0; i < words.length; i++) {
        var temp = [];
        var count = 0;
        var minSpaces = 0;
        var loop = true;
        while (loop && i < words.length) {
            var curr = words[i];
            if (i < words.length && count + words[i].length + minSpaces <= l) {
                count += words[i].length;
                temp.push(words[i]);
                i++;
                minSpaces++;
            } else {
                loop = false;
            }
        }
        i--;
        var totalSpaces = l - count;
        var currString = '';
        var numWords = temp.length;
        if (numWords === 1) {
            currString += temp[0] + getSpaces(totalSpaces);
        } else if (i === words.length - 1) {
            for (var j = 0; j < numWords; j++) {
                currString += temp[j]
                if (j < numWords - 1) {
                    currString += ' ';
                }
            }
            currString += getSpaces(totalSpaces - (numWords - 1));
        } else {

            for (var j = 0; j < numWords; j++) {
                var numSpaces = Math.ceil(totalSpaces/ (numWords - j - 1));
                currString += temp[j] + getSpaces(numSpaces);
                totalSpaces -= numSpaces;
            }
        }
        result.push(currString);

    }
    return result;
}

var getSpaces = function(num) {
    var result = '';
    for (var i = 0; i < num; i++) {
        result += ' ';
    }
    return result;
};
