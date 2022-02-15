import {
  HeaderInfo,
  IconsSection,
  Paragraph,
  ProjectImgWrapper,
  ProjectInfoWrapper,
  ProjectsContainer,
  ProjectWrapper,
  Container,
} from "./ProjectSectionStyled";
import { AiFillGithub } from "react-icons/ai";
import { ImEnter } from "react-icons/im";
interface Props {
  title: string;
  description: string;
  lightBg: boolean;
  img: string;
  alt: string;
  leftStart: boolean;
  githubLink?: string;
  deployment?: string;
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
    <Container>
      <ProjectsContainer lightBg={lightBg}>
        <ProjectWrapper leftStart={leftStart}>
          <ProjectInfoWrapper>
            <HeaderInfo>{title}</HeaderInfo>
            <Paragraph>{description}</Paragraph>
            <IconsSection>
              {icons.map((icon, index) => {
                return (
                  <img
                    key={index}
                    src={icon}
                    alt="icon"
                    width={48}
                    height={48}
                  />
                );
              })}
            </IconsSection>
          </ProjectInfoWrapper>
          <ProjectImgWrapper>
            <img alt={alt} src={img} color="red"></img>

            <div>
              <a href={githubLink} target={"_blank"} rel="noreferrer">
                <p>Look at the code!</p>
                <AiFillGithub size={40} />
              </a>
              <a href={deployment} target={"_blank"} rel="noreferrer">
                <p>Try it now!</p>
                <ImEnter size={40} />
              </a>
            </div>
          </ProjectImgWrapper>
        </ProjectWrapper>
      </ProjectsContainer>
    </Container>
  );
};
