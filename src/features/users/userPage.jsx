import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostsExcerpt from '../posts/PostsExcerpt';
import { selectAllUsers, selectUserById } from './usersSlice';
import { selectPostForThisUser } from '../posts/postsSlice';

const UserPage = () => {
    const { userId } = useParams();
    const user = useSelector(state=> selectUserById(state, userId))

    const postsOfThisUser = useSelector(state => selectPostForThisUser(state, userId))

   
    console.log(user?.name, postsOfThisUser);
    return (
        <div>

            <h2 style={{ textAlign: 'center' }}>posts: of {user?.name}</h2>
            {postsOfThisUser.map(post => <PostsExcerpt
                post={post} key={post.id} />)}
        </div>
    );
}

export default UserPage;
