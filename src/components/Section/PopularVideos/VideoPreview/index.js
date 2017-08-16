import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import {style, css} from "glamor"
import ReactDOM from 'react-dom'
import { TimelineMax } from 'gsap'
import _ from 'lodash'

let mobile = window.innerWidth < 768

const styles = {
    wrapper: style({
        width: '100%',
        paddingBottom: '56%',
        position: 'relative',
        marginBottom: 30,
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
    }),
    youtubeWrapper: style({
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'block',
    }),
    animatePreviewWindow: style({
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0,
        boxShadow: '0px 6px 20px -5px rgba(0,0,0,0.5)',
        '& img': {
            width: '100%',
            height: '100%'
        }
    }),
    proxyYoutube: style({
        zIndex: 0,
        boxShadow: '0px 6px 20px -5px rgba(0,0,0,0.5)',        
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

    video = null
    proxyVideo = null

    state = {
        previewPos: null
    }

    componentDidMount = () => { 
        this.context.videoCarouselState.subscribe(() => this.forceUpdate()) 
        this.setState({ previewPos: ReactDOM.findDOMNode(this.previewPane).getBoundingClientRect() })
    }

    componentWillUpdate = (nextProps, nextState, nextContext) => {
        let {currentVideo, currentSlidePos } = nextContext.videoCarouselState
        let { previewPos } = nextState

        if(this.video !== currentVideo ) {
            
                this.video = currentVideo
            let initialSlidePos = {}
            
            if( !mobile && currentSlidePos ) {

                initialSlidePos = _.assign(initialSlidePos, {
                    left    : `${(currentSlidePos.left - previewPos.left )}px`,
                    top     : `56%`,
                    width   : `${(currentSlidePos.width)}px`,
                    height  : `${(currentSlidePos.height)}px`,
                    zIndex  : 10,
                })

                let vars = {left: '0px', top: '0px', width: '100%', height: '100%', ease: 'Power0.easeNone', onStart: () => { this.proxyVideo = currentVideo }}

                let animation = new TimelineMax()
                
                animation.set(this.youtube, {opacity: 0})
                        .set(this.animatePane, initialSlidePos)
                        .fromTo(this.animatePane, 0.75, initialSlidePos , vars )
                        .set(this.animatePane, {zIndex: 0})
                        .set(this.youtube,{opacity: 1})
                        .set(this.proxyYoutube, {zIndex: 0})

            }
        }
    }

    render() {

        let video = (this.video)? _.filter(this.props.videoList, { id: this.video })[0]: this.video
        
        return(
            <div ref={c => this.previewPane = c} className={styles.wrapper}>
                <div ref={c => this.animatePane = c}  className={styles.animatePreviewWindow} >
                    { (video)? (<img src={video.snippet.thumbnails.maxres.url} alt="" /> ) : video  }
                </div>
                <div ref={c => this.proxyYoutube = c} className={css(styles.youtubeWrapper, styles.proxyYoutube)}>
                    <YouTube 
                        videoId={this.proxyVideo}
                        opts={youtubeOptions}  
                        />
                </div>
                
                <div ref={c => this.youtube = c} className={styles.youtubeWrapper}>
                    <YouTube 
                        videoId={this.video}
                        opts={youtubeOptions}  
                        />
                </div>

                
                
            </div>
        )
    }
}

VideoPreview.contextTypes = {
    videoCarouselState: PropTypes.object
}