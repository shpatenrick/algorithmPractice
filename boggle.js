function wordBoggle(board, words) {
    var maxRow = board.length;
    var maxCol = board[0].length;
    var result = [];

    // create Trie
    var boggle = new Trie();
    for (var i = 0; i < words.length; i++) {
        var currWord = words[i];
        boggle.insert(currWord);
    }
    // check if parameters are valid
    var validCheck = (Row, Col, boolMatrix) => {
        if (!boolMatrix[Row][Col] && Row >= 0 && Row < maxRow && Col >= 0 && Col < maxCol ) {
            return true;
        } else {
            return false;
        }
    };
    // helper function to check board
    var searchBoard = (board, TrieNode, index, visited, word) => {
        if (TrieNode.children['*']) {
            return word;
        }
        var row = index[0];
        var col = index[1];
        visited[row][col] = true;
        var childs = TrieNode.children;
        // check all children of node
        for (var target in childs) {
            if (validCheck(row + 1, col, visited) && board[row + 1][col] === target) {
                searchBoard(board, childs[letter], [row + 1, col], visited, word += target);
            } else if (validCheck(row - 1, col, visited) && board[row - 1][col] === target) {
                searchBoard(board, childs[letter], [row - 1, col], visited, word += target);
            } else if (validCheck(row, col + 1, visited) && board[row][col + 1] === target) {
                searchBoard(board, childs[letter], [row, col + 1], visited, word += target);
            } else if (validCheck(row, col - 1, visited) && board[row][col - 1] === target) {
                searchBoard(board, childs[letter], [row, col - 1], visited, word += target);
            } else if (validCheck(row - 1, col - 1, visited)&& board[row - 1][col - 1] === target) {
                searchBoard(board, childs[letter], [row - 1, col - 1], visited, word += target);
            } else if (validCheck(row - 1, col + 1, visited) && board[row - 1][col + 1] === target) {
                searchBoard(board, childs[letter], [row - 1, col + 1], visited, word += target);
            } else if (validCheck(row + 1, col - 1, visited) && board[row + 1][col - 1] === target) {
                searchBoard(board, childs[letter], [row + 1, col - 1], visited, word += target);
            } else if (validCheck(row + 1, col + 1, visited) && board[row + 1][col + 1] === target) {
                searchBoard(board, childs[letter], [row + 1, col + 1], visited, word += target);
            } else {
                return '';
            }

        }
    };
    var lettersToCheck = Object.keys(boggle.children);
    for (var i = 0; i < lettersToCheck.length; i++) {
        var currLetter = lettersToCheck[i];
        var startIndex = findIndex(board, currLetter);
        var boolMatrix = createBoolMatrix(maxRow, maxCol);
        var word = '' + currLetter;
        // start recursion
        var addWord = searchBoard(board, boggle, startIndex, boolMatrix, word)
        if (addWord.length > 0) {
            result.push(addWord);
        }
    }

    return result;
}

// helper function to create new boolean matrix
var createBoolMatrix = (numRows, numCols) => {
    var visited = [];
    for (var i = 0; i < numRows; i++) {
        var temp = [];
        for (var j = 0; j < numCols; j++) {
            temp.push(false);
        }
        visited.push(temp);
    }
    return visited;
};

// create trie
var Trie = function() {
    this.children = {};
};

Trie.prototype.insert = function(word) {
    function insertWithin(currentNode, wordLeft) {
        if (!wordLeft.length) {
            currentNode.children['*'] = true;
            return;
        } else if (!currentNode.children[wordLeft.charAt(0)]) {
            currentNode.children[wordLeft.charAt(0)] = new Trie();
        }
        insertWithin(currentNode.children[wordLeft.charAt(0)], wordLeft.slice(1));
    }
    insertWithin(this, word);
};

Trie.prototype.search = function(word) {

    function searchWithin(currentNode, wordLeft) {
        if (!wordLeft.length) {
            if (currentNode.children['*']) {
                return true;
            }
            return false;
        }
        if (currentNode.children[wordLeft.charAt(0)]) {
            return searchWithin(currentNode.children[wordLeft.charAt(0)], wordLeft.slice(1));
        } else {
            return false;
        }
    }
    return searchWithin(this, word);
};


// helper function finds index of target in format [i, j], or -1 if no match;
var findIndex = (board, target) => {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === target) {
                return [i,j];
            }
        }
    }
    return -1;
}
