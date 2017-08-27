import React, { Component } from 'react'
import { style } from 'glamor'
import { Grid, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'

const styles = {
    section: style({
        padding: "50px 0",
        background: "url('http://placehold.it/1920x500') center no-repeat",
        '& .title': {
            textAlign: 'center',
            marginBottom: 30
        }
    }),
    sliderWrapper: style({

    })
}

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
                        <Col xs={12} sm={12} md={8} mdPush={2} lg={8} lgPush={2} >
                            <h1 className="title">What people are saying</h1>
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
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}