import React, { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { color, device } from '../utils/Utils';

const Card = ({ img, title, desc, demoUrl }) => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<Container>
			<div className="img left">
				<img src={img} alt="project" />
			</div>
			<div className="right">
				<div className={click ? 'nav-menu active' : 'nav-menu'}>
					<NavLink
						to="/work"
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
					>
						<span>07</span>
					</NavLink>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
					>
						<span>09</span>
					</NavLink>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
					>
						<span>06</span>
					</NavLink>
				</div>

				<div className="text">
					<h4 className="title mb-half">{title}</h4>
					<p className="desc">{desc}</p>
				</div>

				<div className="btn">
					<Button
						as="a"
						color={color.bg}
						bgColor={color.textSec}
						href={demoUrl}
						target="_blank"
						rel="noreferrer"
						title="Demo"
					/>
				</div>
			</div>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	@media ${device.tabletmax} {
		text-align: center;
	}

	img {
		width: 100%;
		border-radius: 0.3rem;
	}

	.text {
		padding: 1rem 0;

		.desc {
			max-width: 480px;
		}
	}

	.btn {
		margin-top: 1.5rem;
	}

	.nav-menu {
		display: flex;
		@media ${device.tabletmax} {
			justify-content: center;
			margin: 2rem 0 1rem;
		}

		@media ${device.laptop} {
			margin-bottom: 1rem;
			flex-direction: row;
		}
	}

	.link {
		padding: 1rem;
		width: fit-content;
		border: 1px solid white;
		border-radius: 0.3rem;

		&:not(:last-child) {
			margin-right: 1.5rem;
		}

		&:hover,
		&.active {
			color: ${color.bg};
			background-color: ${color.textOne};
			font-weight: bold;
		}
	}

	@media ${device.laptop} {
		display: flex;

		.left {
			margin-right: 2rem;
		}
	}
`;
