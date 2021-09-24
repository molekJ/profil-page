(this["webpackJsonpmy-pqge"]=this["webpackJsonpmy-pqge"]||[]).push([[0],{43:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c,s,d,p,l,j,b,x,h,g,m,f,u,O,y,k,w=t(2),v=t.n(w),z=t(20),S=t.n(z),N=t(12),L=t(3),B=t(4),J=B.b.div(i||(i=Object(L.a)(["\n  position: sticky;\n  display: none;\n  height: 80px;\n  text-transform: uppercase;\n  @media screen and (max-width: 768px) {\n    display: block;\n  }\n"]))),T=B.b.div(a||(a=Object(L.a)(["\n  background-color: var(--white);\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  a {\n    margin-left: 2rem;\n    font-size: 2rem;\n    background: none;\n    color: var(--darkgrey);\n  }\n"]))),Y=B.b.div(r||(r=Object(L.a)(["\n  background-color: var(--grey2);\n  width: 250px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  transition: 550ms;\n  padding-top: 100px;\n\n  left: ",";\n\n  a {\n    text-decoration: none;\n  }\n\n  p {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 18px 0px 18px 20px;\n    list-style: none;\n    height: 60px;\n    width: 160px;\n    color: var(--darkgrey2);\n    font-size: 18px;\n    border-radius: 5px;\n    margin-left: 20px;\n    transition: 0.2s ease-out;\n    font-weight: 400;\n\n    :hover {\n      cursor: pointer;\n      background-color: var(--grey);\n      transition: 0.2s ease-out;\n    }\n  }\n"])),(function(n){return n.sidebar?"0":"-100%"})),F=B.b.ul(o||(o=Object(L.a)(["\n  width: 100%;\n"]))),C=B.b.div(c||(c=Object(L.a)(["\n  border-bottom: solid 1px var(--darkgrey);\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: var(--white);\n  display: flex;\n  height: 120px;\n  justify-content: space-around;\n  color: var(--darkgrey);\n  font-size: 20px;\n  text-transform: uppercase;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),A=B.b.div(s||(s=Object(L.a)(['\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-weight: 400;\n  color: var(--lightgrey);\n  list-style-type: none;\n  margin-left: 50px;\n\n  li {\n    width: 80px;\n    display: flex;\n    justify-content: center;\n    position: relative;\n    &:hover {\n      color: var(--orange);\n      cursor: pointer;\n      transition: 0.2s ease-out;\n      &::after {\n        opacity: 1;\n      }\n    }\n    &:after {\n      width: 30px;\n      height: 2px;\n      background: var(--orange);\n      transition: 0.2s ease-out;\n      content: "";\n      opacity: 0;\n      display: block;\n      position: absolute;\n      bottom: -5px;\n    }\n  }\n  li:nth-of-type(2) {\n    width: 120px;\n  }\n  li:nth-of-type(3) {\n    width: 160px;\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  p {\n  }\n']))),E=B.b.div(d||(d=Object(L.a)(["\n  width: 50px;\n  height: 50px;\n  align-self: center;\n  perspective: 500px;\n  margin-right: 50px;\n  margin-top: 10px;\n\n  @media screen and (max-width: 768px) {\n    margin-top: 15px;\n    margin-right: 15px;\n  }\n"]))),X=B.b.div(p||(p=Object(L.a)(["\n  @keyframes turn {\n    from {\n      transform: rotate3d(0, 0, 0, 0);\n    }\n    to {\n      transform: rotate3d(1, 1, 0, 360deg);\n    }\n  }\n\n  animation: turn 5s linear infinite;\n  position: relative;\n  width: 30px;\n  height: 30px;\n  transform: rotate3d(1, 1, 0, 45deg);\n  transform-style: preserve-3d;\n\n  .face {\n    width: 30px;\n    height: 30px;\n    background: var(--darkgrey);\n    border: solid 1px white;\n    position: absolute;\n\n    :hover {\n      background: var(--orange);\n    }\n  }\n\n  .front {\n    transform: translateZ(15px);\n  }\n\n  .back {\n    transform: translateZ(-15px) rotateY(180deg);\n  }\n\n  .left {\n    transform: translateX(-15px) rotateY(-90deg);\n  }\n\n  .right {\n    transform: translateX(15px) rotateY(90deg);\n  }\n\n  .top {\n    transform: translateY(-15px) rotateX(90deg);\n  }\n\n  .bottom {\n    transform: translateY(15px) rotateX(-90deg);\n  }\n"]))),G=t(25),H=t(9),I=[{title:"Home",path:"/"},{title:"About me",path:"/about-me"},{title:"My projects",path:"/my-projects"},{title:"Links",path:"/links"}],V=t(1),Z=function(){var n=Object(w.useState)(!1),e=Object(N.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(J,{children:[Object(V.jsxs)(T,{children:[Object(V.jsx)(H.b,{to:"#",children:Object(V.jsx)(G.a,{onClick:a})}),Object(V.jsx)(E,{children:Object(V.jsxs)(X,{children:[Object(V.jsx)("div",{className:"face top"}),Object(V.jsx)("div",{className:"face bottom"}),Object(V.jsx)("div",{className:"face left"}),Object(V.jsx)("div",{className:"face right"}),Object(V.jsx)("div",{className:"face front"}),Object(V.jsx)("div",{className:"face back"})]})})]}),Object(V.jsx)(Y,{sidebar:t,onClick:a,children:Object(V.jsx)(F,{children:I.map((function(n,e){return Object(V.jsx)("li",{children:Object(V.jsx)(H.b,{to:n.path,children:Object(V.jsx)("p",{children:n.title})})},e)}))})})]}),Object(V.jsxs)(C,{children:[Object(V.jsx)(A,{children:I.map((function(n,e){return Object(V.jsx)("li",{children:Object(V.jsx)(H.b,{to:n.path,children:Object(V.jsx)("p",{children:n.title})})},e)}))}),Object(V.jsx)(E,{children:Object(V.jsxs)(X,{children:[Object(V.jsx)("div",{className:"face top"}),Object(V.jsx)("div",{className:"face bottom"}),Object(V.jsx)("div",{className:"face left"}),Object(V.jsx)("div",{className:"face right"}),Object(V.jsx)("div",{className:"face front"}),Object(V.jsx)("div",{className:"face back"})]})})]})]})},_=Object(B.a)(l||(l=Object(L.a)(["\n  :root {\n\n    --white: #ffffff;\n    --black: #000000\n    --lightgrey: #efefef;\n    --grey: #f9f9f9;\n    --grey2: #dbdbdb;\n    --darkgrey: #878787;\n    --darkgrey2: #787878;\n    --darkgrey3: #212121;\n    --orange: #ff801a;\n    --lightorange: #ffc79a;\n    --lightgreen: #adbb0c;\n    --blue: #95d0eb;\n    --darkblue: #3766c2;\n    \n}\n\nbody {\n    min-width: 100px;\n    font-family: 'Rubik', sans-serif;\n}\n\n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n\n"]))),q=t(5),M=B.b.div(j||(j=Object(L.a)(["\n  width: 90vw;\n  margin: 0 auto;\n  padding-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  background: var(--white);\n  color: var(--darkgrey);\n  letter-spacing: 1px;\n  text-align: right;\n  h2 {\n    font-size: 80px;\n    margin-right: 100px;\n    margin-bottom: 80px;\n    color: var(--lightorange);\n  }\n\n  p:first-of-type {\n    font-size: 60px;\n    margin-right: 200px;\n    margin-bottom: 80px;\n    margin-left: 50px;\n  }\n\n  p:last-of-type {\n    font-size: 60px;\n    margin-right: 300px;\n    margin-left: 100px;\n  }\n  span {\n    color: var(--lightgreen);\n  }\n\n  @media screen and (max-width: 768px) {\n    h2 {\n      margin-right: 50px;\n      font-size: 60px;\n    }\n    p:first-of-type {\n      margin-right: 100px;\n      font-size: 60px;\n    }\n\n    p:last-of-type {\n      margin-right: 150px;\n      font-size: 60px;\n    }\n  }\n  @media screen and (max-width: 576px) {\n    padding-top: 30px;\n    h2 {\n      margin-right: 10px;\n      font-size: 40px;\n      margin-bottom: 20px;\n    }\n    p:first-of-type {\n      margin-right: 30px;\n      font-size: 40px;\n      margin-bottom: 20px;\n    }\n\n    p:last-of-type {\n      margin-right: 50px;\n      font-size: 40px;\n      margin-bottom: 20px;\n    }\n  }\n"]))),P=B.b.span(b||(b=Object(L.a)(["\n  background-image: -webkit-linear-gradient(\n    top,\n    var(--lightorange) 33%,\n    var(--darkgrey) 10%\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),R=function(){return Object(V.jsxs)(M,{children:[Object(V.jsx)("h2",{children:"Hi there"}),Object(V.jsxs)("p",{children:["Th",Object(V.jsx)(P,{children:"i"}),"s webs",Object(V.jsx)(P,{children:"i"}),"te"," ",Object(V.jsx)(P,{children:"i"}),"s about ",Object(V.jsx)("span",{children:"me"})," and"," ",Object(V.jsx)("span",{children:"my projects"})]}),Object(V.jsxs)("p",{children:["Let's check ",Object(V.jsx)(P,{children:"i"}),"t out!"]})]})},U=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("h2",{children:"About"}),Object(V.jsx)("p",{children:"About"})]})},D=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("h2",{children:"Links"}),Object(V.jsx)("p",{children:"Links"})]})},K=t(13),Q=B.b.div(x||(x=Object(L.a)(["\n  background: var(--darkgrey);\n  padding: 100px 50px;\n  color: white;\n\n  background: ",";\n\n  color: ",";\n"])),(function(n){return n.lightBg?"var(--white)":"var(--darkgrey)"}),(function(n){return n.lightBg?"var(--darkgrey)":"var(--white)"})),W=B.b.div(h||(h=Object(L.a)(["\n  align-items: center;\n  align-content: stretch;\n  display: flex;\n  justify-content: center;\n  padding: 50px 0;\n  flex-direction: ",";\n\n  @media screen and (max-width: 1200px) {\n    flex-direction: column;\n  }\n\n  @media screen and (max-width: 576px) {\n    padding: 0px;\n  }\n"])),(function(n){return n.leftStart?"row-reverse":"row"})),$=B.b.div(g||(g=Object(L.a)(["\n  max-width: 540px;\n  @media screen and (max-width: 1200px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),nn=B.b.h3(m||(m=Object(L.a)(["\n  text-transform: uppercase;\n  font-size: 36px;\n  font-weight: 600;\n  letter-spacing: 1.2px;\n  margin-bottom: 24px;\n"]))),en=B.b.div(f||(f=Object(L.a)(["\n  max-width: 540px;\n  margin-bottom: 30px;\n  font-size: 18px;\n  line-height: 24px;\n"]))),tn=B.b.div(u||(u=Object(L.a)(["\n  img {\n    margin: 0 8px;\n  }\n  @media screen and (max-width: 1200px) {\n    margin-bottom: 20px;\n  }\n"]))),an=B.b.div(O||(O=Object(L.a)(["\n  width: 550px;\n  height: 400px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  div {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    @media screen and (max-width: 576px) {\n      width: 300px;\n      font-size: 12px;\n    }\n  }\n\n  img {\n    width: 80%;\n    height: 80%;\n    border-radius: 15px;\n  }\n\n  a {\n    padding-top: 20px;\n    text-decoration: none;\n    color: inherit;\n    display: flex;\n    align-items: center;\n    margin: 10px 30px;\n\n    p {\n      margin: 0 5px;\n    }\n  }\n\n  @media screen and (max-width: 576px) {\n    width: 400px;\n    height: 300px;\n  }\n"]))),rn=t(8),on=t(26),cn=function(n){var e=n.title,t=n.description,i=n.lightBg,a=n.img,r=n.alt,o=n.leftStart,c=n.githubLink,s=n.deployment,d=n.icons;return Object(V.jsx)(Q,{lightBg:i,children:Object(V.jsxs)(W,{leftStart:o,children:[Object(V.jsxs)($,{children:[Object(V.jsx)(nn,{children:e}),Object(V.jsx)(en,{children:t}),Object(V.jsx)(tn,{children:d.map((function(n,e){return Object(V.jsx)("img",{src:n,alt:"icon"},e)}))})]}),Object(V.jsxs)(an,{children:[Object(V.jsx)("img",{alt:r,src:a}),Object(V.jsxs)("div",{children:[Object(V.jsxs)("a",{href:c,target:"_blank",rel:"noreferrer",children:[Object(V.jsx)("p",{children:"Look at the code!"}),Object(V.jsx)(rn.a,{size:40})]}),Object(V.jsxs)("a",{href:s,target:"_blank",rel:"noreferrer",children:[Object(V.jsx)("p",{children:"Try it now!"}),Object(V.jsx)(on.a,{size:40})]})]})]})]})})},sn=t.p+"static/media/diet.bf153292.jpg",dn=t.p+"static/media/css.3ec32022.svg",pn=t.p+"static/media/html.c1bb84e0.svg",ln=t.p+"static/media/js.081325c6.svg",jn=t.p+"static/media/react.a060cbe8.svg",bn={title:"diet",description:'Odtworzenie projektu dostarczonego w pliku .psd. Interakjce: prosty slider, animacje na ":hover", zaznaczanie/odznaczanie ikon. Fajny projekt do utrwalenia CSS, zw\u0142aszcza CSS Grid i Flexbox',lightBg:!1,img:sn,alt:"diet application dashboard",leftStart:!0,githubLink:"https://github.com/molekJ/recruitment-task-get-r",deployment:"https://molekj-diet-app.netlify.app/",icons:[pn,dn,ln,jn]},xn={title:"sunsiadek",description:'Jest to projekt grupowy, ko\u0144cz\u0105cy bootcamp. Aplikacja przeznaczona dla spo\u0142eczno\u015bci lokalnych, takich jak wie\u015b, ma\u0142a miejscowo\u015b\u0107 czy te\u017c osiedle w wi\u0119kszym mie\u015bcie. U\u017cytkownik mo\u017ce dodawa\u0107 og\u0142osznia w zale\u017cno\u015bci od kategorii jak\u0105 to og\u0142osznie reprezentuje. G\u0142\xf3wny cel aplikacji to polepszenie relacji s\u0105siedzkich, lepsze poznanie si\u0119, niesienie pomocy oraz dbanie o wsp\xf3lne dobro ma\u0142ych spo\u0142eczno\u015bci. Przyk\u0142ad: w kategorii "pomoc" mo\u017cemy zaoferowa\u0107 zrobienie zakup\xf3w b\u0105d\u017a wyprowadzenie psa.',lightBg:!1,img:t.p+"static/media/sunsiad.31fd9e58.jpg",alt:"susniad application dashboard",leftStart:!0,githubLink:"https://github.com/infoshareacademy/jfddr3-sunsiadek-app",deployment:"https://infoshareacademy.github.io/jfddr3-sunsiadek-app",icons:[pn,dn,ln,jn,t.p+"static/media/firebase.c55df031.svg",t.p+"static/media/jira.d3f6317e.svg"]},hn={title:"bakery",description:"Jest to prosta gierka, w kt\xf3rej robimy i sprzedajemy ciastka. By\u0142o to jedno z zada\u0144 domowych bootcampu, do wykonania w Vanilla JS. Z uwagi na mnogo\u015b\u0107 zagwozdek postanowi\u0142em wr\xf3ci\u0107 do tego i napisa\u0107 j\u0105 jeszcze raz w React oraz TypeScript (jest to m\xf3j pierwszy projekt z wykorzystaniem TS). Tak, wiem- wygl\u0105d nie powala, ale nie o wygl\u0105d tu chodzi. Spr\xf3buj! Tylko nie graj do p\xf3\u017ana...",lightBg:!0,img:t.p+"static/media/bakery.d13bc10c.jpg",alt:"bakery game",leftStart:!1,githubLink:"https://github.com/molekJ/bakery/tree/master/my-app",deployment:"https://molekj.github.io/bakery/",icons:[pn,dn,ln,jn,t.p+"static/media/ts.f20748ca.svg"]},gn=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(cn,Object(K.a)({},xn)),Object(V.jsx)(cn,Object(K.a)({},hn)),Object(V.jsx)(cn,Object(K.a)({},bn))]})},mn=B.b.button(y||(y=Object(L.a)(["\n  position: fixed;\n  bottom: 50vh;\n  right: 2px;\n  display: ",";\n  background: none;\n  border: none;\n  color: var(--darkgrey3);\n\n  p {\n    transform: rotate(90deg);\n    position: relative;\n    top: 35px;\n    font-size: 12px;\n  }\n\n  :hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.isVisible?"block":"none"})),fn=t(27),un=function(){var n=Object(w.useState)(!1),e=Object(N.a)(n,2),t=e[0],i=e[1],a=function(){window.pageYOffset>200?i(!0):i(!1)};return Object(w.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}})),Object(V.jsxs)(mn,{isVisible:t,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[Object(V.jsx)(fn.a,{size:25}),Object(V.jsx)("p",{children:"Go to the top"})]})},On=B.b.div(k||(k=Object(L.a)(["\n  margin-top: 20px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--darkgrey2);\n  background: var(--white);\n\n  a {\n    margin: 0 40px;\n    color: inherit;\n  }\n  div :hover {\n    color: var(--darkblue);\n  }\n\n  @media screen and (max-width: 576px) {\n    a {\n      margin: 0 20px;\n    }\n  }\n"]))),yn=function(){return Object(V.jsxs)(On,{children:[Object(V.jsx)("div",{children:Object(V.jsx)("a",{href:"https://linkedin.com/in/jakub-molicki",target:"_blank",rel:"noreferrer",children:Object(V.jsx)(rn.b,{size:40})})}),Object(V.jsx)("div",{children:Object(V.jsx)("a",{href:"mailto:molickikuba@gmail.com?subject=Hello! I came from Your profile Page",children:Object(V.jsx)(rn.d,{size:40})})}),Object(V.jsx)("div",{children:Object(V.jsx)("a",{href:"tel:+48504073031",children:Object(V.jsx)(rn.c,{size:40})})})]})};var kn=function(){return Object(V.jsx)("div",{children:Object(V.jsxs)(H.a,{children:[Object(V.jsx)(_,{}),Object(V.jsx)(Z,{}),Object(V.jsxs)(q.c,{children:[Object(V.jsx)(q.a,{path:"/",exact:!0,component:R}),Object(V.jsx)(q.a,{path:"/about-me",component:U}),Object(V.jsx)(q.a,{path:"/my-projects",component:gn}),Object(V.jsx)(q.a,{path:"/links",component:D})]}),Object(V.jsx)(un,{}),Object(V.jsx)(yn,{})]})})};S.a.render(Object(V.jsx)(v.a.StrictMode,{children:Object(V.jsx)(kn,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c9309947.chunk.js.map