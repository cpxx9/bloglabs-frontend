import { Link } from 'react-router-dom';
import StyledPost from './StyledPost';

const Post = ({ postInfo }) => {
  return (
    <StyledPost>
      <h4>{postInfo.title}</h4>
      <p>
        <em>Created on: </em>
        {postInfo.created}
      </p>
      <Link to={`/posts/${postInfo.id}`}>Read post</Link>
    </StyledPost>
  );
};

export default Post;
