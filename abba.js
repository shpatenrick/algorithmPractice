// given a pattern and a string, determine if the string matches the pattern
// for example: 'abba' pattern and 'redbluebluered' should return true
// 'abab' and 'redbluebluered' should return false
// 'aba' and 'redbluered'  => true
var patternMatch = function(pattern, string) {
  // declare storage
  var storage = {};
  // iterate through each character in pattern
  // if character in pattern is not in storage, add to storage with string @ index
  // if it is in storage
    // check if string @ index is the same as storage[character]
    // if it is, recurse
    // if it is not, add string @ index to storage[character] string
};