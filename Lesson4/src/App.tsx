import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';
import { Input } from './input';

function App() {
  const handler = () => {
    console.log('Кнопка была нажата');
  };
  return (
    <div className="App">
      <CounterComponent title={'Orange'} count={9} />
      <CounterComponent title={'Apple'} count={4} />
      <CounterComponent title={'Lemon'} count={3} />
      <button onClick={handler}>PUSH ME</button>
      <Input />
    </div>
  );
}

export default App;
