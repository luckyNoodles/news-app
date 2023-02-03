function Story (storyData) {

    console.log(storyData);
    const storiesArray = storyData.data.results;
    const story = storiesArray[5];
    const storyImageArray = story.multimedia[1];

    return (
        <div className="storyComponent">

    
            <div className="storyBox">
               
                <div className="imageContainer">
                    <a href={ story.url } >
                        <img src={ storyImageArray.url } alt={ storyImageArray.type } />
                    </a>
                </div>

                <div className="storyText">
                    <div className="title">
                        <a href={ story.url }>
                            <h3>{ story.title }</h3>
                        </a>
                    </div>
                    <div className="description">
                        <p> { story.abstract }</p>
                    </div>
                </div>

            </div>

              
        </div>
        
    )

}

export default Story;