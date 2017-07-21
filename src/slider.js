import React, { Component } from 'react';
import Owl from 'react-owl-carousel2';

class Slider extends Component{

  render(){

    const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
    };

    const events = {
        // onDragged: function(event) {...},
        // onChanged: function(event) {...}
    };
      return(
          <Owl ref="slider" options={options} events={events}>
                <div><img src="http://placehold.it/1920x500" alt="1"/></div>  
                <div><img src="http://placehold.it/1920x500" alt="2"/></div>
                <div><img src="http://placehold.it/1920x500" alt="3"/></div>
          </Owl>
      );
  }
}

export default Slider;