import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Slider from './Components/Slider/Slider';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Banner/>
        <Slider/>
      </div>
    )
  }
}

export default App
