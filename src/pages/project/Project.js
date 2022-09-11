import React from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import { BgImageWorkD, ImageWork } from '../../assets/assets';
import { device, tabTitle } from '../../utils/Utils';

let works = [
	{
		img: `${ImageWork}`,
		title: 'React Portfolio',
		desc: 'Portfolio website created using React JS Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque officiis enim minima architecto, nemo asperiores aspernatur voluptatibus Vitae, fuga',
		demoUrl: 'https://syahrizal-portfolio.web.app/',
		repoUrl: 'https://github.com/Gombeng/react-portfolio',
	},
];

const Project = () => {
	tabTitle('Work | Syahrizal Ardana');

	return (
		<Container>
			<h5 className="abs mb-2">01 _ RECENT WORKS</h5>
			<div className="mb-2 project">
				{works.map((work) => (
					<Card
						className="project__item"
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

export default Project;

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

	.abs {
		@media ${device.tablet} {
			position: fixed;
			top: 35%;
			left: 5%;
			writing-mode: tb-rl;
		}
	}
`;
