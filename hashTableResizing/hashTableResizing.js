/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(k,v
) {
    // TODO: implement `insert`
    var idx = getIndexBelowMaxForKey(k, storageLimit);
    var currentVal = storage.get(idx) || [];
    for (var i = 0; i < currentVal.length; i++) {
      if (currentVal[i][0] === k) {
        var oldValue = currentVal[i][1];
        currentVal[i][1] = v;
        size ++;
        if (size > storageLimit * 0.75) {
          storageLimit = storageLimit * 2;
        } else if (size < storageLimit * 0.25) {
          storageLimit = storageLimit / 2;
        }
        return oldValue;
      }
    };

  };

  result.retrieve = function(k
) {
    // TODO: implement `retrieve`
    var idx = getIndexBelowMaxForKey(k, storageLimit)
    var currentVal = storage.get(idx)
    for (var i = 0; i < currentVal.length; i++) {
      if (currentVal[i][0] === k) {
        return currentVal[i][1];
      }
    }
  };

  result.remove = function(k
) {
    // TODO: implement `remove`
    var idx = getIndexBelowMaxForKey(k, storageLimit) || [];
    for (var i = 0; i < currentVal.length; i++) {
      if (currentVal[i][0] === k) {
        var remove = currentVal[i][1];
        currentVal[i].splice(i, 1);
        size --;
        if (size > storageLimit * 0.75) {
          storageLimit = storageLimit * 2;
        } else if (size < storageLimit * 0.25) {
          storageLimit = storageLimit / 2;
        }
        return remove;

      }
    }

    return undefined;
  };

  return result;
};
