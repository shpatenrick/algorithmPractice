
var Trie = function() {
    this.children = {};
};

Trie.prototype.insert = function(word) {
    function insertWithin(currentNode, wordLeft) {
        console.log('currentNode', currentNode);
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

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
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

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

    function startsWithin(currentNode, prefixLeft) {
        if (!prefixLeft.length) {
            return true;
        }
        if (currentNode.children[prefixLeft.charAt(0)]) {
            return startsWithin(currentNode.children[prefixLeft.charAt(0)], prefixLeft.slice(1));
        } else {
            return false;
        }
    }

    return startsWithin(this, prefix);
};