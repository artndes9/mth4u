import React, { Component } from 'react'
import { style, media } from 'glamor'
import { Grid, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'

const styles = {
    section: style({
        padding: "12rem 0",
        minHeight: "300px",
        background: "url('../imgs/testimonial.jpg') center no-repeat",
        color: "#fff",
        backgroundSize: "cover",
        '& .title': {
            textAlign: 'center',
            marginBottom: 30
        }
    }),
    sliderWrapper: style({
        margin: "auto",
        lineHeight: "2.5",
        '& .slick-track':{
            '& p': {
                fontSize: "2em",
                padding: "2em",
                '& quote': {
                    float: "left",
                },
                '& span':{
                    clear: 'both',
                    float: 'right'
                }
            }
        },
        '& .slick-dots': {
            textAlign: 'end'
        },
        '& .slick-dots li.slick-active button:before': {
            fontFamily: 'FontAwesome',
            fontSize: '12px',
            position: "absolute",
            color: "#fff",
            top: "0",
            left: "0",
            width: "20px",
            height: "20px",
            opacity: "1",
            content: "'\\f111'",
        },
        '& .slick-dots li button:before': {
            fontFamily: 'FontAwesome',
            fontSize: '12px',
            color: "#fff",
            opacity: "1",
            position: "absolute",
            top: "0",
            left: "0",
            width: "20px",
            height: "20px",
            content: "'\\f10c'",
        },
    },
        media('(max-width: 480px)', {
            lineHeight: '1.2'
        })
    )
};

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

export default class Testimonials extends Component {

    render()  {
        return (
            <section className={styles.section} >
                <Grid>
                    <Row>
                        <Col xs={10} xsPush={1} xsPull={1} sm={10} smPush={1} smPull={1} md={10} mdPush={1} mdPull={1} lg={12} lgPush={0} lgPull={0} >                
                            <div className={styles.sliderWrapper}>
                                <Slider {...sliderSettings}>
                                    <p>
                                        <quote>
                                            I horkvarono sensubjekta ali. Esti volus nf iam. No vola tiama nuancilo sep, tro peri apude sekvanta oz? Ont u jena ometr tempodaŭro, tiom deziri transigi nu ato.
                                        </quote>
                                        <span>
                                            <strong> - Some Dumb Guy </strong>
                                        </span>
                                    </p>
                                    <p>
                                        <quote>
                                            I horkvarono sensubjekta ali. Esti volus nf iam. No vola tiama nuancilo sep, tro peri apude sekvanta oz? Ont u jena ometr tempodaŭro, tiom deziri transigi nu ato.
                                        </quote>
                                        <span>
                                            <strong> - Some Dumb Guy </strong>
                                        </span>
                                    </p>
                                    <p>
                                        <quote>
                                            I horkvarono sensubjekta ali. Esti volus nf iam. No vola tiama nuancilo sep, tro peri apude sekvanta oz? Ont u jena ometr tempodaŭro, tiom deziri transigi nu ato.
                                        </quote>
                                        <span>
                                            <strong> - Some Dumb Guy </strong>
                                        </span>
                                    </p>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}