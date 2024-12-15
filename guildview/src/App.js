import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import NameSearch from './components/NameSearch';


function App() {
  return (
    <div className='App'>
      <h1>Welcome to My Guild Viewer App</h1>
      <Greeting name="Exile" />
      <br></br>
      <br></br>
      <NameSearch></NameSearch>
    </div>
  );
}

export default App;
