import React from 'react'
import {style, media} from "glamor"


const styles = {
    slideWrapper: style({
        minHeight: 300,
        height: 'auto',
        backgroundColor: '#fffff',
    }, media('(min-width: 768px)', {
        display: 'flex'
    })),
    slideImg: style({
        position: 'relative',
        '& img': {
            width: '100%',
            height: 215,
            borderRadius: '5px 5px 0 0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            position: 'relative',
            top: 0
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            display:'none',
            height: '100%',
            right: 2,
            width: '100%',
            top: 0,
            backgroundColor: '#fff',
            transformOrigin: 'top right',
            transform: 'rotate(-70deg)',
        }
    }, media('(min-width: 768px)', {
        flex: 5,
        '& img': {
            height: '100%',
            borderRadius: '5px 0 0 5px',
        },
        '&:after': {
            display: 'block'
        }
    })),
    slideTitle: style({
        fontSize: '2rem',
        fontWeight: '700',
    }),
    slideDesc: style({
    }),
    slideInfo: style({
        padding: '30px 30px',
    }, media('(min-width: 768px)', {
        flex: 2,
        padding: '50px 30px',
        position: 'relative'
    }))
}

export default class PopularVideoSlide extends React.Component {

    render() {
        let {video} = this.props

        return(
            <div className={styles.slideWrapper}>
                <div className={styles.slideImg}>
                    <img style={{ backgroundImage: `url(${video.snippet.thumbnails.maxres.url})`}} alt="" />
                </div>
                <div className={styles.slideInfo}>
                    <h3 className={styles.slideTitle}>{video.snippet.title}</h3>
                    <p className={styles.slideDesc}>
                        <span>{video.statistics.viewCount} Views</span>  &nbsp;
                        <span>{video.statistics.likeCount} Likes</span>
                    </p>
                </div>
            </div>
        )
    }
}