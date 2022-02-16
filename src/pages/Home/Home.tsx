import {
  Container,
  ImgWrapper,
  BeforeImgWrapper,
  InfoWrapper,
} from "./HomeStyled";
import molek from "../../images/molek.svg";
import logoMol from "../../images/logoMOL.jpg";

export const Home = () => {
  return (
    <>
      <Container>
        <BeforeImgWrapper></BeforeImgWrapper>
        <ImgWrapper>
          <img alt="profile picture" src={logoMol}></img>
          {/* <p>Jakub Molicki</p> */}
        </ImgWrapper>
      </Container>
      <InfoWrapper>
        <p>Junior</p>
        <p>Front-</p>
        <p>-end</p>
        <p>Developer</p>
      </InfoWrapper>
    </>
  );
};
