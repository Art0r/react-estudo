import './App.css';
import React, { useCallback, useState, useMemo } from 'react';
import P from 'prop-types';

const Button = ({ incrementButton }) => {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num);
  }, []);

  const btn = useMemo(() => <Button incrementButton={incrementCounter} />, [incrementCounter]);
  console.log('Pai renderizou');

  return (
    <div className="App">
      <p>Teste</p>
      <h1>C1: {counter}</h1>
      {btn}
    </div>
  );
}
export default App;
