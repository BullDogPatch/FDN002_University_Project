import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import UseCases from "./components/pages/UseCase/UseCases";
import MyDegreeSubject from "./components/pages/MyDegreeSubject/MyDegreeSubject";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import ReferencesPage from "./components/pages/ReferencePage/ReferencesPage";
import TechnicalChallenges from "./components/pages/TechnicalChallenges";
import CV from "./components/pages/CV";

function App() {
  return (
    // main container
    <div className="main-container">
      <Router>
        <Navbar />
        {/* container for the pagess */}
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/useCases" component={UseCases} />
            <Route path="/degree-subject" component={MyDegreeSubject} />
            <Route path="/about" component={About} />
            <Route path="/references" component={ReferencesPage} />
            <Route
              path="/technical-challenges"
              component={TechnicalChallenges}
            />
            <Route path="/cv" component={CV} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
