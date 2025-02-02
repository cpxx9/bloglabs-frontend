import parse from 'html-react-parser';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { jwtDecode } from 'jwt-decode';
import StyledPost from './StyledPost';
import commentDown from '../../../public/icons/comment-down.svg';
import articleUp from '../../../public/icons/article-up.svg';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Comment from '../../components/Comment/Comment';

const Post = () => {
  const commentRef = useRef(null);
  const returnRef = useRef(null);
  const { auth } = useAuth();
  const [post, setPost] = useState({});
  const [commentContent, setCommentContent] = useState('');
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { id } = useParams();

  const postDate = new Date(post.created);

  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;
  const userId = decoded ? decoded.user.id : undefined;

  const scrollToComment = () => commentRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollBack = () => returnRef.current.scrollIntoView({ behavior: 'smooth' });

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
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledPost ref={returnRef}>
      <div className="article-section">
        <div className="article-header">
          <h1>{post.title}</h1>
          <h3>{post.subtitle}</h3>
          <div className="author">
            <h5>
              <em>By: {post.author.username}</em>
            </h5>
            <p>
              <em>{postDate.toLocaleDateString()}</em>
            </p>
          </div>
        </div>
        <button className="down" onClick={scrollToComment}>
          <img src={commentDown} alt="icon of comment" />
        </button>
        <article>{post?.content && parse(post.content)}</article>
      </div>
      <br />
      <section className="comments-section">
        <button className="up" onClick={scrollBack}>
          <img src={articleUp} alt="icon of article" />
        </button>
        <h4 ref={commentRef}>Comments</h4>
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
                <Comment comment={comment} userId={userId} postId={id} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments to display</p>
        )}
      </section>
    </StyledPost>
  );
};

export default Post;
