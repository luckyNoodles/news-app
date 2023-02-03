import { useEffect, useState } from 'react';

function Story () {

const [stories, setStories] = useState([]);
console.log(stories);

useEffect(() => {

    const fetchData = async () => {
      const apiKey = 'n92DZWsbGi92AGqOU61WrbTbzwcLBSKT';
      const url = new URL(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)

      try {
        const data = await fetch(url);
        const response = await data.json();
        const resultsArray = response;
        // console.log(response);
        setStories(resultsArray.results);
        // console.log(stories);

      } catch (error) {
        console.log(error);
      }
    } 
    fetchData();
    
  },[]);
 

    return (
        <div className="storyComponent">
           
           {
               
               // const images = stories
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