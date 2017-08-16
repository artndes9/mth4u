import React, {Component} from "react"
import PropTypes from 'prop-types'
import {Grid, Row, Col} from "react-bootstrap"
import {style} from "glamor"
import axios from "axios"
import _ from 'lodash'
import VideoCarousel from './VideoCarousel'
import VideoPreview from './VideoPreview'
import CurrentVideoInfo from './CurrentVideoInfo'
import VideoCarouselState from './VideoCarouselState'
import { VideoSpinner } from 'components/Spinners'


const styles = {
    section: style({
        padding: '30px 0',
        backgroundColor: '#e9e9e9'
    }),
    title: style({
        fontSize: "3.5rem",
        textAlign: "center",
        marginBottom: 50
    }),
    sliderWrapper: style({
        minHeight: 300,
        height: 'auto',
        borderRadius: 5,
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
        position: 'relative'
    }),
    spinner: style({
        height: '100%',
        width: '100%',
        position: 'absolute'
    })
}


export default class PopularVideos extends Component {
    constructor() {
        super()

        this.state = {
            videoList: []
        }

        this.videoCarouselState = new VideoCarouselState({currentVideo: null, previousSibling: null})

    }   
    

    getChildContext() {
        return {
            videoCarouselState: this.videoCarouselState
        }
    }
    
    componentDidMount = () => {
        let apiKey = "AIzaSyDkEPvHsUZltbuRIks_koTrax7YYVNG6O0"
        let channelId = "UCd_BeNwO51oPSY-2HgtkEhQ"
        let numVideos = 10
        let popularVideos = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=id&order=date&maxResults=${numVideos}&chart=mostPopular`

        axios.get(popularVideos)
            .then( (res) => {
                let videoIds = _.join(_.map(res.data.items, item => item.id.videoId), ',')
                let videoDetails = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${apiKey}`
                return axios.get(videoDetails)
            } )
            .then( (res) => {
                this.setState({videoList: res.data.items})
                this.videoCarouselState.update({currentVideo: res.data.items[0].id})
            } )
    }

    render() {

        let { videoList } = this.state;

        // const sliderOptions = {
        //     dots: false,
        //     infinite: true,
        //     autoPlay: false,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     prevArrow : <SliderNavPrev />,
        //     nextArrow : <SliderNavNext />
        // }

        return(
            <section className={styles.section}>
                <h1 className={styles.title} >Popular Videos</h1>
                <Grid fluid={true}>
                    <Row bsClass="row no-gutters">
                        <Col xs={10}  xsPush={1} sm={10} smPush={1} md={4} mdPush={1} lg={4} >  
                            { 
                                _.isEmpty(videoList)? (
                                    <div className={styles.spinner}>
                                        <VideoSpinner />
                                    </div>
                                    ) : ( <VideoPreview  videoList={ videoList }  /> ) 
                            }
                        </Col>
                        <Col xs={12} sm={12} md={6} mdPush={1} lg={6} lgPush={1} >
                            <Row>
                                <Col xs={12}>
                                    <CurrentVideoInfo videoList={videoList} />
                                </Col>
                                <Col xs={12}>
                                    { 
                                        _.isEmpty(videoList)? (
                                            <div className={styles.spinner}>
                                                <VideoSpinner />
                                            </div>
                                            ) : ( <VideoCarousel videoList={ videoList } /> ) 
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {

                        // <Row>
                        //     <Col xs={12} sm={12} md={8} mdPush={2}>
                        //     <div className={styles.sliderWrapper}>
                        //     { 
                        //         _.isEmpty(videoList)? (
                        //             <div className={styles.spinner}>
                        //             <VideoSpinner />
                        //             </div>
                        //         ) : (
                        //             <Slider ref={ s => this.slider = s }  {...sliderOptions} >
                        //             { _.map(videoList, (video, index) => <div key={video.id}><Slide index={index}  video={video} /></div> )  }
                        //             </Slider>
                        //         ) 
                        //     }
                        //     </div>
                        //     </Col>
                        //     </Row>
                    }
                </Grid>
            </section>
        )
    }
}

PopularVideos.childContextTypes = {
    videoCarouselState: PropTypes.object
}