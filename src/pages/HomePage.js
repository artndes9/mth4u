import React, { Component } from 'react'
import { style } from "glamor"
import TransitionGroup from 'react-addons-transition-group';
import {withRouter} from 'react-router-dom'
import Slider from '../components/Slider'
import HomePageInfo from '../components/Section/HomePageInfo'
import PopularVideos from '../components/Section/PopularVideos'
import Testimonials from '../components/Section/Testimonials'


const styles = {
    mainContainer: style({
        position: "relative"
    })
};

class HomePage extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            valueId: '',
            valuePassword: ''
        };
    }


  render() {
    return (
        <div> 
            <TransitionGroup>
                <Slider/>
            </TransitionGroup>

            <main className={styles.mainContainer}>
                <HomePageInfo />
                <PopularVideos />
                <Testimonials />
            </main>
        </div>
    );
  }
}

export default withRouter(HomePage);