import bakery from "../images/bakery.jpg";
import sunsiad from "../images/sunsiad.jpg";
import diet from "../images/diet.jpg";
import weather from "../images/weather.jpg";
import todolist from "../images/todolist.jpg";
import quiz from "../images/quiz.jpg";
import posts from "../images/posts.jpg";

import css from "../icons/css.svg";
import html from "../icons/html.svg";
import js from "../icons/js.svg";
import react from "../icons/react.svg";
import ts from "../icons/ts.svg";
import firebase from "../icons/firebase.svg";
import jira from "../icons/jira.svg";
import i18next from "../icons/i18next.svg";
import reactRouterDom from "../icons/react-router-dom.svg";
import bootstrap from "../icons/bootstrap.svg";
import sass from "../icons/sass.svg";

export const ProjectsData = [
  {
    title: "Posts",
    description:
      "This is an app that uses JSONPlaceholder - free online REST API. You can load posts, comments and see theirs creators. I also used an avatar generator. ",
    lightBg: false,
    img: posts,
    alt: "post application dashboard",
    leftStart: false,
    githubLink: "https://github.com/molekJ/recruitment-task-vsc",
    deployment: "https://molekj.github.io/recruitment-task-vsc/#/",
    icons: [html, css, js, react, ts, reactRouterDom, bootstrap, sass],
  },
  {
    title: "Quiz",
    description:
      "Single-choice test application with retrieving data from JSON file. After answering all the questions, a summary screen is displayed and then we can check our results.",
    lightBg: false,
    img: quiz,
    alt: "quiz application dashboard",
    leftStart: false,
    githubLink: "https://github.com/molekJ/quiz",
    deployment: "https://molekj.github.io/quiz/",
    icons: [html, css, js, react, ts, i18next, reactRouterDom, bootstrap],
  },
  {
    title: "ToDoList",
    description:
      "Typical beginners project.. The simple application in which we can add our scheduled tasks. I used LocalStorage - tasks are saving automatically and loading after refresh.",
    lightBg: true,
    img: todolist,
    alt: "todolist application dashboard",
    leftStart: true,
    githubLink: "https://github.com/molekJ/to-do-list",
    deployment: "https://molekj.github.io/to-do-list/",
    icons: [html, css, js, react, ts],
  },
  {
    title: "Weather",
    description:
      "The weather application that uses API openweathermap.org. There are two bookmarks: first - a list of cities, second - searching.",
    lightBg: false,
    img: weather,
    alt: "weather application dashboard",
    leftStart: false,
    githubLink: "https://github.com/molekJ/Weather",
    deployment: "https://molekj.github.io/weather/",
    icons: [html, css, js, react, ts, reactRouterDom],
  },
  {
    title: "diet",
    description:
      "Reproduction the project from a .psd file. Simple interactions: slider, hover animations, selecting / deselecting icons. Helpful project to consolidate CSS knowledge. ",
    lightBg: true,
    img: diet,
    alt: "diet application dashboard",
    leftStart: true,
    githubLink: "https://github.com/molekJ/recruitment-task-get-r",
    deployment: "https://molekj-diet-app.netlify.app/",
    icons: [html, css, js, react],
  },
  {
    title: "bakery",
    description:
      "The simple game,  in which we make and sell cookies. I had this task during my bootcamp at Vanilla JS. Due to there are many brain teasers I have decided to come back to this and make it but this time in React.is and TypeScript.",
    lightBg: false,
    img: bakery,
    alt: "bakery game",
    leftStart: false,
    githubLink: "https://github.com/molekJ/bakery/tree/master/my-app",
    deployment: "https://molekj.github.io/bakery/",
    icons: [html, css, js, react, ts],
  },
  {
    title: "sunsiadek",
    description:
      'This is a group project that ends the bootcamp. The application is intended for local communities, such as a village, a small town or a housing estate in a larger city. The user can add announcements depending on the category it represents. The main goal of the application is to improve neighborly relations, get to know each other better, help and care for the common good of small communities. Example: in the "help" category, we can offer to buy something for older people or walk a dog.',
    lightBg: true,
    img: sunsiad,
    alt: "susniad application dashboard",
    leftStart: true,
    githubLink: "https://github.com/infoshareacademy/jfddr3-sunsiadek-app",
    deployment: "https://infoshareacademy.github.io/jfddr3-sunsiadek-app",
    icons: [html, css, js, react, firebase, jira, reactRouterDom],
  },
];
