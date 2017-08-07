import React, { Component } from "react"
import {style} from "glamor"
import Youtube from "react-youtube"
import moment from "moment"
import _ from 'lodash'
import classNames from 'classnames'
import { VideoSpinner } from 'components/Spinners'

const styles = {
    wrapper: style({
        width: "100%",
        height: "auto",
    }),
    link: style({
        width: "100%",
        height: "calc(65vw - 30px)",
        position: 'relative'
    }),
    thumbnail: style({
        width: "100%",
        height: "auto"
    }),
    title: style({
        fontSize: "1.5rem",
        position: "absolute",
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#fff',
        width: 'calc(100% - 30px)',
        marginTop: 0,
        padding: 5
    }),
    stats: style({
        position: 'absolute',
        bottom: 0,
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 'calc(100% - 30px)',
    }),
    published: style({
        
    }),
    views: style({

    })
}


const featuredStyles = {
    wrapper: style({
        width: "100%",
        height: "auto",
    }),
    link: style({
        width: "100%",
        height: "calc(65vw - 30px)",
        position: 'relative'
    }),
    thumbnail: style({
        width: "100%",
        height: "auto"
    }),
    title: style({
        fontSize: "3rem",
        position: "relative",
        backgroundColor: 'transparent',
        color: '#000',
        width: '100%',
        marginTop: 20,
        padding: 0
    }),
    stats: style({
        position: 'relative',
        color: '#000',
        backgroundColor: 'transparent',
        width: '100%',        
    }),
    published: style({
        
    }),
    views: style({

    })
}


export default class Video extends Component {

    render() {

        let titleClasses = classNames({
            [styles.title]:true,
            [featuredStyles.title]: this.props.featured
        })

        let statsClasses = classNames({
            [styles.stats]:true,
            [featuredStyles.stats]: this.props.featured
        })

        return (
            <div className={styles.wrapper}>
                { 
                    (this.props.video)? <a className={styles.link} target="_blank" href={`https://www.youtube.com/watch?v=${this.props.video.id}`}>
                                            <img 
                                                className={styles.thumbnail} 
                                                src={this.props.video.snippet.thumbnails.standard.url} 
                                                alt={this.props.video.snippet.title}/>
                                        </a> 
                                        : <VideoSpinner />  
                }
                { 
                    (this.props.video)? <h1 className={titleClasses}>
                                            {
                                                (this.props.featured)? this.props.video.snippet.title : _.truncate(this.props.video.snippet.title)
                                            } </h1> 
                                            : null  
                }
                <div className={statsClasses}>
                    { (this.props.video)? <span className={styles.published}>{_.capitalize( moment(this.props.video.snippet.publishedAt).fromNow() )} </span> : null  }
                    { (this.props.video)? <span className={styles.views}>{this.props.video.statistics.viewCount} views </span> : null  }
                </div>
            </div>
        )
    }
}

Video.defaultProps = {
    video: null,
    featured: false
}