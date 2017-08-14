import React, {Component} from "react"
import {Grid, Row, Col} from "react-bootstrap"
import {style} from "glamor"
import axios from "axios"
import _ from 'lodash'
import Slider from 'react-slick'
import Slide from './PopularVideoSlide'
import { SliderNavNext, SliderNavPrev } from './SliderNav'

const styles = {
    section: style({
        padding: '30px 0'
    }),
    title: style({
        fontSize: "3.5rem",
        textAlign: "center"
    }),
    sliderWrapper: style({
        minHeight: 300,
        height: 'auto',
        borderRadius: 5,
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)'
    })
}



export default class PopularVideos extends Component {
    
    state = {
            videoList: [],
            animateSlide: null
    }
    
    componentDidMount = () => {
        let apiKey = "AIzaSyDkEPvHsUZltbuRIks_koTrax7YYVNG6O0"
        let channelId = "UCd_BeNwO51oPSY-2HgtkEhQ"
        let popularVideos = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=id&order=date&maxResults=3&chart=mostPopular`

        axios.get(popularVideos)
            .then( (res) => {
                let videoIds = _.join(_.map(res.data.items, item => item.id.videoId), ',')
                let videoDetails = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${apiKey}`
                return axios.get(videoDetails)
            } )
            .then( (res) => {
                this.setState({videoList: res.data.items})
            } )
    }

    animatelayers = (current, next) => {
        // console.log(this.slider.innerSlider.list)
        console.log(this.slider)
    }

    render() {

        let { videoList } = this.state;

        const sliderOptions = {
            dots: false,
            infinite: true,
            autoPlay: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow : <SliderNavPrev />,
            nextArrow : <SliderNavNext />,
            beforeChange: this.animatelayers,
            // afterChange: (e) => {console.log(e)},
        };

        return(
            <section className={styles.section}>
                <h1 className={styles.title} >Popular Videos</h1>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={8} mdPush={2}>
                            <div className={styles.sliderWrapper}>
                                { 
                                    _.isEmpty(videoList)? (<div></div>) : (
                                        <Slider ref={ s => this.slider = s }  {...sliderOptions} >
                                            { _.map(videoList, (video, index) => <div key={video.id}><Slide index={index}  video={video} /></div> )  }
                                        </Slider>
                                    ) 
                                }
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}