import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {style, media} from 'glamor'
import classNames from 'classnames'


const styles = {
    wrapper: style({
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 25,
        height: 'calc(100% - 11px)',
        position: 'absolute',
        zIndex: 5,
        top: 5,
        display:'none',
        cursor: 'pointer',
        '& .fa': {
            color: '#fff',
            fontSize: '3rem',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }
    }, media('screen and (max-width: 767px)', {
        backgroundColor: 'rgba(0,0,0,0)',
        top: '-235%',
        '& .fa': {
            color: '#ccc'
        }
    })),
    navPrev: style({
        left: 0,
        display: 'block'
    }),
    navNext: style({
        right: 0,
        display: 'block'
    }),
}

class SliderNavPrev extends Component {

    componentDidMount = () => { this.context.videoCarouselState.subscribe(() => this.forceUpdate()) }
    
    render () {
        
        let wrapperClasses = classNames({
            [styles.wrapper]: true,
            [styles.navPrev]: this.context.videoCarouselState.showPrevNav
        })
        
        return (
            <div className={wrapperClasses} onClick={this.props.onClick}  >
            <span className="fa fa-angle-left" />
            </div>
        )
    }
}

class SliderNavNext extends Component {
    
    componentDidMount = () => { this.context.videoCarouselState.subscribe(() => this.forceUpdate()) }
    
    render() {
        
        let wrapperClasses = classNames({
            [styles.wrapper]: true,
            [styles.navNext]: this.context.videoCarouselState.showNextNav
        })
    
        return (
            <div className={wrapperClasses} onClick={this.props.onClick}> 
                <span className="fa fa-angle-right" />
            </div>
        )
    }
    
}


SliderNavPrev.contextTypes = {
    videoCarouselState: PropTypes.object
}

SliderNavNext.contextTypes = {
    videoCarouselState: PropTypes.object
}

export { 
    SliderNavPrev,
    SliderNavNext,
}