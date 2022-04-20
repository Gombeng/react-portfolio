import React, { Component } from 'react';
import './Navbar.scss';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

let urls = [
	'https://www.linkedin.com/in/syahrizal-ardana-45399a1b1/',
	'https://facebook.com/MSR.GOMBENG/',
	'https://www.instagram.com/msr.gombeng/',
];

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

					<div className="social">
						{urls.map((url) => (
							<SocialIcon
								className="icon menu-item"
								url={url}
								style={{ height: 40, width: 40 }}
								bgColor="#000"
								target="_blank"
							/>
						))}
					</div>
				</Menu>
			</div>
		);
	}
}
