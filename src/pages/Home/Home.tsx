import { Container, IWrapper, ImgWrapper, InfoWrapper } from "./HomeStyled";
import molek from "../../images/molek.svg";
import logoMol from "../../images/logoMOL.jpg";

export const Home = () => {
  return (
    <Container>
      {/* <InfoWrapper>
        <p>
          Th<IWrapper>i</IWrapper>s webs<IWrapper>i</IWrapper>te{" "}
          <IWrapper>i</IWrapper>s about <span>me</span> and{" "}
          <span>my projects</span>
        </p>
      </InfoWrapper> */}
      <ImgWrapper>
        <img alt="profile picture" src={logoMol}></img>
        {/* <p>Jakub Molicki</p> */}
      </ImgWrapper>
    </Container>
  );
};
