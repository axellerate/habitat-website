import React, { Component } from 'react';
import LogoImage from '../images/habitat_logo.png';
import $ from 'jquery'; 

var headerStyle = {
	display: "flex",
	height: "100px",
	width: "100%",
	background: "#333333"
};

var logoStyle = {
	float: "left",
	height: "70px",
	marginTop: "15px",
	marginLeft: "30px"
};

var mainMenuStyle = {
	marginLeft: "50px",
	marginTop: "45px"
};

var loginRegisterMenuStyle = {
	marginTop: "45px",
	color: "#fff",
	marginLeft: "auto",
	marginRight: "40px"
};

var loginButtonStyle = {
	marginRight: "20px",
	cursor: "pointer"
};

var registerButtonStyle = {
	marginLeft: "20px",
	cursor: "pointer"
};

var theWorldButtonStyle = {
	marginRight: "20px",
	color: "#fff",
	cursor: "pointer"
};

var statsButtonStyle = {
	marginRight: "20px",
	color: "#fff",
	cursor: "pointer"
};

var learnMoreButtonStyle = {
	color: "#fff",
	cursor: "pointer"
};

class Header extends Component {

	componentDidMount() {
		$("span").hover(function(){
			$(this).css("text-decoration","underline");
		}, function() {
      $(this).css("text-decoration","none");
    });
	}

  render() {
    return (
      <header style={ headerStyle }>
        <img style={ logoStyle } src={ LogoImage } alt="Habit@ Logo" role="presentation"/>
      	<menu style={ mainMenuStyle }>
					<span style={ theWorldButtonStyle } id="login-button">The World</span>
      		<span style={ statsButtonStyle } id="stats-button">Stats</span>
      		<span style={ learnMoreButtonStyle } id="login-button">Learn More</span>
      	</menu>
      	<menu style={ loginRegisterMenuStyle }>
      		<span style={ loginButtonStyle } id="login-button">Login</span>
      		<span style={ registerButtonStyle } id="register-button">Register</span>
      	</menu>
      </header>
    );
  }
}

export default Header;
