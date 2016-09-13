import React, { Component } from 'react';
import Background from '../images/escheresque_ste.png';
import RecycleEarth from '../images/recycle-earth.png';
import ForestIcon from '../images/forest-icon.png';
import FactoryIcon from '../images/factory-icon.png';
import ForestBackground from '../images/forest-tree-leaves.jpg';
import $ from 'jquery'; 

var windowHeight = window.innerHeight - 100;

var forestSectionStyle = {
  width: "100%",
  height: windowHeight + "px",
  backgroundImage: "url(" + ForestBackground + ")",
  backgroundPosition: "100% 100%",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: "1.4em",
  color: "#666666",
  paddingTop: "50px",
  paddingBottom: "50px"
};
 
class ForestSection extends Component {

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
        }
      }
    });
  }

  render() {
    return (
      <section style={ forestSectionStyle } id="section">
      </section>
    );
  }
}

export default ForestSection