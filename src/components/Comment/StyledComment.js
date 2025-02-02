import styled from 'styled-components';
const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  border: 1px solid gray;
  border-radius: 7px;
  padding: 0.5rem 0.5rem;
  background-color: white;

  h5 {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 0.9rem;
    margin-top: 0;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .content {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;

export default StyledComment;
