import React, { Component } from 'react';
import Background from '../images/ocean-boat.jpg';
import $ from 'jquery'; 

var windowHeight = window.innerHeight - 100;

var naturePortStyle = {
  height: windowHeight + "px",
  width: "100%",
  backgroundImage: "url(" + Background + ")",
  backgroundPosition: "100% 100%",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  paddingTop: "100px"
};

var messageOneStyle = {
  float: "left",
  fontSize: "1.6em",
  fontFamily: "'Ubuntu', sans-serif",
  color: "#fff",
  marginTop: "60px",
  marginLeft: "20%"
};

var messageTwoStyle = {
  float: "right",
  fontSize: "1.6em",
  fontFamily: "'Ubuntu', sans-serif",
  color: "#fff",
  marginTop: windowHeight - 90 + "px",
  marginRight: "20%"
};

class TopSection extends Component {

  componentDidMount() {
    $("#message-one").hide();
    $("#message-two").hide();

    $("#message-one").delay( 1500 ).fadeIn( 2000 );
    $("#message-two").delay( 3000 ).fadeIn( 2000 );
  }

  render() {
    return (
      <section style={ naturePortStyle }>
        <div style={ messageOneStyle } id="message-one">Taking steps toward...</div>
        <div style={ messageTwoStyle } id="message-two">...a sustainable home.</div>
      </section>
    );
  }
}

export default TopSection;
