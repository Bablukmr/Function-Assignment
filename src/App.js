import logo from './logo.svg';
  import './App.css';
//Create the following ui , in react app .
//First create this ui by writing all the code in the same file called App.js .

export function ReactLogo() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
      </header>
    </div>
  );
}
 //App;

export function ReactBenifit(){
  return(
    <div>
    <h4>Benifits of using reacts</h4>

<ol>
        <li>components-based architecture</li>
        <li>virtual DOM for efficient update</li>
        <li>Rich ecosystem and community</li>
        <li>Cross-platform development</li>
        <li>Strong community support</li>
        </ol>
        </div>
  );
}

export function Button(){
  return(
    <button>Get Started...</button>
  )
}