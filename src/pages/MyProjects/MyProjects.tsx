import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import { DietData } from "../../data/DietData";
import { SunsiadekData } from "../../data/SunsiadekData";
import { BakeryData } from "../../data/BakeryData";

export const MyProjects = () => {
  return (
    <>
      <ProjectSection {...SunsiadekData}></ProjectSection>
      <ProjectSection {...BakeryData}></ProjectSection>
      <ProjectSection {...DietData}></ProjectSection>
    </>
  );
};
