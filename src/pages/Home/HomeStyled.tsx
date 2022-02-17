import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 180px);

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: calc(100vh - 180px);
  }
`;

export const CenterContainer = styled.div`
  /* width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    height: 200px;
    min-height: auto;
  } */
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150px;
  font-weight: 100;

  img {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 576px) {
    font-size: 100px;
    img {
      width: 200px;
      height: 200px;
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

    /* top: 150px; */
    font-size: 30px;
    line-height: 50px;
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 400px;
  text-transform: uppercase;
  font-size: 60px;
  text-align: right;
  color: var(--black);
  letter-spacing: 5px;
  line-height: 80px;

  @media screen and (max-width: 576px) {
    /* top: 550px; */
    /* text-align: left; */
    position: static;
    line-height: 50px;
    font-size: 30px;
  }
`;
