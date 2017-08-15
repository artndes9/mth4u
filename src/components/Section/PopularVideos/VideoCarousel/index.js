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
        let currentVideoId = (mobile)? this.props.videoList[current].id: this.context.videoCarouselState.currentVideo
        let previousSiblingId =  (this.props.videoList[current-1] !== undefined )? this.props.videoList[current-1].id : null
        let showPrevNav = current !== 0
        let showNextNav = current < (this.props.videoList.length - videoNos)
        this.context.videoCarouselState.update(currentVideoId,previousSiblingId, showPrevNav, showNextNav)
    }

    setCurrentVideo(currentId) {
        let  { currentVideo, previousSibling, showPrevNav, showNextNav } = this.context.videoCarouselState 
        let currentVideoId = (!mobile)? currentId: currentVideo

        this.context.videoCarouselState.update(currentVideoId,previousSibling, showPrevNav, showNextNav)
    }

    render(){

        const sliderOptions = {
            dots: false,
            infinite: false,
            autoPlay: false,
            speed: 500,
            slidesToShow: videoNos
            ,
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