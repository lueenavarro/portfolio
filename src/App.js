import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import SkillsList from "./components/SkillsList";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu className="menu" />
        <div className="container">
          <Switch>
            <Route path="/skills">
              <SkillsList />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
