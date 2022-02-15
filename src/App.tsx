import { Navbar } from "./components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyles";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { MyProjects } from "./pages/MyProjects/MyProjects";
import { Scroll } from "./components/Scroll/Scroll";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/profil-page">
            <Redirect to="/" />
          </Route>
          <Route path="/" exact component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/my-projects" component={MyProjects} />
        </Switch>
        <Scroll />
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
