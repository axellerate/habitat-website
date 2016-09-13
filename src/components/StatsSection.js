import React, { Component } from 'react';
import Background from '../images/escheresque_ste.png';
import RecycleEarth from '../images/recycle-earth.png';
import ForestIcon from '../images/forest-icon.png';
import FactoryIcon from '../images/factory-icon.png';
import $ from 'jquery';

var earthSectionStyle = {
  width: "100%",
  height: "350px",
  background: "#eee",
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: "1.4em",
  color: "#666666",
  paddingTop: "50px",
  paddingBottom: "50px"
};

var imageSectionStyle = {
  float: "left",
  width: "50%",
  display: "none"
};

var contentSectionStyle = {
  float: "right",
  width: "50%",
  lineHeight: "50px",
  display: "none"
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
    $.fn.is_on_screen = function(){
      var win = $(window);
      var viewport = {
          top : win.scrollTop(),
          left : win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
   
      var bounds = this.offset();
      bounds.right = bounds.left + this.outerWidth();
      bounds.bottom = bounds.top + this.outerHeight();
   
      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    $(window).scroll(function(){ 
      if( $('#section').length > 0 ) { 
        if( $('#section').is_on_screen() ) { 
          $("#pie-chart-section").fadeIn( 2000 );
          $("#content-section").delay( 1000 ).fadeIn( 500 );
        }
      }
    });
  }

  render() {
    return (
      <section style={ earthSectionStyle } id="section">
        <div id="pie-chart-section" style={ imageSectionStyle }>
          <div id="pie-chart" style={ pieChartStyle }>
            <img style={ forestIconStyle } src={ ForestIcon} />
            <img style={ factoryIconStyle } src={ FactoryIcon } />
          </div>
        </div>
        <div id="content-section" style={ contentSectionStyle }>
          <div id="content" style={ contentStyle }>
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