import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--darkgrey2);
  background: var(--white);
  border-top: solid 1px var(--darkgrey);
  padding-top: 20px;
  a {
    margin: 0 40px;
    color: inherit;
    transition: 0.2s ease-out;
  }

  div:nth-of-type(1) {
    a:hover {
      color: var(--darkblue);
    }
  }
  div:nth-of-type(2) {
    a:hover {
      color: var(--orange);
    }
  }
  div:nth-of-type(3) {
    a:hover {
      color: var(--lightgreen);
    }
  }
  div:nth-of-type(4) {
    a:hover {
      color: var(--black);
    }
  }

  @media screen and (max-width: 576px) {
    a {
      margin: 0 20px;
    }
  }
`;
