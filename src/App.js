import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('função update');
};

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setcounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleReverseClick = () => {
    console.log('Reverse click function rederizou!');
    setReverse(!reverse);
  };

  const handleCounterClick = ({ num }) => {
    console.log('Counter click function rederizou!');
    setcounter((previousCounter) => previousCounter + num);
  };

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // equivalente a um componenteDidUnmount (evita problemas cm o reload da página)
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  });

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  useEffect(() => {
    console.log('Dependência atualizou', counter);
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>coiso</h1>
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <button type="button" onClick={() => handleReverseClick()}>
          Reverse {reverseClass}
        </button>

        <button type="button" onClick={() => handleCounterClick(10)}>
          Counter {counter}
        </button>
      </header>
    </div>
  );
}
/*
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reverse: false,
    };
  }

  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

          <button type="button" onClick={() => this.setState({ reverse: true })}>
            Reverse {reverseClass}
          </button>
        </header>
      </div>
    );
  }
}
*/

export default App;
