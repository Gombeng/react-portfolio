import React from 'react';
import styled from 'styled-components';
import { BgImageHome, ImageProfil } from '../../assets/assets';
import Button from '../../components/Button';
import { tabTitle } from '../../utils/GeneralFunc';
import { color } from '../../utils/GlobalVar';
import { device } from '../../utils/Device';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
	tabTitle('Home | Syahrizal Ardana');

	let urls = [
		'https://www.linkedin.com/in/syahrizal-ardana-45399a1b1/',
		'https://facebook.com/MSR.GOMBENG/',
		'https://www.instagram.com/msr.gombeng/',
	];

	return (
		<Container>
			{/* Simplify things, life already complicated. */}

			<div className="left">
				<img src={ImageProfil} alt="profil" />
			</div>

			<div className="right">
				<h4 className="mb-half">シャフリザル・アルダナ</h4>
				<h3 className="mb-half">Hi! I'm Syahrizal Ardana</h3>
				<p style={{ marginBottom: '2rem' }}>
					I've been a Front-end Developer enthusiast since 2019. I do love
					implementing stunning UI design onto my project.
				</p>

				<div className="info">
					<Button
						title="Download CV"
						color={color.bg}
						bgColor={color.textSec}
						className="btn"
						as="a"
						href="https://drive.google.com/file/d/1FbUFv6eX6a28Ky_I1V0sEq-xgCbyJbJn/view?usp=sharing"
						target="_blank"
						rel="noreferrer"
					/>

					<div>
						{urls.map((url) => (
							<SocialIcon
								className="social"
								url={url}
								style={{ height: 40, width: 40 }}
								bgColor={color.textSec}
								target="_blank"
							/>
						))}
					</div>
				</div>
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

	.info {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		.social {
			&:not(:last-child) {
				margin-right: 1.5rem;
			}
		}

		.btn {
			margin-top: 1.5rem;
			
			@media ${device.tablet} {
				margin-top: 0;
				margin-right: 1.5rem;
			}
		}

		@media ${device.mobilemax} {
			flex-direction: column;
			.social {
				order: 1;
			}
			.btn {
				order: 2;
			}
		}
	}

	@media ${device.tablet} {
		background-position: bottom;
		flex-direction: row;
	}
`;
