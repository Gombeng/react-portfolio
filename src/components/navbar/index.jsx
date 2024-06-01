import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { device } from '../../utils/Device';
import { color } from '../../utils/GlobalVar';
import { IconClose, IconMenu, Logo } from '../../assets';

import { SocialIcon } from 'react-social-icons';
import { Container } from './Navbar.styled';

let urls = [
	'https://www.linkedin.com/in/syahrizal-ardana-45399a1b1/',
	'https://www.github.com/Gombeng/',
	// 'https://facebook.com/MSR.GOMBENG/',
	// 'https://www.instagram.com/msr.gombeng/',
];

const Navbar = () => {
	// toggle navbar menu
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	let i = 0;
	return (
		<Container>
			<NavLink to="/" className="nav-logo">
				<img src={Logo} alt="Logo" />
			</NavLink>

			<div>
				{urls.map((url) => (
					<SocialIcon
						className="social"
						url={url}
						style={{ height: 30, width: 30 }}
						bgColor={color.textSec}
						target="_blank"
					/>
				))}
			</div>

			<div className="nav-icon">
				<img
					onClick={handleClick}
					src={click ? IconClose : IconMenu}
					alt={click ? 'Close' : 'Menu'}
				/>
			</div>

			<div className={click ? 'nav-menu active' : 'nav-menu'}>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
					onClick={handleClick}
				>
					<span>0{i++}</span>
					HOME
				</NavLink>
				<NavLink
					to="/works"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
					onClick={handleClick}
				>
					<span>0{i++}</span>
					WORK
				</NavLink>
				{/* <NavLink
					to="/about"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
					onClick={handleClick}
				>
					<span>0{i++}</span>
					ABOUT
				</NavLink> */}
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
					onClick={handleClick}
				>
					<span>0{i++}</span>
					CONTACT
				</NavLink>
			</div>
		</Container>
	);
};

export default Navbar;
