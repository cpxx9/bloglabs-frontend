import { Link } from 'react-router-dom';
import StyledPost from './StyledPost';

const Post = ({ postInfo }) => {
  const date = new Date(postInfo.created);

  return (
    <StyledPost>
      <Link className="post-card" to={`/posts/${postInfo.id}`}>
        <h4>{postInfo.title}</h4>
        <p>{date.toLocaleDateString()}</p>
      </Link>
    </StyledPost>
  );
};

export default Post;
