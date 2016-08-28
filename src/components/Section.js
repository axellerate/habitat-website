import React, { Component } from 'react';
import Background from '../images/dark_embroidery.png';

var sectionStyle = {
  width: "100%",
  height: "400px",
  background: "#444444"
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}

export default Section;