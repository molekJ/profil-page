import { Container } from "./FooterStyled";
import { AiFillLinkedin, AiOutlineMail, AiFillPhone } from "react-icons/ai";

export const Footer = () => {
  //   const sendEmail = () => {
  //     window.open("mailto:molickikuba@gmail.com");
  //   };

  return (
    <Container>
      <div>
        <a
          href="https://linkedin.com/in/jakub-molicki"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillLinkedin size={40} />
        </a>
      </div>
      <div>
        <a href="mailto:molickikuba@gmail.com?subject=Hello! I came from Your profile Page">
          <AiOutlineMail size={40} />
        </a>
      </div>
      <div>
        <a href="tel:+48504073031">
          <AiFillPhone size={40} />
        </a>
      </div>
    </Container>
  );
};
