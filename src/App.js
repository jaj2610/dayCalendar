import React, { Component } from 'react';
import './App.css';
import {layOutDay, testEvents} from './layOutDay.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Calendar</h1>
          <div>{JSON.stringify(layOutDay(testEvents))}</div>
        </header>
      </div>
    );
  }
}

export default App;
