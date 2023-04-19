import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ol>
        <h4>Benifits of using reacts</h4>
        <li>components-based architecture</li>
        <li>virtual DOM for efficient update</li>
        <li>Rich ecosystem and community</li>
        <li>Cross-platform development</li>
        <li>Strong community support</li>
        <button>Get Started...</button>
        </ol>
        
      </header>
    </div>
  );
}

export default App;
