import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: 0;
  background-color: #4b164c;
  margin-top: auto;
  padding: 0.8rem 1.2rem;
  color: #e6f3f0;
  display: flex;
  justify-content: center;

  p:first-child {
    padding-right: 10px;
    border-right: 1px solid lightgray;
  }

  :nth-child(2) {
    padding-left: 10px;
    margin-right: 20px;
  }

  a {
    color: inherit;
  }

  a:hover {
    opacity: 80%;
  }

  p {
    font-size: 0.8rem;
  }
`;

export default StyledFooter;
