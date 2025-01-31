import styled from 'styled-components';
const StyledUserNav = styled.div`
  button {
    border: none;
    background: none;
    color: inherit;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  .active {
    position: absolute;
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
