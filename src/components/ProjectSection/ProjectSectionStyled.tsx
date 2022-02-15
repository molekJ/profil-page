import styled from "styled-components";
interface LightBg {
  lightBg: boolean;
}
interface leftStart {
  leftStart: boolean;
}

export const Container = styled.div`
  width: 70vw;
  height: calc(100vh - 80px);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ProjectsContainer = styled.div<LightBg>`
  width: 100%;
  background: ${({ lightBg }) => (lightBg ? "var(--dark)" : "var(--dark)")};
  color: ${({ lightBg }) => (lightBg ? "var(--grey2)" : "var(--grey2)")};
`;

export const ProjectWrapper = styled.div<leftStart>`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-direction: ${({ leftStart }) => (leftStart ? "row-reverse" : "row")};
  justify-content: space-around;
  text-align: ${({ leftStart }) => (leftStart ? "right" : "left")};
  @media screen and (max-width: 1200px) {
  }

  @media screen and (max-width: 576px) {
  }
`;

export const ProjectInfoWrapper = styled.div`
  width: 40%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
  }
`;

export const HeaderInfo = styled.h3`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 36px;
  letter-spacing: 5px;
`;

export const Paragraph = styled.div`
  font-size: 18px;
  line-height: 24px;
`;

export const IconsSection = styled.div`
  img {
  }
  @media screen and (max-width: 1200px) {
  }
`;

export const ProjectImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-height: 50vh;

  div {
    display: flex;
    justify-content: center;

    @media screen and (max-width: 576px) {
    }
  }

  img {
    width: 100%;
    border-radius: 5px;
    opacity: 70%;
    height: 50vh;
  }

  a {
    height: 100px;
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    margin: 10px 30px;

    p {
      margin: 0 5px;
    }
  }

  @media screen and (max-width: 576px) {
  }
`;
