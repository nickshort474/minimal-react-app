import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class TopNav extends Component{

	render(){
		return(
			<div>
				<Link to="/Home">Home</Link>
				<Link to="/Alternate">Alternate</Link>
			</div>
		)
	}
}