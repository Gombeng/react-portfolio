import React from 'react';
import CardService from '../../components/cardService/CardService';

export const Services = () => {
	let items = [
		{
			src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oWwrp29KmfdHHggrD878awHaEK%26pid%3DApi&f=1',
			title: 'Landing Page Website',
			desc: 'best for your personal branding',
		},
		{
			src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oWwrp29KmfdHHggrD878awHaEK%26pid%3DApi&f=1',
			title: 'Portfolio Website',
			desc: 'best for your personal branding',
		},
		{
			src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oWwrp29KmfdHHggrD878awHaEK%26pid%3DApi&f=1',
			title: 'E-commerce Website',
			desc: 'best for your personal branding',
		},
		{
			src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oWwrp29KmfdHHggrD878awHaEK%26pid%3DApi&f=1',
			title: 'Agency Website',
			desc: 'best for your personal branding',
		},
		{
			src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oWwrp29KmfdHHggrD878awHaEK%26pid%3DApi&f=1',
			title: 'School Website',
			desc: 'best for your personal branding',
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
