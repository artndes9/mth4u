import React, { Component } from 'react'
import { style } from "glamor"

import Navbar from 'components/Navbar'
import Slider from 'components/Slider'
import HomePageInfo from 'components/Section/HomePageInfo'
import PopularVideos from 'components/Section/PopularVideos'
import Testimonials from 'components/Section/Testimonials'
import Footer from 'components/Footer'

const styles = {
    mainContainer: style({
        position: "relative",
        marginTop: "calc(100vh - 72px)"
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
            <Navbar/>
            <Slider/>
            <main className={styles.mainContainer}>
                <HomePageInfo />
                <PopularVideos />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
  }
}

export default Home;