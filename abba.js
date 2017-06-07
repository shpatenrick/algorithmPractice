// given a pattern and a string, determine if the string matches the pattern
// for example: 'abba' pattern and 'redbluebluered' should return true
// 'abab' and 'redbluebluered' should return false
// 'aba' and 'redbluered'  => true
var patternMatch = function(pattern, string) {
  // declare storage
  var storage = {};
  // declare current string
  var word = '';
  // iterate through each character in pattern
  for (var i = 0; i < string.length; i++) {
    word += string[i];
    // if character in pattern is not in storage
    if (!storage[pattern[0]]) {
      //add to storage with string @ index
      storage[pattern[0]] = word;
    } else if (storage[pattern[i]] === string) {
      // if it is in storage
      // check if string @ index is the same as storage[character]
      // if it is, recurse
      var result = patternMatch(pattern.slice(1), string.slice(i + 1));
      if (result) {
        return true;
      } else {
        delete storage[pattern[0]];
      }
    }
  }
  return false;
};