import styled from 'styled-components';
const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 3px;
  border: 1px solid gray;
  border-radius: 7px;
  padding: 0.85rem 0.5rem;
  background-color: white;

  h5 {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 0.9rem;
    margin-top: 0;
    margin-right: 40px;
    margin-bottom: 8px;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .del-comment {
    border: none;
    position: absolute;
    bottom: 5px;
    background: none;
    color: inherit;
    padding: 0;
    font: inherit;
    cursor: pointer;
    align-self: flex-end;
    width: 35px;
  }

  .content {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;

export default StyledComment;
