import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Startup_list from "./components/Startup_list";
import Add_startup from "./components/Add_startup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Nav {...props} heading="Welcome To Startup world" />
            )}
          />
          <Route
            path="/addStartup"
            exact
            render={(props) => <Nav {...props} heading="Create New Startup" />}
          />
        </Switch>

        <Switch>
          <Route path="/" exact component={Startup_list} />
          <Route path="/addStartup" component={Add_startup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
