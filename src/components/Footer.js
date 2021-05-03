import { Link } from "react-router-dom";
import "./Footer.css";
// FaFacebookSquare
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

/* TODO
 - add 'about', 'CV' links in footer that uses router to go to components
*/

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links-div">
        <a
          href="https://www.linkedin.com/in/craig-clayton-87a155196/"
          target="_blank"
          className="footer-links"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/craig.clayton.9809"
          target="_blank"
          className="footer-links"
        >
          <FaFacebookSquare />
        </a>
        <a href="www.twitter.com" target="_blank" className="footer-links">
          <FaTwitterSquare />
        </a>
      </div>
      <div>
        <Link to="/about" className="about">
          About
        </Link>
      </div>
      <small>&copy; Craig Clayton 2021</small>
    </div>
  );
};

export default Footer;
