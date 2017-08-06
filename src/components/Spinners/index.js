import React from "react"
import {css, style, before, after} from "glamor"

const grow = css.keyframes({
    '0%': {
        boxShadow: '0 0',
        height: 40
    },
    '40%': {
        boxShadow: '0 -10px',
        height: 50
    },
    '80%': {
        boxShadow: '0 0',
        height: 40                
    },
    '100%': {
        boxShadow: '0 0',
        height: 40                
    }
})

const styles = {
    wrapper: style({
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    spinner: style({
        width: 8,
        height: 40,
        backgroundColor: "#666",
        color: '#666',
        position:'absolute',
        animation: `${grow} 1.5s ease infinite`,
        animationDelay: '0.25s'
    },
    before({
        content: '""',
        position: 'absolute',
        left: -15,
        width: 8,
        height: 40,
        backgroundColor: "#666",
        color: '#666',
        animation: `${grow} 1.5s ease infinite`,
    }),
    after({
        content: '""',
        position: 'absolute',
        left: 15,
        width: 8,
        height: 40,
        backgroundColor: "#666",
        color: '#666',        
        animation: `${grow} 1.5s ease infinite`,
        animationDelay: '0.5s'
    }))
}

const VideoSpinner = () => (
    <div className={styles.wrapper}>
        <div className={styles.spinner} />
    </div>
)

export {
    VideoSpinner
}