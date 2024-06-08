import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import { IconClose, IconMenu, Logo } from "../../assets/index.jsx";
import { Container } from "./Navbar.styled.jsx";

let urls = [
  "https://www.tiktok.com/@dev_syahrizal",
  "https://www.linkedin.com/in/syahrizal-ardana-45399a1b1/",
  "https://www.github.com/Gombeng/",
];

const links = [
  {
    to: "/",
    name: "home",
  },
  {
    to: "/about",
    name: "about",
  },
  {
    to: "/services",
    name: "services",
  },
  {
    to: "/works",
    name: "works",
  },
  {
    to: "/contact",
    name: "contact",
  },
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let i = 0;
  return (
    <Container>
      <NavLink to="/" className="max-w-11">
        <img
          src={Logo}
          alt="Logo"
          className="shadow-md rounded-full min-w-full"
        />
      </NavLink>

      <div className="flex gap-5">
        {urls.map((url) => (
          <SocialIcon
            key={url}
            className="max-w-10 max-h-10"
            url={url}
            target="_blank"
          />
        ))}
      </div>

      <div className="nav-icon">
        <img
          onClick={handleClick}
          src={click ? IconClose : IconMenu}
          alt={click ? "Close" : "Menu"}
        />
      </div>

      <div className={click ? "nav-menu active" : "nav-menu"}>
        {links.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.to}
            className={({ isActive }) => (isActive ? "link active" : "link")}
            onClick={handleClick}
          >
            <span>0{idx++}</span>
            {link.name.toLocaleUpperCase()}
          </NavLink>
        ))}
      </div>
    </Container>
  );
};

export default Navbar;
