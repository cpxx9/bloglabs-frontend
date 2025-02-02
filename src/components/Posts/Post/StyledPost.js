import styled from 'styled-components';
const StyledPost = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }

  .author {
    font-weight: bold;
  }

  p {
    font-size: 1.1rem;
  }

  .post-card {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledPost;
