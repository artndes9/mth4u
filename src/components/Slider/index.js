import React, { Component } from 'react'
// import Owl from 'react-owl-carousel2'
// import SlickSlider from 'react-slick'
import { Grid, Row, Col} from 'react-bootstrap';
import {style, media} from "glamor"
import { TweenMax } from 'gsap';


const styles = {
    owlWrapper: style({
        position: "relative",
        top: 0,
        width: '100%',
        background: "linear-gradient(to right, #fffeff 0%,#e4edf2 100%)",
          '& .container-fluid': {
            display: "flex",
              '& .row':{
                width: "100%",
                  textAlign: "center",
                  '& .col-md-4': {
                      '& img':{
                          position: "relative",
                          width: "100%"
                      }
                  },
                  '& .col-md-8': {
                      height: "100%",
                      paddingTop: "10rem"
                  }
              }
          }
    },
        media('(max-width: 992px)', {
            '& .col-md-4': {
                '& img':{
                    position: "relative",
                    width: "50% !important",
                    left: "10%"
                }
            },
            '& .col-md-8': {
                height: "auto !important"
            }
        }),
        media('(max-width: 1155px)', {
            '& .container-fluid': {
                '& .row':{
                    '& .col-md-8': {
                        paddingTop: "0",
                    }
                }
            }
        })),
    titleBg: style({
        position: "relative",
        padding: "1rem",
        fontSize: "36px",
        textAlign: "center",
        marginBottom: "50",
        color: "#eee",
        width: "35%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#2e4766",
        '&::before':{
            content: "url(./imgs/titleBefore.svg)",
            position: "absolute",
            left: "-1.9rem",
            height: "38px",
            width: "2rem",
            overflow: "hidden"
        },
        '&::after':{
            content: "url(./imgs/titleAfter.svg)",
            position: "absolute",
            right: "0",
            height: "38px",
            width: "1.5rem",
            overflow: "hidden"
        }
    },
        media('(max-width: 480px)', {
            width: '50%'
        })
    ),
    appPromo: style({
        position: "absolute",
        bottom: "10%",
        width: "100%",
        perspective:"800",
        '& img':{
            position: "relative",
            margin: "0 1.2rem",
        }
    },
        media('(max-width: 1155px)', {
            position: 'relative',
            bottom: '0'
        })
    )};

export default class Slider extends Component{
    componentWillAppear = (callback) => {
        console.log("dhgfchfh");
        TweenMax.fromTo(this.container, 2, {y: 80, opacity: 0}, {y: 0, opacity: 1, onComplete: callback, delay:1, ease:"Power2.easeOut"});
        TweenMax.fromTo(this.appStore, 2, {rotationY:90, transformOrigin:"left top"},{rotationY:0, ease:"Back.easeOut"});
        TweenMax.fromTo(this.playStore, 2, {rotationY:90, transformOrigin:"right top"},{rotationY:0, ease:"Back.easeOut"});
    };

    componentWillLeave = (callback) => {
        TweenMax.fromTo(this.container, 1, {y: 0, opacity: 1}, {y: -80, opacity: 0, onComplete: callback});
        TweenMax.fromTo(this.appStore, 2, {rotationY:0, transformOrigin:"left top"},{rotationY:90, ease:"Back.easeIn"});
        TweenMax.fromTo(this.playStore, 2, {rotationY:0, transformOrigin:"right top"},{rotationY:90, ease:"Back.easeIn"});
    };

    render(){
        return(
            <div className={styles.owlWrapper}>
                <Grid bsClass="container-fluid">
                    <Row>
                        <Col sm={12} md={8} mdPush={4}>
                            <h1 {...styles.titleBg} >MTH4U APP</h1>
                            <p>Stay Connected with MTH4U with Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus illo magnam modi odio lit. Delectus illo magnam modi odio lit. Delectus illo magnam modi odio lit. Delectus illo magnam modi odio odit perferendis</p>
                            <div className={styles.appPromo}>
                                <img ref={c => this.appStore = c} src="../imgs/apple-appStore.jpg" alt="MTH4U | Apple App Store"/>
                                <img ref={c => this.playStore = c} src="../imgs/google-play-app.jpg" alt="MTH4U | Google Play Store"/>
                            </div>
                        </Col>
                        <Col sm={12} md={4} mdPull={8}>
                            <img ref={c => this.container = c} src="../imgs/banner.png" alt="MATHS Solve"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}