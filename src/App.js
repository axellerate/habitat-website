import React, { Component } from 'react';
import Header from './components/Header';
import NaturePort from './components/NaturePort';
import Section from './components/Section';

class App extends Component {

	menuButtonClicked(action) {
		alert(action);
	}

  render() {
    return (
      <div>
        <Header />
        <NaturePort />
        <Section />
      </div>
    );
  }
}

export default App;
