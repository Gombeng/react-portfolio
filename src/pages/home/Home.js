import React from 'react';
import './Home.scss';
import Container from '../../components/layout/Container';
import { Button } from '../../components/button/Button.styles';
import { tabTitle } from './../../components/GeneralFunc';

export default function Home() {
	tabTitle('Home | Syahrizal Ardana');
	return (
		<Container className="home">
			<h1>I'm Syahrizal Ardana</h1>
			<p>Front-end Developer</p>

			<Button
				as="a"
				href="https://drive.google.com/file/d/1FbUFv6eX6a28Ky_I1V0sEq-xgCbyJbJn/view?usp=sharing"
				target="_blank"
				rel="noreferrer"
			>
				Download CV
			</Button>
		</Container>
	);
}
