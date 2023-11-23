import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [state, setState] = useState(0);
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
                    <li><Link to="users">Users</Link></li>
                    <li>
                        <button onClick={()=> setState(state+1)}>{state}</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
