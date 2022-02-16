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
  background-color: var(--dark);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    color: var(--grey2);
  }
`;

interface NavMenuProps {
  sidebar: boolean;
}

export const NavMenu = styled.div<NavMenuProps>`
  background-color: var(--grey2);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
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
    color: var(--dark);
    font-size: 18px;
    margin: 0 20px;
    transition: 0.3s ease-out;
    :hover {
      cursor: pointer;
      background-color: var(--dark);
      opacity: 80%;
      color: var(--grey2);
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
  z-index: 999;
  position: sticky;
  top: 0;
  background-color: var(--dark);
  color: var(--grey2);
  display: flex;
  flex-direction: row-reverse;
  font-size: 20px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--grey2);
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
    &:hover {
      color: var(--darkblue);
      cursor: pointer;
      &::after {
        opacity: 1;
      }
    }
    &:after {
      width: 30px;
      height: 2px;
      background: var(--darkblue);
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
    color: inherit;
  }
`;
