import React, { Component } from 'react';
import './Navi.scss';
import Burger from './Burger';
import $ from 'jquery';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default class Navi extends Component {
	componentDidMount() {
		const navHolderA = document.getElementsByClassName('nav-a');
		const navHolder = document.getElementsByClassName('nav-holder');
		const burgerDiv = document.querySelector('.sc-bdnylx');
		const burgerDivChild = document.querySelector('.sc-bdnylx').childNodes;

		$(navHolderA).on('click', () => {
			if ($(navHolder).hasClass('active')) {
				$(navHolder).removeClass('active');
				$(navHolder).addClass('hidden');
				$(burgerDivChild).removeClass('open');
				$(burgerDivChild).addClass('closed');
			}
		});
		$(burgerDiv).on('click', () => {
			if ($(navHolder).hasClass('hidden')) {
				$(navHolder).removeClass('hidden');
				$(navHolder).addClass('active');
			} else {
				$(navHolder).removeClass('active');
				$(navHolder).addClass('hidden');
			}
		});
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div className={`nav-holder hidden`}>
					<nav className={`transparent holder transition `}>
						<HashLink smooth to="./#header" className="nav-a">
							Home
						</HashLink>
						<HashLink smooth to="./#about" className="nav-a">
							About
						</HashLink>
						<HashLink smooth to="./#skills-h2" className="nav-a">
							Skills
						</HashLink>
						<Link to="./projects" className="nav-a">
							Projects
						</Link>
						<Link to="./contact" className="nav-a">
							Contact
						</Link>
					</nav>
					<Burger />
				</div>
			</Router>
		);
	}
}
