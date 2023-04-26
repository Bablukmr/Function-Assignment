
import {useState} from 'react';

function CounterApp() {

 
    const [count, setCount] = useState(0);
  
    function increment() {
      setCount(count + 1);
    }
  
    function decrement() {
      if (count > 0) {
        setCount(count - 1);
      }
    }

  return (
    <div className="App">
      <h1>Hi i am Increase and Decrease Count</h1>
      <h1 style={{color:'blue'}}>Count: {count}</h1>
<button  onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>

    </div>
  );
}

export default CounterApp;
