import React from 'react';
import './CardService.scss';

const CardService = (props) => {
	return (
		<div className="cardServices">
			<div className="img">
				<img src={props.src} alt="" />
			</div>

			<div className="text-wrapper">
				<h3 className="title">{props.title}</h3>
				<p className="desc">{props.desc}</p>
			</div>
			<div className="btn-wrapper">
				<a href="/" className="button" target="_blank">
					Order Now
				</a>
			</div>
		</div>
	);
};

export default CardService;
