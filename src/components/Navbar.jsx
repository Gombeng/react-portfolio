import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import { device } from "../utils";
import { IconClose, IconMenu, Logo } from "../assets/index.jsx";

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


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  text-align: left;

  .social {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  @media ${device.mobilemax} {
    padding: 20px 24px;
  }

  @media ${device.tablet} {
    padding-left: 40px;
  }

  @media ${device.laptop} {
    margin-top: 20px;
    padding-left: 55px;
  }

  .nav-icon {
    cursor: pointer;
    z-index: 999;

    img {
      width: 24px;
    }

    @media ${device.tablet} {
      display: none;
    }
  }

  .nav-menu {
    .link {
      color: white;

      @media ${device.tablet} {
        &:not(:last-child) {
          margin-right: 2rem;
        }
      }
      @media ${device.laptop} {
        &:not(:last-child) {
          margin-right: 3rem;
        }
      }
    }

    span {
      font-weight: bolder;
      margin-right: 12px;

      @media ${device.tablet} {
        display: none;
      }

      @media ${device.laptop} {
        display: inline;
      }
    }

    @media ${device.mobilemax} {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: -1000vh;
      right: 0;
      width: 69%;
      height: 100vh;
      padding: 153px 1px 2rem 2rem;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(30px);
      transition: 0.6s;
      z-index: 99;

      .link {
        padding: 16px 0;
        transition: 0.6s;
        font-size: "3rem";

        &:hover {
          border-right: 4px solid rgba(255, 255, 255, 0.5);
        }

        &.active {
          border-right: 4px solid white;
        }
      }

      &.active {
        top: 0;
      }
    }

    @media ${device.tablet} {
      background-color: #151923;
      padding: 40px 48px;

      .link {
        padding: 40px 0 37px;
        transition: 0.3s;

        &:hover {
          border-bottom: 3px solid rgba(255, 255, 255, 0.5);
        }

        &.active {
          border-bottom: 3px solid #e5e7eb;
        }
      }
    }

    @media ${device.laptop} {
      padding-left: 100px;
      padding-right: 130px;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(30px);
      .link {
        color: black;
      }
    }
  }
`;
