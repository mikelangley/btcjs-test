import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var bitcoin = require("bitcoinjs-lib");
var keyPair = bitcoin.ECPair.makeRandom();

console.log(keyPair.getAddress());
var address = keyPair.getAddress();

console.log(keyPair.toWIF());
var key = keyPair.toWIF();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>BitcoinJS React Demo</h2>
        </div>
        <p className="App-intro">
          Here is your random address: {address}
        </p>
        <p className="App-intro">
          And you probably want the key too: {key}
        </p>
      </div>
    );
  }
}

export default App;
