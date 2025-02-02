import styled from 'styled-components';
const StyledUserNav = styled.div`
  padding: 0.75rem 1.2rem;
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
    width: 50px;
    font: inherit;
    cursor: pointer;

    img {
      filter: drop-shadow(0 0 4px #969696);
    }
  }

  a {
    text-decoration: none;
  }

  h1 {
    color: #4b164c;
    font-size: 2rem;
  }

  .welcome {
    font-weight: bold;
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    text-align: end;
    width: 70dvw;
    padding: 0.2em 0.6em;
    border: 1px solid gray;
    border-radius: 4px;
    box-shadow: 0 0 8px #969696;
  }

  .header-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  @media screen and (min-width: 1000px) {
    .dropdown {
      width: 500px;
    }
  }

  @media screen and (min-width: 2500px) {
  }
`;

export default StyledUserNav;
