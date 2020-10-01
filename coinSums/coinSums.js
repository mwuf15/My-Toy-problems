/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  //result array
  // var coins = {1p: 1, '2p': 2, '5p': 5, '10p': 10, '20p': 20, '50p': 50, '£1': 100, '£2': 200}
  var coins = [1,2,5,10,20,50,100,200]

  // console.log('£1', coins[1p]);
  // var result = [];
  //recursion function
  var countSum = 0;
  var addCoins = function(total, idx, count) {
    // var array = [];
    //basecase
    if (count === total) {
      // result.push(array)
      countSum +=1;
      // array = [];
      return;
    }
    for (var i = 0; i < coins.length; i++) {
      // array.push(coins[i]);
      // count += coins[i];
      // console.log(count)
      // console.log(array,count)
      addCoins(total, count + coins[i])
    }

  }
  addCoins(total, 0)
  return countSum;

};


makeChange (100)


// var makeChange = function(total) {

//   var output = 0;
//   var denominations = [1, 2, 5, 10, 20, 50, 100, 200];

//   (function recurse (index, tot) {
//     var currentDenomination = denominations[index];
//     if (index === 0) {
//       // support a lowest currency that is not 1
//       tot % currentDenomination === 0 && output++;
//       return;
//     }
//     while (tot >= 0) {
//       recurse(index - 1, tot);
//       tot -= currentDenomination;
//     }
//   })(denominations.length - 1, total);

//   return output;
// };
