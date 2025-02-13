import styled from 'styled-components';
const StyledNavBar = styled.nav`
  padding: 0.5rem 1.2rem;
  display: flex;
  gap: 0.7em;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px ridge gray;

  a {
    display: inline-block;
    text-decoration: none;
    padding: 0 0.2rem;
  }

  .register-link {
    padding: 0.2rem 0.6rem;
    font-weight: bold;
    background-color: rgba(164, 164, 164, 0.8);
    border-radius: 5px;
  }

  .login-link {
    width: 90px;
  }

  .login-link:hover {
    font-weight: bold;
  }

  .register-link:hover {
    background-color: rgba(164, 164, 164, 0.6);
  }
`;

export default StyledNavBar;
