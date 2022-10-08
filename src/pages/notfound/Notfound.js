import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BgImageWorkD } from '../../assets/assets';
import { tabTitle } from '../../utils/GeneralFunc';
import { color } from '../../utils/GlobalVar';

export default function Notfound() {
	tabTitle('Not Found | Syahrizal Ardana');

	return (
		<Container>
			<div>
				<h3 className="mb-2">-- YOU'VE LOST SOMEWHERE --</h3>

				<NavLink to="/" className="btn">
					GO BACK{' '}
				</NavLink>
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	min-height: 100vh;
	background-image: url(${BgImageWorkD});
	background-repeat: no-repeat;
	background-position: fixed;
	background-size: cover;

	.btn {
		padding: 1rem 1.3rem;
		border-radius: 0.3rem;
		color: ${color.bg};
		background-color: ${color.textSec};

		&:hover {
			background-color: ${color.textOne};
		}
	}
`;
