import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 200px);
  width: 70vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 60px;

  color: var(--grey2);

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }

  font-size: 30px;
  letter-spacing: 2px;
  line-height: 45px;

  p {
    margin-bottom: 30px;
  }

  p:first-of-type {
    /* color: yellow; */
  }
  p:nth-of-type(2) {
    /* color: red; */
  }
  p:nth-of-type(3) {
    /* color: green; */
  }
  p:nth-of-type(4) {
    /* color: blue; */
  }

  a {
    text-decoration: none;
    color: var(--lightorange);
    transition: 0.2s ease-out;
    position: relative;
    :hover {
      transition: 0.2s ease-out;
      color: var(--orange);
    }
  }
`;
