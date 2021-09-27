import styled from "styled-components";

export const MainContainerMobile = styled.div`
  position: sticky;
  display: none;
  height: 80px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LogoNav = styled.div`
  background-color: var(--white);
  height: 80px;
  display: flex;
  justify-content: space-between;
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
  background-color: var(--grey2);
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
    transition: 0.2s ease-out;
    font-weight: 400;

    :hover {
      cursor: pointer;
      background-color: var(--grey);
      transition: 0.2s ease-out;
    }
  }
`;

export const NavMenuList = styled.ul`
  width: 100%;
`;

export const MainContainerWeb = styled.div`
  border-bottom: solid 1px var(--darkgrey);
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: var(--white);
  display: flex;
  height: 100px;
  justify-content: space-around;
  color: var(--darkgrey);
  font-size: 20px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuListWeb = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 400;
  color: var(--lightgrey);
  list-style-type: none;
  margin-left: 50px;

  li {
    width: 80px;
    display: flex;
    justify-content: center;
    position: relative;
    &:hover {
      color: var(--orange);
      cursor: pointer;
      transition: 0.2s ease-out;
      &::after {
        opacity: 1;
      }
    }
    &:after {
      width: 30px;
      height: 2px;
      background: var(--orange);
      transition: 0.2s ease-out;
      content: "";
      opacity: 0;
      display: block;
      position: absolute;
      bottom: -5px;
    }
  }
  li:nth-of-type(2) {
    width: 120px;
  }
  li:nth-of-type(3) {
    width: 160px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
  }
`;

export const Square = styled.div`
  width: 50px;
  height: 50px;
  align-self: center;
  perspective: 500px;
  margin-right: 50px;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 15px;
    margin-right: 15px;
  }
`;

export const Cube = styled.div`
  @keyframes turn {
    from {
      transform: rotate3d(0, 0, 0, 0);
    }
    to {
      transform: rotate3d(1, 1, 0, 360deg);
    }
  }

  animation: turn 5s linear infinite;
  position: relative;
  width: 30px;
  height: 30px;
  transform: rotate3d(1, 1, 0, 45deg);
  transform-style: preserve-3d;

  .face {
    width: 30px;
    height: 30px;
    background: var(--darkgrey);
    border: solid 1px white;
    position: absolute;

    :hover {
      background: var(--orange);
    }
  }

  .front {
    transform: translateZ(15px);
  }

  .back {
    transform: translateZ(-15px) rotateY(180deg);
  }

  .left {
    transform: translateX(-15px) rotateY(-90deg);
  }

  .right {
    transform: translateX(15px) rotateY(90deg);
  }

  .top {
    transform: translateY(-15px) rotateX(90deg);
  }

  .bottom {
    transform: translateY(15px) rotateX(-90deg);
  }
`;
