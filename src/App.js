import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Panel, Col,   Button } from 'react-bootstrap';
import bitcoin from 'bitcoinjs-lib';
//import logo from './logo.svg';
//import './App.css';

const keyPair = bitcoin.ECPair.makeRandom();
let address = keyPair.getAddress();
let key = keyPair.toWIF();

function newAddress() {
//we'll handle the click here to change the address and key
}

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
            <h3 className="text-center">A basic demo to generate a random bitcoin address and private key</h3>
            <p className="text-center">
              <Button
                bsStyle="primary"
                bsSize="large"
                href="/">
                New Address
              </Button>
            </p>
          </Grid>
        </Jumbotron>
        <Grid>
          <Col xs={12}>
            <p className="lead text-center">
              This demo app uses <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>, <a href="https://bitcoinjs.org/">BitcoinJS</a> and <a href="http://react-bootstrap.github.io/">React Bootstrap</a>
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
