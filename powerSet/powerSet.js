/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var result = [];
  var word = '';
  var strArr = str.split('');//['a','b','c']
  var idx = str.length;

  var addWords = function(word, idx) {//a
    console.log('word:', word)
    console.log('idx:', idx)
    if (idx === 0) {
      // result.push("");
      return;
    }
    for (var i = 0; i < idx ; i++) {//a and next letter
      var words = word.concat(strArr[i+1]);
      var checkWord = words.split("").sort().join('')
      console.log('check:',checkWord);
      if (result.indexOf(checkWord) === -1  ) {
        result.push(words);
      }
      addWords(words, idx-1)
    }
  }
  // console.log(strArr)
  addWords('', idx);
  return result;
};
// var jump = ['b','a' ];
// var jump2 = ['a','b' ];
console.log( powerSet('abc'));
// console.log( jump.sort());
// console.log( jump2.sort());
// console.log( JSON.stringify(jump.sort()) === JSON.stringify(jump2.sort()))