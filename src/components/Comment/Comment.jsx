import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import StyledComment from './StyledComment';
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
import trash from '../../icons/trash.svg';

const Comment = ({ comment, userId, postId }) => {
  const { auth } = useAuth();
  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;
  const admin = decoded?.user.admin || false;
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const date = new Date(comment.created);

  const handleCommentDelete = async () => {
    try {
      const res = await axiosPrivate.delete(`/comments/${comment.id}`);
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledComment>
      <div className="info">
        <h5>{comment.author.username}</h5>
        <p>{date.toLocaleDateString()}</p>
      </div>
      <p className="content">{comment.content}</p>
      {(userId === comment.author.id || admin) && (
        <button className="del-comment" onClick={handleCommentDelete}>
          <img src={trash} alt="trashcan" />
        </button>
      )}
    </StyledComment>
  );
};

export default Comment;
