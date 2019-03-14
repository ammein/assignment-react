import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/output.js';
import UserInput from './UserInput/input.js';

class App extends Component {
  state ={
    username : "ammein"
  }

  manipulateState = event =>{
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.manipulateState} username={this.state.username}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
