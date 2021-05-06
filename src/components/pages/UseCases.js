import { Link } from "react-router-dom";
const UseCases = () => {
  return (
    <>
      <div className="container">
        <h1 className="useCase-heading">
          Three amazing use cases of Web Development
        </h1>
      </div>

      <h3>The impact of IoT on modern life.</h3>
      <div className="back-home-link">
        <Link exact to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default UseCases;
