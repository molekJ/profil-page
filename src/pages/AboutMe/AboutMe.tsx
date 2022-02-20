import { Container } from "./AboutMeStyled";
import { Link } from "react-router-dom";
import molek from "../../images/jakmol.jpg";
export const AboutMe = () => {
  return (
    <Container>
      <div>
        <img src={molek} alt="portrait drawing" />
        <p>
          My name is Jakub Molicki and I am looking for my first job as a junior
          front-end developer. I am 31 years old and I live in Biała Podlaska
          (voivodeship Lubelskie).
        </p>
        <p>
          As an IT engineer I had the opportunity to learn basics of programming
          - that's why I think it may fulfill my expectations for a future
          career path. It’s high time to find it out!
        </p>

        <p>
          On April I have signed up to bootcamp Front-end in infoShare Academy,
          in which I learned strong basics to create my own projects (check the
          bookmark: <Link to="/my-projects">MY PROJECTS</Link>). Currently I
          learn on my own using such sources{" "}
          <a
            href="https://developer.mozilla.org/"
            target="_blank"
            rel="noreferrer"
          >
            MDN Web Docs
          </a>
          ,{" "}
          <a href=" https://reactjs.org/" target="_blank" rel="noreferrer">
            ReactJS.org
          </a>
          ,{" "}
          <a
            href=" https://stackoverflow.com/"
            target="_blank"
            rel="noreferrer"
          >
            Stack Overflow
          </a>{" "}
          and tutorials:{" "}
          <a
            href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg"
            target="_blank"
            rel="noreferrer"
          >
            The Net Ninja
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/c/WebDevSimplified"
            target="_blank"
            rel="noreferrer"
          >
            Web Dev Simplified
          </a>
          .
        </p>
        <p>
          My previous professional experience is quite diverse. I worked in a
          company as a furniture fitter and even as a gardener in Poland and
          abroad (Sweden, Canada) where I was able contact the spoken language
          (which I constantly learn by taking private lessons). Working in
          various places has taught me how to be open to people and cooperate
          with them. That is why I am looking for a well-coordinated team in
          which I will feel taken care of and led so that I can fully use my
          potential.
        </p>
        <p>
          I'm curious about your opinion about my projects so far. I will be
          grateful for any suggestions that I can improve at the current level.
        </p>

        <p>
          Contact me: <br />
          mobile: +48 504 073 031 / e-mail: molickikuba@gmail.com
        </p>
      </div>
    </Container>
  );
};
