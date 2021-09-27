import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: var(--white);
  color: var(--darkgrey);
  letter-spacing: 1px;
  text-align: right;
  margin-bottom: 100px;
  min-height: calc(100vh - 300px);
  h2 {
    font-size: 80px;
    margin-right: 100px;
    margin-bottom: 80px;
    color: var(--lightorange);
  }

  p:first-of-type {
    font-size: 60px;
    margin-right: 200px;
    margin-bottom: 80px;
    margin-left: 50px;
  }

  p:last-of-type {
    font-size: 60px;
    margin-right: 300px;
    margin-left: 100px;
  }
  span {
    color: var(--lightgreen);
  }

  @media screen and (max-width: 768px) {
    h2 {
      margin-right: 50px;
      font-size: 60px;
    }
    p:first-of-type {
      margin-right: 100px;
      font-size: 60px;
    }

    p:last-of-type {
      margin-right: 150px;
      font-size: 60px;
    }
  }
  @media screen and (max-width: 576px) {
    padding-top: 30px;
    h2 {
      margin-right: 10px;
      font-size: 40px;
      margin-bottom: 20px;
    }
    p:first-of-type {
      margin-right: 30px;
      font-size: 40px;
      margin-bottom: 20px;
    }

    p:last-of-type {
      margin-right: 50px;
      font-size: 40px;
      /* margin-bottom: 20px; */
    }
  }
`;

export const IWrapper = styled.span`
  background-image: -webkit-linear-gradient(
    top,
    var(--lightorange) 33%,
    var(--darkgrey) 10%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
