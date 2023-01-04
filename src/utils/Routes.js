import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import Navbar from '../components//navbar';
import {
	About,
	Contact,
	Home,
	Notfound,
	Projects,
	Services,
} from '../pages/Pages';

const Routes = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route index element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="works" element={<Projects />} />
				{/* <Route exact path="work/:id" element={<Detail />} /> */}
				<Route path="services" element={<Services />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Switch>
		</Router>
	);
};

export default Routes;
