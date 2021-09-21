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
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  a {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    color: var(--darkgrey);
  }
`;

interface NavMenuProps {
  sidebar: boolean;
}

export const NavMenu = styled.div<NavMenuProps>`
  background-color: var(--lightgrey);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: 550ms;
  padding-top: 100px;

  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};

  a {
    text-decoration: none;
  }

  p {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 18px 0px 18px 20px;
    list-style: none;
    height: 60px;
    width: 160px;
    color: var(--darkgrey2);
    font-size: 18px;
    border-radius: 5px;
    margin-left: 20px;
    font-weight: 600;

    :hover {
      cursor: pointer;
      background-color: white;
      color: var(--darkgrey);
    }
  }
`;

export const NavMenuList = styled.ul`
  width: 100%;
`;

export const MainContainerWeb = styled.div`
  display: flex;
  height: 120px;
  justify-content: space-between;
  color: var(--darkgrey);
  font-size: 24px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MainLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const NavMenuListWeb = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  list-style-type: none;
  a {
    text-decoration: none;
    display: flex;
    color: inherit;
    letter-spacing: 1px;
    margin: 0 20px;
  }
  :last-child {
    margin-right: 50px;
  }
`;
