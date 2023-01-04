import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { BgImageHome, ImageProfil } from '../../assets/assets';
import { device, tabTitle, color } from '../../utils/Utils';

export default function Home() {
	tabTitle('Home | Syahrizal Ardana');

	return (
		<Container>
			{/* Simplify things, life already complicated. */}

			<div className="left">
				<img src={ImageProfil} alt="profil" />
			</div>

			<div className="right">
				<h5 className="mb-half">シャフリザル・アルダナ</h5>
				<h3 className="mb-half">Hi! I'm Syahrizal Ardana</h3>
				<p style={{ marginBottom: '2.5rem' }}>
					I've been a Front-end Developer enthusiast since 2019. I do love
					implementing stunning UI design onto my project.
				</p>

				<Button
					title="Download CV"
					color={color.bg}
					bgColor={color.textSec}
					as="a"
					href="https://drive.google.com/file/d/13uL2NZ9gVVz29y8J1EMNBuFhvTp0dnAV/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
				/>
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0 8%;
	min-height: 100vh;
	background-image: url(${BgImageHome});
	background-repeat: no-repeat;
	background-position: left;
	background-size: cover;

	p {
		max-width: 400px;
	}

	img {
		width: 8rem;
		margin-bottom: 1rem;
		@media ${device.tablet} {
			width: 15rem;
			margin-bottom: 0;
			margin-right: 3rem;
		}
	}

	@media ${device.tablet} {
		background-position: center;
		flex-direction: row;
	}
`;
