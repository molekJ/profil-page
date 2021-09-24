import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--darkgrey2);
  background: var(--white);

  a {
    margin: 0 40px;
    color: inherit;
  }
  div :hover {
    color: var(--darkblue);
  }

  @media screen and (max-width: 576px) {
    a {
      margin: 0 20px;
    }
  }
`;
