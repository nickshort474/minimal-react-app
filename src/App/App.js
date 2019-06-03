import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import TopNav from '../Navigation/TopNav';
import Footer from '../Navigation/Footer';

import HomePage from '../HomePage/Homepage';
import Alternate from '../Alternate/Alternate';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
	render(){
		return(
			<Router>
				<div>
					<TopNav />
					<Route exact path={"/"} component={HomePage} />
					<Route path={"/Home"} component={HomePage} />
					<Route path={"/Alternate"} component={Alternate} />
					<Footer />
				</div>

			</Router>
		)
	}
}