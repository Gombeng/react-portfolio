import React from 'react';
import './CardService.scss';

const CardService = (props) => {
	return (
		<div className="cardServices">
			<div className="cardServices__img">
				<img src={props.src} alt="" />
			</div>

			<div className="cardServices__text">
				<h3 className="title">{props.title}</h3>
				<p className="desc">{props.desc}</p>
			</div>
			<div className="cardServices__btn">
				<a href="/contact" className="button">
					Order Now
				</a>
			</div>
		</div>
	);
};

export default CardService;
