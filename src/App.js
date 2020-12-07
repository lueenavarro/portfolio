import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import SkillsList from "./components/SkillsList";
import WorksList from "./components/WorksList";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="container">
          <Switch>
            <Route path="/skills" component={SkillsList} />
            <Route path="/works" component={WorksList} />
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
