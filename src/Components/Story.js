import { useEffect, useState } from 'react';

function Story () {

    // console.log(storyData);
    // const storiesArray = storyData.data.results;
    // const story = storiesArray[5];
    // const storyImageArray = story.multimedia[1];

const [stories, setStories] = useState([]);
console.log(stories);
// const story1 = stories[1];
// const image1 = story1.multimedia[1];
// console.log(image1);
// console.log(stories);


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
               const image = imageArray == null ? "no image available" : imageArray[1]; 
            //    const storyImage = imageArray;
                console.log(image);
              return  (<div className="storyBox" key={story.uri}>
                
                    <div className="imageContainer">
                        <a href={ story.url } >
                            <img src={ image.url } alt={ image.type } />
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
              )



                })
           }

              
        </div>
        
    )

}

export default Story;