import React from 'react';
import CardService from '../../components/cardService/CardService';

export const Services = () => {
	let items = [
		{
			src: './images/project/project-personal.png',
			title: 'Portfolio Website',
			desc: 'Best for your personal branding',
		},
		{
			src: './images/project/project-personal.png',
			title: 'Landing Page Website',
			desc: 'Best for your personal branding',
		},

		{
			src: './images/project/project-personal.png',
			title: 'E-commerce Website',
			desc: 'Best for your personal branding',
		},
		{
			src: './images/project/project-personal.png',
			title: 'Agency Website',
			desc: 'Best for your personal branding',
		},
		{
			src: './images/project/project-personal.png',
			title: 'School Website',
			desc: 'Best for your personal branding',
		},
	];

	return (
		<div className="container services">
			<h2 className="title">What I am Great at</h2>

			<div className="wrapper">
				{items.map((item) => (
					<CardService src={item.src} title={item.title} desc={item.desc} />
				))}
			</div>
		</div>
	);
};
