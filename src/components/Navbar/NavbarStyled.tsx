import styled from "styled-components";

export const MainContainer = styled.div`
  height: 80px;
`;

export const LogoNav = styled.div`
  background-color: black;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  a {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }
`;

interface NavMenuProps {
  sidebar: boolean;
}

export const NavMenu = styled.div<NavMenuProps>`
  background-color: black;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: 550ms;
  left: -100%;
  padding-top: 100px;

  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};

  a {
    text-decoration: none;
  }

  p {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 18px 0px 8px 16px;
    list-style: none;
    height: 60px;
    width: 120px;
    color: white;
    font-size: 18px;
    height: 100%;
    border-radius: 5px;
    margin-left: 20px;

    :hover {
      cursor: pointer;
      background-color: white;
      color: black;
    }
  }
`;

export const NavMenuList = styled.ul`
  width: 100%;
`;

export const NavMenuWeb = styled.div``;

// export const ContainerContent = styled.div`
//   display: grid;
//   grid-template-rows: 580px;
//   grid-template-columns: 89px repeat(7, 127px);
//   width: 978px;
//   margin-left: auto;
//   margin-right: auto;
//   background: var(--lightgrey);

//   @media screen and (max-width: 768px) {
//     width: 768px;
//     height: 100%;
//     grid-template-columns: 100px;
//     grid-template-rows: repeat(8, 100px);
//   }
// `;
