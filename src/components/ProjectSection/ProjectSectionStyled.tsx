import styled from "styled-components";

interface LightBg {
  lightBg: boolean;
}

export const ProjectsContainer = styled.div<LightBg>`
  background: var(--darkgrey);
  padding: 100px 0;
  color: white;

  background: ${({ lightBg }) =>
    lightBg ? "var(--white)" : "var(--darkgrey)"};

  color: ${({ lightBg }) => (lightBg ? "var(--darkgrey)" : "var(--white)")};
`;

export const ProjectWrapper = styled.div`
  align-items: center;
  align-content: stretch;
  display: flex;
  justify-content: space-evenly;

  padding: 50px 0;
`;

export const ProjectInfoWrapper = styled.div`
  max-width: 540px;
`;

export const HeaderInfo = styled.h3`
  text-transform: uppercase;
  font-size: 48px;
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

export const IconsSection = styled.div``;

export const IconsWrapper = styled.div``;

export const ProjectImgWrapper = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
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
`;
