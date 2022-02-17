import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150px;
  font-weight: 100;
  img {
    width: 100%;
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
`;
