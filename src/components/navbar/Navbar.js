import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

let urls = [
	'https://www.linkedin.com/in/syahrizal-ardana-45399a1b1/',
	'https://facebook.com/MSR.GOMBENG/',
	'https://www.instagram.com/msr.gombeng/',
];

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<>
			<nav className="nav">
				<div className="nav__container">
					<Link exact to="/" className="nav--logo">
						Ardn
					</Link>

					<div className="nav--icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
					</div>

					<ul className={click ? 'nav--menu active' : 'nav--menu'}>
						<li className="nav--item">
							<Link
								exact
								to="/"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								Home
							</Link>
						</li>
						<li className="nav--item">
							<Link
								exact
								to="/about"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								About
							</Link>
						</li>
						<li className="nav--item">
							<Link
								exact
								to="/work"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								Work
							</Link>
						</li>
						<li className="nav--item">
							<Link
								exact
								to="/services"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								Services
							</Link>
						</li>
						<li className="nav--item">
							<Link
								exact
								to="/contact"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			{/* <div className="social">
				{urls.map((url) => (
					<SocialIcon
						className="icon menu-item"
						url={url}
						style={{ height: 40, width: 40 }}
						bgColor="#000"
						target="_blank"
					/>
				))}
			</div> */}
		</>
	);
};

export default Navbar;
