import { Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Project from './pages/project/Project';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="projects" element={<Project />} />
			</Routes>
		</div>
	);
}

export default App;
