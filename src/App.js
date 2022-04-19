import { Routes, Route } from 'react-router-dom';
import './App.scss';

// component
import Navbar from './components/navbar/Navbar';

// pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/project/Project';
import { Services } from './pages/services/Services';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="projects" element={<Project />} />
				<Route path="services" element={<Services />} />
			</Routes>
		</div>
	);
}

export default App;
