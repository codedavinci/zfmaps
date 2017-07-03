import React, { Component } from 'react';
import { Header, Body } from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
