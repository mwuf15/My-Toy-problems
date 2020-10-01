/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function() {
  // TODO: Your code here!
  var result = '';
  var charCount = {};

  var objMaker = function (string) {
    for (var i = 0; i < string.length;i++) {
      var char = string[i];
      if (charCount[char] === undefined) {
        charCount[char] = 1;
      } else {
        charCount[char] += 1;
      }
    }
  }
  var args = arguments;
  var firstString = args[0];
  for (var i = 0; i < args.length; i++) {
    objMaker(args[i]);
  }

   for (var i = 0; i < firstString.length; i++) {
     var char = firstString[i];
     if (charCount[char] > 1) {
       result += char;
      //  console.log(result)
     }
   }
   return result;

};

console.log(commonCharacters('acexivou', 'aegihobu', 'asdfacg'))