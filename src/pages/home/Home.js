import React from 'react';
import './Home.scss';
import Container from '../../components/layout/Container';
import { Button } from '../../components/button/Button.styles';

export default function Home() {
	return (
		<Container className="home">
			<h1>I'm Syahrizal Ardana</h1>
			<p>Front-end Developer</p>

			<Button>Download CV</Button>
		</Container>
	);
}
