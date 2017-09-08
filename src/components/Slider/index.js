import React, { Component } from 'react'
import Owl from 'react-owl-carousel2'
import {style} from "glamor"

const styles = {
    owlWrapper: style({
        position: "absolute",
        top: 0,
        width: '100%'
    }),
    slide: style({
        width: "100vw",
        height: "100vh"
    }),
    slides: [
        {
            
            image: style({
                width: "100%",
                height: "100%",
            }),
            title: style({
                position: 'absolute',
                top: "50%",
                textAlign: "center",
                width: "100%"
            })
        }
    ],
}

const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
    animateOut: 'fadeOut'
};

export default class Slider extends Component{

    render(){

        return(
            <div className={styles.owlWrapper}>
                <Owl ref="slider" options={options} >
                    <div className={styles.slide}>
                        <img className={styles.slides[0].image} src="http://placehold.it/1920x500" alt="1" />
                        <h1 className={styles.slides[0].title}>MTH4U APP</h1>
                    </div>
                    <div className={styles.slide}>
                        <img className={styles.slides[0].image} src="http://placehold.it/1920x500" alt="2" />
                        <h1 className={styles.slides[0].title}>MTH4U APP</h1>
                    </div>
                    <div className={styles.slide}>
                        <img className={styles.slides[0].image} src="http://placehold.it/1920x500" alt="3" />
                        <h1 className={styles.slides[0].title}>MTHU APP</h1>
                    </div>
                </Owl>
            </div>
        );
    }
}