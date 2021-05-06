import { Link } from "react-router-dom";
import "./About.css";
import ProfilePic from "./PofilePic";

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="profile-pic-div">
          <ProfilePic />
        </div>

        <div className="about-info-div">
          <h2>About Me</h2>{" "}
          <p>
            Hi, my name is Craig Clayton. I am a mature student studying Web and
            Mobile Development at the University of Sunderland. I am just about
            to finish my Foundation Year.
            <br />I have always found the Internet a fascinating invention and I
            have always wanted to know how web pages work and how they are built
            behind the scenes.
          </p>
          <p>
            A little over two years ago I decided to try to teach myself how to
            code, after building a couple of mock websites and other little
            projects I decided that I would like to become a front end web
            developer.
            <br />
          </p>
        </div>
      </div>
      <div className="back-home-link">
        <Link exact to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default About;
