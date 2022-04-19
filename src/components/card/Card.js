import React from 'react';
import './Card.scss';

const CardComp = (props) => {
	return (
		<div className="cardComp">
			<div className="img">
				<img src={props.img} alt="" />
			</div>
			<div className="text-wrapper">
				<h3 className="title">{props.title}</h3>
				<p className="desc">{[props.desc]}</p>
			</div>
			<div className="btn-wrapper">
				<a
					href={props.demoUrl}
					className="button"
					target="_blank"
					rel="noreferrer"
				>
					Demo
				</a>
				<a
					href={props.repoUrl}
					className="button"
					target="_blank"
					rel="noreferrer"
				>
					Repo
				</a>
			</div>
		</div>
	);
};

export default CardComp;
