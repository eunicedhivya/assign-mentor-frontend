import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddStudent from "./pages/AddStudent";
import AddMentor from "./pages/AddMentor";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <h2>Home</h2>
          </Route>
          <Route path="/addstudent">
            <AddStudent />
          </Route>
          <Route path="/addmentor">
            <AddMentor />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
