import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<>
			<nav className="nav">
				<div className="nav__container">
					<NavLink exact to="/" className="nav--logo">
						Ardn
					</NavLink>

					<div className="nav--icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
					</div>

					<ul className={click ? 'nav--menu active' : 'nav--menu'}>
						<li className="nav--item">
							<NavLink
								exact
								to="/"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								Home
							</NavLink>
						</li>
						<li className="nav--item">
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								About
							</NavLink>
						</li>
						<li className="nav--item">
							<NavLink
								exact
								to="/work"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								Work
							</NavLink>
						</li>
						<li className="nav--item">
							<NavLink
								exact
								to="/services"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								Services
							</NavLink>
						</li>
						<li className="nav--item">
							<NavLink
								exact
								to="/contact"
								activeClassName="active"
								className="nav--links"
								onClick={handleClick}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
