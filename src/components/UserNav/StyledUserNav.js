import styled from 'styled-components';
const StyledUserNav = styled.div`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;

  .user-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    border: none;
    background: none;
    color: inherit;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  .dropdown {
    text-align: end;
    width: 40dvw;
    padding: 0.2em 0.6em;
    border: 1px solid lightgray;
    border-radius: 4px;
  }

  .active {
    position: absolute;
    right: 0;
    top: 3.5em;
    background-color: #fff;
    z-index: 1000;
  }

  .inactive {
    position: fixed;
    top: -50%;
    right: -50%;
  }
`;

export default StyledUserNav;
