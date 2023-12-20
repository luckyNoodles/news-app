import nytLogo from "../images/newYorkTimes.png";

function Story({ apiData }) {
  const stories = apiData;

  return (
    <div className="storyComponent">
      {stories.map((story) => {
        const imageArray = story.multimedia;
        const image = imageArray == null ? "missing media" : imageArray[1];

        const pubDate = new Date(story.published_date);
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const date = pubDate.toLocaleDateString("US-EN", options);

        return (
          <div className="storyBox" key={story.uri}>
            <h4 className="department">{story.section.toUpperCase()}</h4>
            <div className="imageContainer">
              <a href={story.url}>
                <img
                  src={image.url ? image.url : nytLogo}
                  alt={image.caption}
                />
              </a>
              <p className="photoCredit">
                {image.copyright ? `Photo by:${image.copyright}` : ""}
              </p>
            </div>
            <div className="storyText">
              <div className="title">
                <a href={story.url}>
                  <h3>{story.title}</h3>
                  <p className="byLine">{story.byline}</p>
                  <p className="date">{date}</p>
                  <p className="abstract ellipsis-text"> {story.abstract}</p>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Story;
