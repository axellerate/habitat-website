import React, { Component } from 'react';
import Background from '../images/escheresque_ste.png';
import RecycleEarth from '../images/recycle-earth.png';
import $ from 'jquery';

var earthSectionStyle = {
  width: "100%",
  height: "400px",
  background: "#eee",
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: "1.6em",
  color: "#666666",
  paddingTop: "50px",
  display: "flex"
};

var imageSectionStyle = {
  width: "50%"
};

var contentSectionStyle = {
  width: "50%"
};

var recycleEarthStyle = {
  height: "350px",
  marginLeft: "200px"
};

var contentStyle = {
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
        <div style={ imageSectionStyle }>
          <img style={ recycleEarthStyle } src={ RecycleEarth } />
        </div>
        <div style={ contentSectionStyle }>
          <div style={ contentStyle }>
            Content
          </div>
        </div>
      </section>
    );
  }
}

export default EarthSection