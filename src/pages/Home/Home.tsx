import {
  Container,
  ImgWrapper,
  InfoWrapper,
  NameWrapper,
  CenterContainer,
} from "./HomeStyled";
import logomolek from "../../images/logomolek.svg";

export const Home = () => {
  return (
    <Container>
      <NameWrapper>
        <p>Molicki</p>
        <p>Jakub</p>
      </NameWrapper>
      <CenterContainer>
        <ImgWrapper>
          <p>&lt;/</p>
          <img alt="profile picture" src={logomolek}></img>
          <p>&gt;</p>
        </ImgWrapper>
      </CenterContainer>
      <InfoWrapper>
        <p>Junior</p>
        <p>Front-</p>
        <p>-end</p>
        <p>Developer</p>
      </InfoWrapper>
    </Container>
  );
};
