import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: var(--grey2);
  min-height: calc(100vh - 300px);
  position: relative;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 50%;

  p {
    position: relative;
    text-align: center;
    bottom: 150px;
    font-size: 100px;
    letter-spacing: 4px;
    /* font-family: "Indie Flower", cursive; */
    /* margin-bottom: -80px; */
  }
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const InfoWrapper = styled.div`
  width: 50%;
  font-size: 60px;
  letter-spacing: 4px;
  text-align: end;
  margin-top: 100px;

  span {
    color: var(--lightorange);
  }

  @media screen and (max-width: 768px) {
    p:last-of-type {
      margin-right: 150px;
      font-size: 60px;
    }
  }
  @media screen and (max-width: 576px) {
    padding-top: 30px;

    p:last-of-type {
      margin-right: 50px;
      font-size: 40px;
    }
  }
`;

export const IWrapper = styled.span`
  background-image: -webkit-linear-gradient(
    top,
    var(--lightorange) 33%,
    var(--grey2) 10%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
