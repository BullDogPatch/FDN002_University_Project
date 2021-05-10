import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare
} from "react-icons/fa";

const SocialLinksComponent = () => {
  return (
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
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-links"
      >
        <FaTwitterSquare />
      </a>
      <a
        href="https://github.com/BullDogPatch?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-links"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default SocialLinksComponent;
