import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import { ProjectsData } from "../../data/ProjectsData";

export const MyProjects = () => {
  return (
    <>
      {ProjectsData.map((project) => {
        return <ProjectSection {...project} />;
      })}
    </>
  );
};
