import { Container, ImgWrapper, InfoWrapper, NameWrapper } from "./HomeStyled";
import logomolek from "../../images/logomolek.svg";

export const Home = () => {
  return (
    <Container>
      <NameWrapper>
        <p>Molicki</p>
        <p>Jakub</p>
      </NameWrapper>
      <ImgWrapper>
        <img alt="profile" src={logomolek}></img>
      </ImgWrapper>
      <InfoWrapper>
        <p>Junior</p>
        <p>Front-</p>
        <p>-end</p>
        <p>Developer</p>
      </InfoWrapper>
    </Container>
  );
};
