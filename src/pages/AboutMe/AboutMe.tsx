import { Container } from "./AboutMeStyled";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <Container>
      <p>
        Nazywam się Jakub Molicki, mam 30 lat i mieszkam w Białej Podlaskiej
        (woj. Lubelskie).
      </p>
      <p>
        {" "}
        Moje dotychczasowe doświadczenie zawodowe jest dosyć różnorodne,
        pracowałem w wielu miejscach, wykonywałem rozmaite czynności. W każdej
        pracy dochodziłem do momentu, w którym potrzebowałem nowych wyzwań. Nowe
        wyzwania nie pojawiały się, więc zmieniałem zawód. Przyszedł czas by
        ukierunkować się w dziedzinie w której będę mogł się rozwijać, dostawać
        nowe cele i obowiązki. Na studiach miałem podstawy programowania- stąd
        wiedziałem, że w programowaniu wyzwań brakować nie będzie.
      </p>
      <p>
        I tak oto zapisałem sie na Bootcamp Front-end w InfoShare Academy, gdzie
        nauczyłem się solidnych podstaw by móc tworzyć własne projekty. W chwili
        obecnej uczę się samodzielnie, korzystam z zasobów stron:{" "}
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
        <a href=" https://stackoverflow.com/" target="_blank" rel="noreferrer">
          Stack Overflow
        </a>{" "}
        oraz tutoriali:
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
        Sprawdź zakładkę <Link to="/my-projects">Moje projekty</Link>.
      </p>
    </Container>
  );
};
