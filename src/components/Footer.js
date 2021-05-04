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
      <div className="footer-links-container">
        <Link to="/about" className="footer-routes">
          About
        </Link>
        <Link to="/references" className="footer-routes">
          References
        </Link>
        <Link to="/cv" className="footer-routes">
          My CV
        </Link>
      </div>
      <div className="social-links-div">
        <a
          href="https://www.linkedin.com/in/craig-clayton-87a155196/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-links"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/craig.clayton.9809"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-links"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-links"
        >
          <FaTwitterSquare />
        </a>
      </div>

      <small>&copy; Craig Clayton 2021</small>
    </div>
  );
};

export default Footer;
