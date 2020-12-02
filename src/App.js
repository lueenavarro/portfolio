import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import SkillsList from "./components/SkillsList";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu className="menu" />
        <Switch>
          <Route path="/skills">
            <SkillsList />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
