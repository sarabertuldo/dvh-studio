import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Equipment from "./components/Equipment/Equipment";
import Photos from "./components/Photos/Photos";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar">
          <NavLink className="link" to="/Home">
            Home
          </NavLink>
          <NavLink className="link" to="/About">
            About
          </NavLink>
          <NavLink className="link" to="/Equipment">
            Equipment
          </NavLink>
          <NavLink className="link" to="/Photos">
            Photos
          </NavLink>
          <NavLink className="link" to="/Contact">
            Contact
          </NavLink>
        </nav>
        <main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/photos" component={Photos} />
            <Route path="/contact" component={Contact} />
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </main>
        <footer>Divine Hammer | Omaha, Nebraska | est. 2020</footer>
      </Router>
    </>
  );
}

export default App;
