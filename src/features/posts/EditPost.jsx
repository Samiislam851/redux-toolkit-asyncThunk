import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectPostById, updatePost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const EditPost = () => {
    const navigate= useNavigate()
    const { postId } = useParams();
    const post = useSelector(state => selectPostById(state, postId));
    console.log(post);
   
    const [title, setTitle] = useState(post.title);
    const [requestStatus, setRequestStatus] = useState('idle');
    const [author, setAuthor] = useState(post.userId);
    const [content, setContent] = useState(post.body);

    const onTitleChange = e => setTitle(e.target.value);
    const onAuthorChange = e => setAuthor(e.target.value);
    const onContentChange = e => setContent(e.target.value);
    console.log(title);
    const users = useSelector(selectAllUsers)


    const userOptions = users.map(user =>
        <option key={user.id} value={user.id}>{user.name}</option>

    );
    const canSave = [title, content, author].every(Boolean) && requestStatus == 'idle'
    const dispatch = useDispatch();
    console.log(canSave);
    console.log('author ====',author);
    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setRequestStatus('pending');
                dispatch(updatePost({id: postId, title: title, body : content, userId : author, reactions: post.reactions })).unwrap();
                navigate(`/post/${postId}`)

            } catch (error) {
                console.log(error);
            }finally{
                setRequestStatus('idle')
            }
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form >
                <label htmlFor="title">Post Title:</label>
                <input type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={onTitleChange} />
                <label htmlFor="title">Post Title:</label>
                <select name=""
                    defaultValue={post.userId}
                    onChange={onAuthorChange}
                    id="postAuthor">
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="content">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChange} />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>

        </section>
    );
}

export default EditPost;
