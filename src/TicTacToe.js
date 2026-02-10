import React, { useState, useEffect } from "react";

function TicTacToe() {

  const [player1Turn, setPlayer1Turn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);

  const winningMatrix = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  const handleEntries = (inp) => {
    if (board[inp] !== null || gameOver) return;

    const newBoard = [...board];
    newBoard[inp] = player1Turn ? "X" : "O";

    setBoard(newBoard);
    setPlayer1Turn(!player1Turn);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer1Turn(true);
    setGameOver(false);
  };

  useEffect(() => {
    const winner = checkWinner();

    if (winner) {
      alert(`${winner} wins!`);
      setGameOver(true);
    } else if (board.every(cell => cell !== null)) {
      alert("Draw!");
      setGameOver(true);
    }
  }, [board]);

  const checkWinner = () => {
    for (let pattern of winningMatrix) {
      const [a,b,c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return ( <div className="tic-tac-toe"> <div className="tic-tac-toe-body"> <h1 className="heading-game">Tic Tac Toe</h1> <h3>Player1 is X</h3> <h3>Player2 is O</h3> <div className="tic-tac-toe-inputs"> {board.map((inp,index) => <button className="board-btns" onClick={()=> handleEntries(index)}><span className="game-val">{inp}</span></button>) } </div> <div className="tic-tac-toe-btns"> <button onClick={handleReset}> Reset </button> </div> </div> </div> )
}

export default TicTacToe;
