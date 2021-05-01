import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Equipment from "./components/Equipment";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <NavLink className="link" to="/Home">
          Home
        </NavLink>
        <NavLink className="link" to="/About">
          About
        </NavLink>
        <NavLink className="link" to="/Equipment">
          Equipment
        </NavLink>
        <NavLink className="link" to="/Contact">
          Contact
        </NavLink>

        <main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/contact" component={Contact} />
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
          SSSSSSSSsalt n pepa's here
        </main>
      </Router>
    </>
  );
}

export default App;
