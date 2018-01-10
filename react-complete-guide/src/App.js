import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!!!</p>
        <Person name="Carlos" age="30"/>
        <Person name="Carmen" age="32">My Hobbies: Playing piano and solving puzzles.</Person>
        <Person name="Max" age="28"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Does this work now?'));
  }
}

export default App;
