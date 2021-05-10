import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home-container">
        <h2 className="main-heading">Click on a link to go to that page</h2>
        <div className="links-div">
          <Link to="/degree-subject" className="goto-page-links">
            My Degree Subject
          </Link>
          <Link to="/useCases" className="goto-page-links">
            Three Amazing use cases of Web Development
          </Link>
          <Link to="/technical-challenges" className="goto-page-links">
            Technical Challenges of Web Development
          </Link>
          <Link to="/future-of-artificial-intel" className="goto-page-links">
            The future of AI
          </Link>
        </div>

        <div>
          <iframe
            style={{ width: "70%", height: "400px", overflow: "hidden" }}
            src="https://playpager.com/embed/checkers/index.html"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      <div className="push"></div>
    </>
  );
};

export default Home;
