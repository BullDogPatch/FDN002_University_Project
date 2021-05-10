import BackHomeLink from "../../BackHomeLink";

import "./TechnicalChallenges.css";

const TechnicalChallenges = () => {
  return (
    <div className="container technical">
      <h2>The technical challenges of the Internet of Things</h2>
      <div>
        <div className="technical-challenge">
          <div style={{ width: "50%" }}>
            <p>
              <span>Security</span> is one of the biggest challenges of IoT, the
              hacking of specific models of security cameras. Nearly 300,000
              Internet of Things (IoT) video recorders attacked multiple social
              network websites and brought down Twitter and other high-profile
              platforms, for almost two hours.
            </p>
            <p>
              This attack is just an example of what can happen to devices with
              poor security
            </p>
          </div>
          <div style={{ margin: "auto", width: "50%" }}>
            {" "}
            <iframe
              height="300"
              width="500"
              src="https://www.youtube.com/embed/rDSt-aYa1PY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ padding: "30px", maxWidth: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
      <BackHomeLink />
      <div className="push"></div>
    </div>
  );
};

export default TechnicalChallenges;
