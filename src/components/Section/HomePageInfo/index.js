import React, { Component } from "react"
import {Grid, Row, Col} from 'react-bootstrap'
import { style } from "glamor"

const styles = {
    section: style({
        padding: "30px 0",
        color: "#fdfdff",
        backgroundColor: "#282832"
    }),
    getVip: style({
        '& h1': {
            width: "100%",
            textAlign: "center",
            padding: ".18em",
            marginBottom: ".8em"
        },
        '& ul': {
            marginBottom : "30px",
            '& li': {
            listStyle: "none",
            fontSize: "2.2rem",
                '& span.fa': {
                    color: "#4fa356"
                }
            }
        },
        '& a':{
            position: "relative",
            float: "left",
            backgroundColor: "#000",
            padding: "1.2rem",
            textDecoration: "none",
            margin: "12",
            color: "#4fa356",
            transition: "all .3s ease",
            '&:hover':{
                backgroundColor: "#282832",
                color: "#eee",
            }
        }
    }),
    adsArea: style({
        '& div': {
            width: "100%",
            height: "200px",
            border: "1px solid #ccc",
            marginTop: 30,
        },
        '& h1': {
            fontSize: "3.5rem",
            textAlign: "center"
        }
    }),
    titleBg: style({
        color: "#282832",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#e8eff7",
        '&::before':{
            content: "url(./imgs/titleInvertedBefore.svg)",
            position: "absolute",
            left: "-2px",
            top: "25px",
            height: "31px",
            width: "2rem",
            overflow: "hidden"
        },
        '&::after':{
            content: "url(./imgs/titleInvertedAfter.svg)",
            position: "absolute",
            right: "14px",
            top: "20px",
            height: "38px",
            width: "1.5rem",
            overflow: "hidden"
        }
    })
}

export default class HomePageInfo extends Component {
    render() {
        return(
            <section className={styles.section} >
                <Grid>
                    <Row className="showgrid">
                        <Col {...styles.getVip} xs={12} sm={4} md={4} lg={4} >
                            <h1 {...styles.titleBg} >GET VIP</h1>
                            <ul>
                                <li><span className="fa fa-check"></span> No Ads</li>
                                <li><span className="fa fa-check"></span> Unlimited Access</li>
                                <li><span className="fa fa-check"></span> Free Equations</li>
                            </ul>
                            <a href=" ">1 Month for &#8377; 150</a>
                            <a href=" ">1 Year for &#8377; 1500</a>
                        </Col>

                        <Col {...styles.adsArea} xs={12} sm={4} md={4} lg={4} >
                            <div>
                                <h1>Ads Area</h1>
                            </div>
                        </Col>

                        <Col {...styles.adsArea} xs={12} sm={4} md={4} lg={4} >
                            <div>
                                <h1>Ads Area</h1>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}