import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 20px;
  margin: 20px 20px 80px 20px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const TopContainer = styled.div`
  display: flex;
`;
export const InfoContainer = styled.div`
  width: 50%;
`;

export const HeaderInfo = styled.h3`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

interface Parag {
  isEllipsed: boolean;
}

export const Paragraph = styled.div<Parag>`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 30px;
  padding: 0 10px;
  -webkit-line-clamp: ${({ isEllipsed }) => (isEllipsed ? "inferit" : "3")};
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  cursor: pointer;
`;

export const IconsSection = styled.div`
  align-items: center;
  display: flex;
  margin: 20px 0 30px 00;
  p {
    margin-right: 20px;
  }
  img {
  }
  @media screen and (max-width: 1200px) {
  }
`;

export const ImgWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 576px) {
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  position: absolute;
  bottom: -70px;

  @media screen and (max-width: 576px) {
  }

  a {
    transition: all 0.3s ease-out;
    text-decoration: none;
    color: var(--darkgrey);
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    :hover {
      transition: all 0.3s ease-out;
      color: var(--black);
    }
  }
`;
