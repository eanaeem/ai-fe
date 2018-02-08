import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.fileOnChange=this.fileOnChange.bind(this);
  }
  fileOnChange({file}) {
    console.log(`hello ${file}`);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React app</h1>
          <p> hi thi is first reactive </p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <input type="file" onChange={this.fileOnChange} />
        </p>
      </div>
    );
  }
}

export default App;
