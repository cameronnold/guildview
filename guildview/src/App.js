import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to My Guild Viewer App</h1>
      <Greeting name="Exile" />
      <br></br>
      <br></br>
      <Counter></Counter>
    </div>
  );
}

export default App;
