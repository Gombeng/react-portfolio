import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { About, Contact, Home, Notfound, Services, Works } from "../pages";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="works" element={<Works />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Switch>
    </Router>
  );
};

export default Routes;
