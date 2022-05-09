import React from 'react';
import CardComp from './../../components/card/Card';
import './Project.scss';

export default function Project() {
	let works = [
		{
			img: './images/project/project-personal.png',
			title: 'Portfolio 2022',
			desc: 'Portfolio website created using React JS',
			demoUrl: 'https://github.com/Gombeng/react-portfolio',
			repoUrl: 'https://github.com/Gombeng/react-portfolio',
		},
		{
			img: './images/project/project-business.png',
			title: 'Inforsys Landing Page',
			desc: 'Landing page Created using Angular JS',
			demoUrl: 'https://gombeng-lp-inforsys.netlify.app/',
			repoUrl: 'https://github.com/Gombeng/inforsys',
		},
		{
			img: './images/project/project-business.png',
			title: 'Inforsys Landing Page',
			desc: 'Landing page Created using Angular JS',
			demoUrl: 'https://gombeng-lp-inforsys.netlify.app/',
			repoUrl: 'https://github.com/Gombeng/inforsys',
		},
		{
			img: './images/project/project-personal.png',
			title: 'Portfolio 2022',
			desc: 'Portfolio website created using React JS',
			demoUrl: 'https://github.com/Gombeng/react-portfolio',
			repoUrl: 'https://github.com/Gombeng/react-portfolio',
		},
	];

	return (
		<div className="container">
			<h2 className="title mb-2">Recent works</h2>
			<div className="mb-2 project">
				{works.map((work) => (
					<CardComp
						className="project__item"
						img={work.img}
						title={work.title}
						desc={work.desc}
						demoUrl={work.demoUrl}
						repoUrl={work.repoUrl}
					/>
				))}
			</div>

			<div>
				<a
					href="https://github.com/Gombeng"
					className="button"
					target="_blank"
					rel="noreferrer"
				>
					See More
				</a>
			</div>
		</div>
	);
}
