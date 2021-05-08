import { Link } from "react-router-dom";
import "./UseCase.css";

const UseCases = () => {
  return (
    <>
      <div className="container">
        <h1 className="useCase-heading">
          Three amazing use cases of Web Development
        </h1>

        <section className="useCases-container">
          <div className="useCase-one">
            <h2>The impact of IoT on modern life.</h2>
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

          <div className="useCase-two">
            <h2>
              The contribution of Human Computer Interaction principles to web
              design
            </h2>
            <p>
              The Importance of HCI in Website Development It has been shown
              that a large percentage of the design and programming effort of
              projects go into the actual Website design. The interface is a
              fundamental part of making the site more successful, safe, useful,
              functional and, in the long run, more pleasurable for the user
            </p>
          </div>
        </section>
        <div className="back-home-link">
          <Link exact to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default UseCases;
