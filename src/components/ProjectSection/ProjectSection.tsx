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
import {
  SiJavascript,
  SiCss3,
  SiTypescript,
  SiJira,
  SiFirebase,
  SiHtml5,
  SiReact,
} from "react-icons/si";

import { DiScrum } from "react-icons/di";

interface Props {
  title: string;
  description: string;
  lightBg: boolean;
  img: string;
  alt: string;
  leftStart: boolean;
  githubLink: string;
  deployment: string;
  icons: string[];
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
  icons,
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
            {/* {icons.map((icon, index) => {
              return <[icon]/>
            })} */}
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
