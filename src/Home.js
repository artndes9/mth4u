import React, { Component } from 'react'
import { style } from "glamor"

import MthNavbar from 'components/Navbar'
import Slider from 'components/Slider'
import HomePageInfo from 'components/Section/HomePageInfo'
import PopularVideos from 'components/Section/PopularVideos'

const styles = {
    mainContainer: style({
        position: "relative",
        top: "calc(100vh - 72px)"
    })
}

class Home extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            valueId: '',
            valuePassword: ''
        };
    }
  render() {
    return (
        <div className="body">
            <MthNavbar/>
            <Slider/>
            <main className={styles.mainContainer}>
                <HomePageInfo />
                <PopularVideos />
            </main>
        </div>
    );
  }
}

export default Home;