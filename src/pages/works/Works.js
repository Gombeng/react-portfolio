import React from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import { BgImageWorkD, ImageWork1, ImageWork2, ImageWork3, ImageWork4, ImageWork5 } from '../../assets';
import { device, tabTitle } from '../../utils/Utils';

const works = [
	{
		img: `${ImageWork1}`,
		title: 'React Portfolio',
		desc: 'Portfolio website created using React JS',
		demoUrl: 'https://syahrizal-portfolio.web.app/',
		repoUrl: null,
	},
	{
		img: `${ImageWork2}`,
		title: 'Rest Country API',
		desc: 'Website to search all the information about country all over the world!',
		repoUrl: 'https://github.com/Gombeng/Rest-Country-API',
		demoUrl: 'https://rest-country-api-six.vercel.app/',
	},
	{
		img: `${ImageWork3}`,
		title: 'Denote',
		desc: 'Application to save your brilian idea, don\'t forget to signup first',
		repoUrl: 'https://github.com/Gombeng/denote-mern',
		demoUrl: 'https://denote-mern.vercel.app/signup',
	},
	{
		img: `${ImageWork4}`,
		title: 'Kitteni',
		desc: 'Website contain all the cute cat around the world, you can see the detail too',
		repoUrl: 'https://github.com/Gombeng/kitteni',
		demoUrl: 'https://kitteni.vercel.app/',
	},
	{
		img: `${ImageWork5}`,
		title: 'Easely Quiz',
		desc: 'Play some quick quiz game to test your inteligence',
		repoUrl: 'https://github.com/Gombeng/easely-quiz',
		demoUrl: 'https://easely-quiz.vercel.app/',
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
