function Story (storyData) {

    // console.log(storyData);
    const story = storyData;
    // const image = story;
    console.log(story.data[3]);
    // console.log(storyData.stories);



    return (
        <div>
            <h2>Story Component</h2>
            <div className="imageContainer">
                {/* <img src={image} alt="image" /> */}
            </div>
        

        </div>
        
    )

}

export default Story;