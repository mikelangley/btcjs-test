import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Panel, Col,   Button } from 'react-bootstrap';
//import logo from './logo.svg';
//import './App.css';

var bitcoin = require("bitcoinjs-lib");
var keyPair = bitcoin.ECPair.makeRandom();

console.log(keyPair.getAddress());
var address = keyPair.getAddress();

console.log(keyPair.toWIF());
var key = keyPair.toWIF();

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">BitcoinJS React Demo</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h3>A basic demo to generate a random bitcoin address and private key</h3>
            <p>
              <Button
                bsStyle="primary"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                React Bootstrap
              </Button>
            </p>
          </Grid>
        </Jumbotron>
        <Grid>
          <Col xs={12}>
            <p className="lead">
              This demo app uses Create React App, BitcoinJS and React Bootstrap
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Panel header="Here is your random address:" bsStyle="primary">
              {address}
            </Panel>
          </Col>
          <Col xs={12} md={6}>
            <Panel header="And you probably want the key too:" bsStyle="primary">
              {key}
            </Panel>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
