import { Link } from 'react-router-dom';
import StyledPost from './StyledPost';

const Post = ({ postInfo }) => {
  const date = new Date(postInfo.datepublished);

  return (
    <StyledPost>
      <Link className="post-card" to={`/posts/${postInfo.id}`}>
        <div>
          <h4>{postInfo.title}</h4>
          <p className="author">By: {postInfo.author.username}</p>
        </div>
        <p>{date.toLocaleDateString()}</p>
      </Link>
    </StyledPost>
  );
};

export default Post;
