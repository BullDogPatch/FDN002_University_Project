import { Link } from "react-router-dom";

const TechnicalChallenges = () => {
  return (
    <>
      <h1 className="heading">Technical Challenges</h1>
      <div className="back-home-link">
        <Link exact to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default TechnicalChallenges;
