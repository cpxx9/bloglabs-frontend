import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { jwtDecode } from 'jwt-decode';
import StyledPost from './StyledPost';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Post = () => {
  const { auth } = useAuth();
  const [post, setPost] = useState({});
  const [commentContent, setCommentContent] = useState('');
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();

  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;
  const userId = decoded ? decoded.user.id : undefined;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${id}`, {
          signal: controller.signal,
        });
        isMounted && setPost(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const onCommentInputChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleNewComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosPrivate.post(
        '/comments',
        JSON.stringify({ content: commentContent, postId: id }),
      );
      setCommentContent('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledPost>
      <h4>{post.title}</h4>
      <h5>{post.subtitle}</h5>
      {post?.content && parse(post.content)}
      <br />
      <h4>Comments</h4>
      {auth.accessToken ? (
        <>
          <label htmlFor="comment">
            New comment:
            <br />
            <textarea
              onChange={onCommentInputChange}
              name="comment"
              id="comment"
              cols="75"
              value={commentContent}
              rows="2"></textarea>
            <br />
          </label>
          <button onClick={handleNewComment}>Post</button>
        </>
      ) : (
        <p>Only members can comment!</p>
      )}
      {post.comments?.length ? (
        <ul>
          {post.comments.map((comment) => (
            <li key={uuidv4()}>
              <h5>{comment.author.username}</h5>
              <p>{comment.content}</p>
              <p>{comment.created}</p>
              {userId === comment.author.id && <button>Test</button>}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments to display</p>
      )}
    </StyledPost>
  );
};

export default Post;
