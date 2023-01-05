import React from 'react';
import styled from 'styled-components';

const CardService = (props) => {
	return (
		<Container>
			<div className="img">
				<img src={props.src} alt="" />
			</div>

			<div className="text">
				<h3 className="title">{props.title}</h3>
				<p className="desc">{props.desc}</p>
			</div>
			
			<div className="btn">
				<a href="/contact" className="button">
					Order Now
				</a>
			</div>
		</Container>
	);
};

export default CardService;

const Container = styled.div`
	padding: 1em;
	margin-bottom: 1.3em;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

	&.text {
		padding: 1em;
	}

	&.btn {
		/* display: flex;
		align-items: center;
		justify-content: space-between; */

		.button {
			width: 100% !important;
			text-align: center;
		}
	
}

`