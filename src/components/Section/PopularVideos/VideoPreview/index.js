import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import {style} from "glamor"

const styles = {
    wrapper: style({
        width: '100%',
        paddingBottom: '56%',
        backgroundColor: '#999',
        position: 'relative',
        marginBottom: 30,
        boxShadow: '0px 6px 20px -5px rgba(0,0,0,0.5)',
        '& span': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'block'
        },
        '& iframe': {
            width: '100%',
            height: '100%'
        }
    })
}

const youtubeOptions = {
    width: '1280',
    height: '720',
    playerVars: { 
        showinfo: 0
    }
}

export default class VideoPreview extends Component {

    componentDidMount = () => { this.context.videoCarouselState.subscribe(() => this.forceUpdate()) }

    render() {

        let { currentVideo } = this.context.videoCarouselState

        return(
            <div className={styles.wrapper}>
                <YouTube
                    videoId={currentVideo}
                    opts={youtubeOptions}  
                 />
            </div>
        )
    }
}

VideoPreview.contextTypes = {
    videoCarouselState: PropTypes.object
}