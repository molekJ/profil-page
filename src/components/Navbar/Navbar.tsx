import React, { useState } from "react";
import {
  MainContainerMobile,
  LogoNav,
  NavMenu,
  MainContainerWeb,
  NavMenuListWeb,
} from "./NavbarStyled";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";

export const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const showBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <MainContainerMobile>
        <LogoNav>
          <Link to="#">
            <FaBars onClick={showBar} />
          </Link>
        </LogoNav>
        <NavMenu sidebar={sidebar} onClick={showBar}>
          {NavbarData.map((icon, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={icon.path}
                  activeStyle={{}}
                  exact
                  style={(isActive) => ({
                    opacity: isActive ? "100%" : "70%",
                  })}
                >
                  <p>{icon.title}</p>
                </NavLink>
              </li>
            );
          })}
        </NavMenu>
      </MainContainerMobile>
      <MainContainerWeb>
        <NavMenuListWeb>
          {NavbarData.map((icon, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={icon.path}
                  activeStyle={{}}
                  exact
                  style={(isActive) => ({
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  <p>{icon.title}</p>
                </NavLink>
              </li>
            );
          })}
        </NavMenuListWeb>
      </MainContainerWeb>
    </>
  );
};
