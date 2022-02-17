import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 70vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 20px;
  color: var(--darkgrey);

  a {
    margin: 0 30px;
    color: inherit;
    transition: all 0.3s ease-out;
  }

  div:nth-of-type(1) {
    a:hover {
      color: var(--darkblue);
    }
  }
  div:nth-of-type(2) {
    a:hover {
      color: var(--red);
    }
  }
  div:nth-of-type(3) {
    a:hover {
      color: var(--green);
    }
  }
  div:nth-of-type(4) {
    a:hover {
      color: var(--black);
    }
  }

  @media screen and (max-width: 576px) {
    a {
    }
  }
`;
