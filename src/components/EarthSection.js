import React, { Component } from 'react';
import Background from '../images/escheresque_ste.png';
import $ from 'jquery';

var earthSectionStyle = {
  width: "100%",
  height: "400px",
  background: "#fff"
};

class EarthSection extends Component {

  componentDidMount() {
    console.log(this.props.visible);
    if (this.props.visible) {
      $("#section").show();
    } else {
      $("#section").hide();
    }
  }

  render() {
    return (
      <section style={ earthSectionStyle } id="section">
      </section>
    );
  }
}

export default EarthSection