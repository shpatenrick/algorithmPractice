// given a pattern and a string, determine if the string matches the pattern
// for example: 'abba' pattern and 'redbluebluered' should return true
// 'abab' and 'redbluebluered' should return false
// 'aba' and 'redbluered'  => true
var patternMatch = function(pattern, string, storage) {
  // declare storage
  if (pattern.length === 1) {
    if (storage[pattern[0]]) {
      if (storage[pattern[0]] === string) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  storage = storage || {};
  // declare current string
  var word = '';
  // iterate through each character in string
  for (var i = 0; i < string.length; i++) {
    word += string[i];
    // if character in pattern is not in storage
    if (!storage[pattern[0]]) {
      //add to storage with string @ index
      storage[pattern[0]] = word;
    } else if (storage[pattern[i]] !== string) {
      // if it is in storage
      // check if string @ index is the same as storage[character]
      // if it is, recurse
      var result = patternMatch(pattern.slice(1), string.slice(i + 1), storage);
      if (result) {
        return true;
      } else {
        delete storage[pattern[0]];
      }
    }
  }
  return false;
};

/*
/*
 * Complete the function below.

function wordpattern(pattern, string, storage) {
// declare storage
  if (pattern.length === 1) {
    if (storage[pattern[0]]) {
      if (storage[pattern[0]] === string) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 1;
    }
  }
  storage = storage || {};
  // declare current string
  var word = '';
//   debugger;
  // iterate through each character in pattern
  for (var i = 0; i < string.length; i++) {
    word += string[i];
    // if character in pattern is not in storage
    if (!storage[pattern[0]]) {
      //add to storage with string @ index
      for (var key in storage) {
          if (storage[key] === word) {
              return 0;
          }
      }
      storage[pattern[0]] = word;
    } else if (storage[pattern[0]] !== word) {
        continue;
    }
      // check if string @ index is the same as storage[character]
      // if it is, recurse
      var result = wordpattern(pattern.slice(1), string.slice(i + 1), storage);
      if (result) {
        return 1;
      } else {
        delete storage[pattern[0]];
      }

  }
  return 0;

}
*/