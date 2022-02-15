import { Container, ImgWrapper, InfoWrapper } from "./HomeStyled";
import molek from "../../images/molek.svg";
import logoMol from "../../images/logoMOL.jpg";

export const Home = () => {
  return (
    <Container>
      <InfoWrapper></InfoWrapper>
      <ImgWrapper>
        <img alt="profile picture" src={logoMol}></img>
        {/* <p>Jakub Molicki</p> */}
      </ImgWrapper>
    </Container>
  );
};
