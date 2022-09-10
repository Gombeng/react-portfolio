import React from 'react';
import Container from '../../components/layout/Container';
import { tabTitle } from '../../utils/GeneralFunc';

export default function Notfound() {
	tabTitle('Not Found | Syahrizal Ardana');

	return (
		<Container>
			<h1 className="title">Page not Found</h1>
			<a href="/" className="button">
				Back to Home
			</a>
		</Container>
	);
}
