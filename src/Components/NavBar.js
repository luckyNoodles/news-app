import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar () {
    const [hidden, setHidden] = useState(true);

    const handleClick = () => {
        setHidden(!hidden);
    }

    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const stringDate = date.toLocaleDateString('US-EN', options);
    console.log(stringDate);

    return (
        <>
            <div onClick={handleClick} className="hamburger">
              <span className={hidden === true ? "material-symbols-outlined" : "menu"}>menu</span>
              <span className={hidden === false ? "material-symbols-outlined" : "menu"}>close</span>
            </div>
            <div className="navContainer">
                <div className="headerTitle">
                    <h1> The New York Times </h1>
                    <p className="dateTitle">{stringDate}</p>
                </div>
                    <ul onClick={handleClick} className={hidden === true ? "navBar" : "navBar navShow"}>
                        <li><Link to='/'>Top Stories</Link></li>
                        <li><Link to='/world'>World</Link></li>
                        <li><Link to='/us'>U.S.</Link></li>
                        <li><Link to='/politics'>Politics</Link></li>
                        <li><Link to='/nyregion'>N.Y.</Link></li>
                        <li><Link to='/business'>Business</Link></li>
                        <li><Link to='/opinion'>Opinion</Link></li>
                        <li><Link to='/science'>Science</Link></li>
                        <li><Link to='/health'>Health</Link></li>
                        <li><Link to='/sports'>Sports</Link></li>
                        <li><Link to='/arts'>Arts</Link></li>
                        <li><Link to='/books'>Books</Link></li>
                        <li><Link to='/style'>Style</Link></li>
                        <li><Link to='/food'>Food</Link></li>
                        <li><Link to='/travel'>Travel</Link></li>
                        <li><Link to='/magazine'>Magazine</Link></li>
                        <li><a href="https://cooking.nytimes.com/">Cooking</a></li>
                        <li><a href="https://theathletic.com/">The Athletic</a> </li>
                        <li><a href="https://www.nytimes.com/wirecutter/">Wirecutter</a></li>
                        <li><a href="https://www.nytimes.com/crosswords">Games</a></li>
                    </ul>

                   
            </div>
        
        </>
        
    )

}

export default NavBar;