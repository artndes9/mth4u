import React, { Component } from 'react'
import {style} from 'glamor'
import {Grid, Row, Col, Form, FormControl, FormGroup, Button } from 'react-bootstrap'

const styles = {
    footer: style({
        width: '100%',
        textAlign: "center",
        '& .footer-main': {
            backgroundColor: '#282832',
            paddingTop: 80,
            paddingBottom: 50,
            '& ul': {
                width: "50%",
                margin: "auto",
                textAlign: "left",
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
        '& li': {
            padding: '3px 0px',
            color: "inherit",
            '&:before': {
                position: "relative",                
                content: "'\\f0da'",
                fontFamily: "FontAwesome",
                color: "inherit",
                fontSize: "14px",
                left: "-4px"
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
                                <li><a href="">Home</a></li>
                                <li><a href="">Equations</a></li>
                                <li><a href="">QuickSolve</a></li>
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
                </Grid>
            </footer>
        )
    }
}