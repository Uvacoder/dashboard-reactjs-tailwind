import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Dashboard/Layout/Layout";
import Home from "./Pages/Home";
import Ar from "./Pages/Ar";
import Documentation from "./Pages/Documentation";
import Travel from "./Pages/Travel";
import Illustration from "./Pages/Illustration";
import Advertisements from "./Pages/Advertisements";
import Updates from "./Pages/Updates";
import UX from "./Pages/UX";
import Videos from "./Pages/Videos";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ar">
            <Ar />
          </Route>
          <Route exact path="/documentation">
            <Documentation />
          </Route>
          <Route exact path="/travel">
            <Travel />
          </Route>
          <Route exact path="/illustration">
            <Illustration />
          </Route>
          <Route exact path="/advertisements">
            <Advertisements />
          </Route>
          <Route exact path="/updates">
            <Updates />
          </Route>
          <Route exact path="/ux">
            <UX />
          </Route>
          <Route exact path="/videos">
            <Videos />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
