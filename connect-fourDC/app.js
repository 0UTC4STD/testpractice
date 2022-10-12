

    let currPlayer = 1;
    let board;
    let row= 7;
    let column= 7;
    let yBottom=[];


    window.onload =function(){
        makeBoard();
    }

    function makeBoard(){
        board =[];
        yBottom =[6,6,6,6,6,6,6];

        for(let y = 0; y < column; y++){
            let column=[]; 
        for(let x=0; x < row; x++){
            column.push('');
            let piece =document.createElement('div')
            piece.id= x.toString()+','+ y.toString();
            document.getElementById('board').append(piece);
            // piece.setAttribute('piece');<-- duh already used ID
            piece.classList.add('piece');
            piece.addEventListener('click', dropPiece);
            }
            board.push(column);
        }
    }
    // Creates an X and Y coordinate on the board and when a Y coordinate is selected
    // when the Y coordinate is selected it will place a piece at the lowest possible X
    // then it will assign that piece and (X,Y) coordinate and the script checks when 4 
    // are in a row it will assign a winner to which ever players pieces it is
    

    function dropPiece() {
    let coordinate = this.id.split(',');
    let x =parseInt(coordinate[0]);
    let y= parseInt(coordinate[1]);
           
        y=yBottom[x];
        if (y < 0){
            return;
        }

    board[x][y]=currPlayer;
            let piece =document.getElementById(`${x.toString()},${y.toString()}`);
            if (currPlayer === 1){
            piece.classList.add('playerOne');
        }
            else {piece.classList.add('playerTwo');
        }
        currPlayer = currPlayer ===1 ? 2 :1;

        y -= 1;
        yBottom[x]=y;

        if (checkForWin()) {
         return endGame(`Player ${currPlayer} won!`);
         } 
    }
        // Will post the alert of which player one and resets the board
    function endGame(msg) {
        alert(msg);
        location.reload()
      }
    //   Checks if there are any 4 in a row in the same color in any direction 
    function checkForWin() {
        function _win(cells) {
          
          return cells.every(
            ([y, x]) =>
              y >= 0 &&
              y < column &&
              x >= 0 &&
              x < row &&
              board[y][x] === currPlayer
          );
        }

        for (let y = 0; y < column; y++) {
          for (let x = 0; x < row; x++) {
            const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
            const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
            const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
            const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      
            if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
              return true;
            }
          }
        }
      }

    