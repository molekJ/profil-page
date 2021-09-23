import React, { useState } from "react";
import {
  MainContainerMobile,
  LogoNav,
  NavMenu,
  NavMenuList,
  MainContainerWeb,
  NavMenuListWeb,
  Square,
  Cube,
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
          <Square>
            <Cube>
              <div className="face top"></div>
              <div className="face bottom"></div>
              <div className="face left"></div>
              <div className="face right"></div>
              <div className="face front"></div>
              <div className="face back"></div>
            </Cube>
          </Square>
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
        <Square>
          <Cube>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face front"></div>
            <div className="face back"></div>
          </Cube>
        </Square>
      </MainContainerWeb>
    </>
  );
};
