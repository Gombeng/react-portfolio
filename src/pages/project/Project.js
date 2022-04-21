import React from 'react';
import CardComp from './../../components/card/Card';

export default function Project() {
	let works = [
		{
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oWwrp29KmfdHHggrD878awHaEK%26pid%3DApi&f=1',
			title: 'Sunnyside Landing Page',
			desc: 'Simple project created using HTML & CSS',
			demoUrl: 'https://www.instagram.com/msr.gombeng/',
			repoUrl: 'https://www.instagram.com/msr.gombeng/',
		},
		{
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oWwrp29KmfdHHggrD878awHaEK%26pid%3DApi&f=1',
			title: 'Sunnyside Landing Page',
			desc: 'Simple project created using HTML & CSS',
			demoUrl: 'https://www.instagram.com/msr.gombeng/',
			repoUrl: 'https://www.instagram.com/msr.gombeng/',
		},
		{
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oWwrp29KmfdHHggrD878awHaEK%26pid%3DApi&f=1',
			title: 'Sunnyside Landing Page',
			desc: 'Simple project created using HTML & CSS',
			demoUrl: 'https://www.instagram.com/msr.gombeng/',
			repoUrl: 'https://www.instagram.com/msr.gombeng/',
		},
		{
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oWwrp29KmfdHHggrD878awHaEK%26pid%3DApi&f=1',
			title: 'Sunnyside Landing Page',
			desc: 'Simple project created using HTML & CSS',
			demoUrl: 'https://www.instagram.com/msr.gombeng/',
			repoUrl: 'https://www.instagram.com/msr.gombeng/',
		},
	];

	return (
		<div className="container">
			<h2 className="title">Recent works</h2>
			<div className="card-wrapper mb-2">
				{works.map((work) => (
					<CardComp
						img={work.img}
						title={work.title}
						desc={work.desc}
						demoUrl={work.demoUrl}
						repoUrl={work.repoUrl}
					/>
				))}
			</div>

			<div className="btn-wrapper">
				<a href="/" className="button" target="_blank">
					See More
				</a>
			</div>
		</div>
	);
}
