import React, { Component } from 'react';
import Header from './components/Header';
import TopSection from './components/TopSection';
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
        <TopSection visible={ true } />
        <EarthSection className="section" visible={ true } />
      </div>
    );
  }
}

export default App;
