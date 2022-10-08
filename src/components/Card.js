import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import { color, device } from '../utils/Utils';

const Card = ({ img, title, desc, demoUrl, ...rest }) => {
	return (
		<CardContainer {...rest}>
			<div className="img left">
				<img src={img} alt="project" />
			</div>
			<div className="right">
				<div className="text">
					<h4 className="title mb-half">{title}</h4>
					<p className="desc">{desc}</p>
				</div>

				<div className="btn">
					<Button
						as="a"
						color={color.bg}
						bgColor={color.textSec}
						href={demoUrl}
						target="_blank"
						rel="noreferrer"
						title="Demo"
					/>
				</div>
			</div>
		</CardContainer>
	);
};

export default Card;

const CardContainer = styled.div`
	min-height: 60vh;

	img {
		width: 100%;
		border-radius: 0.3rem;
	}

	.text {
		padding: 1rem 0;

		.desc {
			max-width: 480px;
		}
	}

	.btn {
		margin-top: 1.5rem;
	}

	@media ${device.tabletmax} {
		text-align: center;
	}
	@media ${device.tablet} {
		min-height: 80vh;
	}

	@media ${device.laptop} {
		display: flex;
		justify-content: center;
		align-items: center;

		.left {
			margin: 0 2rem;
		}
	}
`;
