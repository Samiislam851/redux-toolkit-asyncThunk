import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Link, useParams} from 'react-router-dom';

const SinglePost = () => {
    //retrieve postId
    const {postId} = useParams();
    const post = useSelector(state => selectPostById(state, postId))
    if (!post) { return <section><h2>Post Not found</h2></section> }

    return (
        <div>
            <article>
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 100)}</p>
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                <p className="postCredit">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButtons post={post} />
            </article>
        </div>
    );
}

export default SinglePost;
