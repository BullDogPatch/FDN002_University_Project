import PictureImage from "../PictureImage";
import "./MyDegreeSubject.css";

const MyDegreeSubject = () => {
  return (
    <>
      <div className="container">
        <h1 className="heading">Web and Mobile Development BSc (Hons)</h1>

        <main>
          <p>
            My degree subject is Web and Mobile Development. I have chosen this
            subject because I feel like the internet is probably the most
            important invention ever to happen to us humans.
          </p>
          <div>
            {" "}
            <PictureImage
              src="https://img1.pnghut.com/12/22/25/gHswv5q0Qr/sitting-software-development-cartoon-information-technology-computer.jpg"
              alt=""
              width="400"
              className="image"
            />
          </div>

          <p>
            The Web and Mobile Development degree is a 3 year degree. In these 3
            years you get to learn the fundamentals of Computer Science. <br />
            You also learn Front End technologies like HTML, CSS and Javascript.
          </p>
          <p>Also getting to learn back end technologies like PHP and C#</p>
        </main>
        <div className="img-container">
          <PictureImage
            src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg"
            alt=""
            width="300"
            height="300"
            className="image"
          />
          <PictureImage
            src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg"
            alt=""
            width="300"
            height="300"
            className="image"
          />
        </div>

        <div className="bottom-section">
          <p>
            The Web and Mobile Development degree also covers topics such as
            database design, database systems and security using programming
            languages such as PHP and MY SQL.
          </p>
        </div>
        {/* The empty div below is to use as spacing to help keep content from going behind the footer*/}
        <div className="push"></div>
      </div>
    </>
  );
};

export default MyDegreeSubject;
