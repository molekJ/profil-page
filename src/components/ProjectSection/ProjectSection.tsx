import {
  HeaderInfo,
  IconsSection,
  IconsWrapper,
  Paragraph,
  ProjectImgWrapper,
  ProjectInfoWrapper,
  ProjectsContainer,
  ProjectWrapper,
} from "./ProjectSectionStyled";
import { AiFillGithub, AiOutlineSearch } from "react-icons/ai";

interface Props {
  title: string;
  description: string;
  lightBg: boolean;
  img: string;
  alt: string;
  leftStart: boolean;
  githubLink: string;
  deployment: string;
}

export const ProjectSection: React.FC<Props> = ({
  title,
  description,
  lightBg,
  img,
  alt,
  leftStart,
  githubLink,
  deployment,
}) => {
  return (
    <ProjectsContainer lightBg={lightBg}>
      <ProjectWrapper
        style={{ flexDirection: leftStart === true ? "row-reverse" : "row" }}
      >
        <ProjectInfoWrapper>
          <HeaderInfo>{title}</HeaderInfo>
          <Paragraph>{description}</Paragraph>
          <IconsSection>
            <p>Technologie</p>
            <IconsWrapper></IconsWrapper>
          </IconsSection>
        </ProjectInfoWrapper>
        <ProjectImgWrapper>
          <img alt={alt} src={img}></img>
          <div>
            <a href={githubLink} target={"_blank"}>
              <p>Look at the code!</p>
              <AiFillGithub size={40} />
            </a>
            <a href={deployment} target={"_blank"}>
              <p>Try it now!</p>
              <AiOutlineSearch size={40} />
            </a>
          </div>
        </ProjectImgWrapper>
      </ProjectWrapper>
    </ProjectsContainer>
  );
};
