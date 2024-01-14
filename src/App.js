import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Navigationbars */

import Navigationbar from "./components/Navbar/Navigationbar";

/* Pages */
import Root from "./components/Pages/Root";
import News from "./components/Pages/News";
import Tutorials from "./components/Pages/Tutorials";
import Stream from "./components/Pages/Stream";
import Downloads from "./components/Pages/Downloads";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";


/* App */

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/board" />
          <Route path="/news" component={News} />
          <Route path="/stream" component={Stream} />
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/downloads" component={Downloads} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/git" />
          <Route path="/docker" />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
