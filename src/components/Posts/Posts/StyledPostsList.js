import styled from 'styled-components';
const StyledPostsList = styled.article`
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    padding: 1rem 1rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 6px;
    background-color: white;
  }
`;

export default StyledPostsList;
