import { Routes, Route } from 'react-router-dom';
import './App.scss';

// component
import Navbar from './components/navbar/Navbar';

// pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/project/Project';
import { Services } from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Notfound from './pages/notfound/Notfound';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				{/* <Switch> */}
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="work" element={<Project />} />
				<Route path="services" element={<Services />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
				{/* </Switch> */}
			</Routes>
		</div>
	);
}

export default App;
