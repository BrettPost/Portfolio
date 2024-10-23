import { useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
    const [page, setPage] = useState("Home");

    const changePage = (newPage) => {
        setPage(newPage);
    }

    return (
        <nav>
            <Link to='/' onClick={(e) => changePage("Home")} className="title">Sandbox</Link>
            <ul>
                {/* CONDENSE THIS INTO A LOOP */}
                <li><Link to='/' onClick={(e) => changePage(e.target.text)} className={page === "Home" ? "selectedPageLink" : ""}>Home</Link></li>
                <li><Link to='/Projects' onClick={(e) => changePage(e.target.text)} className={page === "Projects" ? "selectedPageLink" : ""}>Projects</Link></li>
                <li><Link to='/About' onClick={(e) => changePage(e.target.text)} className={page === "About" ? "selectedPageLink" : ""}>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;