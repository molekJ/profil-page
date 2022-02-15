import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: var(--grey2);
  min-height: calc(100vh - 260px);
  position: relative;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 600px;

  img {
    width: 100%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  width: 35vw;
  left: 0vw;
  height: 600px;
  background: var(--white);
`;
