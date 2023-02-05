import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <>
        <div className="headerTitle">
            <h2> The New York Times </h2>
        </div>
            <ul className="navBar">
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


                <li>
                    <Link to='/technology'>Technology</Link>
                </li>

            </ul>
        
        </>
        
    )

}

export default NavBar;