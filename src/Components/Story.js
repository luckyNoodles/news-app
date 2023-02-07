import { useEffect, useState } from 'react';
import Section from './Section';

function Story ({api}) {
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

        <Section apiData={stories}/>
       
    )
}

export default Story;