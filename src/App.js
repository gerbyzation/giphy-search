import React, { Component } from 'react';

import GiphySearch from './components/GiphySearch';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GiphySearch />
      </div>
    );
  }
}

export default App;
