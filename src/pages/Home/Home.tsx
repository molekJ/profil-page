import { Container, ImgWrapper, InfoWrapper, NameWrapper } from "./HomeStyled";
import logomolek from "../../images/logomolek.svg";

export const Home = () => {
  return (
    <>
      <Container>
        <ImgWrapper>
          <p>&lt;/</p>
          <img alt="profile picture" src={logomolek}></img>
          <p>&gt;</p>
        </ImgWrapper>
      </Container>
      <InfoWrapper>
        <p>Junior</p>
        <p>Front-</p>
        <p>-end</p>
        <p>Developer</p>
      </InfoWrapper>
      <NameWrapper>
        <p>Molicki</p>
        <p>Jakub</p>
      </NameWrapper>
    </>
  );
};
