import React from 'react';
import './About.scss';

import Container from '../../components/layout/Container';
import { SocialIcon } from 'react-social-icons';

let urls = [
	'https://www.linkedin.com/in/syahrizal-ardana-45399a1b1/',
	'https://facebook.com/MSR.GOMBENG/',
	'https://www.instagram.com/msr.gombeng/',
];

export default function About() {
	return (
		<Container>
			<div className="about">
				<div className="about__img">
					<img src="./images/profil.png" alt="My Profile" />
				</div>

				<div className="about__desc">
					<h2 className="title">About me</h2>
					<p>
						Hi, I am Syahrizal Ardana, currently I am studying Informatics
						engineering. I am interested in various things related to front-end
						development
					</p>

					<p>Found me in social media</p>

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
				</div>
			</div>
		</Container>
	);
}
