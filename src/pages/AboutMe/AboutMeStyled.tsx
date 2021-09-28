import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 200px);
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  color: var(--darkgrey2);

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }

  font-size: 24px;
  letter-spacing: 1px;
  line-height: 30px;
  p {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: var(--lightgreen);
    :hover {
      border-bottom: 1px solid var(--lightgreen);
    }
  }

  p:last-of-type a {
    color: var(--orange);
    :hover {
      border-bottom: 1px solid var(--orange);
    }
  }
`;
