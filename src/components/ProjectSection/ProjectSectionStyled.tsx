import styled from "styled-components";

interface LightBg {
  lightBg: boolean;
}

export const ProjectsContainer = styled.div<LightBg>`
  background: var(--darkgrey);
  padding: 100px 50px;
  color: white;
  min-height: calc(100vh - 200px);
  background: ${({ lightBg }) =>
    lightBg ? "var(--white)" : "var(--darkgrey)"};

  color: ${({ lightBg }) => (lightBg ? "var(--darkgrey)" : "var(--white)")};
`;

interface leftStart {
  leftStart: boolean;
}

export const ProjectWrapper = styled.div<leftStart>`
  align-items: center;
  align-content: stretch;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  flex-direction: ${({ leftStart }) => (leftStart ? "row-reverse" : "row")};

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 576px) {
    padding: 0px;
  }
`;

export const ProjectInfoWrapper = styled.div`
  width: 650px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderInfo = styled.h3`
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 1.2px;
  margin-bottom: 24px;
`;

export const Paragraph = styled.div`
  max-width: 540px;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 24px;
`;

export const IconsSection = styled.div`
  img {
    margin: 0 8px;
  }
  @media screen and (max-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const ProjectImgWrapper = styled.div`
  width: 650px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 576px) {
      width: 300px;
      font-size: 12px;
    }
  }

  img {
    width: 80%;
    height: 80%;
    border-radius: 15px;
  }

  a {
    padding-top: 20px;
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
    width: 400px;
    height: 300px;
  }
`;
