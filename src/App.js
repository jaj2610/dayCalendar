import React, { Component } from 'react';
import './App.css';
import {layOutDay, testEvents} from './layOutDay.js';

class App extends Component {
  render() {

    const layout = layOutDay(testEvents).map(event => {
      return (
        <li>{event.id}{event.start}{event.end}{event.leftPosition}{event.topPosition}</li>
      )
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Calendar</h1>
          <div>{layout}</div>
        </header>
      </div>
    );
  }
}

export default App;
