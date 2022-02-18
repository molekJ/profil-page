import styled from "styled-components";

export const MainContainerMobile = styled.div`
  display: none;
  height: 80px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LogoNav = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: var(--black);
    margin-left: 2rem;
    font-size: 2rem;
  }
`;

interface NavMenuProps {
  sidebar: boolean;
}

export const NavMenu = styled.div<NavMenuProps>`
  z-index: 999;
  background-color: var(--black);
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  transition: 0.55s;
  padding-top: 50px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  a {
    text-decoration: none;
  }
  p {
    padding: 18px 0px 18px 20px;
    height: 60px;
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
    margin: 0 20px;
    transition: 0.3s ease-out;
    border-radius: 20px;
    :hover {
      cursor: pointer;
      background-color: var(--white);
      color: var(--black);
      transition: 0.3s ease-out;
    }
  }
`;

export const NavMenuList = styled.ul`
  width: 100%;
`;

export const MainContainerWeb = styled.div`
  margin: 0 auto;
  width: 70vw;
  height: 100px;
  color: var(--black);
  display: flex;
  flex-direction: row-reverse;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 1px solid var(--black);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuListWeb = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;

  li {
    margin-left: 40px;
    display: flex;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease-out;
    cursor: pointer;
    &:hover {
      &::after {
        opacity: 1;
      }
    }
    &:after {
      width: 30px;
      height: 1px;
      background: var(--black);
      transition: 0.3s ease-out;
      content: "";
      opacity: 0;
      display: block;
      position: absolute;
      bottom: -5px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
