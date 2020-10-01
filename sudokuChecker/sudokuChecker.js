/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  // Your code here.
  let colboard=[
    [],[],[],[],[],[],[],[],[]
  ];
  const boardArr = board.split('\n')
  // console.log(boardArr)

  for (var i = 0; i < boardArr.length; i++) {
    for (var j = 0; j < boardArr.length;j++) {
      colboard[i].push(boardArr[j][i])
    }
  }
  for (var k = 0; k <boardArr.length; k++) {
      var row = boardArr[k].split('');
      var col = colboard[k];
      // console.log(col.sort)
      if (row.sort().join('') !== '123456789' && col.sort().join('') !=='123456789'){
        return false;
      }
  }
  return true;
};

var board1 =("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n15763429");

console.log(sudokuChecker(board1))
