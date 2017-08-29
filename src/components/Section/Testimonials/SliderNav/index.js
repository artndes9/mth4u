import React from 'react'
import { style } from 'glamor'
import classNames from 'classnames'

const styles = {
    navBtn: style({
        display: 'block',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 5,
        width: 35,
        height: 35,
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.8)',
        cursor: 'pointer',
    }),
    navBtnPrev: style({
        left: -15
    }),
    navBtnNext: style({
        right: -15
    }),
    navIcon: style({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -51%)'
    }),

}

const SliderNavPrev = (props) => {

    let NavBtnClasses = classNames({
        [styles.navBtn]: true,
        [styles.navBtnPrev]: true
    })

    let NavIconClasses = classNames('fa fa-arrow-left',{
        [styles.navIcon]: true
    })

    return (
        <span className={NavBtnClasses} onClick={props.onClick}  >
            <span className={NavIconClasses} />
        </span>
    )
}

const SliderNavNext = (props) => {
    
        let NavBtnClasses = classNames({
            [styles.navBtn]: true,
            [styles.navBtnNext]: true,
        })

        let NavIconClasses = classNames('fa fa-arrow-right',{
            [styles.navIcon]: true
        })
    
        return (
            <span className={NavBtnClasses} onClick={props.onClick}  >
                <span className={NavIconClasses} />
            </span>
        )
    }

export {
    // SliderNavNext,
    // SliderNavPrev
}