import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import {Link} from 'react-router-dom'
const PostsExcerpt = ({ post }) => {
    console.log(post.id);
    return (
        <article>
            <h3>{post.title.substring(0,60)}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <Link to={`post/${post.id}`}>View post</Link>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}
export default PostsExcerpt