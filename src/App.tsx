import { Navbar } from "./components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Links } from "./pages/Links/Links";
import { MyProjects } from "./pages/MyProjects/MyProjects";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/my-projects" component={MyProjects} />
          <Route path="/links" component={Links} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
