import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () =>{

    return(
        <nav className="navbar">
        <h3 className="logo">React-Routing</h3>
        <ul className="nav-links">
            {/* Using React Routes */}
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/page1" className="page1">
                <li>Page-1</li>
            </Link>
            <Link to="/page2" className="page2">
                <li>Page-2</li>
            </Link>
            
            {/* Normal Page Routing */}
            {/* <a href='/' className="home"><li>Home</li></a>
            <a href='/page1' className="page1"><li>Page-1</li></a>
            <a href='/page2' className="page2"><li>Page-2</li></a> */}
        </ul>
    </nav>
    );
    
}
export default Navbar;