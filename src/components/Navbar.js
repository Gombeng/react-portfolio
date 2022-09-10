import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils/Device';
import { color } from '../utils/GlobalVar';
import { IconClose, IconMenu, Logo } from '../assets/assets';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<Container>
			<NavLink to="/" className="nav-logo">
				<img src={Logo} alt="Logo" />
			</NavLink>

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
					<span>00</span>
					HOME
				</NavLink>
				<NavLink
					to="/work"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
					onClick={handleClick}
				>
					<span>01</span>
					WORK
				</NavLink>
				{/* <NavLink
					to="/services"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
					onClick={handleClick}
				>
					<span>02</span>
					SERVICES
				</NavLink> */}
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
					onClick={handleClick}
				>
					<span>03</span>
					ABOUT
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
					onClick={handleClick}
				>
					<span>04</span>
					CONTACT
				</NavLink>
			</div>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	/* max-width: 1600px;
	margin: 0 auto; */
	text-align: left;

	@media ${device.mobilemax} {
		padding: 20px 24px;
	}

	@media ${device.tablet} {
		padding-left: 40px;
	}

	@media ${device.laptop} {
		margin-top: 20px;
		padding-left: 55px;
	}

	.nav-logo {
		img {
			width: 40px;

			@media ${device.tablet} {
				width: 48px;
			}
		}
	}

	.nav-icon {
		cursor: pointer;
		z-index: 999;

		img {
			width: 24px;
		}

		@media ${device.tablet} {
			display: none;
		}
	}

	.nav-menu {
		.link {
			font-weight: 100;
			@media ${device.tablet} {
				&:not(:last-child) {
					margin-right: 2rem;
				}
			}
			@media ${device.laptop} {
				&:not(:last-child) {
					margin-right: 3rem;
				}
			}
		}

		span {
			font-weight: bolder;
			margin-right: 12px;

			@media ${device.tablet} {
				display: none;
			}

			@media ${device.laptop} {
				display: inline;
			}
		}

		@media ${device.mobilemax} {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: -1000vh;
			right: 0;
			width: 69%;
			height: 100vh;
			padding: 153px 1px 2rem 2rem;
			background: rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(30px);
			transition: 0.6s;
			z-index: 99;

			.link {
				padding: 16px 0;
				transition: 0.6s;

				&:hover {
					border-right: 4px solid rgba(255, 255, 255, 0.5);
				}

				&.active {
					border-right: 4px solid white;
				}
			}

			&.active {
				top: 0;
			}
		}

		@media ${device.tablet} {
			background-color: ${color.bg};
			padding: 40px 48px;

			.link {
				padding: 40px 0 37px;
				transition: 0.3s;

				&:hover {
					border-bottom: 3px solid rgba(255, 255, 255, 0.5);
				}

				&.active {
					border-bottom: 3px solid white;
				}
			}
		}

		@media ${device.laptop} {
			padding-left: 100px;
			padding-right: 130px;
			background: rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(30px);
		}
	}
`;
