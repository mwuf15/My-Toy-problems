/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  var result = [];
  var length = string.length;
  var word = '';

  var ana = function (length, word){
    if (word.length === length) {
      result.push(word)
      return;
    }
    for (var i = 0; i < string.length; i++) {
      if (!word.includes(string[i])){

        word += string[i];
        ana(length, word);
        word = word.substring(0, word.length-1);
      }
      // console.log(length)
    }
  }
  ana(length,word)
  return result;
};
var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]