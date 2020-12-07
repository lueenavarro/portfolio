import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import SkillsList from "./components/SkillsList";
import Works from "./components/Works";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="container">
          <Switch>
            <Route path="/skills" component={SkillsList} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} exact={true} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
