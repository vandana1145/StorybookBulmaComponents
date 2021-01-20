import logo from './logo.svg';
import './App.css';
//import "~react-bulma-components/src/index.css";
//import 'react-bulma-components/basic/react-bulma-components.min.css';
import Button from 'react-bulma-components/lib/components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <br></br>
        <div><Button className="button is-danger is-inverted is-large">Test Bulma button</Button></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
      </header>
    </div>
  );
}

export default App;
