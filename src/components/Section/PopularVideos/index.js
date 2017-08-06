import React, {Component} from "react"
import {Grid, Row, Col} from "react-bootstrap"
import {style} from "glamor"
import axios from "axios"
import _ from 'lodash'
import Video from "components/Video"

const styles = {
    section: style({

    }),
    title: style({
        fontSize: "3.5rem",
        textAlign: "center"
    })
}

export default class PopularVideos extends Component {

    state = {
        videoList:[]
    }
    
    componentWillMount = () => {
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

    render() {

        return(
            <section className={styles.section}>
                <h1 className={styles.title} >Popular Videos</h1>
                <Grid>
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            {
                                ( _.isEmpty(this.state.videoList) ) ? <Video  />: <Video featured video={this.state.videoList[0]} />
                            }
                        </Col>
                        <Col xs={6}>
                            {
                                ( _.isEmpty(this.state.videoList) ) ? <Video  />: <Video video={this.state.videoList[1]} />
                            }
                        </Col>
                        <Col xs={6}>
                            {
                                ( _.isEmpty(this.state.videoList) ) ? <Video  />: <Video video={this.state.videoList[2]} />
                            }
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}