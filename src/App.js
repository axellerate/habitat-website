import React, { Component } from 'react';
import Header from './components/Header';
import NaturePort from './components/NaturePort';
import EarthSection from './components/EarthSection';
import $ from 'jquery';

class App extends Component {

	menuButtonClicked(action) {
		$(".section").each(function(){
			$(this).hide();
		});
	}

  render() {
    return (
      <div>
        <Header clickAction={ this.menuButtonClicked.bind(this) }/>
        <NaturePort />
        <EarthSection className="section" visible={ true } />
      </div>
    );
  }
}

export default App;
