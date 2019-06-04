import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import TopNav from '../Navigation/TopNav';
import Footer from '../Navigation/Footer';

import Home from '../Home/Home';
import Contact from '../Contact/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default class App extends Component {
	render(){
		return(
			<Router>
				<div>
					<TopNav />
					<Route exact path={"/"} component={Home} />
					<Route path={"/Home"} component={Home} />
					<Route path={"/Contact"} component={Contact} />
					<Footer />
				</div>

			</Router>
		)
	}
}