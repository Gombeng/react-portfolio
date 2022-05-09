import React from 'react';
import './Card.scss';
import { Button } from '../button/Button.styles';

const CardComp = (props) => {
	return (
		<div className="cardComp">
			<div className="cardComp__img">
				<img src={props.img} alt="" />
			</div>
			<div className="cardComp__text">
				<h3 className="title">{props.title}</h3>
				<p className="desc">{[props.desc]}</p>
			</div>
			<div className="cardComp__btn">
				<Button
					as="a"
					href={props.demoUrl}
					className="button"
					target="_blank"
					rel="noreferrer"
				>
					Demo
				</Button>
				<Button
					as="a"
					href={props.repoUrl}
					className="button"
					target="_blank"
					rel="noreferrer"
				>
					Repo
				</Button>
			</div>
		</div>
	);
};

export default CardComp;
