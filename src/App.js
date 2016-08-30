import React, { Component } from 'react';
import Header from './components/Header';
import TopSection from './components/TopSection';
import EarthSection from './components/EarthSection';
import $ from 'jquery';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <TopSection />
        <EarthSection />
      </div>
    );
  }
}

export default App;