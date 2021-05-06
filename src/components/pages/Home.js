import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home-container">
        <h2>Click on a link to go to that page</h2>
        <Link to="/degree-subject" className="goto-page-links">
          My Degree Subject
        </Link>
        <Link to="useCases" className="goto-page-links">
          Amazing use cases of Web Development
        </Link>
        <Link to="technical-challenges" className="goto-page-links">
          Technical Challenges of Web Development
        </Link>
        <Link></Link>
        <Link></Link>
      </div>
    </>
  );
};

export default Home;
