import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul className='navigation'>
                <li>< Link className='link' to="/">Home </Link></li>
                <li>< Link className='link' to="/cocktails">Cocktails</Link></li>
                <li>< Link className='link' to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;