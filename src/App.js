import React, { Component } from 'react';
import Lobby from './Components/Lobby';
import Chat from './Components/Chat';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Lobby/>
        <Chat/>
      </div>
    );
  }
}

export default App;
