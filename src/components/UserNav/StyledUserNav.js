import styled from 'styled-components';
const StyledUserNav = styled.div`
  padding: 0.5rem 1.2rem;
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

  a {
    text-decoration: none;
  }

  h1 {
    color: #4b164c;
    font-size: 2rem;
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    text-align: end;
    width: 40dvw;
    padding: 0.2em 0.6em;
    border: 1px solid gray;
    border-radius: 4px;
  }

  .active {
    position: absolute;
    right: 0;
    top: 1.8em;
    background-color: #fff;
    z-index: 1000;
  }

  .inactive {
    position: fixed;
    top: -50%;
    right: -50%;
  }

  .register-link {
    font-weight: bold;
  }
`;

export default StyledUserNav;
