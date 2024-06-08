import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { About, Home, Notfound, Works } from "../pages";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="works" element={<Works />} />
        {/* <Route path="about" element={<About />} />
				{/* <Route exact path="work/:id" element={<Detail />} /> 
				<Route path="services" element={<Services />} />
				<Route path="contact" element={<Contact />} />
        */}
        <Route path="*" element={<Notfound />} />
      </Switch>
    </Router>
  );
};

export default Routes;
