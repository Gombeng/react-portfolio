import React from 'react';
import CardService from '../../components/cardService/CardService';
import './Service.scss';
import { tabTitle } from './../../components/GeneralFunc';

export const Services = () => {
	tabTitle('Services | Syahrizal Ardana');

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

		// {
		// 	src: './images/project/project-personal.png',
		// 	title: 'E-commerce Website',
		// 	desc: 'Best for your personal branding',
		// },
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
		<div className="container">
			<h2 className="title mb-2">What I am Great at</h2>

			<div className="service">
				{items.map((item) => (
					<CardService src={item.src} title={item.title} desc={item.desc} />
				))}
			</div>
		</div>
	);
};
