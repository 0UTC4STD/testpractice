

    let currPlayer = 1;
    let endGame = false;
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
        if(endGame){
            return;
        }
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
    }
