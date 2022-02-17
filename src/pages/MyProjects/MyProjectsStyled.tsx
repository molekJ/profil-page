import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 40px;
  margin-top: 30px;
  justify-content: center;
  font-weight: 500;

  @media screen and (max-width: 576px) {
    width: 90vw;
  }
`;
