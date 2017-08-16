import React, { Component } from 'react'
import {style} from 'glamor'
import {Grid, Row, Col} from 'react-bootstrap'

const styles = {
    footer: style({
        width: '100%',
        '& .footer-main': {
            backgroundColor: '#333',
            paddingTop: 80,
            paddingBottom: 50,
            '& ul': {
                paddingLeft: 0
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
                margin: 0
            }
        }
    }),
    footerLinks: style({
        '& li': {
            padding: '3px 0px'
        }
    })
}

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <Grid bsClass="container-fluid footer-main">
                    <Row>
                        <Col xs={3} mdPush={2}>
                            <ul className={styles.footerLinks}>
                                <li><a href="">Home</a></li>
                                <li><a href="">Equations</a></li>
                                <li><a href="">QuickSolve</a></li>
                            </ul>
                        </Col>

                        <Col xs={2} mdPush={1}>
                            <ul className={styles.footerLinks}>
                                <li><a href="">Terms of Service</a></li>
                                <li><a href="">Copyright Policy</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </Col>

                        <Col xs={3} mdPush={1}>
                            <h3>Say Hello</h3>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}