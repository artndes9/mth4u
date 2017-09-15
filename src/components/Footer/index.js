import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {style} from 'glamor'
import {Grid, Row, Col } from 'react-bootstrap'
import ContactForm from './contactForm'

const styles = {
    footer: style({
        width: '100%',
        textAlign: "center",
        backgroundColor: '#282832',        
        '& .footer-main': {
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
        return (
            <footer className={styles.footer}>
                <Grid bsClass="container-fluid footer-main">
                    <Row>
                        <Col md={4} xs={12}>
                            <ul className={styles.footerLinks}>
                                <li><Link to="/policies/community">Community Guidelines</Link></li>
                                <li><Link to="/policies/tos">Terms of Service</Link></li>
                                <li><Link to="/policies/copyright">Copyright Policy</Link></li>
                                <li><Link to="/policies/privacy">Privacy Policy</Link></li>
                            </ul>
                        </Col>
                        <Col md={4} xs={12}>
                            <Col sm={10}>
                                <h3>Say Hello</h3>
                            </Col>
                            <ContactForm/>
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
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="learn">LEARN</Link></li>
                                <li><Link to="getVip">GET VIP</Link></li>
                                <li><Link to="Contact">CONTACT US</Link></li>
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