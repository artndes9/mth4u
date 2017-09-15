import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css';
// import App from './pages/App';
import Home from './pages/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <Router>
            <Home/>
        </Router>, document.getElementById('root'));
registerServiceWorker();
