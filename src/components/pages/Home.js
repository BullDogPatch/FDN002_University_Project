import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home-container">
        <h2>Click on a link to go to that page</h2>
        <Link to="/degree-subject">My Degree Subject</Link>
        <Link to="useCases">Amazing use cases of Web Development</Link>
        <Link to="technical-challenges">
          Technical Challenges of Web Development
        </Link>
        <Link></Link>
        <Link></Link>
      </div>
    </>
  );
};

export default Home;
