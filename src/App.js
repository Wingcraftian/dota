import React, { Component } from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      heroes: []
    }
  }
  componentDidMount(){
axios
.get("/api/heroes").then(res => {
  console.log(res.data)
  this.setState({heroes: res.data})
})
  }
  render() {
    return (
      <div className="App">
        hello
      </div>
    );
  }
}

export default App;
