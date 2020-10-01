/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  let beginning = target - rotated[0];
  let end = target - rotated[rotated.length-1];
  // console.log(beginning,end)
  if ( beginning > end) {
    for (let i = rotated.length -1; i > 0; i--) {
      if (target === rotated[i]) {
        return i;
      }
    }
  } else {
    for ( let i = 0; i < rotated.length; i++) {
      if (target === rotated[i]) {
        return i;
      }
    }
  }
  return null;
};

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100))