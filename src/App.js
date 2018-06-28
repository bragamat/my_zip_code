import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/navbar.jsx'
import Body from './body/body.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    )
  }
}

export default App
