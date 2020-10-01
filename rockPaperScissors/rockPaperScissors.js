/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (n) {
  // TODO: your solution here
  //empty result array
  var result = [];
  //empty word string
  var words = '';
  //possible sequence
  var throwSeq = ['r','p','s'];
  //recursion function
  var sequence = function(n, words) {
    //basecase if word.length = n
    if (words.length === n) {
      //push word into result array
      result.push(words);
      return;
    }
      //iterate over throw
    for (var i = 0; i < throwSeq.length; i++) {
      //add sequence to word until it reaches a length of n
      words += throwSeq[i]
      //call the recursion function again till it reaches base case
      sequence(n, words)
      //trim the last sequence off from word so it can add the next possible sequence without duplicates
      words = words.substring(0,words.length-1)
    }

  }
//invoke recursion function with n and word
sequence(n,words);
//return result
  return result;
};

console.log(rockPaperScissors(3))