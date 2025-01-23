import StyledPost from './StyledPost';

const Post = ({ postInfo }) => {
  return (
    <StyledPost>
      <h4>{postInfo.title}</h4>
      <p>
        <em>Created on: </em>
        {postInfo.created}
      </p>
    </StyledPost>
  );
};

export default Post;
