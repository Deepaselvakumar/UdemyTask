import React, { useState } from "react";
import './Game.css';

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = Winner(board);

  const handleClick = (i) => {
    const newBoard = [...board];
    if (winner || newBoard[i]) return;
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const render = (i) => {
    return (
      <button className="squares" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const Status = () => {
    if (winner) {
      return "Winner 🤩: " + winner;
    } else if (board.every((square) => square !== null)) {
      return "Draw! 😟";
    } else {
      return "Next player 👉🏻: " + (xIsNext ? "X" : "O");
    }
  };

  return (
    <div>
      <div className="status">{Status()}</div>
      <div className="board-row">
        {render(0)}
        {render(1)}
        {render(2)}
      </div>
      <div className="board-row">
        {render(3)}
        {render(4)}
        {render(5)}
      </div>
      <div className="board-row">
        {render(6)}
        {render(7)}
        {render(8)}
      </div>
      <button className="restart-button" onClick={handleRestart}>Restart</button>
    </div>
  );
}

function Winner(board) {
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
