import React from 'react';
import './About.scss';
import { tabTitle } from '../../utils/GeneralFunc';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';


export default function About() {
	tabTitle('About | Syahrizal Ardana');
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

				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	min-height: 90vh;
	justify-content: center;
	padding: 5vh 10vw;
`