import React, { Component } from 'react';
import Header from './components/Header';
import TopSection from './components/TopSection';
import EarthSection from './components/EarthSection';
import ForestSection from './components/ForestSection';
import $ from 'jquery';

class App extends Component {

	getInitialState() {
		
	}

	isLoading() {
		console.log("loading");
	}

  render() {
    return (
      <div>
        <Header />
        <TopSection />
        <EarthSection />
        <ForestSection />
        <EarthSection />
      </div>
    );
  }
}

export default App;