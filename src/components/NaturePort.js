import React, { Component } from 'react';

var windowHeight = window.innerHeight - 100;

var naturePortStyle = {
  height: windowHeight + "px",
  width: "100%",
  backgroundImage: "url('https://static.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg')",
  backgroundPosition: "100% 100%",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  paddingTop: "100px"
};

var messageOneStyle = {
  float: "left",
  fontSize: "1.6em",
  fontWeight: "bold",
  color: "#fff",
  marginTop: "60px",
  marginLeft: "20%"
};

var messageTwoStyle = {
  float: "right",
  fontSize: "1.6em",
  fontWeight: "bold",
  color: "#fff",
  marginTop: windowHeight - 90 + "px",
  marginRight: "20%"
};

class NaturePort extends Component {
  render() {
    return (
      <section style={ naturePortStyle }>
        <div style={ messageOneStyle }>Taking steps toward...</div>
        <div style={ messageTwoStyle }>...a sustainable home.</div>
      </section>
    );
  }
}

export default NaturePort;
