import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 576px) {
    min-height: calc(100vh - 180px);
  }

  @media screen and (min-width: 577px) {
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150px;
  font-weight: 100;
  /* 
  img {
    width: 300px;
    height: 300px;
  } */

  @media screen and (max-width: 576px) {
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (min-width: 577px) {
    img {
      width: 300px;
      height: 300px;
    }
  }

  @media screen and (min-width: 993px) {
    img {
      width: 400px;
      height: 400px;
    }
  }
`;

export const NameWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 200px;
  text-transform: uppercase;
  font-size: 60px;
  color: var(--black);
  letter-spacing: 5px;
  line-height: 80px;
  @media screen and (max-width: 576px) {
    position: static;
    font-size: 30px;
    line-height: 50px;
  }
  @media screen and (min-width: 577px) {
    font-size: 40px;
    top: 100px;
  }
  @media screen and (min-width: 769px) {
    font-size: 50px;
    top: 150px;
  }
  @media screen and (min-width: 993px) {
    font-size: 60px;
    top: 200px;
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  right: 0px;
  /* top: 400px; */
  bottom: 100px;
  text-transform: uppercase;
  font-size: 60px;
  text-align: right;
  color: var(--black);
  letter-spacing: 5px;
  line-height: 80px;

  @media screen and (max-width: 576px) {
    position: static;
    line-height: 50px;
    font-size: 30px;
  }
  @media screen and (min-width: 577px) {
    font-size: 40px;
  }
  @media screen and (min-width: 769px) {
    font-size: 50px;
  }
  @media screen and (min-width: 993px) {
    font-size: 60px;
  }
`;
