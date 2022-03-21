(this["webpackJsonpmy-pqge"]=this["webpackJsonpmy-pqge"]||[]).push([[0],{43:function(n,e,t){"use strict";t.r(e);var i,a,r,o,s,c,d,l,p,h,m,x,b,j,g,f,u,w,v,O,k,y,z=t(20),S=t.n(z),I=t(10),T=t(2),J=t(3),L=t(4),C=L.b.div(i||(i=Object(J.a)(["\n  display: none;\n  height: 80px;\n  text-transform: uppercase;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n  }\n"]))),E=L.b.div(a||(a=Object(J.a)(["\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  a {\n    color: var(--black);\n    margin-left: 2rem;\n    font-size: 2rem;\n  }\n"]))),q=L.b.div(r||(r=Object(J.a)(["\n  z-index: 999;\n  background-color: var(--black);\n  width: 250px;\n  height: 110vh;\n  position: fixed;\n  top: 0;\n  transition: 0.55s;\n  padding-top: 50px;\n  list-style-type: none;\n  left: ",";\n  color: var(--white);\n\n  li {\n    padding: 18px 0px 18px 20px;\n    height: 60px;\n    color: var(--white);\n    font-size: 18px;\n    font-weight: 500;\n    margin: 0 20px;\n    transition: 0.3s ease-out;\n    border-radius: 20px;\n\n    :hover {\n      cursor: pointer;\n      background-color: var(--white);\n      color: var(--black);\n      transition: 0.3s ease-out;\n    }\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"])),(function(n){return n.sidebar?"0":"-100%"})),B=L.b.div(o||(o=Object(J.a)(["\n  margin: 0 auto;\n  width: 70vw;\n  height: 100px;\n  color: var(--black);\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border-bottom: 1px solid var(--darkgrey);\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),_=L.b.div(s||(s=Object(J.a)(['\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  list-style-type: none;\n\n  li {\n    margin-left: 40px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    transition: all 0.3s ease-out;\n    cursor: pointer;\n    &:hover {\n      &::after {\n        opacity: 1;\n      }\n    }\n    &:after {\n      width: 30px;\n      height: 1px;\n      background: var(--black);\n      transition: 0.3s ease-out;\n      content: "";\n      opacity: 0;\n      display: block;\n      position: absolute;\n      bottom: -5px;\n    }\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n']))),D=t(25),M=t(8),P=[{title:"Home",path:"/"},{title:"About me",path:"/about-me"},{title:"My projects",path:"/my-projects"}],W=t(1),A=function(){var n=Object(T.useState)(!1),e=Object(I.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(C,{children:[Object(W.jsx)(E,{children:Object(W.jsx)(M.b,{to:"#",children:Object(W.jsx)(D.a,{onClick:a})})}),Object(W.jsx)(q,{sidebar:t,onClick:a,children:P.map((function(n,e){return Object(W.jsx)("li",{children:Object(W.jsx)(M.c,{to:n.path,activeStyle:{},exact:!0,style:function(n){return{opacity:n?"100%":"70%"}},children:Object(W.jsx)("p",{children:n.title})})},e)}))})]}),Object(W.jsx)(B,{children:Object(W.jsx)(_,{children:P.map((function(n,e){return Object(W.jsx)("li",{children:Object(W.jsx)(M.c,{to:n.path,activeStyle:{},exact:!0,style:function(n){return{fontWeight:n?"bold":"normal"}},children:Object(W.jsx)("p",{children:n.title})})},e)}))})})]})},R=Object(L.a)(c||(c=Object(J.a)(["\n  :root {\n    --white: #ffffff;\n    --black: #000000;\n    --darkgrey: #878787;\n    --darkblue: #3766c2;\n    --red: #D93025;\n    --green: #188038;\n    --dark: #2e2e36;\n    --grey2: #dbdbdb;\n    --orange: #ff801a;\n}\nbody {\n    min-width: 300px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    color: var(--black);\n    overflow-x: scroll;\n    background: var(--white);\n}\n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    } \n\n"]))),N=t(5),Y=L.b.div(d||(d=Object(J.a)(["\n  min-height: calc(100vh - 200px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  @media screen and (max-width: 576px) {\n    min-height: calc(100vh - 180px);\n  }\n\n  @media screen and (min-width: 577px) {\n  }\n"]))),F=L.b.div(l||(l=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 150px;\n  font-weight: 100;\n  @media screen and (max-width: 576px) {\n    img {\n      width: 200px;\n      height: 200px;\n    }\n  }\n\n  @media screen and (min-width: 577px) {\n    img {\n      width: 300px;\n      height: 300px;\n    }\n  }\n\n  @media screen and (min-width: 993px) {\n    img {\n      width: 400px;\n      height: 400px;\n    }\n  }\n  @media screen and (min-width: 1201px) {\n    img {\n      width: 500px;\n      height: 500px;\n    }\n  }\n"]))),G=L.b.div(p||(p=Object(J.a)(["\n  position: absolute;\n  left: 0px;\n  top: 200px;\n  text-transform: uppercase;\n  font-size: 60px;\n  color: var(--black);\n  letter-spacing: 5px;\n  @media screen and (max-width: 576px) {\n    position: static;\n    font-size: 30px;\n  }\n  @media screen and (min-width: 577px) {\n    font-size: 40px;\n    top: 100px;\n  }\n  @media screen and (min-width: 777px) {\n    font-size: 50px;\n    top: 150px;\n  }\n  @media screen and (min-width: 993px) {\n    font-size: 60px;\n  }\n  @media screen and (min-width: 1401px) {\n    font-size: 80px;\n  }\n"]))),H=L.b.div(h||(h=Object(J.a)(["\n  position: absolute;\n  right: 0px;\n  bottom: 100px;\n  text-transform: uppercase;\n  font-size: 60px;\n  text-align: right;\n  color: var(--black);\n  letter-spacing: 5px;\n\n  @media screen and (max-width: 576px) {\n    position: static;\n\n    font-size: 30px;\n  }\n  @media screen and (min-width: 577px) {\n    font-size: 40px;\n  }\n  @media screen and (min-width: 769px) {\n    font-size: 50px;\n  }\n  @media screen and (min-width: 993px) {\n    font-size: 60px;\n  }\n  @media screen and (min-width: 1401px) {\n    font-size: 80px;\n  }\n"]))),V=t.p+"static/media/logomolek.fd25443f.svg",U=function(){return Object(W.jsxs)(Y,{children:[Object(W.jsxs)(G,{children:[Object(W.jsx)("p",{children:"Molicki"}),Object(W.jsx)("p",{children:"Jakub"})]}),Object(W.jsx)(F,{children:Object(W.jsx)("img",{alt:"profile",src:V})}),Object(W.jsxs)(H,{children:[Object(W.jsx)("p",{children:"Junior"}),Object(W.jsx)("p",{children:"Front-"}),Object(W.jsx)("p",{children:"-end"}),Object(W.jsx)("p",{children:"Developer"})]})]})},Q=L.b.div(m||(m=Object(J.a)(["\n  min-height: calc(100vh - 200px);\n  /* width: 70vw; */\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  padding-top: 20px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 35px;\n  @media screen and (max-width: 576px) {\n    width: 90vw;\n    div {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n  @media screen and (min-width: 577px) {\n    width: 90vw;\n  }\n  @media screen and (min-width: 769px) {\n    width: 70vw;\n  }\n\n  p {\n    @media screen and (max-width: 576px) {\n      margin: 30px 10px 0px 10px;\n      :last-of-type {\n        margin-bottom: 30px;\n      }\n    }\n    @media screen and (min-width: 577px) {\n      margin: 30px 10px 0px 10px;\n\n      :last-of-type {\n        margin-bottom: 30px;\n      }\n    }\n    @media screen and (min-width: 769px) {\n      margin: 30px 0 0 30px;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: var(--orange);\n    opacity: 70%;\n    transition: 0.2s ease-out;\n    position: relative;\n    :hover {\n      transition: 0.2s ease-out;\n      opacity: 100%;\n    }\n  }\n\n  img {\n    float: right;\n    width: 300px;\n    height: 450px;\n    margin: 40px 30px 30px 30px;\n    @media screen and (max-width: 576px) {\n      width: 200px;\n      height: 300px;\n      float: none;\n      align-self: center;\n      margin: 20px 0px 20px 0px;\n    }\n    @media screen and (min-width: 577px) {\n      width: 250px;\n      height: 375px;\n    }\n  }\n"]))),K=t.p+"static/media/jakmol.0b545c21.jpg",X=function(){return Object(W.jsx)(Q,{children:Object(W.jsxs)("div",{children:[Object(W.jsx)("img",{src:K,alt:"portrait drawing"}),Object(W.jsx)("p",{children:"My name is Jakub Molicki and I am looking for my first job as a junior front-end developer. I am 31 years old and I live in Bia\u0142a Podlaska (voivodeship Lubelskie)."}),Object(W.jsx)("p",{children:"As an IT engineer I had the opportunity to learn basics of programming - that's why I think it may fulfill my expectations for a future career path. It\u2019s high time to find it out!"}),Object(W.jsxs)("p",{children:["On April I have signed up to bootcamp Front-end in infoShare Academy, in which I learned strong basics to create my own projects (check the bookmark: ",Object(W.jsx)(M.b,{to:"/my-projects",children:"MY PROJECTS"}),"). Currently I learn on my own using such sources"," ",Object(W.jsx)("a",{href:"https://developer.mozilla.org/",target:"_blank",rel:"noreferrer",children:"MDN Web Docs"}),","," ",Object(W.jsx)("a",{href:" https://reactjs.org/",target:"_blank",rel:"noreferrer",children:"ReactJS.org"}),","," ",Object(W.jsx)("a",{href:" https://stackoverflow.com/",target:"_blank",rel:"noreferrer",children:"Stack Overflow"})," ","and tutorials:"," ",Object(W.jsx)("a",{href:"https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg",target:"_blank",rel:"noreferrer",children:"The Net Ninja"}),","," ",Object(W.jsx)("a",{href:"https://www.youtube.com/c/WebDevSimplified",target:"_blank",rel:"noreferrer",children:"Web Dev Simplified"}),"."]}),Object(W.jsx)("p",{children:"My previous professional experience is quite diverse. I worked in a company as a furniture fitter and even as a gardener in Poland and abroad (Sweden, Canada) where I was able contact the spoken language (which I constantly learn by taking private lessons). Working in various places has taught me how to be open to people and cooperate with them. That is why I am looking for a well-coordinated team in which I will feel taken care of and led so that I can fully use my potential."}),Object(W.jsx)("p",{children:"I'm curious about your opinion about my projects so far. I will be grateful for any suggestions that I can improve at the current level."}),Object(W.jsxs)("p",{children:["Contact me: ",Object(W.jsx)("br",{}),"mobile: +48 504 073 031 / e-mail: molickikuba@gmail.com"]})]})})},Z=t(18),$=L.b.div(x||(x=Object(J.a)(["\n  position: relative;\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0px 0px 20px;\n  margin: 20px 20px 80px 20px;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n  @media screen and (max-width: 576px) {\n    width: 100%;\n    padding: 20px 0px 0px 0px;\n    margin: 20px 20px 80px 20px;\n  }\n  @media screen and (min-width: 577px) {\n    width: 90%;\n  }\n  @media screen and (min-width: 769px) {\n    width: 100%;\n  }\n  @media screen and (min-width: 1400px) {\n    width: 45%;\n  }\n"]))),nn=L.b.div(b||(b=Object(J.a)(["\n  display: flex;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),en=L.b.div(j||(j=Object(J.a)(["\n  width: 50%;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n  }\n"]))),tn=L.b.h3(g||(g=Object(J.a)(["\n  font-weight: 300;\n  text-transform: uppercase;\n  font-size: 24px;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n\n  @media screen and (max-width: 576px) {\n    width: 100%;\n    margin-left: 10px;\n  }\n"]))),an=L.b.div(f||(f=Object(J.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  margin-bottom: 30px;\n  padding: 0 10px;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  overflow-wrap: break-word;\n  cursor: pointer;\n\n  @media screen and (max-width: 576px) {\n    width: 100%;\n    -webkit-line-clamp: inherit;\n    padding-left: 10px;\n  }\n  @media screen and (min-width: 769px) {\n    -webkit-line-clamp: ",";\n  }\n"])),(function(n){return n.isEllipsed?"inferit":"5"})),rn=L.b.div(u||(u=Object(J.a)(["\n  align-items: center;\n  display: flex;\n\n  margin: 20px 0 30px 00;\n  p {\n    margin-right: 20px;\n  }\n\n  @media screen and (max-width: 576px) {\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: center;\n\n    div {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin-top: 10px;\n      img {\n        margin: 5px 3px;\n      }\n    }\n  }\n"]))),on=L.b.div(w||(w=Object(J.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    width: 80%;\n    border-radius: 5px;\n    margin-bottom: 20px;\n  }\n\n  @media screen and (max-width: 576px) {\n    width: 100%;\n  }\n"]))),sn=L.b.div(v||(v=Object(J.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  position: absolute;\n  bottom: -70px;\n\n  a {\n    transition: all 0.3s ease-out;\n    text-decoration: none;\n    color: var(--darkgrey);\n    display: flex;\n    align-items: center;\n    margin: 0 0 20px 0;\n    :hover {\n      transition: all 0.3s ease-out;\n      color: var(--black);\n    }\n  }\n"]))),cn=t(9),dn=t(26),ln=function(n){var e=n.title,t=n.description,i=n.img,a=n.alt,r=n.githubLink,o=n.deployment,s=n.icons,c=Object(T.useState)(!1),d=Object(I.a)(c,2),l=d[0],p=d[1];return Object(W.jsxs)($,{children:[Object(W.jsxs)(nn,{children:[Object(W.jsxs)(en,{children:[Object(W.jsx)(tn,{children:e}),Object(W.jsx)(an,{isEllipsed:l,onClick:function(){p(!l)},children:t})]}),Object(W.jsx)(on,{children:Object(W.jsx)("img",{alt:a,src:i,color:"red"})})]}),Object(W.jsxs)(rn,{children:[Object(W.jsx)("p",{children:"Technologies used:"}),Object(W.jsx)("div",{children:s.map((function(n,e){return Object(W.jsx)("img",{src:n,alt:"icon",width:36,height:36},e)}))})]}),Object(W.jsxs)(sn,{children:[Object(W.jsxs)("a",{href:r,target:"_blank",rel:"noreferrer",children:[Object(W.jsx)("p",{children:"Look at the code!"}),Object(W.jsx)(cn.a,{size:32})]}),Object(W.jsxs)("a",{href:o,target:"_blank",rel:"noreferrer",children:[Object(W.jsx)("p",{children:"Try it now!"}),Object(W.jsx)(dn.a,{size:32})]})]})]})},pn=t.p+"static/media/bakery.f0ffd15c.jpg",hn=t.p+"static/media/sunsiad.9708e532.jpg",mn=t.p+"static/media/diet.e67380ea.jpg",xn=t.p+"static/media/weather.9227054f.jpg",bn=t.p+"static/media/todolist.5d0f845b.jpg",jn=t.p+"static/media/quiz.77beba70.jpg",gn=t.p+"static/media/posts.f9597975.jpg",fn=t.p+"static/media/css.3ec32022.svg",un=t.p+"static/media/html.c1bb84e0.svg",wn=t.p+"static/media/js.081325c6.svg",vn=t.p+"static/media/react.a060cbe8.svg",On=t.p+"static/media/ts.f20748ca.svg",kn=t.p+"static/media/firebase.c55df031.svg",yn=t.p+"static/media/jira.d3f6317e.svg",zn=t.p+"static/media/i18next.eb4642c8.svg",Sn=t.p+"static/media/react-router-dom.66dd36f8.svg",In=t.p+"static/media/bootstrap.f3938ebe.svg",Tn=[{title:"Posts",description:"This is an app that uses JSONPlaceholder - free online REST API. You can load posts, comments and see theirs creators. I also used an avatar generator. ",lightBg:!1,img:gn,alt:"post application dashboard",leftStart:!1,githubLink:"https://github.com/molekJ/recruitment-task-vsc",deployment:"https://molekj.github.io/recruitment-task-vsc/#/",icons:[un,fn,wn,vn,On,Sn,In,t.p+"static/media/sass.67308595.svg"]},{title:"Quiz",description:"Single-choice test application with retrieving data from JSON file. After answering all the questions, a summary screen is displayed and then we can check our results.",lightBg:!1,img:jn,alt:"quiz application dashboard",leftStart:!1,githubLink:"https://github.com/molekJ/quiz",deployment:"https://molekj.github.io/quiz/",icons:[un,fn,wn,vn,On,zn,Sn,In]},{title:"ToDoList",description:"Typical beginners project.. The simple application in which we can add our scheduled tasks. I used LocalStorage - tasks are saving automatically and loading after refresh.",lightBg:!0,img:bn,alt:"todolist application dashboard",leftStart:!0,githubLink:"https://github.com/molekJ/to-do-list",deployment:"https://molekj.github.io/to-do-list/",icons:[un,fn,wn,vn,On]},{title:"Weather",description:"The weather application that uses API openweathermap.org. There are two bookmarks: first - a list of cities, second - searching.",lightBg:!1,img:xn,alt:"weather application dashboard",leftStart:!1,githubLink:"https://github.com/molekJ/Weather",deployment:"https://molekj.github.io/weather/",icons:[un,fn,wn,vn,On,Sn]},{title:"diet",description:"Reproduction the project from a .psd file. Simple interactions: slider, hover animations, selecting / deselecting icons. Helpful project to consolidate CSS knowledge. ",lightBg:!0,img:mn,alt:"diet application dashboard",leftStart:!0,githubLink:"https://github.com/molekJ/recruitment-task-get-r",deployment:"https://molekj-diet-app.netlify.app/",icons:[un,fn,wn,vn]},{title:"bakery",description:"The simple game,  in which we make and sell cookies. I had this task during my bootcamp at Vanilla JS. Due to there are many brain teasers I have decided to come back to this and make it but this time in React.is and TypeScript.",lightBg:!1,img:pn,alt:"bakery game",leftStart:!1,githubLink:"https://github.com/molekJ/bakery/tree/master/my-app",deployment:"https://molekj.github.io/bakery/",icons:[un,fn,wn,vn,On]},{title:"sunsiadek",description:'This is a group project that ends the bootcamp. The application is intended for local communities, such as a village, a small town or a housing estate in a larger city. The user can add announcements depending on the category it represents. The main goal of the application is to improve neighborly relations, get to know each other better, help and care for the common good of small communities. Example: in the "help" category, we can offer to buy something for older people or walk a dog.',lightBg:!0,img:hn,alt:"susniad application dashboard",leftStart:!0,githubLink:"https://github.com/infoshareacademy/jfddr3-sunsiadek-app",deployment:"https://infoshareacademy.github.io/jfddr3-sunsiadek-app",icons:[un,fn,wn,vn,kn,yn,Sn]}],Jn=L.b.div(O||(O=Object(J.a)(["\n  width: 70vw;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  border-radius: 40px;\n  margin-top: 30px;\n  justify-content: center;\n  font-weight: 500;\n\n  @media screen and (max-width: 576px) {\n    width: 90vw;\n  }\n  @media screen and (min-width: 577px) {\n    width: 80vw;\n  }\n  @media screen and (min-width: 769px) {\n    width: 70vw;\n  }\n"]))),Ln=function(){return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(Jn,{children:Tn.map((function(n,e){return Object(T.createElement)(ln,Object(Z.a)(Object(Z.a)({},n),{},{key:e}))}))})})},Cn=L.b.button(k||(k=Object(J.a)(["\n  position: fixed;\n  bottom: 50vh;\n  right: 2px;\n  display: ",";\n  background: none;\n  border: none;\n  color: var(--darkgrey);\n  transition: all 0.2s ease-out;\n\n  p {\n    transform: rotate(90deg);\n    position: relative;\n    top: 35px;\n    font-size: 12px;\n  }\n\n  :hover {\n    transition: 0.2s ease-out;\n    cursor: pointer;\n    color: var(--black);\n  }\n\n  @media screen and (max-width: 576px) {\n    right: -20px;\n  }\n"])),(function(n){return n.isVisible?"block":"none"})),En=t(27),qn=function(){var n=Object(T.useState)(!1),e=Object(I.a)(n,2),t=e[0],i=e[1],a=function(){window.pageYOffset>200?i(!0):i(!1)};return Object(T.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}})),Object(W.jsxs)(Cn,{isVisible:t,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[Object(W.jsx)(En.a,{size:25}),Object(W.jsx)("p",{children:"Go to the top"})]})},Bn=L.b.div(y||(y=Object(J.a)(["\n  height: 80px;\n  width: 70vw;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  padding-top: 20px;\n  color: var(--darkgrey);\n\n  a {\n    margin: 0 30px;\n    color: inherit;\n    transition: all 0.3s ease-out;\n  }\n\n  div:nth-of-type(1) {\n    a:hover {\n      color: var(--darkblue);\n    }\n  }\n  div:nth-of-type(2) {\n    a:hover {\n      color: var(--red);\n    }\n  }\n  div:nth-of-type(3) {\n    a:hover {\n      color: var(--green);\n    }\n  }\n  div:nth-of-type(4) {\n    a:hover {\n      color: var(--black);\n    }\n  }\n\n  @media screen and (max-width: 576px) {\n    a {\n    }\n  }\n"]))),_n=function(){return Object(W.jsxs)(Bn,{children:[Object(W.jsx)("div",{children:Object(W.jsx)("a",{href:"https://linkedin.com/in/jakub-molicki",target:"_blank",rel:"noreferrer",title:"Go to my Linkedin profile",children:Object(W.jsx)(cn.b,{size:40})})}),Object(W.jsx)("div",{children:Object(W.jsx)("a",{href:"mailto:molickikuba@gmail.com?subject=Hello! I came from Your profile Page",title:"Send me an e-mail",children:Object(W.jsx)(cn.d,{size:40})})}),Object(W.jsx)("div",{children:Object(W.jsx)("a",{title:"Call me",href:"tel:+48504073031",children:Object(W.jsx)(cn.c,{size:40})})}),Object(W.jsx)("div",{children:Object(W.jsx)("a",{href:"https://github.com/molekJ",target:"_blank",rel:"noreferrer",title:"Go to my Github profile",children:Object(W.jsx)(cn.a,{size:40})})})]})};var Dn=function(){return Object(W.jsx)("div",{children:Object(W.jsxs)(M.a,{children:[Object(W.jsx)(R,{}),Object(W.jsx)(A,{}),Object(W.jsxs)(N.d,{children:[Object(W.jsx)(N.b,{exact:!0,path:"/profil-page",children:Object(W.jsx)(N.a,{to:"/"})}),Object(W.jsx)(N.b,{path:"/",exact:!0,component:U}),Object(W.jsx)(N.b,{path:"/about-me",component:X}),Object(W.jsx)(N.b,{path:"/my-projects",component:Ln})]}),Object(W.jsx)(qn,{}),Object(W.jsx)(_n,{})]})})};S.a.render(Object(W.jsx)(M.a,{children:Object(W.jsx)(Dn,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.df788902.chunk.js.map