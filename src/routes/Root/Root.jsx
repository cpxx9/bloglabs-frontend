import PostsList from '../../components/Posts/Posts/PostsList';
import StyledRoot from './StyledRoot';

const Root = () => {
  return (
    <StyledRoot>
      <h2>Home</h2>
      <PostsList />
    </StyledRoot>
  );
};

export default Root;
