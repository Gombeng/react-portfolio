import React from 'react';
import './About.scss';
import { SocialIcon } from 'react-social-icons';

export default function About() {
	let urls = [
		'https://www.linkedin.com/in/syahrizal-ardana-45399a1b1/',
		'https://facebook.com/MSR.GOMBENG/',
		'https://www.instagram.com/msr.gombeng/',
	];

	return (
		<div id="about" className="container about">
			<div className="card">
				<div className="img">
					<img src="./images/profil.png" alt="My Profile" />
				</div>

				<div className="text">
					<h2>About me</h2>
					<p>
						Hi, I am Syahrizal Ardana, currently I am studying Informatics
						engineering. I am interested in various things related to front-end
						development
					</p>
				</div>

				<div className="social-media">
					{urls.map((url) => (
						<SocialIcon
							className="icon"
							url={url}
							style={{ height: 40, width: 40 }}
							bgColor="#000"
							target="_blank"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
