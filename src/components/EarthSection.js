import React, { Component } from 'react';
import Background from '../images/escheresque_ste.png';
import RecycleEarth from '../images/recycle-earth.png';
import ForestIcon from '../images/forest-icon.png';
import FactoryIcon from '../images/factory-icon.png';
import $ from 'jquery';

var earthSectionStyle = {
  width: "100%",
  height: "auto",
  background: "#fff",
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: "1.4em",
  color: "#666666",
  paddingTop: "50px",
  paddingBottom: "50px"
};

var imageSectionStyle = {
  float: "left",
  width: "50%"
};

var contentSectionStyle = {
  float: "right",
  width: "50%",
  lineHeight: "50px"
};

var contentStyle = {
  paddingRight: "50px"
};

var pieChartStyle = {
  margin: "0 auto",
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  background: "yellowgreen",
  backgroundImage: "linear-gradient(to right, transparent 50%, #655 0)",
  textAlign: "center",
  color: "#eee",
  marginBottom: "50px"
};

var forestIconStyle = {
  width: "130px",
  height: "130px",
  marginTop: "50px"
};

var factoryIconStyle = {
  width: "120px",
  height: "120px",
  marginTop: "100px",
  marginLeft: "30px"
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

  isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  render() {
    return (
      <section style={ earthSectionStyle } id="section">
        <div style={ imageSectionStyle }>
          <div id="pie-chart" style={ pieChartStyle }>
            <img style={ forestIconStyle } src={ ForestIcon} />
            <img style={ factoryIconStyle } src={ FactoryIcon } />
          </div>
        </div>
        <div style={ contentSectionStyle }>
          <div style={ contentStyle }>
            <p>Habit@ helps you track your carbon emissions through a system that monitors home and transport energy usage. </p>
            <p>Using your greenhouse gas emissions, Habit@ suggests simple ways to help lower your carbon footprint in order to 
            keep a healthy balance between sustainability and enjoyability.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default EarthSection