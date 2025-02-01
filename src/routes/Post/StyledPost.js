import styled from 'styled-components';
const StyledPost = styled.section`
  padding: 0.5rem 1.2rem;
  position: relative;

  h1 {
    font-size: 2rem;
  }

  #comment {
    resize: none;
    overflow: scroll;
  }

  article {
    font-family: 'Times New Roman', Times, serif;
  }
`;

export default StyledPost;
