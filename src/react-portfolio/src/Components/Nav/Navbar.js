import {Routes, Link, Route} from 'react-router-dom';

function Navbar(props) {
    return (
        <nav>
            <Link path='/' className='title'>Sandbox</Link>
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/Projects'>Projects</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
            
        </nav>
    )
}

export default Navbar;