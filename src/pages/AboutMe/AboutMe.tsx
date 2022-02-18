import { Container } from "./AboutMeStyled";
import { Link } from "react-router-dom";
import molek from "../../images/jakmol.jpg";
export const AboutMe = () => {
  return (
    <Container>
      <div>
        <img src={molek} alt="portrait drawing" />
        <p>
          My name is Jakub, I am 31 years old and I live in Biała Podlaska
          (voivodeship Lubelskie).
        </p>

        <p>
          {" "}
          My previous professional experience is quite diverse. I have worked in
          many places and I have done different types of work. In each job I
          came to the point where I needed new challenges. The challenges were
          not showing up, so I was changing my profession. The time has come to
          redirect professional field, where I will be able to develop and I
          will receive new duties. I had basics of programming in college -
          that's why I knew the programming will fulfill my expectations.
        </p>
        <p>
          I have signed up to bootcamp Front-end in infoShare Academy, in which
          I learned strong basics to create my own projects. Currently I learn
          in my own, I use websites resources like:{" "}
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
          </a>{" "}
          i{" "}
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
          Check the bookmark: <Link to="/my-projects">MY PROJECTS</Link>.
        </p>
      </div>
    </Container>
  );
};
