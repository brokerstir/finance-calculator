import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <Person name="Bob" age="30" />
        <Person name="Bill" age="32" />
        <Person name="Joe" age="29">Hobbies: Hiking</Person>
      </div>
    );
  }
}

export default App;
