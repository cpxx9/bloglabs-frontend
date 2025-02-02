import styled from 'styled-components';
const StyledRegister = styled.section`
  height: 100%;
  padding: 1.5rem 1.5rem;
  box-shadow: inset 0px 8px 6px -6px #888;

  form {
    ul {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
      list-style: none;

      li {
        display: flex;
        flex-direction: column;

        .not-req {
          font-size: 0.7em;
          line-height: 0.8em;
          margin-bottom: 4px;
        }
      }
    }
  }
`;

export default StyledRegister;
