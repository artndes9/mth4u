import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix, Tabs, Tab, Form, FormGroup,
    FormControl, ControlLabel, HelpBlock, Button, ButtonGroup, Glyphicon} from 'react-bootstrap';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    getValidationState = () => {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };
  render() {
    return (
        <div className="whiteBoard">
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8} className="logonForm">
                        <div id="form">
                            <Tabs defaultActiveKey={1} id="logonTabs">
                                <Tab eventKey={1} title="LOGIN">
                                    <h3>Enter your User ID and Password to sign in</h3>
                                    <hr/>
                                    <form>
                                        <FormGroup
                                            controlId="userId"
                                            validationState={this.getValidationState()}
                                        >
                                            <ControlLabel>User ID *</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder="User ID"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <FormGroup
                                            controlId="password"
                                            validationState={this.getValidationState()}
                                        >
                                            <ControlLabel>PASSWORD *</ControlLabel>
                                            <FormControl
                                                type="password"
                                                value={this.state.value}
                                                placeholder="Password"
                                                onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <div id="logonForgot">
                                            <h4>forgot your password ?</h4>
                                            <a>Click here</a>
                                        </div>
                                        <Button type="submit">
                                            Log In
                                        </Button>
                                    </form>
                                </Tab>
                                <Tab eventKey={2} title="SIGN UP">Tab 2 content</Tab>
                            </Tabs>
                            <ButtonGroup vertical block>
                                <Button className="socialLogin" id="fbBtn"><Glyphicon glyph="thumbs-up" /> Sign in with Facebook</Button>
                                <Button className="socialLogin" id="gpBtn"><Glyphicon glyph="plus" /> Sign in with Google +</Button>
                                <Button className="socialLogin" id="lBtn">JUST LET ME IN ></Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="logonLogo">
                        {/*<div id="bg"><img src="imgs/bluehalf.png" alt="MTH4U Logo"/></div>*/}
                        <img src="imgs/mthLogo.png" alt="MTH4U Logo"/>
                        <h1>MTH</h1>
                        <h1>4U</h1>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default App;
