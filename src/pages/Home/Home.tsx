import { Container, IWrapper } from "./HomeStyled";

export const Home = () => {
  return (
    <Container>
      <h2>Hi there</h2>
      <p>
        Th<IWrapper>i</IWrapper>s webs<IWrapper>i</IWrapper>te{" "}
        <IWrapper>i</IWrapper>s about <span>me</span> and{" "}
        <span>my projects</span>
      </p>
      <p>
        Let's check <IWrapper>i</IWrapper>t out!
      </p>
    </Container>
  );
};
