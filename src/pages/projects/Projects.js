import React from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import { BgImageWorkD, ImageWork } from '../../assets/assets';
import { color, device, tabTitle } from '../../utils/Utils';

const works = [
	{
		to: '/',
		img: `${ImageWork}`,
		title: 'React Portfolio',
		desc: 'Portfolio website created using React JS  reprehenderit maxime nisi modi, dolore nulla magnam velit asperiores?',
		demoUrl: 'https://syahrizal-portfolio.web.app/',
		repoUrl: 'https://github.com/Gombeng/react-portfolio',
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

const Projects = () => {
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
						repoUrl={work.repoUrl}
					/>
				))}
			</div>
		</Container>
	);
};

export default Projects;

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
	background-position: fixed;
	background-size: cover;

	.nav-menu {
		display: flex;

		@media ${device.tabletmax} {
			justify-content: center;
			margin: 2rem 0;
		}

		@media ${device.laptop} {
			margin-bottom: 1rem;
			flex-direction: column;
			position: fixed;
			top: 35%;
			left: 5%;
		}
	}

	.link {
		padding: 1rem;
		width: fit-content;
		border: 1px solid white;
		border-radius: 0.3rem;

		&:not(:last-child) {
			margin-right: 1.5rem;
			@media ${device.laptop} {
				margin-bottom: 1.5rem;
			}
		}

		&:hover,
		&.active {
			color: ${color.bg};
			background-color: ${color.textOne};
			font-weight: bold;
		}
	}

	.abs {
		@media ${device.tablet} {
			position: fixed;
			top: 35%;
			left: 5%;
			writing-mode: tb-rl;
		}
	}
`;
