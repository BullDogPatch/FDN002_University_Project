import { Link } from "react-router-dom";
import "./ReferencePage.css";

function ReferencesPage() {
  return (
    <>
      <div className="reference-page-container">
        <h1 className="heading">References</h1>

        <h3>Edureka</h3>
        <p>
          Internet of Things (IoT) | What is IoT | How it Works | IoT Explained
          | Edureka
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, dolores
          quia. Illum, cumque. Qui, aut blanditiis laborum dignissimos quos
          eligendi earum saepe vitae ratione voluptas velit temporibus alias
          odio perspiciatis quaerat at vel beatae non! Quam, doloremque est!
          Repudiandae, qui.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, dolores
          quia. Illum, cumque. Qui, aut blanditiis laborum dignissimos quos
          eligendi earum saepe vitae ratione voluptas velit temporibus alias
          odio perspiciatis quaerat at vel beatae non! Quam, doloremque est!
          Repudiandae, qui.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, dolores
          quia. Illum, cumque. Qui, aut blanditiis laborum dignissimos quos
          eligendi earum saepe vitae ratione voluptas velit temporibus alias
          odio perspiciatis quaerat at vel beatae non! Quam, doloremque est!
          Repudiandae, qui
        </p>
      </div>
      <div className="back-home-link">
        <Link exact to="/">
          Back to Home
        </Link>
      </div>
      <div className="push"></div>
    </>
  );
}

export default ReferencesPage;
