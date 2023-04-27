import './luckyGame.css'
import { useState } from 'react'

export default function LukyGame(){

    const luckyNumber = 4;
    const [guess, setGuess] = useState("");
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
  
    function checkGuess() {
      if (guess < luckyNumber) {
        setMessage("you guessed a smaller number");
        setCount(count + 1);
      } else if (guess > luckyNumber) {
        setMessage("you guessed a bigger number");
        setCount(count + 1);
      } else {
        setMessage(
          `congratulations you guessed the right number in ${count + 1} attempts.`
        );
        setGuess("");
        setCount(0);
      }
    }
  
    return (
      <div className="App">
        <h1>Guess Lucky Number Game</h1>
        <p>Guess a number between 1 and 10:</p>
        <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)}
         
        />
        <button onClick={checkGuess}>Guess</button>
        <h4 style={{color:'red'}}>{message}</h4>
      </div>
    );
  }
  