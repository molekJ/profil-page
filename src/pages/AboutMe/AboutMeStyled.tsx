import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 200px);
  /* width: 70vw; */
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 20px;
  font-weight: 500;
  font-size: 22px;
  line-height: 35px;
  @media screen and (max-width: 576px) {
    width: 90vw;
    div {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (min-width: 577px) {
    width: 90vw;
  }
  @media screen and (min-width: 769px) {
    width: 70vw;
  }

  p {
    @media screen and (max-width: 576px) {
      margin: 30px 10px 0px 10px;
      :last-of-type {
        margin-bottom: 30px;
      }
    }
    @media screen and (min-width: 577px) {
      margin: 30px 10px 0px 10px;

      :last-of-type {
        margin-bottom: 30px;
      }
    }
    @media screen and (min-width: 769px) {
      margin: 30px 0 0 30px;
    }
  }

  a {
    text-decoration: none;
    color: var(--orange);
    opacity: 70%;
    transition: 0.2s ease-out;
    position: relative;
    :hover {
      transition: 0.2s ease-out;
      opacity: 100%;
    }
  }

  img {
    float: right;
    width: 300px;
    height: 450px;
    margin: 40px 30px 30px 30px;
    @media screen and (max-width: 576px) {
      width: 200px;
      height: 300px;
      float: none;
      align-self: center;
      margin: 20px 0px 20px 0px;
    }
    @media screen and (min-width: 577px) {
      width: 250px;
      height: 375px;
    }
  }
`;
