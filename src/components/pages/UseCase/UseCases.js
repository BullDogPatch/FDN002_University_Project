import { Link } from "react-router-dom";
import "./UseCase.css";

const UseCases = () => {
  return (
    <>
      <div className="container">
        <h1 className="useCase-heading">
          Three amazing use cases of Web Development
        </h1>
      </div>

      <div>
        <h3>The impact of IoT on modern life.</h3>
        <iframe
          width="400"
          height="255"
          src="https://www.youtube.com/embed/LlhmzVL5bm8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ padding: "30px", maxWidth: "100%" }}
        ></iframe>
      </div>
      <div className="back-home-link">
        <Link exact to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default UseCases;
