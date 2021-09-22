import styled from "styled-components";

interface ButtonProps {
  isVisible: boolean;
}

export const ButtonToTop = styled.button<ButtonProps>`
  position: fixed;
  bottom: 50vh;
  right: 2px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  background: none;
  border: none;
  color: var(--darkgrey3);

  p {
    transform: rotate(90deg);
    position: relative;
    top: 35px;
    font-size: 12px;
  }

  :hover {
    cursor: pointer;
  }
`;
