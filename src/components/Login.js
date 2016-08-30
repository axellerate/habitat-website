import React, { Component } from 'react';
import Header from './Header';
import Background from '../images/ocean-boat-blurry.jpg';

var windowHeight = window.innerHeight;

var loginContainerStyle = {
  width: "100%",
  height: windowHeight + "px",
  backgroundImage: "url(" + Background + ")",
  backgroundSize: "cover",
  backgroundPosition: "center",
  textAlign: "center"
};

var loginBoxStyle = {
  position: "absolute",
  width: "300px",
  height: "200px",
  left: "0",
  right: "0",
  marginTop: "400px",
  marginLeft: "auto",
  marginRight: "auto"
};

var inputStyle = {
  padding: "10px",
  border: "none",
  borderRadius: "10px",
  width: "300px",
  background: "#eee",
  textAlign: "center",
  fontSize: "1.2em",
  color: "#999999",
  opacity: ".8"
};

class Login extends Component {

  render() {
    return (
      <div>
        <Header />
        <div style={ loginContainerStyle }>
          <div style={ loginBoxStyle }>
          <input type="text" style={ inputStyle } placeholder="Email" />
          <br/>
          <input type="password" style={ inputStyle } placeholder="Password"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Login