import React, { Component } from 'react';
import LogoImage from '../images/habitat_logo.png';
import $ from 'jquery'; 

var headerStyle = {
	display: "flex",
	height: "100px",
	width: "100%",
	background: "#333333",
	position: "fixed"
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

	scrollDown() {
		
	}

	buttonClicked(action) {
		this.props.clickAction(action);
	}

  render() {
    return (
      <header style={ headerStyle }>
        <img style={ logoStyle } src={ LogoImage } alt="Habit@ Logo" role="presentation"/>
      	<menu style={ mainMenuStyle }>
					<span style={ theWorldButtonStyle } id="login-button" 
						onClick={ () => {this.buttonClicked("/the-world")} }>
						The World
					</span>
      		<span style={ statsButtonStyle } id="stats-button"
      			onClick={ () => {this.buttonClicked("/stats")} }>
      			Stats
      		</span>
      		<span style={ learnMoreButtonStyle } id="learn-more-button"
      			onClick={ () => {this.buttonClicked("/learn-more")} }>
      			Learn More
      		</span>
      	</menu>
      	<menu style={ loginRegisterMenuStyle }>
      		<span style={ loginButtonStyle } id="login-button"
      			onClick={ () => {this.buttonClicked("/login")} }>
      			Login
      		</span>
      		<span style={ registerButtonStyle } id="register-button"
      			onClick={ () => {this.buttonClicked("/register")} }>
      			Register
      		</span>
      	</menu>
      </header>
    );
  }
}

export default Header;
