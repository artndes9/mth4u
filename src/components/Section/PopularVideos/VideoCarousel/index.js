import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import _ from 'lodash'
import VideoSlide from './VideoSlide'
import { SliderNavPrev, SliderNavNext } from './SliderNav'

let mobile = window.innerWidth < 768
let videoNos = mobile? 3:4

class VideoCarousel extends Component {

    shouldComponentUpdate = (nextProps, nextState) => this.props.videoList !== nextProps.videoList

    setCarouselState = (prev,current) => {
        var state = {
            showPrevNav: current !== 0,
            showNextNav: current < (this.props.videoList.length - videoNos)
        }
        if ( (this.props.videoList[current-1] !== undefined )  ) {
            state = _.assign(state, {previousSibling: this.props.videoList[current-1].id } )
        }
        if ( mobile ) {
            state = _.assign(state, {currentVideo: this.props.videoList[current].id } )
        }
        this.context.videoCarouselState.update(state)
    }

    setCurrentVideo(currentId) {
        var state = {}        
        if ( !mobile ) {
            state = _.assign(state, {currentVideo: currentId } )
        }
        this.context.videoCarouselState.update(state)
    }

    render(){

        const sliderOptions = {
            accessibility: false,
            dots: false,
            infinite: false,
            autoPlay: false,
            speed: 1000,
            slidesToShow: videoNos,
            slidesToScroll: 1,
            centerMode: mobile,
            focusOnSelect: mobile,
            beforeChange: this.setCarouselState,
            prevArrow: <SliderNavPrev />,
            nextArrow: <SliderNavNext />
        }
        
        let {videoList} = this.props

        return(
            <Slider ref={ s => this.slider = s }  {...sliderOptions} >
                { _.map(videoList, (video, index) => <div key={video.id} onClick={() => this.setCurrentVideo(video.id) }><VideoSlide video={video} /></div> )  }
            </Slider>
        )
    }
}

VideoCarousel.contextTypes = {
    videoCarouselState: PropTypes.object
}

export default VideoCarousel