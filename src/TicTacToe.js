import {react,useState} from "react";
import { useEffect } from "react";
function TicTacToe() {

    const [player1Turn,setPlayer1Turn] = useState(true);
    const [board,setBoard] = useState(Array(9).fill(null));
   // let board = Array(9).fill(null);
    
    const handleEntries = (inp) => {
         if(board[inp]!==null) {
            alert("Field already filled");
         }
         const newBoard = [...board];
         newBoard[inp] = player1Turn ? "X":"O";
         setPlayer1Turn(!player1Turn);
         setBoard(newBoard);
    }

    const handleReset = () => {
        setBoard(Array(9).fill(null));
    }
    
    return (
        <div className="tic-tac-toe">
           <div className="tic-tac-toe-body"> 
            <h1 className="heading-game">Tic Tac Toe</h1>
            <h3>Player1 is X</h3>
            <h3>Player2 is O</h3>
            <div className="tic-tac-toe-inputs">
                    {board.map((inp,index) => <button className="board-btns" onClick={()=> handleEntries(index)}>{inp}</button>)
                    }   
            </div>
            <div className="tic-tac-toe-btns">
            <button>
                Reset
            </button>
            </div>
            </div>
        </div>
    )
}
export default TicTacToe;