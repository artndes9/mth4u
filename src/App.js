import React, { Component } from 'react';
import {Grid, Row, Col, Tabs, Tab, FormGroup,
    FormControl, ControlLabel, Button, ButtonGroup, Glyphicon} from 'react-bootstrap';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueId: '',
            valuePassword: ''
        };
    }

    getValidationState = () => {
        const length = this.state.valueId.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    };

    handleChangeId = (e) => {
        this.setState({ valueId: e.target.value });
    };
    handleChangePassword = (e) => {
        this.setState({ valuePassword: e.target.value });
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
                                                value={this.state.valueId}
                                                placeholder="User ID"
                                                onChange={this.handleChangeId}
                                            />
                                        </FormGroup>
                                        <FormGroup
                                            controlId="password"
                                        >
                                            <ControlLabel>PASSWORD *</ControlLabel>
                                            <FormControl
                                                type="password"
                                                value={this.state.valuePassword}
                                                placeholder="Password"
                                                onChange={this.handleChangePassword}
                                            />
                                        </FormGroup>
                                        <div id="logonForgot">
                                            <h4>forgot your password ?</h4>
                                            <a>Click here</a>
                                        </div>
                                        <Button type="submit" id="btnSubmit">
                                            Log In
                                        </Button>
                                    </form>
                                </Tab>
                                <Tab eventKey={2} title="SIGN UP">
                                    Registrations will roll out soon..
                                </Tab>
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
