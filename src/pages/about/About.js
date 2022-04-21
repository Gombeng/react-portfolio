import React from 'react';
import './About.scss';

export default function About() {
	return (
		<div id="about" className="container about">
			<div>
				<div className="img">
					<img src="./images/profil.png" alt="My Profile" />
				</div>

				<div className="text">
					<h2 className="title">About me</h2>
					<p>
						Hi, I am Syahrizal Ardana, currently I am studying Informatics
						engineering. I am interested in various things related to front-end
						development
					</p>
				</div>
			</div>
		</div>
	);
}
