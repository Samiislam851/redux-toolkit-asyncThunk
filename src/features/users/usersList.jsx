import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from './usersSlice';
import { Link } from 'react-router-dom';

const UsersList = () => {
    const users = useSelector(selectAllUsers);
console.log('users.........',users);
    return (
        <div style={{textAlign:'center'}}>
             <h2>users : </h2>
            <ul>
                {users.map(user =>
                <li key={user.id}> 
                
                <Link to={`/users/${user.id}`}> {user?.name}</Link> 
                
                </li>)}
            </ul>

        </div>
    );
}

export default UsersList;
