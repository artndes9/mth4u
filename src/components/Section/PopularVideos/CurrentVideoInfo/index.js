import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style } from 'glamor'
import classNames from 'classnames'
import _ from 'lodash'
import moment from 'moment'

const styles = {
    wrapper: style({
        width: '100%',
        paddingBottom: '20%',
        position: 'relative',
    }),
    infoBox: style({
        position: 'absolute',
        top: 0,
        padding: '0 20px'
    }),
    title: style({
        fontSize: '2.5rem',
        marginTop: 0,
        '& ~ p .time': { 
            fontSize: '1.3rem'
         },
        '& ~ p .statistic': {
            fontSize: '1.5rem',
            margin: '0 25px 0 0',
            '& .fa': {
                marginRight: 10,
                color: 'green'
            }
        }
    })
}

class CurrentVideoInfo extends Component {

    componentDidMount = () => { this.context.videoCarouselState.subscribe(() => this.forceUpdate()) }
    
    render() {

        let { currentVideo } = this.context.videoCarouselState 

        let video = (currentVideo)? _.filter(this.props.videoList, { id: currentVideo })[0]: currentVideo

        return(
            <div className={classNames('hidden-xs hidden-sm',{ [styles.wrapper]: true })}>
                <div className={styles.infoBox}>
                    {
                        (video)? (
                            <div>
                                <h3 className={styles.title}>{video.snippet.title}</h3>
                                <p>
                                    <span className="time">{moment(video.snippet.publishedAt).fromNow()}</span>
                                </p>
                                <p>
                                    <span className="statistic"><span className="fa fa-eye"></span> {video.statistics.viewCount}</span>
                                    <span className="statistic"><span className="fa fa-heart-o"></span> {video.statistics.likeCount}</span>
                                    <span className="statistic"><span className="fa fa-comments-o"></span> {video.statistics.commentCount}</span>
                                </p>
                            </div>
                        ): video
                    }
                </div>
            </div>
        )
    } 
}

CurrentVideoInfo.contextTypes = {
    videoCarouselState: PropTypes.object
}

export default CurrentVideoInfo