import React, { useState } from "react";
import MessageBox from "./MessageBox";
import RestartButton from "./RestartButton";

function Game() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100)
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Result");
  const [attempt, setAttempt] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const checkGuess = () => {
    let user = Number(guess);
    setAttempt(attempt + 1);

    if (attempt + 1 > 3) {
      alert("Game Over");
      setGameOver(true);
      return;
    }

    if (user === randomNumber) {
      setMessage("Correct Guess!");
      setGameOver(true);
    } else if (user > randomNumber) {
      setMessage("Too High!");
    } else if (user < randomNumber) {
      setMessage("Too Low!");
    } else {
      setMessage("Enter a number!");
    }
    
  };

  const restartGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
    setGuess("");
    setMessage("Result");
    setAttempt(0);
    setGameOver(false);
  };

  return (
    <div className="game">
      <h1 className="down">Guess The Number ?</h1>

      <input
        type="number"
        className="input"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Guess Value"
      />

      <button className="submit" onClick={checkGuess}>
        Check
      </button>

      <MessageBox message={message} />

      {gameOver && <RestartButton restart={restartGame} />}
    </div>
  );
}

export default Game;
