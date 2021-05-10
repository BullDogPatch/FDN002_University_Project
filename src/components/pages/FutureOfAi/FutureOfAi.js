import BackHomeLink from "../../BackHomeLink";
import PictureImage from "../../PictureImage";
import "./FutureOfAi.css";

function FutureOfAi() {
  return (
    <>
      <div className="container future-of-ai-container">
        <div className="left-rail"></div>

        <div className="ai-body-container">
          <h2 className="ai-heading">
            The future Artificial Intelligence/Machine Learning
          </h2>
          <p>
            Artificial Intelligence or AI for short is one of the main topics of
            conversations in the tech industry. When most people think of
            Artificial Intelligence they think it only exists in Sci-fi films.
          </p>
          <p>
            In actuality Artificial Intelligence is all around us, from our
            Google search results to online dating prospects. Data suggests that
            AI use in many sectors of business has risen by 270% over the last
            four years.
          </p>

          <p>
            Many people fear that AI will take over our jobs and leave us humans
            obsolete.
          </p>
          <p>
            As technology advances, many of the tasks that were once
            accomplished by humans have now become automated. It’s only natural
            to fear that as we create super intelligent computers could become
            the beginning of the end of work as we know it.{" "}
          </p>

          <div>
            <PictureImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdexAMcLbKTjKSyWp_SIIXg3HOLf5qymzQA&usqp=CAU" />
          </div>
        </div>
        <div className="right-rail">
          <div>
            <iframe
              width="360"
              height="210"
              src="https://www.youtube.com/embed/ma4bPnU6tII"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <BackHomeLink />

      <div className="push"></div>
    </>
  );
}

export default FutureOfAi;
