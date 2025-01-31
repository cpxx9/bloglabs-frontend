import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import StyledComment from './StyledComment';

const Comment = ({ comment, userId, postId }) => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const handleCommentDelete = async () => {
    try {
      const res = await axiosPrivate.delete(`/comments/${comment.id}`);
      // navigate(`/posts/${postId}`);
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledComment>
      <h5>{comment.author.username}</h5>
      <p>{comment.content}</p>
      <p>{comment.created}</p>
      {userId === comment.author.id && <button onClick={handleCommentDelete}>Delete</button>}
    </StyledComment>
  );
};

export default Comment;
