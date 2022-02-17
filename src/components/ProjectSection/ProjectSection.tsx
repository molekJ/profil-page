import {
  HeaderInfo,
  IconsSection,
  Paragraph,
  ImgWrapper,
  Container,
  TopContainer,
  LinksWrapper,
  InfoContainer,
} from "./ProjectSectionStyled";
import { AiFillGithub } from "react-icons/ai";
import { ImEnter } from "react-icons/im";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  img: string;
  alt: string;
  githubLink?: string;
  deployment?: string;
  icons: string[];
}

export const ProjectSection: React.FC<Props> = ({
  title,
  description,
  img,
  alt,
  githubLink,
  deployment,
  icons,
}) => {
  const [isEllipsis, setIsEllipsis] = useState(false);

  return (
    <Container>
      <TopContainer>
        <InfoContainer>
          <HeaderInfo>{title}</HeaderInfo>
          <Paragraph
            isEllipsed={isEllipsis}
            onClick={() => {
              setIsEllipsis(!isEllipsis);
            }}
          >
            {description}
          </Paragraph>
        </InfoContainer>

        <ImgWrapper>
          <img alt={alt} src={img} color="red"></img>
        </ImgWrapper>
      </TopContainer>
      <IconsSection>
        <p>Technologies:</p>
        {icons.map((icon, index) => {
          return (
            <img key={index} src={icon} alt="icon" width={36} height={36} />
          );
        })}
      </IconsSection>
      <LinksWrapper>
        <a href={githubLink} target={"_blank"} rel="noreferrer">
          <p>Look at the code!</p>
          <AiFillGithub size={32} />
        </a>
        <a href={deployment} target={"_blank"} rel="noreferrer">
          <p>Try it now!</p>
          <ImEnter size={32} />
        </a>
      </LinksWrapper>
    </Container>
  );
};
