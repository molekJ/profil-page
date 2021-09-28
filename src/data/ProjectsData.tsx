import bakery from "../images/bakery.jpg";
import sunsiad from "../images/sunsiad.jpg";
import diet from "../images/diet.jpg";
import inprogress from "../images/inprogress.jpg";

import css from "../icons/css.svg";
import html from "../icons/html.svg";
import js from "../icons/js.svg";
import react from "../icons/react.svg";
import ts from "../icons/ts.svg";
import firebase from "../icons/firebase.svg";
import jira from "../icons/jira.svg";

export const ProjectsData = [
  {
    title: "sunsiadek",
    description:
      'Jest to projekt grupowy, kończący bootcamp. Aplikacja przeznaczona dla społeczności lokalnych, takich jak wieś, mała miejscowość czy też osiedle w większym mieście. Użytkownik może dodawać ogłosznia w zależności od kategorii jaką to ogłosznie reprezentuje. Główny cel aplikacji to polepszenie relacji sąsiedzkich, lepsze poznanie się, niesienie pomocy oraz dbanie o wspólne dobro małych społeczności. Przykład: w kategorii "pomoc" możemy zaoferować zrobienie zakupów bądź wyprowadzenie psa.',
    lightBg: false,
    img: sunsiad,
    alt: "susniad application dashboard",
    leftStart: true,
    githubLink: "https://github.com/infoshareacademy/jfddr3-sunsiadek-app",
    deployment: "https://infoshareacademy.github.io/jfddr3-sunsiadek-app",
    icons: [html, css, js, react, firebase, jira],
  },
  {
    title: "bakery",
    description:
      "Jest to prosta gierka, w której robimy i sprzedajemy ciastka. Było to jedno z zadań domowych bootcampu, do wykonania w Vanilla JS. Z uwagi na mnogość zagwozdek postanowiłem wrócić do tego i napisać ją jeszcze raz w React oraz TypeScript (jest to mój pierwszy projekt z wykorzystaniem TS). Tak, wiem- wygląd nie powala, ale nie o wygląd tu chodzi. Spróbuj! Tylko nie graj do późna...",
    lightBg: true,
    img: bakery,
    alt: "bakery game",
    leftStart: false,
    githubLink: "https://github.com/molekJ/bakery/tree/master/my-app",
    deployment: "https://molekj.github.io/bakery/",
    icons: [html, css, js, react, ts],
  },
  {
    title: "diet",
    description:
      'Odtworzenie projektu dostarczonego w pliku .psd. Interakjce: prosty slider, animacje na ":hover", zaznaczanie/odznaczanie ikon. Fajny projekt do utrwalenia CSS, zwłaszcza CSS Grid i Flexbox',
    lightBg: false,
    img: diet,
    alt: "diet application dashboard",
    leftStart: true,
    githubLink: "https://github.com/molekJ/recruitment-task-get-r",
    deployment: "https://molekj-diet-app.netlify.app/",
    icons: [html, css, js, react],
  },
  {
    title: "weather",
    description:
      "Aplikacja pogodowa, wykorzystująca API. W trakcie tworzenia...",
    lightBg: true,
    img: inprogress,
    alt: "in progress",
    leftStart: false,
    // githubLink: "https://github.com/molekJ/Weather",
    // deployment: "https://molekj-diet-app.netlify.app/",
    icons: [],
  },
];
