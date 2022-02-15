import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 70vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: var(--grey2);
  padding-top: 20px;
  a {
    margin: 0 30px;
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
      margin: 0 20px;
    }
  }
`;
