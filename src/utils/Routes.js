import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { About, Contact, Home, Notfound, Project, Services } from '../pages/Pages';

const Routes = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route index element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="work" element={<Project />} />
				<Route path="services" element={<Services />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Switch>
		</Router>
	);
};

export default Routes;
