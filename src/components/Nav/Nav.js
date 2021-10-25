import React from "react";
import './index.scss'
import { Link as NavLink } from "react-scroll";

const Nav = () => {
  return (
    <header className="navigation__">
      <div className="links">
        <NavLink
          to="welcome"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
        >
          Home
        </NavLink>
        <NavLink
          to="whenAre"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
        >
          Use
        </NavLink>
        <NavLink
          to="managing"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
        >
          {window.screen.width > 850 ? "Managing Pain" : "Pain"}
        </NavLink>
        
        <NavLink
          to="safe"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
        >
          Instructions
        </NavLink>
        <NavLink
          to="whatDo"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
        >
          Storage
        </NavLink>
        <NavLink
          to="crisis"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
        >
          {window.screen.width > 850 ? "Nonmedical Use" : "Nonmedical"}
        </NavLink>
        <NavLink
          to="links"
          id="last"
          activeclassname="active"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-51}
        >
          {window.screen.width > 850 ? "Useful Links" : "Links"}
        </NavLink>
      </div>
    </header>
  );
};

export default Nav;
