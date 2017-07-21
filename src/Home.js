import React, { Component } from 'react';
import {Grid, Row, Col, Tabs, Tab, FormGroup,
    FormControl, ControlLabel, Button, ButtonGroup, Glyphicon} from 'react-bootstrap';
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
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4} className="promo">
                        <h1>GET VIP</h1>
                        <h3>No Ads</h3>
                        <h3>Unlimited Access</h3>
                        <h3>Questions Reqest</h3>
                    </Col>
                    <Col xs={6} md={4} className="ads">
                        <img src="http://placehold.it/300x300" alt=""/>
                    </Col>
                    <Col xsHidden md={4} className="ads">
                        <img src="http://placehold.it/300x400" alt=""/>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default Home;