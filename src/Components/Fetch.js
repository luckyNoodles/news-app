import { useEffect, useState } from 'react';
import Story from './Story';

function Fetch ({api}) {
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

        <Story apiData={stories}/>
       
    )
}

export default Fetch;