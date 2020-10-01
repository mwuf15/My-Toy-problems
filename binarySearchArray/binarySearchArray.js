/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {

  if ( target > array[array.length-1]) {
    return null;
  }
  // var recurseArr = function(array, target) {
    var halfIdx = Math.floor(array.length/2);
    var leftArr = array.slice(0, halfIdx )
    var rightArr = array.slice( halfIdx)
    // console.log(halfIdx)
    if (leftArr[leftArr.length-1] > target)
    if (leftArr[leftArr.length-1] > target) {
      for (var i = 0; i < halfIdx; i++) {
        if (array[i] === target) {
          return i;
        }
      }
    }
    if (leftArr[leftArr.length-1] < target) {
      for (var i = halfIdx; i < array.length; i++) {
        if (array[i] === target) {
          return i;
        }
      }
    }
  // }
  // recurseArr(array, target)
};

// var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(binarySearch([1, 2, 3, 4, 5], 4));
