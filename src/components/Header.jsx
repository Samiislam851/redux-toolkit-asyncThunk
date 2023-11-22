import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{background: 'purple'}}>
            <h1 style={{color:"white"}}>Redux Blog</h1>
            <br />
            <nav>
                <ul style={{listStyleType: 'none', margin:"0", padding:'0', float:'left'}}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to="post">Post</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
