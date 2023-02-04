import { useEffect, useState } from 'react';

function Story ({api}) {
     console.log(api);
    const [stories, setStories] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
           
        
        try {
            const data = await fetch(api);
            const response = await data.json();
            const resultsArray = response;
            
            setStories(resultsArray.results);
            
            } catch (error) {
                console.log(error);
            }
        } 
        fetchData();
        
    },[api]);
 
    return (
        <div className="storyComponent">
            {
               stories.map((story) => {
                    const imageArray = story.multimedia; 
                    const image = imageArray == null ? "missing media" : imageArray[1]; 
                    
                    const pubDate = new Date(story.published_date);
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
                    const date = pubDate.toLocaleDateString('US-EN', options);

                return  (<div className="storyBox" key={story.uri}>
        
                        <div className="imageContainer">
                            <a href={ story.url } >
                                <img src={ image.url ? image.url : '.././images/newYorkTimes.jpg' } alt={ image.caption } />
                            </a>
                            <p>{ image.copyright ? `Photo by:${image.copyright}` : "" }</p>
                        </div>
                        <div className="storyText">
                            <div className="title">
                                
                                <h4>{ story.section }</h4>
                                <a href={ story.url }>
                                    <h3>{ story.title }</h3>
                                    <p>{ story.byline }</p>
                                </a>
                            </div>
                                <div className="description">
                                    <p>{ date }</p>
                                    <p> { story.abstract }</p>
                                </div>
                            </div>
                        </div>
                    )
                })
           }
        </div>
    )
}

export default Story;