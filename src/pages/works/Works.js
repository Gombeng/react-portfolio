import React from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import { BgImageWorkD, ImageWork } from '../../assets';
import { color, device, tabTitle } from '../../utils/Utils';

const works = [
	{
		to: '/',
		img: `${ImageWork}`,
		title: 'React Portfolio',
		desc: 'Portfolio website created using React JS  reprehenderit maxime nisi modi, dolore nulla magnam velit asperiores?',
		demoUrl: 'https://syahrizal-portfolio.web.app/',
		repoUrl: null,
	},
	{
		to: '/',
		img: `${ImageWork}`,
		title: 'React Portfolio',
		desc: 'Portfolio website created using React JS  reprehenderit maxime nisi modi, dolore nulla magnam velit asperiores?',
		demoUrl: 'https://syahrizal-portfolio.web.app/',
		repoUrl: 'https://github.com/Gombeng/react-portfolio',
	},
];

const Works = () => {
	tabTitle('Work | Syahrizal Ardana');

	return (
		<Container>
			<h5 className="abs mb-2">01 _ RECENT WORKS</h5>

			<div className="mb-2 project">
				{works.map((work) => (
					<Card
						className="mb-2"
						img={work.img}
						title={work.title}
						desc={work.desc}
						demoUrl={work.demoUrl}
						repoUrl={work.repoUrl === null ? 'Not found' : work.repoUrl}
					/>
				))}
			</div>
		</Container>
	);
};

export default Works;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0 10%;
	padding-top: 20vh;
	min-height: 100vh;
	background-image: url(${BgImageWorkD});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;

	.abs {
		@media ${device.tablet} {
			position: fixed;
			top: 35%;
			left: 5%;
			writing-mode: tb-rl;
		}
	}
`;
