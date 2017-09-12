import React, { Component } from 'react'
import { style } from "glamor"
import Navbar from 'components/Navbar'
import Slider from 'components/Slider'
import HomePageInfo from 'components/Section/HomePageInfo'
import PopularVideos from 'components/Section/PopularVideos'
import Preload from 'react-preload'
import Testimonials from 'components/Section/Testimonials'
import Footer from 'components/Footer'
import TransitionGroup from 'react-addons-transition-group';

var images = [
    `../imgs/apple-appStore.jpg`,
    `../imgs/google-play-app.jpg`,
    `../imgs/banner.png`,
];


const styles = {
    mainContainer: style({
        position: "relative"
    })
};

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
        <Preload
            images={images}
            autoResolveDelay={3000}
            onError={this._handleImageLoadError}
            onSuccess={this._handleImageLoadSuccess}
            resolveOnError={true}
            mountChildren={true}
        >
            <div className="body">
                <Navbar/>
                <TransitionGroup>
                    <Slider/>
                </TransitionGroup>

                <main className={styles.mainContainer}>
                    <HomePageInfo />
                    <PopularVideos />
                    <Testimonials />
                </main>
                <Footer />
            </div>
        </Preload>

    );
  }
}

export default Home;