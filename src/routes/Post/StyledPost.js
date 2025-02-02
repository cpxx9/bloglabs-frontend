import styled from 'styled-components';
const StyledPost = styled.section`
  padding: 0.5rem 1.2rem;

  .article-section {
    position: relative;
  }

  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h1 {
    font-size: 2rem;
  }

  button {
    position: absolute;
    border: 2px solid #4b164c;
    padding: 0;
    border-radius: 50% 50%;
    height: 40px;
    width: 40px;
    background: none;
    color: inherit;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  button.down {
    top: 0;
    right: 0;
  }

  button.up {
    top: 0;
    right: 0;
  }

  .comments-section {
    position: relative;
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
