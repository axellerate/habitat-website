import React, { Component } from 'react';
import LogoImage from '../images/habitat_logo.png';
import AndroidIcon from '../images/android-icon.png';
import { Link } from "react-router";

import $ from 'jquery'; 

var headerStyle = {
	display: "flex",
	height: "100px",
	width: "100%",
	background: "#333333",
	position: "fixed",
	fontFamily: "'Open Sans', sans-serif"

};

var logoStyle = {
	float: "left",
	height: "70px",
	marginTop: "15px",
	marginLeft: "30px"
};

var mainMenuStyle = {
	marginLeft: "50px",
	marginTop: "40px"
};

var loginRegisterMenuStyle = {
	marginTop: "40px",
	color: "#fff",
	marginLeft: "auto",
	marginRight: "40px"
};

var loginButtonStyle = {
	color: "#fff",
	textDecoration: "none",
	marginRight: "20px",
	cursor: "pointer"
};

var registerButtonStyle = {
	color: "#fff",
	textDecoration: "none",
	marginLeft: "20px",
	cursor: "pointer"
};

var theWorldButtonStyle = {
	textDecoration: "none",
	marginRight: "20px",
	color: "#fff",
	cursor: "pointer"
};

var statsButtonStyle = {
	textDecoration: "none",
	marginRight: "20px",
	color: "#fff",
	cursor: "pointer"
};

var learnMoreButtonStyle = {
	textDecoration: "none",
	marginRight: "20px",
	color: "#fff",
	cursor: "pointer"
};

var downloadAppButtonStyle = {
	textDecoration: "none",
	color: "#fff",
	cursor: "pointer"
};

var androidIconStyle = {
	position: "absolute",
	height: "30px",
	marginTop: "-3px",
	marginLeft: "150px"
};

class Header extends Component {

	componentDidMount() {
		$(".menu-item").hover(function(){
			$(this).css("text-decoration","underline");
		}, function() {
      $(this).css("text-decoration","none");
    });
	}

	scrollDown() {

	}

	buttonClicked(action) {
		this.props.clickAction(action);
	}

  render() {
    return (
      <header style={ headerStyle }>
      	<Link to="/">
        	<img style={ logoStyle } src={ LogoImage } alt="Habit@ Logo" role="presentation"/>
        </Link>
      	<menu style={ mainMenuStyle }>
					<Link style={ theWorldButtonStyle } className="menu-item" id="what-is-button" to="what-is-habit@">
						What is Habit@?
					</Link>
      		<Link style={ statsButtonStyle } className="menu-item" id="stats-button" to="">
      			Stats
      		</Link>
      		<Link style={ learnMoreButtonStyle } className="menu-item" id="learn-more-button" to="">
      			Learn More
      		</Link>
      		<Link style={ downloadAppButtonStyle } className="menu-item" id="download-app-button" to="">
      			<img style={ androidIconStyle } src={ AndroidIcon } /> Download the App
      		</Link>
      	</menu>
      	<menu style={ loginRegisterMenuStyle }>
      		<Link style={ loginButtonStyle } className="menu-item" id="login-button" to="login">
      			Login
      		</Link>
      		<Link style={ registerButtonStyle } className="menu-item" id="register-button" to="register">
      			Register
      		</Link>
      	</menu>
      </header>
    );
  }
}

export default Header;
