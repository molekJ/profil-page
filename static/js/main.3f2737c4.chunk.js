(this["webpackJsonpmy-pqge"]=this["webpackJsonpmy-pqge"]||[]).push([[0],{43:function(n,e,t){"use strict";t.r(e);var i,a,r,o,s,c,d,l,p,h,b,g,m,x,j,f,u,v,O,y,k,w,z=t(2),S=t(19),I=t.n(S),T=t(12),N=t(3),L=t(4),J=L.b.div(i||(i=Object(N.a)(["\n  position: sticky;\n  display: none;\n  height: 80px;\n  text-transform: uppercase;\n  @media screen and (max-width: 768px) {\n    display: block;\n  }\n"]))),B=L.b.div(a||(a=Object(N.a)(["\n  background-color: var(--white);\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  a {\n    margin-left: 2rem;\n    font-size: 2rem;\n    background: none;\n    color: var(--darkgrey);\n  }\n"]))),q=L.b.div(r||(r=Object(N.a)(["\n  background-color: var(--grey2);\n  width: 250px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  transition: 550ms;\n  padding-top: 100px;\n\n  left: ",";\n\n  a {\n    text-decoration: none;\n  }\n\n  p {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 18px 0px 18px 20px;\n    list-style: none;\n    height: 60px;\n    width: 160px;\n    color: var(--darkgrey2);\n    font-size: 18px;\n    border-radius: 5px;\n    margin-left: 20px;\n    transition: 0.2s ease-out;\n    font-weight: 400;\n\n    :hover {\n      cursor: pointer;\n      background-color: var(--grey);\n      transition: 0.2s ease-out;\n    }\n  }\n"])),(function(n){return n.sidebar?"0":"-100%"})),C=L.b.ul(o||(o=Object(N.a)(["\n  width: 100%;\n"]))),Y=L.b.div(s||(s=Object(N.a)(["\n  border-bottom: solid 1px var(--darkgrey);\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: var(--white);\n  display: flex;\n  height: 100px;\n  justify-content: space-around;\n  color: var(--darkgrey);\n  font-size: 20px;\n  text-transform: uppercase;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),_=L.b.div(c||(c=Object(N.a)(['\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-weight: 400;\n  color: var(--darkgrey);\n  list-style-type: none;\n  margin-left: 50px;\n\n  li {\n    width: 80px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    &:hover {\n      color: var(--orange);\n      cursor: pointer;\n      transition: 0.2s ease-out;\n      &::after {\n        opacity: 1;\n      }\n    }\n    &:after {\n      width: 30px;\n      height: 2px;\n      background: var(--orange);\n      transition: 0.2s ease-out;\n      content: "";\n      opacity: 0;\n      display: block;\n      position: absolute;\n      bottom: -5px;\n    }\n  }\n  li:nth-of-type(2) {\n    width: 120px;\n  }\n  li:nth-of-type(3) {\n    width: 160px;\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  p {\n  }\n']))),E=L.b.div(d||(d=Object(N.a)(["\n  width: 50px;\n  height: 50px;\n  align-self: center;\n  perspective: 500px;\n  margin-right: 50px;\n  margin-top: 10px;\n\n  @media screen and (max-width: 768px) {\n    margin-top: 15px;\n    margin-right: 15px;\n  }\n"]))),D=L.b.div(l||(l=Object(N.a)(["\n  @keyframes turn {\n    from {\n      transform: rotate3d(0, 0, 0, 0);\n    }\n    to {\n      transform: rotate3d(1, 1, 0, 360deg);\n    }\n  }\n\n  animation: turn 5s linear infinite;\n  position: relative;\n  width: 30px;\n  height: 30px;\n  transform: rotate3d(1, 1, 0, 45deg);\n  transform-style: preserve-3d;\n\n  .face {\n    width: 30px;\n    height: 30px;\n    background: var(--darkgrey);\n    border: solid 1px white;\n    position: absolute;\n\n    :hover {\n      background: var(--orange);\n    }\n  }\n\n  .front {\n    transform: translateZ(15px);\n  }\n\n  .back {\n    transform: translateZ(-15px) rotateY(180deg);\n  }\n\n  .left {\n    transform: translateX(-15px) rotateY(-90deg);\n  }\n\n  .right {\n    transform: translateX(15px) rotateY(90deg);\n  }\n\n  .top {\n    transform: translateY(-15px) rotateX(90deg);\n  }\n\n  .bottom {\n    transform: translateY(15px) rotateX(-90deg);\n  }\n"]))),M=t(24),R=t(8),W=[{title:"Home",path:"/"},{title:"About me",path:"/about-me"},{title:"My projects",path:"/my-projects"}],A=t(1),H=function(){var n=Object(z.useState)(!1),e=Object(T.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(J,{children:[Object(A.jsxs)(B,{children:[Object(A.jsx)(R.b,{to:"#",children:Object(A.jsx)(M.a,{onClick:a})}),Object(A.jsx)(E,{children:Object(A.jsxs)(D,{children:[Object(A.jsx)("div",{className:"face top"}),Object(A.jsx)("div",{className:"face bottom"}),Object(A.jsx)("div",{className:"face left"}),Object(A.jsx)("div",{className:"face right"}),Object(A.jsx)("div",{className:"face front"}),Object(A.jsx)("div",{className:"face back"})]})})]}),Object(A.jsx)(q,{sidebar:t,onClick:a,children:Object(A.jsx)(C,{children:W.map((function(n,e){return Object(A.jsx)("li",{children:Object(A.jsx)(R.b,{to:n.path,children:Object(A.jsx)("p",{children:n.title})})},e)}))})})]}),Object(A.jsxs)(Y,{children:[Object(A.jsx)(_,{children:W.map((function(n,e){return Object(A.jsx)("li",{children:Object(A.jsx)(R.b,{to:n.path,children:Object(A.jsx)("p",{children:n.title})})},e)}))}),Object(A.jsx)(E,{children:Object(A.jsxs)(D,{children:[Object(A.jsx)("div",{className:"face top"}),Object(A.jsx)("div",{className:"face bottom"}),Object(A.jsx)("div",{className:"face left"}),Object(A.jsx)("div",{className:"face right"}),Object(A.jsx)("div",{className:"face front"}),Object(A.jsx)("div",{className:"face back"})]})})]})]})},P=Object(L.a)(p||(p=Object(N.a)(["\n  :root {\n\n    --white: #ffffff;\n    --black: #000000;\n    --lightgrey: #efefef;\n    --grey: #f9f9f9;\n    --grey2: #dbdbdb;\n    --darkgrey: #878787;\n    --darkgrey2: #787878;\n    --darkgrey3: #212121;\n    --orange: #ff801a;\n    --lightorange: #ffc79a;\n    --lightgreen: #adbb0c;\n    --blue: #95d0eb;\n    --darkblue: #3766c2;\n    \n}\n\nbody {\n    min-width: 100px;\n    min-height: 100vh;\n    font-family: 'Rubik', sans-serif;\n    overflow-x: scroll;\n}\n\n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n\n"]))),X=t(5),F=L.b.div(h||(h=Object(N.a)(["\n  width: 90vw;\n  margin: 0 auto;\n  padding-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  background: var(--white);\n  color: var(--darkgrey);\n  letter-spacing: 1px;\n  text-align: right;\n  margin-bottom: 100px;\n  min-height: calc(100vh - 300px);\n  h2 {\n    font-size: 80px;\n    margin-right: 100px;\n    margin-bottom: 80px;\n    color: var(--lightorange);\n  }\n\n  p:first-of-type {\n    font-size: 60px;\n    margin-right: 200px;\n    margin-bottom: 80px;\n    margin-left: 50px;\n  }\n\n  p:last-of-type {\n    font-size: 60px;\n    margin-right: 300px;\n    margin-left: 100px;\n  }\n  span {\n    color: var(--lightgreen);\n  }\n\n  @media screen and (max-width: 768px) {\n    h2 {\n      margin-right: 50px;\n      font-size: 60px;\n    }\n    p:first-of-type {\n      margin-right: 100px;\n      font-size: 60px;\n    }\n\n    p:last-of-type {\n      margin-right: 150px;\n      font-size: 60px;\n    }\n  }\n  @media screen and (max-width: 576px) {\n    padding-top: 30px;\n    h2 {\n      margin-right: 10px;\n      font-size: 40px;\n      margin-bottom: 20px;\n    }\n    p:first-of-type {\n      margin-right: 30px;\n      font-size: 40px;\n      margin-bottom: 20px;\n    }\n\n    p:last-of-type {\n      margin-right: 50px;\n      font-size: 40px;\n      /* margin-bottom: 20px; */\n    }\n  }\n"]))),V=L.b.span(b||(b=Object(N.a)(["\n  background-image: -webkit-linear-gradient(\n    top,\n    var(--lightorange) 33%,\n    var(--darkgrey) 10%\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),U=function(){return Object(A.jsxs)(F,{children:[Object(A.jsx)("h2",{children:"Hi there!"}),Object(A.jsxs)("p",{children:["Th",Object(A.jsx)(V,{children:"i"}),"s webs",Object(A.jsx)(V,{children:"i"}),"te"," ",Object(A.jsx)(V,{children:"i"}),"s about ",Object(A.jsx)("span",{children:"me"})," and"," ",Object(A.jsx)("span",{children:"my projects"})]}),Object(A.jsxs)("p",{children:["Let's check ",Object(A.jsx)(V,{children:"i"}),"t out!"]})]})},Z=L.b.div(g||(g=Object(N.a)(["\n  min-height: calc(100vh - 200px);\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  color: var(--darkgrey2);\n\n  @media screen and (max-width: 768px) {\n    width: 80%;\n  }\n\n  @media screen and (max-width: 576px) {\n    font-size: 18px;\n  }\n\n  font-size: 24px;\n  letter-spacing: 1px;\n  line-height: 30px;\n  p {\n    margin-bottom: 20px;\n  }\n\n  a {\n    text-decoration: none;\n    color: var(--lightgreen);\n    :hover {\n      border-bottom: 1px solid var(--lightgreen);\n    }\n  }\n\n  p:last-of-type a {\n    color: var(--orange);\n    :hover {\n      border-bottom: 1px solid var(--orange);\n    }\n  }\n"]))),G=function(){return Object(A.jsxs)(Z,{children:[Object(A.jsx)("p",{children:"My name is Jakub, I am 31 years old and I live in Bia\u0142a Podlaska (voivodeship Lubelskie)."}),Object(A.jsxs)("p",{children:[" ","My previous professional experience is quite diverse. I have worked in many places and I have done different types of work. In each job I came to the point where I needed new challenges. The challenges were not showing up, so I was changing my profession. The time has come to redirect professional field, where I will be able to develop and I will receive new duties. I had basics of programming in college - that's why I knew the programming will fulfill my expectations."]}),Object(A.jsxs)("p",{children:["I have signed up to bootcamp Front-end in infoShare Academy, in which I learned strong basics to create my own projects. Currently I learn in my own, I use websites resources like:"," ",Object(A.jsx)("a",{href:"https://developer.mozilla.org/",target:"_blank",rel:"noreferrer",children:"MDN Web Docs"}),","," ",Object(A.jsx)("a",{href:" https://reactjs.org/",target:"_blank",rel:"noreferrer",children:"ReactJS.org"}),","," ",Object(A.jsx)("a",{href:" https://stackoverflow.com/",target:"_blank",rel:"noreferrer",children:"Stack Overflow"})," ","and tutorials:"," ",Object(A.jsx)("a",{href:"https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg",target:"_blank",rel:"noreferrer",children:"The Net Ninja"})," ","i"," ",Object(A.jsx)("a",{href:"https://www.youtube.com/c/WebDevSimplified",target:"_blank",rel:"noreferrer",children:"Web Dev Simplified"}),"."]}),Object(A.jsxs)("p",{children:["Check the bookmark: ",Object(A.jsx)(R.b,{to:"/my-projects",children:"MY PROJECTS"}),"."]})]})},Q=L.b.div(m||(m=Object(N.a)(["\n  min-height: calc(100vh - 200px);\n"]))),K=function(){return Object(A.jsx)(Q,{})},$=t(27),nn=L.b.div(x||(x=Object(N.a)(["\n  background: var(--darkgrey);\n  padding: 100px 50px;\n  color: white;\n  min-height: calc(100vh - 200px);\n  background: ",";\n\n  color: ",";\n"])),(function(n){return n.lightBg?"var(--white)":"var(--darkgrey)"}),(function(n){return n.lightBg?"var(--darkgrey)":"var(--white)"})),en=L.b.div(j||(j=Object(N.a)(["\n  align-items: center;\n  align-content: stretch;\n  display: flex;\n  justify-content: center;\n  padding: 50px 0;\n  flex-direction: ",";\n\n  @media screen and (max-width: 1200px) {\n    flex-direction: column;\n  }\n\n  @media screen and (max-width: 576px) {\n    padding: 0px;\n  }\n"])),(function(n){return n.leftStart?"row-reverse":"row"})),tn=L.b.div(f||(f=Object(N.a)(["\n  width: 650px;\n\n  @media screen and (max-width: 1200px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),an=L.b.h3(u||(u=Object(N.a)(["\n  text-transform: uppercase;\n  font-size: 36px;\n  font-weight: 600;\n  letter-spacing: 1.2px;\n  margin-bottom: 24px;\n"]))),rn=L.b.div(v||(v=Object(N.a)(["\n  max-width: 540px;\n  margin-bottom: 30px;\n  font-size: 18px;\n  line-height: 24px;\n"]))),on=L.b.div(O||(O=Object(N.a)(["\n  img {\n    margin: 0 8px;\n  }\n  @media screen and (max-width: 1200px) {\n    margin-bottom: 20px;\n  }\n"]))),sn=L.b.div(y||(y=Object(N.a)(["\n  width: 650px;\n  height: 400px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  div {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    @media screen and (max-width: 576px) {\n      width: 300px;\n      font-size: 12px;\n    }\n  }\n\n  img {\n    width: 80%;\n    height: 80%;\n    border-radius: 15px;\n  }\n\n  a {\n    padding-top: 20px;\n    text-decoration: none;\n    color: inherit;\n    display: flex;\n    align-items: center;\n    margin: 10px 30px;\n\n    p {\n      margin: 0 5px;\n    }\n  }\n\n  @media screen and (max-width: 576px) {\n    width: 400px;\n    height: 300px;\n  }\n"]))),cn=t(9),dn=t(25),ln=function(n){var e=n.title,t=n.description,i=n.lightBg,a=n.img,r=n.alt,o=n.leftStart,s=n.githubLink,c=n.deployment,d=n.icons;return Object(A.jsx)(nn,{lightBg:i,children:Object(A.jsxs)(en,{leftStart:o,children:[Object(A.jsxs)(tn,{children:[Object(A.jsx)(an,{children:e}),Object(A.jsx)(rn,{children:t}),Object(A.jsx)(on,{children:d.map((function(n,e){return Object(A.jsx)("img",{src:n,alt:"icon",width:48,height:48},e)}))})]}),Object(A.jsxs)(sn,{children:[Object(A.jsx)("img",{alt:r,src:a}),Object(A.jsxs)("div",{children:[Object(A.jsxs)("a",{href:s,target:"_blank",rel:"noreferrer",children:[Object(A.jsx)("p",{children:"Look at the code!"}),Object(A.jsx)(cn.a,{size:40})]}),Object(A.jsxs)("a",{href:c,target:"_blank",rel:"noreferrer",children:[Object(A.jsx)("p",{children:"Try it now!"}),Object(A.jsx)(dn.a,{size:40})]})]})]})]})})},pn=t.p+"static/media/bakery.d13bc10c.jpg",hn=t.p+"static/media/sunsiad.31fd9e58.jpg",bn=t.p+"static/media/diet.bf153292.jpg",gn=t.p+"static/media/weather.e03b83f3.jpg",mn=t.p+"static/media/todolist.573bf499.jpg",xn=t.p+"static/media/quiz.eac6e658.jpg",jn=t.p+"static/media/css.3ec32022.svg",fn=t.p+"static/media/html.c1bb84e0.svg",un=t.p+"static/media/js.081325c6.svg",vn=t.p+"static/media/react.a060cbe8.svg",On=t.p+"static/media/ts.f20748ca.svg",yn=t.p+"static/media/firebase.c55df031.svg",kn=t.p+"static/media/jira.d3f6317e.svg",wn=t.p+"static/media/i18next.eb4642c8.svg",zn=t.p+"static/media/react-router-dom.66dd36f8.svg",Sn=[{title:"Quiz",description:"Single-choice test application with retrieving data from JSON file. After answering all the questions, a summary screen is displayed and then we can check our results.",lightBg:!1,img:xn,alt:"quiz application dashboard",leftStart:!1,githubLink:"https://github.com/molekJ/quiz",deployment:"https://molekj.github.io/quiz/",icons:[fn,jn,un,vn,On,wn,zn,t.p+"static/media/bootstrap.f3938ebe.svg"]},{title:"ToDoList",description:"Classic of the classics. The simple application in which we can add our scheduled tasks. I used LocalStorage - tasks are saving automatically and loading after refresh.",lightBg:!0,img:mn,alt:"todolist application dashboard",leftStart:!0,githubLink:"https://github.com/molekJ/to-do-list",deployment:"https://molekj.github.io/to-do-list/",icons:[fn,jn,un,vn,On]},{title:"Weather",description:"The weather application that uses API openweathermap.org. There are two bookmarks: first - a list of cities, second - searching.",lightBg:!1,img:gn,alt:"weather application dashboard",leftStart:!1,githubLink:"https://github.com/molekJ/Weather",deployment:"https://molekj.github.io/weather/",icons:[fn,jn,un,vn,On,zn]},{title:"diet",description:"Reproduction the project from a .psd file. Simple interactions: slider, hover animations, selecting / deselecting icons. Helpful project to consolidate CSS knowledge. ",lightBg:!0,img:bn,alt:"diet application dashboard",leftStart:!0,githubLink:"https://github.com/molekJ/recruitment-task-get-r",deployment:"https://molekj-diet-app.netlify.app/",icons:[fn,jn,un,vn]},{title:"bakery",description:"The simple game,  in which we make and sell cookies. I had this task during my bootcamp at Vanilla JS. Due to there are many brain teasers I have decided to come back to this and make it but this time in React.is and TypeScript.",lightBg:!1,img:pn,alt:"bakery game",leftStart:!1,githubLink:"https://github.com/molekJ/bakery/tree/master/my-app",deployment:"https://molekj.github.io/bakery/",icons:[fn,jn,un,vn,On]},{title:"sunsiadek",description:'This is a group project that ends the bootcamp. The application is intended for local communities, such as a village, a small town or a housing estate in a larger city. The user can add announcements depending on the category it represents. The main goal of the application is to improve neighborly relations, get to know each other better, help and care for the common good of small communities. Example: in the "help" category, we can offer to buy something for older people or walk a dog.',lightBg:!0,img:hn,alt:"susniad application dashboard",leftStart:!0,githubLink:"https://github.com/infoshareacademy/jfddr3-sunsiadek-app",deployment:"https://infoshareacademy.github.io/jfddr3-sunsiadek-app",icons:[fn,jn,un,vn,yn,kn,zn]}],In=function(){return Object(A.jsx)(A.Fragment,{children:Sn.map((function(n){return Object(A.jsx)(ln,Object($.a)({},n))}))})},Tn=L.b.button(k||(k=Object(N.a)(["\n  position: fixed;\n  bottom: 50vh;\n  right: 2px;\n  display: ",";\n  background: none;\n  border: none;\n  color: var(--darkgrey3);\n\n  p {\n    transform: rotate(90deg);\n    position: relative;\n    top: 35px;\n    font-size: 12px;\n  }\n\n  :hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.isVisible?"block":"none"})),Nn=t(26),Ln=function(){var n=Object(z.useState)(!1),e=Object(T.a)(n,2),t=e[0],i=e[1],a=function(){window.pageYOffset>200?i(!0):i(!1)};return Object(z.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}})),Object(A.jsxs)(Tn,{isVisible:t,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[Object(A.jsx)(Nn.a,{size:25}),Object(A.jsx)("p",{children:"Go to the top"})]})},Jn=L.b.div(w||(w=Object(N.a)(["\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--darkgrey2);\n  background: var(--white);\n  border-top: solid 1px var(--darkgrey);\n  padding-top: 20px;\n  a {\n    margin: 0 40px;\n    color: inherit;\n    transition: 0.2s ease-out;\n  }\n\n  div:nth-of-type(1) {\n    a:hover {\n      color: var(--darkblue);\n    }\n  }\n  div:nth-of-type(2) {\n    a:hover {\n      color: var(--orange);\n    }\n  }\n  div:nth-of-type(3) {\n    a:hover {\n      color: var(--lightgreen);\n    }\n  }\n  div:nth-of-type(4) {\n    a:hover {\n      color: var(--black);\n    }\n  }\n\n  @media screen and (max-width: 576px) {\n    a {\n      margin: 0 20px;\n    }\n  }\n"]))),Bn=function(){return Object(A.jsxs)(Jn,{children:[Object(A.jsx)("div",{children:Object(A.jsx)("a",{href:"https://linkedin.com/in/jakub-molicki",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(cn.b,{size:40})})}),Object(A.jsx)("div",{children:Object(A.jsx)("a",{href:"mailto:molickikuba@gmail.com?subject=Hello! I came from Your profile Page",children:Object(A.jsx)(cn.d,{size:40})})}),Object(A.jsx)("div",{children:Object(A.jsx)("a",{href:"tel:+48504073031",children:Object(A.jsx)(cn.c,{size:40})})}),Object(A.jsx)("div",{children:Object(A.jsx)("a",{href:"https://github.com/molekJ",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(cn.a,{size:40})})})]})};var qn=function(){return Object(A.jsx)("div",{children:Object(A.jsxs)(R.a,{children:[Object(A.jsx)(P,{}),Object(A.jsx)(H,{}),Object(A.jsxs)(X.c,{children:[Object(A.jsx)(X.a,{path:"/",exact:!0,component:U}),Object(A.jsx)(X.a,{path:"/about-me",component:G}),Object(A.jsx)(X.a,{path:"/my-projects",component:In}),Object(A.jsx)(X.a,{path:"/links",component:K})]}),Object(A.jsx)(Ln,{}),Object(A.jsx)(Bn,{})]})})};I.a.render(Object(A.jsx)(R.a,{children:Object(A.jsx)(qn,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3f2737c4.chunk.js.map