import { Link } from "react-router-dom";
import "./Footer.css";
import SocialLinksComponent from "./SocialLinksComponent";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links-container">
        <Link to="/about" className="footer-routes">
          About Me
        </Link>
        <Link to="/references" className="footer-routes">
          References
        </Link>
        <Link to="/cv" className="footer-routes">
          My CV
        </Link>
      </div>
      <SocialLinksComponent />

      <small>&copy; Craig Clayton 2021</small>
    </div>
  );
};

export default Footer;
