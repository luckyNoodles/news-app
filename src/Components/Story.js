function Story (storyData) {

    console.log(storyData);
    const storiesArray = storyData.data.results;
    const story1 = storiesArray[5];
    const storyImageArray = story1.multimedia[1];

    return (
        <div className="storyComponent">
                       
            <div className="storyBox">
               
                <div className="imageContainer">
                    <a href={ story1.url } >
                        <img src={ storyImageArray.url } alt={ storyImageArray.type } />
                    </a>
                </div>

                <div className="storyText">
                    <div className="title">
                        <a href={ story1.url }>
                            <h3>{ storiesArray[5].title }</h3>
                        </a>
                    </div>
                    <div className="description">
                        <p> { storiesArray[5].abstract }</p>
                    </div>
                </div>

            </div>
        </div>
        
    )

}

export default Story;