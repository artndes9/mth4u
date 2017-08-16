import React,{ Component } from "react"
import { style, before, after, media } from 'glamor'
import colors from "themes/colors"
import classNames from "classnames"

const styles = {
    toggleWrapper: style({
        width: 28,
        height:50,
        position: "absolute",
        right: 0,
        marginRight: 10
    },media('(min-width:768px)', {
        display: 'none'
    })),
    hamburger: style({
            backgroundColor: colors.grey,
            height: 2,
            width: '100%',
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            transition: "all 0.25s ease"
        },
        before({
            backgroundColor: colors.grey,
            content: '""',
            position: "absolute",
            top: -8,
            left: 0,
            width: '100%',
            height: 2,
            transition: "all 0.25s ease"
        }),
        after({
            backgroundColor: colors.grey,
            content: '""',
            position: 'absolute',
            top: 8,
            left: 0,
            width: '100%',
            height: 2,
            transition: "all 0.25s ease"
        })
    ),
    hamburgerOpen: style({
            transform: "translateX(-30px)",
            backgroundColor: "rgba(0,0,0,0)",
        },
        before({
            transform: "translateY(8px) translateX(30px) rotate(45deg)"
        }),
        after({
            transform: "translateY(-8px) translateX(30px) rotate(-45deg)"
        })
    ),
}

export default class CustomNavbarToggle extends Component {
    render() {

        let hamburgerClasses = classNames({
            [styles.hamburger]:true,
            [styles.hamburgerOpen]: this.props.toggleState
        })

        return(
            <div {...styles.toggleWrapper} onClick={() => this.props.onToggle(!this.props.toggleState)}>
                <div className={hamburgerClasses} />
            </div>
        )
    }
}
