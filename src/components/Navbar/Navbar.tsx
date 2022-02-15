import React, { useState } from "react";
import {
  MainContainerMobile,
  LogoNav,
  NavMenu,
  NavMenuList,
  MainContainerWeb,
  NavMenuListWeb,
} from "./NavbarStyled";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          <NavMenuList>
            {NavbarData.map((icon, index) => {
              return (
                <li key={index}>
                  <Link to={icon.path}>
                    <p>{icon.title}</p>
                  </Link>
                </li>
              );
            })}
          </NavMenuList>
        </NavMenu>
      </MainContainerMobile>
      <MainContainerWeb>
        <NavMenuListWeb>
          {NavbarData.map((icon, index) => {
            return (
              <li key={index}>
                <Link to={icon.path}>
                  <p>{icon.title}</p>
                </Link>
              </li>
            );
          })}
        </NavMenuListWeb>
      </MainContainerWeb>
    </>
  );
};
