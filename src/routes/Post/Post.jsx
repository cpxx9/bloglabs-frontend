import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledPost from './StyledPost';
import { axiosPrivate } from '../../api/axios';

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getPost = async () => {
      try {
        const res = await axiosPrivate.get(`/posts/${id}`, {
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

  return (
    <StyledPost>
      <h4>{post.title}</h4>
      <h5>{post.subtitle}</h5>
      {post?.content && parse(post.content)}
      <br />
      <h4>Comments</h4>
      {post.comments?.length ? (
        <ul>
          {post.comments.map((post) => (
            <li key={uuidv4()}>
              <h5>{post.comment.author}</h5>
              <p>{post.comment.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No post to display</p>
      )}
    </StyledPost>
  );
};

export default Post;
