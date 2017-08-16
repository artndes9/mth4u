import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {style, media} from 'glamor'
import classNames from 'classnames'
import ReactDOM from 'react-dom'

const styles= {
    wrapper: style({
        width: '100%',
        position: 'relative',
        paddingBottom: '65%',
        boxSizing: 'border-box',
        boxShadow: '0px 5px 10px -5px rgba(0,0,0,0.5)',
        cursor: 'pointer',        
        '& img': {
            position: 'absolute',
            width: "100%",
            height: '100%',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
        },
        '.slick-slider .slick-slide &': {
            transform: 'scale(0.9)'
        }
    }, media('screen and (max-width: 767px)',{
        '.slick-slider .slick-slide &': {
            transform: 'scale(0.85)'
        },
        '.slick-slider .slick-slide.slick-center &': {
            transform: 'scale(1)'
        },
        '.slick-slider .slick-slide.slick-center + .slick-slide &': {
            transform: 'scale(0.925)'
        }
    })),
    scaleDown: style({
    }, media('screen and (max-width: 767px)', {
        '.slick-slider .slick-slide &': {
            transform: 'scale(0.925)'
        }
    }))
}

export default class VideoSlide extends Component {

    componentDidMount = () => { this.context.videoCarouselState.subscribe(() => this.forceUpdate()) }

    setSlidePosition(e) {
        let el  = ReactDOM.findDOMNode(e.currentTarget)
        this.context.videoCarouselState.update({ currentSlidePos: el.getBoundingClientRect()  })
    }

    render() {
        
        let {video} = this.props

        let { previousSibling } = this.context.videoCarouselState

        let wrapperClasses = classNames({
            [styles.wrapper]: true,
            [styles.scaleDown]: previousSibling === video.id 
        })

        return (
            <div className={wrapperClasses} onClick={e => this.setSlidePosition(e) }  >
                { 
                    <img style={{ backgroundImage: `url(${video.snippet.thumbnails.medium.url})` }} alt="" />
                }
            </div>
        )
    }
}

VideoSlide.contextTypes = {
    videoCarouselState: PropTypes.object
}