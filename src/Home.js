import React, { Component } from 'react';
// import {Grid, Row, Col} from 'react-bootstrap';
import MthNavbar from './navbar';
import Slider from './slider';
// import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueId: '',
            valuePassword: ''
        };
    }
  render() {
    return (
        <div className="body">
            <MthNavbar/>
            <Slider/>
        </div>
    );
  }
}

export default Home;