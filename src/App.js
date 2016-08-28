import React, { Component } from 'react';
import Header from './components/Header';
import NaturePort from './components/NaturePort';
import Section from './components/Section';
import $ from 'jquery'; 

class App extends Component {

	dissolve() {
		var swap_direction = ["left", "right"];
		for(var i = 0; i<2; i++) {
			$("#" + Number(i)).hide();
		}
	}

	menuButtonClicked(action) {
		this.dissolve();
		console.log(action);
	}

  render() {
    return (
      <div>
        <Header clickAction={ this.menuButtonClicked.bind(this) }/>
        <NaturePort id="0"/>
        <Section id="1"/>
      </div>
    );
  }
}

export default App;
