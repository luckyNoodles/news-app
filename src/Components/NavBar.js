import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <>
            <h2> Nav Component</h2>
            <ul className="navBar">
                <li>
                    <Link to='/'>Top Stories</Link>
                </li>
                <li>
                    <Link to='/technology'>Technology</Link>
                </li>
                <li>
                    <Link to='/books'>Books</Link>
                </li>
                <li>
                    <Link to='/business'>Business</Link>
                </li>

            </ul>
        
        </>
        
    )

}

export default NavBar;