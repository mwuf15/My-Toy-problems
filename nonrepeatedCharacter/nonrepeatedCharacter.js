/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var compareObj = {};
  if (string === '' || string === ' ') {
    return null;
  }

  for (var i = 0; i < string.length; i ++) {
    if (compareObj[string[i]] === undefined) {
      compareObj[string[i]] = 1;
    } else {
      compareObj[string[i]] += 1;
    }
  }
console.log(compareObj)

  for (var i = 0; i < string.length; i++) {
    if (compareObj[string[i]] === 1) {
      return string[i];
    }
  }
  return null;
};


console.log(firstNonRepeatedCharacter('AACBCDDB'))