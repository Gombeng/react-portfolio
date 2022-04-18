import React, { Component } from 'react';
import './Navbar.scss';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	showSettings(event) {
		event.preventDefault();
	}

	render() {
		// NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
		return (
			<div className="navbar">
				<Link to="/" className="logo">
					Ardn
				</Link>

				<Menu className="menu">
					<Link to="/" id="home" className="menu-item">
						Home
					</Link>
					<Link to="/about" id="about" className="menu-item">
						About
					</Link>
					<Link to="/projects" id="projects" className="menu-item">
						Projects
					</Link>
					<Link to="/services" id="services" className="menu-item">
						Services
					</Link>
					<Link to="/contact" id="contact" className="menu-item">
						Contact
					</Link>
				</Menu>
			</div>
		);
	}
}
