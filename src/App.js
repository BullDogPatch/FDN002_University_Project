import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import UseCases from "./components/pages/UseCases";
import MyDegreeSubject from "./components/pages/MyDegreeSubject";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/useCases" component={UseCases} />
            <Route path="/references" component={MyDegreeSubject} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
