import React, { Component } from 'react'
import {style} from 'glamor'
import {Grid, Row, Col, Form, FormControl, FormGroup, Button } from 'react-bootstrap'

const styles = {
    footer: style({
        width: '100%',
        textAlign: "center",
        '& .footer-main': {
            backgroundColor: '#282832',
            fontSize: "20px",
            '& .col-md-4': {
                padding: "2em"
            },
            '& a': {
                color: '#fff',
                cursor: 'pointer',
                '&:hover': {
                    textDecoration: 'none'
                }

            },
            '& h3': {
                color: '#fff',
                margin: "0 0 10px 0"
            },
            '& .form-control': {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "#aaa",
                border: "none",
                borderRadius: "0",
                transition: "all ease-in-out .15s",
                '&:focus':{
                    boxShadow: "none",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                }
            },
            '& .btn': {
                width: "100%",
                borderRadius: "0",
                border: "none",
                backgroundColor: "#4aae4e",
                color: "#eee"
            }
        }
    }),
    footerLinks: style({
        listStyle: 'none',
        color : "#fff",
        margin: "36px auto auto 40px",
        textAlign: "left",
        paddingLeft: "0",
        lineHeight: "2em",
        '& li': {
            padding: '3px 0px',
            color: "inherit",
            '&:before': {
                position: "relative",                
                content: "'\\f0da'",
                fontFamily: "FontAwesome",
                color: "inherit",
                fontSize: "1em",
                left: "-4px"
            }
        }
    }),
    copyrights: style({
        backgroundColor: '#000',
        color: "#eee",
        fontSize: "13",
        paddingTop:"15",
        '& .col-md-4':{
            padding: "0 !important"
        },
        '& ul': {
            listStyle: "none",
            paddingLeft: "0",
            '& li':{
                display: "inline-block",
                marginLeft: "10px",
                '&:not(:first-child)::before': {
                    position: "relative",
                    content: "' | '",
                    left: "-4px"

                }
            }
        }
    })
}

export default class Footer extends Component {
    render() {
        const contactForm = (
        <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
            <Col sm={10}>
                <FormControl type="text" placeholder="YOUR NAME" />
            </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
            <Col sm={10}>
                <FormControl type="email" placeholder="YOUR EMAIL" />
            </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
            <Col sm={10}>
                <FormControl type="text" placeholder="SUBJECT" />
            </Col>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
                <Col sm={10}>
                    <FormControl componentClass="textarea" placeholder="SEND A MESSAGE" />                
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
        );
        return (
            <footer className={styles.footer}>
                <Grid bsClass="container-fluid footer-main">
                    <Row>
                        <Col md={4} xs={12}>
                            <ul className={styles.footerLinks}>
                                <li><a href="">Community Guidelines</a></li>
                                <li><a href="">Terms of Service</a></li>
                                <li><a href="">Copyright Policy</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </Col>

                        <Col md={4} xs={12}>
                            <Col sm={10}>
                                <h3>Say Hello</h3>
                            </Col>
                            {contactForm}
                        </Col>

                        <Col md={4} xs={12}>
                            <Col sm={10}>
                            <h3>Contacts</h3>
                            </Col>
                        </Col>
                    </Row>
                    <Row bsClass="row copyright" {...styles.copyrights}>
                        <Col sm={12} mdPush={4} md={4} >
                            <ul>
                                <li><a href=" ">HOME</a></li>
                                <li><a href="">LEARN</a></li>
                                <li><a href="">GET VIP</a></li>
                                <li><a href="">CONTACT US</a></li>
                            </ul>
                            
                        </Col>
                        <Col sm={12} md={4} mdPull={4}>
                            <p> &copy; 2017 MTH4U, All Rights Reserved</p>
                        </Col>
                        <Col md={4}>
                            <p> powered by the, rogue Pix<small>x</small>el</p>                        
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}