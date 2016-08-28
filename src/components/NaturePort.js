import React, { Component } from 'react';

var naturePortStyle = {
  height: "300px",
  width: "100%",
  backgroundImage: "url('https://static.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg')",
  backgroundPosition: "50% 50%",
  backgroundSize: "100%"
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
  marginTop: "220px",
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
