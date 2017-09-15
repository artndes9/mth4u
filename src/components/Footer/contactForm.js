import React, { Component } from 'react'
import axios from 'axios'
import {Col, Form, FormControl, FormGroup, Button, HelpBlock } from 'react-bootstrap'



export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            contactName: '',
            contactEmail: '',
            contactSubject: '',
            contactMessage: '',
            contactHelp: ''
        };
    
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChangeEmail = this._handleChangeEmail.bind(this);
        this._handleChangeName = this._handleChangeName.bind(this);
        this._handleChangeSubject = this._handleChangeSubject.bind(this);
        this._handleChangeMsg = this._handleChangeMsg.bind(this);
      }


      // Change state of input field so text is updated while typing
      _handleChangeName(e) {
        this.setState({
          contactName: e.target.value,
        });
      }
      // Change state of input field so text is updated while typing
      _handleChangeEmail(e) {
        this.setState({
          contactEmail: e.target.value,
        });
      }
      // Change state of input field so text is updated while typing
      _handleChangeSubject(e) {
        this.setState({
          contactSubject: e.target.value
        });
      }
      // Change state of input field so text is updated while typing
      _handleChangeMsg(e) {
        this.setState({
          contactMessage: e.target.value
        });
      }
    
      _handleSubmit(e) {
        e.preventDefault();
        this.setState({
          contactEmail: '',
          contactMessage: ''
        });
        let _this = this;
        axios.post( 'http://theroguepixel.com/mailers/mth4umailer.php', {
            form_email: this.state.contactEmail,
            form_subject: this.state.contactSubject,
            form_msg: this.state.contactMessage
          })
          .then(function (response) {
            _this.setState({
                contactHelp: 'We have received your message and will get in touch shortly. Thanks!'
              });
            console.log(response);
          })
          .catch(function (error) {
            _this.setState({
                contactHelp: 'Sorry, there has been an error.  Please try again later'
              });
            console.log(_this.state.contactHelp + 'fail');
            console.log(error);
          });
      }

      render() {
          return(
            <Form horizontal onSubmit={this._handleSubmit} >
            <HelpBlock>{this.state.contactHelp}</HelpBlock>
            <FormGroup controlId="formHorizontalName">
            <Col sm={10}>
                <FormControl 
                    type="text" 
                    placeholder="YOUR NAME"
                    value={this.state.contactName}
                    onChange={this._handleChangeName} />
            </Col>
            </FormGroup>
    
            <FormGroup controlId="formHorizontalEmail">
            <Col sm={10}>
                <FormControl 
                    type="email" 
                    placeholder="YOUR EMAIL"
                    value={this.state.contactEmail}
                    onChange={this._handleChangeEmail} />
            </Col>
            </FormGroup>
    
            <FormGroup controlId="formHorizontalSubject">
            <Col sm={10}>
                <FormControl 
                    type="text" 
                    placeholder="SUBJECT"
                    value={this.state.contactSubject}
                    onChange={this._handleChangeSubject} />
            </Col>
            </FormGroup>
    
            <FormGroup controlId="formControlsTextarea">
                <Col sm={10}>
                    <FormControl 
                        componentClass="textarea" 
                        placeholder="SEND A MESSAGE"
                        value={this.state.contactMsg}
                        onChange={this._handleChangemsg} />                
                </Col>
            </FormGroup>
    
            <FormGroup>
            <Col sm={10}>
                <Button type="submit">
                    SEND A MESSAGE
                </Button>
            </Col>
            </FormGroup>
        </Form>
          )
      }
}