import React, { Component } from 'react'
import { style } from "glamor"
import TransitionGroup from 'react-addons-transition-group';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Preload from 'react-preload'
import Footer from '../components/Footer'
import HomePage from '../pages/HomePage'
import Policy from '../pages/Policies'

var images = [
    `../imgs/apple-appStore.jpg`,
    `../imgs/google-play-app.jpg`,
    `../imgs/banner.png`,
];

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
                <Router>
                    <div>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/policies/:id' component={Policy}/>
                    </div>                
                </Router>
                <Footer />
            </div>
        </Preload>
    );
  }
}

export default Home;